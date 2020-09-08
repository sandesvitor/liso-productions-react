import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="header">
        <div className="titles animationPopIn">
          <h1>{props.title}</h1>
          <h4>{props.subTitle}</h4>
        </div>
      </div>
    </header>
  );
}
