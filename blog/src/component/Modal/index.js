import React, { useState } from "react";
const Modal = (props) => {
  const { list, color, title, clickTitleChange } = props;

  return (
    <div className="modal" style={{ background: color }}>
      <h4>{list[title].title}</h4>
      <p>date</p>
      <p>post</p>
      <button onClick={clickTitleChange}>글수정</button>
    </div>
  );
};

export default Modal;
