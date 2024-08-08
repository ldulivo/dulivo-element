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
      className={`Container ${isFocused ? "Container--isFocused" : ""} ${darkMode ? "darkMode" : ""}`}
      style={{ ...otherStyles, border, borderRadius, borderColor, borderStyle}}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <main>
        <section>
          <div style={borderProps}></div>
            {label
              ? <label
                  onClick={handleClickLabel}
                  className={`${hasContent ? "Container--LabelActive" : ""}`}
                >{label}</label>
              : null
            }
            <div style={borderProps}></div>
        </section>
      </main>
      <div className="Container--Children">{children}</div>
    </div>
  );
};

export default Container;