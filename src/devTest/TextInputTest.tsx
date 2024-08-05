import React, { ChangeEvent, useState } from "react";
import { TextInput } from "../Elements/TextInput";

export const TextInputTest: React.FC = () => {
  const [myValue, setMyValue] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyValue(e.target.value)
  }

  return (
    <div style={{width: 200}}>
      <TextInput
        label='Label'
        value={myValue}
        onChange={handleChange}
      />
    </div>
  );
};
