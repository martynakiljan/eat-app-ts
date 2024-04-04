/** @format */
import "../styles/all.scss";
import React from "react";

const NoFoodFound = () => {
  const backToMainPage = () => {
    window.location.reload();
  };

  return (
    <div className="info__food">
      <p>No food found. Sorry!</p>
      <button onClick={backToMainPage} className="info__button">
        Back to main page
      </button>
    </div>
  );
};

export default NoFoodFound;
