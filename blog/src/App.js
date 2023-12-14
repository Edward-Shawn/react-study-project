import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
import List from "./component/List";

function App() {
  const [classType, setClassType] = useState(["어썰트", "메딕", "서포터"]);

  const [list, setList] = useState([
    {
      title: "어썰트",
      text: "hk416",
    },
    {
      title: "메딕",
      text: "mp5",
    },
    {
      title: "서포터",
      text: "m249",
    },
  ]);

  const num = [1, 2];

  const [show, setShow] = useState(false);

  const clickTitleChange = () => {};

  const handleSort = () => {
    var sortArray = [...classType];
    sortArray = sortArray.sort();
    setClassType(sortArray);
  };

  const openModal = () => {};

  // const [good, setGood] = useState(0);

  const [good, setGood] = useState([0, 0, 0]);

  const clickHandle = ({ index }) => {
    console.log(index);
  };

  return (
    <div className="App">
      <div className="nav">
        <h4>리액트 테스트 사이트</h4>
      </div>
      <button onClick={clickTitleChange}>타이틀 수정</button>
      <button onClick={handleSort}>sort</button>
      <button onClick={openModal}>모달 띄우기</button>
      {/* {list.map((item, i) => {
        return (
          <List
            title={item.title}
            text={item.text}
            show={show}
            setShow={setShow}
            key={i}
          />
        );
      })} */}
      {list.map((item, index) => {
        return (
          <div className="list" key={index}>
            <h4>
              {item.title}{" "}
              <span
                onClick={() => {
                  let copy = [...good];
                  copy[index] = copy[index] + 1;
                  setGood(copy);
                }}
              >
                ❤️
              </span>{" "}
              {good[index]}
            </h4>
            <p>{item.text}</p>
          </div>
        );
      })}
      <div></div>

      {/* <div className="list">
        <h4>
          {classType[0]} <span onClick={clickHandle}>❤️</span> {good}
        </h4>
        <p>{rifle}</p>
      </div>
      <div className="list">
        <h4>{classType[1]}</h4>
        <p>{smg}</p>
      </div>
      <div className="list">
        <h4>{classType[2]}</h4>
        <p>{lmg}</p>
      </div> */}
      {show ? <Modal /> : ""}
    </div>
  );
}

export default App;
