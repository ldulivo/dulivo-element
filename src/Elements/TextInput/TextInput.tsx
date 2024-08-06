import React, { ChangeEvent, useEffect, useState } from "react";
import "./TextInput.scss";
import Container from "../../core/Container";
import { TextInputProps } from "../../../types/Elements/TextInput";

export const TextInput: React.FC<TextInputProps> = ({
  label="",
  type,
  value="",
  onChange,
  darkMode,
  style
}) => {
  const [onInput, setOnInput] = useState(false);
  const [inputType, setInputType] = useState("text");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  }

  const handleClick = () => {
    if (!value) setOnInput(false);
  }

  useEffect(() => {
    switch (type) {
      case "number":
        setInputType("number")
        return;
      case "password":
        setInputType("password")
        return;      
    
      default:
        setInputType("text")
        break;
    }
  },[])

  return (
    <Container
      label={label}
      hasContent={onInput}
      setHasContent={setOnInput}
      darkMode={darkMode}
      style={style}
    >
      <input
        type={inputType}
        className={`TextInput`}
        onClick={() => setOnInput(true)}
        onBlur={handleClick}
        onChange={handleChange}
        value={value}
      />
    </Container>
  );
};