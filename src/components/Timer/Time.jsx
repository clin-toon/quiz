import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../../QuizContext/QuizContext";
import "./time.css"

const Time = (props) => {
  const { time , dispatch } = useContext(QuizContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({type:"DECREASE_TIME"});
    }, 1000);
    const audio = new Audio("clock.mp3");
    audio.play();
  
    return () => {
      clearInterval(intervalId);
      audio.pause();
      dispatch({type:"RESET_TIME"});
    };
  }, []);



  return (
    <div>
      <h2 className="time-counter">Time : 00: {time}</h2>
    </div>
  );
};

export default Time;
