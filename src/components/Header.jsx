import React, { memo } from "react";
import "./Header.css";

import SmothScroller from './tools/SmothScroller'

function Header(props) {
  return (
    <header>
      <div className="header">
        <div className="titles animationPopIn">
          <h1>{props.title}</h1>
          <h4>{props.subTitle}</h4>
        </div>

        <SmothScroller goToId={"footer"} scrollDuration={1500} />


      </div>
    </header>
  );
}

export default memo(Header)
