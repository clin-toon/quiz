
import React, { useContext } from 'react';
import './final.css';
import { QuizContext } from '../../QuizContext/QuizContext';

const Final = () => {
    const {total , dispatch} = useContext(QuizContext) ;

    const clickHandler = ()=>{
        dispatch({type:"RESET"})
    }


  return (
    <div className="modal-wrapper">
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>You scored {total} out of 10.</h2>
        <button  onClick = {clickHandler}className="play-again-button">
          Play Again
        </button>
      </div>
    </div>
    </div>
  );
};

export default Final;
