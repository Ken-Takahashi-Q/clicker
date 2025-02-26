import { faMinus, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Counter } from "../page";
import { palette } from "../palette";
import { useState } from "react";
import { Modal } from "antd";
import CloseButton from "./closeButton";
import ResetButton from "./resetButton";
import ConfirmModal from "./confirmModal";
import ModeSelect from "./modeSelect";
import CircleButton from "./circleButton";
import Button from "./button";
import { modesChain, modesLoop, modesRing } from "../utils";

interface CheckerProps {
  index: number;
  counter: Counter;
  handlePlus: (index: number) => void;
  handleMinus: (index: number) => void;
  handleReset: (index: number) => void;
  handleDelete: (index: number) => void;
}

const Checker: React.FC<CheckerProps> = ({
  index,
  counter,
  handlePlus,
  handleMinus,
  handleReset,
  handleDelete,
}) => {
  // const modes: string[] = [
  //   "Chain",
  //   "Single Crochet",
  //   "Half Double Crochet",
  //   "Double Crochet",
  //   "Treble Crochet",
  // ];

  const [modeLoop, setModeLoop] = useState<string>(modesLoop[0].value);
  const [modeChain, setModeChain] = useState<string>(modesChain[0].value);
  const [modeRing, setModeRing] = useState<string>(modesRing[0].value);
  const [start, setStart] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSelectModeLoop = (modeLoop: string) => {
    setModeLoop(modeLoop);
  };
  const handleSelectModeChain = (modeChain: string) => {
    setModeChain(modeChain);
  };
  const handleSelectModeRing = (modeRing: string) => {
    setModeRing(modeRing);
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleAskDelete = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmDelete = () => {
    handleDelete(index);
    setStart(false);
    setModeChain("Chain");
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col justify-between items-center mb-4 p-2 w-full h-68 rounded-[1.5rem]
        ${palette["backgroundPrimary"]}`}
    >
      {start ? (
        <div
          className={`flex flex-col justify-between w-[85%] h-full transition-all duration-300 ${
            start ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <p>{modeChain}</p>
              <p>{modeLoop}</p>
              <p>{modeRing}</p>
            </div>
            <CloseButton onClick={handleAskDelete} />
            <div className="flex justify-between items-center w-full mt-2 mb-4 gap-4">
              <CircleButton
                type="minus"
                onClick={() => handleMinus(index)}
                disabled={counter.count < 1}
                icon={faMinus}
              />
              <h2 className="px-4 text-5xl font-semibold">{counter.count}</h2>
              <CircleButton
                type="plus"
                onClick={() => handlePlus(index)}
                icon={faPlus}
              />
            </div>
            <div className="flex flex-col items-center mb-2">
              Last time {counter.recent}
            </div>
            <ResetButton
              onClick={() => handleReset(index)}
              disabled={counter.count < 1}
            />
          </div>

          <Modal
            open={modalVisible}
            centered
            onCancel={handleCloseModal}
            onOk={handleConfirmDelete}
          >
            Are you sure to delete?
          </Modal>
          <ConfirmModal
            open={modalVisible}
            index={index}
            onCancel={handleCloseModal}
            onOk={handleConfirmDelete}
          />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-1 w-[85%] h-full">
          {/* {modes.map((value, index) => {
            return (
              <button
                className={`p-2 w-fit ${palette["backgroundSecondary"]} rounded-xl ${palette["secondaryHover"]}`}
                key={index}
                onClick={() => handleSelectMode(value)}
              >
                {value}
              </button>
            );
          })} */}
          <ModeSelect options={modesChain} onChange={handleSelectModeChain} />
          <ModeSelect options={modesLoop} onChange={handleSelectModeLoop} />
          <ModeSelect options={modesRing} onChange={handleSelectModeRing} />
          <Button
            type="start"
            text="Start"
            onClick={handleStart}
            disabled={counter.count < 1}
            icon={faPlay}
          />
        </div>
      )}
    </div>
  );
};

export default Checker;
