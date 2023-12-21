import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { a, b, data } from "./data";
import imgbg from "./img/bg.jpg";
import { useState } from "react";

function App() {
  let [shoes] = useState(data);

  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main_bg"
        style={{ backgroundImage: "url(" + imgbg + ")" }}
      ></div>

      <Container>
        <Row>
          <Col>
            <img src={process.env.PUBLIC_URL + "/bg.jpg"} width={"80%"} />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width={"80%"}
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[0].content}</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width={"80%"}
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[0].content}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
