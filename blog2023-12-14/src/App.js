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

  const [title, setTitle] = useState(0);

  const [show, setShow] = useState(false);

  const clickTitleChange = () => {
    let copy = [...list];
    copy[0].title = "sadfsdf";
    setList(copy);
  };

  const handleSort = () => {
    var sortArray = [...classType];
    sortArray = sortArray.sort();
    setClassType(sortArray);
  };

  const [inputData, setInputData] = useState("");

  const onRemoveList = (title) => {
    setList((oldvalue) => {
      return oldvalue.filter((item) => item.title !== title);
    });
  };

  const onAddList = (e) => {
    let copy = [...list];
    const newList = {
      title: e,
      text: "new",
    };
    copy.unshift(newList);
    // setList([...copy, newList]);
    setList(copy);
  };

  return (
    <div className="App">
      <div className="nav">
        <h4>리액트 테스트 사이트</h4>
      </div>
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button onClick={() => onAddList(inputData)}>리스트 추가</button>
      <button onClick={clickTitleChange}>타이틀 수정</button>
      <button onClick={handleSort}>sort</button>
      {list.map((item, i) => {
        return (
          <List
            title={item.title}
            text={item.text}
            show={show}
            setShow={setShow}
            setTitle={setTitle}
            i={i}
            key={i}
            onRemoveList={onRemoveList}
          />
        );
      })}

      {show ? (
        <Modal
          color={"yellow"}
          list={list}
          title={title}
          clickTitleChange={clickTitleChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
