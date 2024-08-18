import { useContext } from "react";
import Qns from "../src/components/Question/Qns";
import Score from "../src/components/Score/Score";
import Time from "../src/components/Timer/Time";
import Settings from "./components/Confirm/Settings";
import { QuizContext } from "./QuizContext/QuizContext";
import Correct from "./components/Validate/Correct";
import Incorrect from "./components/Validate/Incorrect";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Final from "./components/FinalScore/Final";
import "./App.css";

function App() {
  const { game, showCorrect, showInCorrect, showSpinner , showFinalModal} =
    useContext(QuizContext);

  return (
    <div className="game-background ">
      { showFinalModal && <Final />}
      {game ? (
        <div className="top-div">
          <div className="top-container">
            <Score />
            {showSpinner ? <LoadingSpinner /> : <Time />}
          </div>
          <Qns />
          {showCorrect && (
            <div className="validate-container">
              <Correct />
            </div>
          )}

          {showInCorrect && (
            <div className="validate-container">
              <Incorrect />
            </div>
          )}
        </div>
      ) : (
        <div>
          <Settings />
        </div>
      )}
    </div>
  );
}

export default App;
