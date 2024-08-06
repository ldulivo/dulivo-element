import React from "react"
import { TextInputTest } from "./devTest/TextInputTest";
import { CodeInputTest } from "./devTest/CodeInputTest";

const App: React.FC = () => {

  return (
    <>
      <div>
        <TextInputTest />
        <CodeInputTest />
      </div>
    </>
  );
};

export default App;