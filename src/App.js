import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Rooms from "./Rooms";
import "./App.css";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import FontIcon from "./component/icons/FontIcon";

function App() {
  console.log(FontIcon);
  return (
    <BrowserRouter>
      {" // (1) "}

      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">홈</Link>
        {/* // (2) */}
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="rooms">방 소개</Link>
        <br />
        <Switch>
          {"// (3) "}
          <Route exact path="/" component={Home} /> (4)
          <Route path="/photo" component={Photo} />
          <Route path="/rooms" component={Rooms} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>여기는 홈페이지입니다.</h2>;
}
function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}

export default App;
