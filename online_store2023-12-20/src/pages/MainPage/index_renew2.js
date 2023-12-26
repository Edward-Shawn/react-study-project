import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { a, b, data } from "data";
import ListItem from "component/List";
import imgbg from "img/bg.jpg";
import axios from "axios";
const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  const [updateData, setUpdateData] = useState([...data]);

  useEffect(() => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((data) => {
        setApiData(data.data);
      })
      .catch(() => {
        console.log("false");
      });
  }, []);

  const arraySort = () => {
    let copy = [...updateData];
    setUpdateData(
      copy.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      )
    );
  };

  const addList = () => {
    let copy = [...data];
    // console.log(copy);
    setUpdateData([...copy, ...apiData]);
  };

  console.log(updateData);
  return (
    <>
      <div
        className="main_bg"
        style={{ backgroundImage: "url(" + imgbg + ")" }}
      ></div>
      <button onClick={() => arraySort()}>정렬</button>
      <Container>
        <Row>
          {updateData.map((item, index) => {
            console.log(item);
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
