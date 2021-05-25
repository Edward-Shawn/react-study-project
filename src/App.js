import "./App.css";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import FontIcon from "./component/icons/FontIcon";

function App() {
  console.log(FontIcon);
  return (
    <div className="App">
      <FontIcon text="아이콘 dd" icons={faSearch} />
    </div>
  );
}

export default App;
