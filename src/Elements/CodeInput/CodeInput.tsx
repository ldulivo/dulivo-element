import React, { useRef, useState } from "react";
import Container from "../../core/Container";
import { handleSymbols } from "./handleSymbols";
import { CodeInputProps } from "../../../types/Elements/CodeInput";
import "./CodeInput.scss";

const CodeInput: React.FC<CodeInputProps> = ({ code, darkMode, style }) => {
  const [editing, setEditing] = useState(false);
  const [textCode, setTextCode] = useState(code);
  const [stylePre, setStylePre] = useState({ width: 0, height: 0});
  const preRef = useRef(null);

  const TextArea = () => {
    return (
      <textarea
        onBlur={() => {
          console.log(textCode)
          setEditing(false)
        }}
        onChange={(e) => {
          setTextCode(e.target.value)
        }}
        className={`CodeInput--txt`}
        style={{...stylePre}}
        autoFocus
        value={textCode}
      ></textarea>
    );
  }

  const PreCode = () => {
    return (
      <pre
        onClick={() => {
          if (preRef.current) {
            const { width, height } = (preRef.current as HTMLElement).getBoundingClientRect()
            setStylePre({ width, height })
          }
          setEditing(true)
        }}
        className={`CodeInput--pre`}
        ref={preRef}
      >
        {handleSymbols(textCode)}
      </pre>
    );
  }

  return (
    <Container
      hasContent={editing}
      setHasContent={setEditing}
      darkMode={darkMode}
      style={style}
    >
      {editing
        ? TextArea()
        : PreCode()
      }
    </Container>
  );
};

export { CodeInput };