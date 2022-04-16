import { useAppSelector } from "@player/hooks";
import React from "react";

const ProgressLabel = () => {
  const seeking = useAppSelector((state) => state.controls.seeking),
    currentTime = useAppSelector((state) => state.controls.currentTime),
    duration = useAppSelector((state) => state.controls.duration);

  return (
    <span>
      {currentTime.toFixed(3)} / {duration} {seeking && "(seeking)"}
    </span>
  );
};
export default ProgressLabel;