import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../../QuizContext/QuizContext";
import "./qns.css";

const Qns = (props) => {
  const { dispatch, question, time, questionCat } = useContext(QuizContext);
  const [answer, setAnswer] = useState("");
  const [apiQuestion, setQuestion] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");

  const apiEndPoints = {
    gk: "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple",
    sports:
      "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple",
    animals:
      "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=multiple",
    geography:
      "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple",
    sc: "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple",
  };

  const changeHandler = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    getAnotherQns();
  }, []);

  const finaliseApi = () => {
    const { gk, sports, animals, geography, sc } = apiEndPoints;
    switch (questionCat) {
      case "Geography":
        return geography;
      case "Sports":
        return sports;
      case "Animals":
        return animals;
      case "General Knowledge":
        return gk;
      case "Science Computers":
        return sc;
      default:
        return questionCat;
    }
  };

  const getAnotherQns = async () => {
    try {
      dispatch({ type: "SHOW_SPINNER" });
      let api = finaliseApi();
      const res = await fetch(api);
      const questions = await res.json();
      const {results} = questions ;
      setQuestion(questions.results[0].question);
      setOpt1(results[0].incorrect_answers[0]);
      setOpt2(results[0].incorrect_answers[1]);
      setOpt3(results[0].incorrect_answers[2]);
      setOpt4(results[0].correct_answer);
      dispatch({ type: "HIDE_CORRECT" });
      dispatch({ type: "HIDE_INCORRECT" });
      dispatch({ type: "HIDE_SPINNER" });
      if (question >= 10) {
        dispatch({ type: "SHOW_FINAL_SCORE" });
      } else {
        dispatch({ type: "COUNT_QUESTION" });
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (time < 0) {
      getAnotherQns();
    }
  }, [time]);

  const validateAnswer = () => {
    if (answer === opt4) {
      dispatch({ type: "SHOW_CORRECT" });
      dispatch({ type: "INCREASE_SCORE", payload: 1 });
      setTimeout(getAnotherQns, 2000);
    } else {
      dispatch({ type: "SHOW_INCORRECT" });
      setTimeout(getAnotherQns, 2000);
    }
  };

  return (
    <div className="container">
      <h2 style={{"color":"black"}}>Clinton's Quiz</h2>
      <div className="qns">
        <h2 style={{ maxWidth: "600px" }} className="questions">
          Q.no {question} / 10 ){` ${apiQuestion}`}
        </h2>
      </div>

      <div className="optionsContainer">
        <div className="left-top">
          <input
            type="radio"
            id="first"
            name="options"
            value={opt1}
            checked={answer === opt1}
            onChange={changeHandler}
          />
          <label className = "label" htmlFor="first">{opt1}</label>
        </div>
        <div className="right-top">
          <input
            type="radio"
            id="second"
            name="options"
            value={opt2}
            checked={answer === opt2}
            onChange={changeHandler}
          />
          <label className = "label" htmlFor="second">{opt2}</label>
        </div>

        <div className="left-bottom">
          <input
            type="radio"
            id="third"
            name="options"
            onChange={changeHandler}
            value={opt3}
            checked={answer === opt3}
          />
          <label className = "label" htmlFor="third">{opt3}</label>
        </div>

        <div className="right-bottom">
          <input
            type="radio"
            id="forth"
            name="options"
            onChange={changeHandler}
            value={opt4}
            checked={answer === opt4}
          />
          <label className = "label" htmlFor="forth">{opt4}</label>
        </div>
      </div>
      <div className="buttons">
        <button onClick={validateAnswer}>Choose</button>
        {/* <button onClick={getAnotherQns}>Next</button> */}
      </div>
    </div>
  );
};

export default Qns;
