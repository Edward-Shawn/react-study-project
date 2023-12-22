import React, { useState } from "react";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { a, b, data } from "data";
import ListItem from "component/List";
import imgbg from "img/bg.jpg";
const MainPage = () => {
  let [shoes] = useState(data);
  return (
    <>
      <div
        className="main_bg"
        style={{ backgroundImage: "url(" + imgbg + ")" }}
      ></div>
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
