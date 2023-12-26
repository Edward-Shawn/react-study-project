import React, { useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { a, b, data } from "data";
import ListItem from "component/List";
import imgbg from "img/bg.jpg";
const MainPage = () => {
  let [shoes, setShoes] = useState(data);

  const arraySort = () => {
    let copy = [...shoes];
    setShoes(
      copy.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      )
    );
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
          {shoes.map((item, index) => {
            return <ListItem key={index} shoes={shoes[index]} i={index + 1} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
