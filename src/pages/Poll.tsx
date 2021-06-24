import * as React from "react";
import { PollTimer } from "../components/poll/PollTimer";
import { Card, makeStyles } from "@material-ui/core";
import { QuestionCard } from "../components/poll/QuestionCard";
import { useEffect, useState } from "react";
import { answerOptions, questions } from "../config/Questions";
import "./Poll.css";

const useStyles = makeStyles({
  root: {
    width: "40rem",
    height: "10rem",
    textAlign: "center",
  },
  media: {
    height: 500,
  },
});

export const Poll = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [onRestTimer, setOnRestTimer] = useState<boolean>(false);
  const classes = useStyles();

  const checkAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowScore(true);
    }
  };

  const onTryAgainClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setOnRestTimer(true);
    setShowScore(false);
  };

  return (
    <div className={"poll__container"}>
      <PollTimer
        stopClock={showScore}
        setOnRestTimer={setOnRestTimer}
        onResetTimer={onRestTimer}
      />
      {!showScore && <h1>Test your JavaScript skills ! </h1>}
      {showScore ? (
        <div>
          <h1>Your Score is: {score}</h1>
          <button onClick={onTryAgainClick} className={"poll__try-again-btn"}>
            Try Again
          </button>
        </div>
      ) : (
        <>
          <QuestionCard
            question={questions[currentQuestion]}
            onNextStep={(answerRight) => setCurrentQuestion((curr) => ++curr)}
            checkAnswer={checkAnswer}
            currentQuestion={{
              questionNumber: currentQuestion,
              questionsLength: questions.length,
            }}
          />
        </>
      )}
    </div>
  );
};
