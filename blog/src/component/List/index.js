import React, { useState } from "react";
const List = ({ title, text, show, setShow, setTitle, i, onRemoveList }) => {
  const handleModal = () => {
    setTitle(i);
    // show === false ? setShow(true) : setShow(false);

    setShow(!show);
  };
  const [good, setGood] = useState(0);

  const clickHandle = () => {
    setGood(good + 1);
  };

  return (
    <div className="list">
      <h4 onClick={handleModal}>
        {title}
        <span
          onClick={(e) => {
            e.stopPropagation();
            clickHandle();
          }}
        >
          ❤️
        </span>{" "}
        {good}
      </h4>
      <p>{text}</p>
      <button onClick={() => onRemoveList(title)}>삭제</button>
    </div>
  );
};

export default List;
