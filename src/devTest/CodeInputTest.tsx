import React from "react";
import { CodeInput } from "../Elements/CodeInput";

const CodeInputTest: React.FC = () => {
  const myCode = "<h1>This is a title</h1>\n<div>\n <p>Lorem ipsum dolor sit.</p>//Paragraph\n</div>\n//End of code";
  return (
    <div style={{width: 400, height: 300, maxHeight: 300}}>
      <CodeInput code={ myCode }/>
    </div>
  );
};

export { CodeInputTest }