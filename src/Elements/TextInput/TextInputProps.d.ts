import { ChangeEvent } from "react";

export interface TextInputProps {
  label?: string;
  value?: string | number;
  type?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}