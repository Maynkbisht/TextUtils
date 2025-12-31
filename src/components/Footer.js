import React from "react";

export default function Footer(props) {
  const style = {
    padding: "1rem 0",
    background: props.mode === "dark" ? "#0b0b0b" : "transparent",
    color: props.mode === "dark" ? "#fff" : "#000",
  };
  return (
    <div className="footer" style={style}>
      <br/>
      <p className="text-center italiana text-center">
        Code by {props.creatername} || 2025
      </p>
    </div>
  );
}
