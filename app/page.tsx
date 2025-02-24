"use client";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "./components/button";
import RecentButton from "./components/recentButton";
import { palette } from "./palette";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [recent, setRecent] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMinus = () => setCount((prev) => prev - 1);
  const handlePlus = () => setCount((prev) => prev + 1);
  const handleReset = () => {
    updateRecent(count);
    setCount(0);
  };

  const updateRecent = (newCount: number) => {
    setRecent((prev) => {
      const updated = [newCount, ...prev];
      if (updated.length > 3) {
        updated.pop();
      }
      return updated;
    });
  };

  useEffect(() => {
    // Trigger the animation on recent change
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger animation after recent is updated

    return () => clearTimeout(timer); // Clean up the timer
  }, [recent]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200 text-white">
      <div
        className={`flex flex-col justify-between items-center px-6 py-20 w-full h-full md:w-[400px] ${palette["background"]} shadow-lg rounded-2xl`}
      >
        <div className="flex flex-col items-center gap-24 w-full">
          <h1 className="text-4xl font-bold">Clicker</h1>
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
        </div>

        <div className="w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center">
              {recent.map((value, index) => (
                <div
                  key={index}
                  className={`duration-800 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 scale-80"
                  } transition-all ${
                    index === 1 ? "text-sm" : index === 2 ? "text-xs" : ""
                  }`}
                >
                  Last time {value}
                </div>
              ))}
            </div>
            <RecentButton onClick={handleReset} disabled={count < 1} />
          </div>
        </div>
      </div>
    </div>
  );
}
