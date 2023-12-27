import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { a, b, data } from "data";
import ListItem from "component/List";
import imgbg from "img/bg.jpg";
import axios from "axios";
const MainPage = () => {
  const [list, setList] = useState([...data]);
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((data) => {
        setApiData(data.data);
      })
      .catch(() => {
        console.log("false");
      });

    axios
      .get("https://codingapple1.github.io/shop/data3.json")
      .then((data) => {
        setApiData2(data.data);
      })
      .catch(() => {
        console.log("false");
      });
  }, []);

  const arraySort = () => {
    setList([
      ...list.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      ),
    ]);
  };

  const addList = () => {
    //처음엔 2번째
    //두번째는 3번째
    //마지막은 스탑.

    var copylist = [...list];
    if (!copylist.includes(...apiData)) {
      console.log("true");
      setList([...list, ...apiData]);
    } else if (!copylist.includes(...apiData2)) {
      setList([...list, ...apiData2]);
    } else {
      console.log("no more");
    }
  };

  return (
    <>
      <div
        className="main_bg"
        style={{ backgroundImage: "url(" + imgbg + ")" }}
      ></div>
      <button onClick={() => arraySort()}>정렬</button>
      <Container>
        <Row>
          {list.map((item, index) => {
            return <ListItem key={index} shoes={item} i={index + 1} />;
          })}
        </Row>
      </Container>
      <button
        onClick={() => {
          addList();
        }}
      >
        버튼
      </button>
    </>
  );
};

export default MainPage;
