import React, { useContext } from "react";
import { QuizContext } from "../../QuizContext/QuizContext";
import "./score.css"

const Score = (props) => {
  const {total}= useContext(QuizContext);

  return (
    <div>
      <h2 className="score-counter">Current Score : {total}</h2>
    </div>
  );
};

export default Score;
