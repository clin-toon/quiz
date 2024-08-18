import React, { useEffect } from "react";
import "./validate.css";

const Validate = ({ text, icon }) => {
  useEffect(() => {
    const au = new Audio("congrats.mp3");
    au.play();

    return ()=>au.pause();
  }, []);
  return (
    <div>
      <div className="validate-container">
        <i class="fa-solid fa-check icon"></i>
        <span style={{"color":"black"}}> Correct !  </span>
      </div>
    </div>
  );
};

export default Validate;
