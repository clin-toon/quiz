import React, { useEffect } from "react";

const Incorrect = (props) => {
  
  useEffect(() => {
    const au = new Audio("incorrect.mp3");
    au.play();
    return () => au.pause();
  }, []);


  return (
    <div className="validate-container">
      <i className="fa-solid fa-xmark wrong"></i>{" "}
      <span style={{ color: "black" }}> Inorrect ! </span>
    </div>
  );
};

export default Incorrect;
