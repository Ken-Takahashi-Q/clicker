import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import { Counter } from "../page";
import { palette } from "../palette";
import { useState } from "react";
import { Modal } from "antd";
import CloseButton from "./closeButton";
import ResetButton from "./resetButton";

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
  // const modes: CheckboxGroupProps<string>["options"] = [
  //   { label: "Chain", value: "Chain" },
  //   { label: "Single Crochet", value: "Single Crochet" },
  //   { label: "Half Double Crochet", value: "Half Double Crochet" },
  //   { label: "Double Crochet", value: "Double Crochet" },
  //   { label: "Treble Crochet", value: "Treble Crochet" },
  // ];
  const modes: string[] = [
    "Chain",
    "Single Crochet",
    "Half Double Crochet",
    "Double Crochet",
    "Treble Crochet",
  ];

  const [mode, setMode] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSelectMode = (mode: string) => {
    setMode(mode);
  };

  const handleAskDelete = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmDelete = () => {
    handleDelete(index);
    setMode(""); // Reset the mode selection
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col justify-between items-center mb-6 p-2 w-full h-56 rounded-[1.5rem]
        ${palette["backgroundPrimary"]}`}
    >
      {mode !== "" ? (
        <div
          className={`transition-all duration-300 ${
            mode !== "" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative flex flex-col items-center w-full">
            {mode}
            <CloseButton onClick={handleAskDelete} />
            <div className="flex justify-between items-center w-full my-2 gap-4">
              <Button
                type="minus"
                onClick={() => handleMinus(index)}
                disabled={counter.count < 1}
                icon={faMinus}
              />
              <h2 className="px-4 text-5xl font-semibold">{counter.count}</h2>
              <Button
                type="plus"
                onClick={() => handlePlus(index)}
                icon={faPlus}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex flex-col items-center">
              <div className={`duration-800 transition-all`}>
                Last time {counter.recent}
              </div>
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
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-1 w-full h-full">
          {modes.map((value, index) => {
            return (
              <button
                className={`p-2 w-fit ${palette["backgroundSecondary"]} rounded-xl ${palette["secondaryHover"]}`}
                key={index}
                onClick={() => handleSelectMode(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Checker;
