export const QuizReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREASE_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };

    case "HIDE_CORRECT":
      return {
        ...state,
        showCorrect: false,
      };

    case "SHOW_CORRECT":
      return {
        ...state,
        showCorrect: true,
      };

    case "HIDE_INCORRECT":
      return {
        ...state,
        showInCorrect: false,
      };

    case "AUDIO_TIMER":
      return {
        ...state,
        playAudio: true,
      };

    case "SHOW_SPINNER":
      return {
        ...state,
        showSpinner: true,
      };

      case "DECREASE_TIME":
      return {
        ...state,
        time: state.time - 1 ,
      };

      case "RESET_TIME":
        return {
          ...state,
          time: 30,
        };

    case "HIDE_SPINNER":
      return {
        ...state,
        showSpinner: false,
      };

    case "COUNT_QUESTION":
      return {
        ...state,
        question: state.question + 1,
      };

    case "SHOW_FINAL_SCORE":
      return {
        ...state,
        showFinalModal: true,
      };

      case "RESET":
        return {
          showCorrect: false,
          showInCorrect: false,
          showSpinner: false,
          question: 0,
          showFinalModal: false,
        }

    case "START_AGAIN":
      return {
        ...state,
        restart: !state.restart,
      };

    case "SHOW_INCORRECT":
      return {
        ...state,
        showInCorrect: true,
      };

    case "START_TIMER":
      return {
        ...state,
        startTimer: true,
      };

    case "START_GAME":
      return {
        ...state,
        play: true,
      };

      case "UPDATE_CATEGORY":
        return {
          ...state,
          questionCat:payload
        };

    default:
      return state;
  }
};
