import React from "react";
import "./Section.css";

import SumaryBlock from './content/SumaryBlock'
import Icons from '../data/sectionIcons'

export default function Section(props) {
  return (
    <section className="section">
      <SumaryBlock
        blockTitle={"VIDEO"}
        iconSrc={Icons.videoSrc}
        fadeDirection={"fade-right"}
        fadeDuration={"1800"} />


      <SumaryBlock
        blockTitle={"ARTE 3D"}
        iconSrc={Icons.artSrc}
        fadeDirection={"fade-left"}
        fadeDuration={"1800"} />

    </section>
  )
}
