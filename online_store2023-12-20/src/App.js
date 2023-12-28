import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CustomRoute } from "./routes";
import { Provider } from "react-redux";

import store from "./store.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<CustomRoute></CustomRoute>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
