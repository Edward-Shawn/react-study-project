import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Rooms from "./Rooms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">메인 </Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="rooms">페이지 </Link>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
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
