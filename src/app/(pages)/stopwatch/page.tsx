"use client";

import { useEffect, useRef, useState } from "react";

type LapCount = {
  time: number;
};

function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [laps, setLaps] = useState<LapCount[]>([]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const addLap = () => {
    setLaps((prevLaps) => [...prevLaps, { time }]);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    addLap();
    setIsRunning(false);
    setTime(0);
  };

  const handleLap = () => {
    addLap();
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>Time: {time}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleLap}>Lap</button>
      <button onClick={handleStop}>Stop</button>
      <br />
      <ul>
        {laps.map((l, i) => (
          <li key={i}>
            Lap {i + 1}: {l.time} seconds
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
