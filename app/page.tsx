"use client";

import { useState } from "react";
import { palette } from "./palette";
import Checker from "./components/checker";
import { modesChain, modesLoop, modesRing } from "./utils";

export interface Counter {
  count: number;
  recent: number;
}

export default function Home() {
  const [counters, setCounters] = useState<Counter[]>([
    { count: 0, recent: 0 },
    { count: 0, recent: 0 },
    { count: 0, recent: 0 },
    { count: 0, recent: 0 },
    { count: 0, recent: 0 },
  ]);
  const [modeLoop, setModeLoop] = useState<string[]>([
    modesLoop[0].value,
    modesLoop[0].value,
    modesLoop[0].value,
    modesLoop[0].value,
    modesLoop[0].value
  ]);
  const [modeChain, setModeChain] = useState<string[]>([
    modesChain[0].value,
    modesChain[0].value,
    modesChain[0].value,
    modesChain[0].value,
    modesChain[0].value
  ]);
  const [modeRing, setModeRing] = useState<string[]>([
    modesRing[0].value,
    modesRing[0].value,
    modesRing[0].value,
    modesRing[0].value,
    modesRing[0].value
  ]);

  const handleSelectModeLoop = (index: number, modeLoop: string) => {
    setModeLoop((prev) =>
      prev.map((counter, i) =>
        i === index ?  modeLoop  : counter
      )
    );
  };
  const handleSelectModeChain = (index: number, modeChain: string) => {
    setModeChain((prev) =>
      prev.map((counter, i) =>
        i === index ?  modeChain  : counter
      )
    );
  };
  const handleSelectModeRing = (index: number, modeRing: string) => {
    setModeRing((prev) =>
      prev.map((counter, i) =>
        i === index ?  modeRing  : counter
      )
    );
  };

  const handleUpdate = (index: number, newCount: number) => {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index ? { count: newCount, recent: counter.recent } : counter
      )
    );
  };

  const handleMinus = (index: number) => {
    if (counters[index].count > 0) {
      handleUpdate(index, counters[index].count - 1);
    }
  };

  const handlePlus = (index: number) => {
    handleUpdate(index, counters[index].count + 1);
  };

  const handleReset = (index: number) => {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index ? { count: 0, recent: counter.count } : counter
      )
    );
  };

  const handleDelete = (index: number) => {
    setCounters((prev) =>
      prev.map((counter, i) =>
        i === index ? { count: 0, recent: 0 } : counter
      )
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
      <div
        className={`flex flex-col justify-between items-center px-6 py-12 w-full min-h-screen md:w-[400px]
          ${palette["backgroundSecondary"]} shadow-lg rounded-2xl`}
      >
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-4xl font-bold">Crochecker</h1>
            <h2 className="text-2xl font-bold">クロチェッカー</h2>
          </div>

          {counters.map((counter, index) => (
            <Checker
              key={index}
              index={index}
              counter={counter}
              modeLoop={modeLoop[index]}
              modeChain={modeChain[index]}
              modeRing={modeRing[index]}
              handleSelectModeLoop={handleSelectModeLoop}
              handleSelectModeChain={handleSelectModeChain}
              handleSelectModeRing={handleSelectModeRing}
              handlePlus={() => handlePlus(index)}
              handleMinus={() => handleMinus(index)}
              handleReset={() => handleReset(index)}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
