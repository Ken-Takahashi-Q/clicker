"use client";

import { faMinus, faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./components/button";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [recent, setRecent] = useState<number>(0);

  const handleMinus = () => setCount((prev) => prev - 1);
  const handlePlus = () => setCount((prev) => prev + 1);
  const handleReset = () => {
    setRecent(count);
    setCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-800 text-white">
      <div className="flex flex-col justify-between items-center px-6 py-20 w-full h-full md:w-[400px] bg-gray-900 shadow-lg rounded-2xl">
        <h1 className="text-4xl font-bold mb-6">Clicker</h1>
        <div className="flex w-full justify-between items-center gap-4">
          <Button
            type="minus"
            onClick={handleMinus}
            disabled={count < 1}
            icon={faMinus}
          />
          <h2 className="px-4 text-5xl font-semibold">{count}</h2>
          <Button type="plus" onClick={handlePlus} icon={faPlus} />
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <p className="text-gray-300">Last time: {recent}</p>
          <Button
            type="reset"
            onClick={handleReset}
            icon={faRedo}
            text="Reset"
          />
        </div>
      </div>
    </div>
  );
}
