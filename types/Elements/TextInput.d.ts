import { ChangeEvent, CSSProperties } from "react";

export interface TextInputProps {
  label?: string;
  value?: string | number;
  type?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  darkMode?: boolean;
  style?: CSSProperties;
}