import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontIcon({ text, icon }) {
  return (
    <>
      <h1>{text}</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </>
  );
}

export default FontIcon;
