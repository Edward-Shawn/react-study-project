import "./App.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FontIcon from "./component/icons/FontIcon";

function App() {
  console.log(FontIcon);
  return (
    <div className="App">
      <FontIcon text="아이콘" icon="faCoffee" />
    </div>
  );
}

export default App;
