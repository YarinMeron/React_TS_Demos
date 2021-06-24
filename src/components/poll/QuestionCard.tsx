// @flow
import * as React from "react";
import { answerOptions, QuestionType } from "../../config/Questions";
import { useEffect, useState } from "react";

import "./QuestionCard.css";
import { setInterval } from "timers";
import { NavLink } from "react-router-dom";

type Props = {
  question: QuestionType;
  onNextStep?: (rightAnswer: boolean) => void;
  checkAnswer: Function;
  currentQuestion: { questionNumber: number; questionsLength: number };
};

const styleOptions = {
  Correct: {
    background: "#A5E1AD",
  },
  Wrong: {
    background: "red",
  },
};

export const QuestionCard = ({
  question,
  currentQuestion,
  checkAnswer,
}: Props) => {
  const [checkedAnswer, setCheckedAnswer] = useState<number | undefined>();
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false);
  const [reloadPage, setReloadPage] = useState<boolean>(false);

  const onAnswerClicked = (index: number) => {
    !answerSubmitted && setCheckedAnswer(index);
  };

  const onSubmitAnswer = () => {
    setAnswerSubmitted(true);
  };

  const onNextHandler = () => {
    checkAnswer(question.answerOptions[checkedAnswer as number].isCorrect);
    setCheckedAnswer(undefined);
    setAnswerSubmitted(false);
  };

  return (
    <div className={"question-card__container"}>
      <div className={"question-section"}>
        <h1>
          Question {currentQuestion.questionNumber + 1}/{" "}
          {currentQuestion.questionsLength}
        </h1>
        <p>{question.question}</p>
      </div>
      <div className={"answer-section"}>
        {question.answerOptions.map((item, i) => {
          const cardStyle = !answerSubmitted
            ? i === checkedAnswer
              ? styleOptions.Correct
              : {}
            : item.isCorrect
            ? styleOptions.Correct
            : i == checkedAnswer
            ? styleOptions.Wrong
            : {};

          return (
            <button
              onClick={() => onAnswerClicked(i)}
              type={"button"}
              key={i}
              className={"answer-button"}
              style={cardStyle}
            >
              {item.answerText}
            </button>
          );
        })}
      </div>
      <br />
      <br />
      {answerSubmitted ? (
        <button
          className={"question-section__submit-btn"}
          onClick={onNextHandler}
        >
          Next question
        </button>
      ) : (
        <button
          className={"question-section__submit-btn"}
          disabled={!(typeof checkedAnswer === "number")}
          onClick={onSubmitAnswer}
        >
          submit question
        </button>
      )}
    </div>
  );
};
