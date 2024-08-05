import React from "react";
import { CodeInput } from "../Elements/CodeInput";

const CodeInputTest: React.FC = () => {
  const myCode = "<div>Esto es un título</div>";
  return (
    <div style={{width: 400, height: 300, maxHeight: 300}}>
      <CodeInput code={ myCode }/>
    </div>
  );
};

export { CodeInputTest }