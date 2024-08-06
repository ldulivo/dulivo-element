import React, { useState } from "react";
import "../styles/index.scss";
import { ContainerProps } from "../../../types/core/Container";

const Container: React.FC<ContainerProps> = ({
  children,         // contenido hijo.
  label=null,       // label.
  hasContent=false, // whether it has content or not.
  setHasContent,
  darkMode=false,
  style
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const { border, borderRadius, borderColor, borderStyle, ...otherStyles } = style || {};
  const borderProps = { border, borderRadius, borderColor }

  const handleClickLabel = () => {
    if (!hasContent && setHasContent) setHasContent(true)
  }

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`Container--setup ${isFocused ? "isFocused" : ""} ${darkMode ? "darkMode" : ""}`}
    >
      <div className="Container" style={otherStyles}>
        <div className="Container--LeftSide" style={borderProps}></div>
        <div className="Container--Content">
          <div className="Container--TopElement">
            <div className="Container--TopElement-main">
              {label
                ? <label
                    onClick={handleClickLabel}
                    className={`Container--Label ${hasContent ? "Container--LabelActive" : ""}`}
                  >{label}</label>
                : null
              }
              <div className={`Container--TopSide ${hasContent ? "Container--TopSideActive" : ""}`} style={borderProps}></div>
            </div>
          </div>
          <div className="Container--Children">{children}</div>
          <div className="Container--BottomSide" style={borderProps}></div>
        </div>
        <div className="Container--RightSide" style={borderProps}></div>
      </div>
    </div>
  );
};

export default Container;