import { createContext, useReducer } from "react";
import { QuizReducer } from "./QuizContextReducer";

const INITAL_STATE = {
  time: 30,
  startTimer: false,
  score: 0,
  loading: false,
  play: false,
  difficulty: "easy",
  showCorrect: false,
  showInCorrect: false,
  showSpinner: false,
  question: 0,
  showFinalModal: false,
  questionCat: "",
};

export const QuizContext = createContext(INITAL_STATE);

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, INITAL_STATE);

  const {
    time,
    question,
    startTimer,
    score,
    play,
    showCorrect,
    showInCorrect,
    showFinalModal,
    showSpinner,
    questionCat,
  } = state;

  return (
    <QuizContext.Provider
      value={{
        time: time,
        question: question,
        timer: startTimer,
        total: score,
        game: play,
        showCorrect: showCorrect,
        showInCorrect: showInCorrect,
        showFinalModal: showFinalModal,
        showSpinner: showSpinner,
        questionCat: questionCat,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
