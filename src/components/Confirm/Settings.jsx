import { useContext, useState } from "react";
import { QuizContext } from "../../QuizContext/QuizContext";
import "./settings.css";

const Settings = () => {
  const [level, setLevel] = useState("easy");
  const { dispatch } = useContext(QuizContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const startGame = () => {
    dispatch({ type: "UPDATE_CATEGORY", payload: selectedOption });
    dispatch({ type: "START_GAME" });
    dispatch({ type: "AUDIO_TIMER" });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay-options">
        <div className="modal-content">
          <h2 className="quiz-title">
            Clinton's Quiz{" "}
            <span style={{ fontSize: "15px", fontWeight: "lighter" }}>
              (Please select category){" "}
            </span>
          </h2>
          <select
            className="level-select"
            value={level}
            onChange={handleLevelChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <div>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="level-select"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Geography">Geography</option>
              <option value="Sports">Sports</option>
              <option value="Animals">Animals</option>
              <option value="Science Computers">Science Computers</option>
            </select>
          </div>

          <button
            disabled={selectedOption === "" ? true : false}
            className={
              selectedOption === ""
                ? "play-button-disable"
                : "play-button-enable"
            }
            onClick={startGame}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
