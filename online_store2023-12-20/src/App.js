import "./App.css";

import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CustomRoute } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<CustomRoute></CustomRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
