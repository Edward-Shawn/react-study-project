import React, { useState } from "react";
const List = ({ title, text, show, setShow }) => {
  const handleModal = () => {
    // if (show == false) {
    //   setShow(true);
    // } else {
    //   setShow(false);
    // }

    show === false ? setShow(true) : setShow(false);

    // setShow(!show);
  };
  const [good, setGood] = useState(0);

  const clickHandle = () => {
    setGood(good + 1);
  };

  return (
    <div className="list">
      <h4 onClick={handleModal}>
        {title}
        <span onClick={clickHandle}>❤️</span> {good}
      </h4>
      <p>{text}</p>
    </div>
  );
};

export default List;
