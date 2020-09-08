import React from "react";
import { Switch, Route, Redirect } from 'react-router'
import "./Section.css";

import Sumary from "./content/Sumary";
import VideoSection from "./content/VideosSection";
import GallerySection from "./content/GallerySection";

export default function Section(props) {
  return (
    <section className="section">
      <Switch>
        <Route exact path='/' component={Sumary} />
        <Route path="/content/videos" component={VideoSection} />
        <Route path="/content/3d-art" component={GallerySection} />
        <Redirect from="*" to="/" />
      </Switch>
    </section>
  )
}
