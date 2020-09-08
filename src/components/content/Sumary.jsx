import React from "react"
import { Link } from 'react-router-dom'

import SumaryBlock from './SumaryBlock'
import Icons from "../../data/sectionIcons"

export default (props) => (
  <React.Fragment>

    <Link to="/content/videos">
      <SumaryBlock
        blockTitle={"VIDEO"}
        iconSrc={Icons.videoSrc}
        fadeDirection={"fade-right"}
        fadeDuration={"1800"} />
    </Link>

    <Link to="/content/3d-art">
      <SumaryBlock
        blockTitle={"ARTE 3D"}
        iconSrc={Icons.artSrc}
        fadeDirection={"fade-left"}
        fadeDuration={"1800"} />
    </Link>

  </React.Fragment>
)
