import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Pages from "pages";

export default function CustomRoute() {
  let location = useLocation();

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
        <Route path="/detail" element={<Pages.DetailPage />} />
      </Routes>
    </>
  );
}
