import React from "react";

export const handleSymbols = ( CodeString: string ) => {
  if (!CodeString) return;
  let index = 0;
  const regex = /[<>]/;
  const symbols = CodeString.split(regex)
  const updateSymbols = [""];
  symbols.map((symbol) => {
    const nextIndex = index + symbol.length;
    const character = CodeString[nextIndex];
    index = nextIndex + 1;
    
    if (symbol.indexOf("//") !== -1) {
      return updateSymbols.push(
        symbol.slice(0, symbol.indexOf("//")),
        symbol.slice( symbol.indexOf("//") ),
        character
      );
    }
    return updateSymbols.push(symbol, character);
  })
  

  const elements = React.createElement(
    'code',
    null,
    updateSymbols.map((symbol, i) => {
      if (symbol === "") return;
      if (symbol === "<" || symbol === ">") return React.createElement("span", {key: i, style: {color: "var(--color_disabled)"}}, symbol);
      if (symbol && (symbol.startsWith("\n//") || symbol.startsWith("//")) ) return React.createElement("span", {key: i, style: {color: "var(--color_inactive)"}}, symbol);
      return symbol;
    })
  )
  return elements;
};
