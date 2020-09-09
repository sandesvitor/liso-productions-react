import React, { memo } from "react";
import "./Header.css";

function Header(props) {
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

export default memo(Header)
