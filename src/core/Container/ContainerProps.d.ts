import React, { SetStateAction } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  label?: string;
  hasContent?: boolean;
  setHasContent?: React.Dispatch<SetStateAction<boolean>>;
  darkMode?: boolean;
}