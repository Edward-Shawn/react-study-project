import React from "react";
import { BrowserRouter as router, Route, Switch, Link } from "react-router-dom";

//home component
function Home() {
  function handleClick(e) {
    window.location.href = "/next";
  }
  return (
    <div onClick={handleClick}>
      <h1>코딩작업중</h1>
    </div>
  );
}

//next component
function Next() {
  return (
    <div>
      <h1>다음페이지 작업중</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* NEXT */}
          <Route path="/Next">
            <Next />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
