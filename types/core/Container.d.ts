import React, { CSSProperties, SetStateAction } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  label?: string;
  hasContent?: boolean;
  setHasContent?: React.Dispatch<SetStateAction<boolean>>;
  darkMode?: boolean;
  style?: CSSProperties;
}