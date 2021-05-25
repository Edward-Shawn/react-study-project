import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontIcon({ text, icons }) {
  return (
    <>
      <h1>{text}</h1>
      <FontAwesomeIcon icon={icons} />
    </>
  );
}

export default FontIcon;
