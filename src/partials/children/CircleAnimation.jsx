import React from "react";

function CircleAnimation(props) {
  const { extraClass } = props;
  return (
    <svg
      className={`water-circle b x ig tl dk rx ${extraClass}`}
      viewBox="0 0 540 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="circle-container">
        <circle className="circle" cx="270" cy="260" r="64"></circle>
        <circle className="circle circle--2" cx="270" cy="260" r="64"></circle>
        <circle className="circle circle--3" cx="270" cy="260" r="64"></circle>
        <circle className="circle circle--4" cx="270" cy="260" r="64"></circle>
      </g>
    </svg>
  );
}

export default CircleAnimation;
