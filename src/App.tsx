import React from "react"
import "./App.scss";
import { TextInputTest } from "./devTest/TextInputTest";
import { CodeInputTest } from "./devTest/CodeInputTest";

const App: React.FC = () => {

  return (
    <>
      <h1 className="h1leo">hola leo!</h1>
      <div>
        <TextInputTest />
        <CodeInputTest />
      </div>
    </>
  );
};

export default App;