import React, { createContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Pages from "pages";
import { data } from "data";

export let Context1 = createContext();

export default function CustomRoute() {
  let location = useLocation();
  let [shoes] = useState(data);
  let [stock] = useState([10, 11, 12]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"}>home</Link>
            <Link to={"/detail"}>detail</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Pages.MainPage />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, shoes }}>
              <Pages.DetailPage shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Pages.CartPage />} />
      </Routes>
    </>
  );
}
