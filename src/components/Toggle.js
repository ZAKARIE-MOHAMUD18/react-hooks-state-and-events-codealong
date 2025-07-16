import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(function (isOn) {
      return !isOn;
    });
  }

  let buttonText;
  if (isOn === true) {
    buttonText = "ON";
  } else {
    buttonText = "OFF";
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}

export default Toggle;
