// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import { ifError } from "assert";
import { questions } from "../../config/Questions";
import "./PollTimer.css";

export interface ICountDown {
  seconds: number;
  minutes: number;
  hours: number;
}

interface Props {
  stopClock: boolean;
  onResetTimer: boolean;
  setOnRestTimer: Function;
}

export const PollTimer = ({
  stopClock,
  onResetTimer,
  setOnRestTimer,
}: Props) => {
  const timeToRun = { hours: 0, minutes: 0, seconds: 0 };
  const [time, setTime] = useState<ICountDown>(timeToRun);

  useEffect(() => {
    if (!stopClock) {
      const timerId = setInterval(() => tick(), 1000);
      return () => {
        clearInterval(timerId);
      };
    }
  });
  useEffect(() => {
    if (onResetTimer) {
      debugger;
      resetTimer();
      setOnRestTimer(false);
    }
  }, [onResetTimer]);

  const resetTimer = () => {
    setTime(timeToRun);
  };

  const tick = () => {
    if (time.seconds < 59) {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds + 1,
      });
    } else if (time.minutes !== 59) {
      setTime({
        hours: time.hours,
        minutes: time.minutes + 1,
        seconds: (time.seconds = 0),
      });
    } else if (time.minutes === 59) {
      setTime({ hours: time.hours + 1, minutes: 0, seconds: 0 });
    }
  };

  return (
    <div className={"poll-timer__container"}>
      <h2>
        Your Time:{" "}
        {`${time.hours.toString().padStart(2, "0")}:${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}
      </h2>
    </div>
  );
};
