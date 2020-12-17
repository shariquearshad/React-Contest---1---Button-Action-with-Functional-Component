import React from "react";
export default function Button() {
  const [click, clicked] = React.useState("");
  const changeState = () => {
    const value =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    clicked(value);
  };
  return (
    <>
      <button id="click" onClick={changeState}>
        click
      </button>
      <p id="para">{click}</p>
    </>
  );
}
