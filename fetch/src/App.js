import "./styles/App.css";

import { Context } from "./Context";
import { Content, Options } from "./components";

function App() {
  return (
    <div className="App">
      <h1 className="title">Learning Fetch!</h1>
      <h2 className="subTitle">
        I spend way too much time on this!...it's defently an overkill
      </h2>

      <Context>
        <Options />
        <Content />
      </Context>
    </div>
  );
}

export default App;
