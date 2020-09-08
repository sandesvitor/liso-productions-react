import React from "react"
import "./App.css"

import Logos from '../data/logoImgs'

import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"

export default function App() {
  return (
    <div className="app">

      <Header
        title={"Helio Chrockatt"}
        subTitle={"Liso Productions"}
      />

      <Section />

      <Footer
        celphone={"+55 21 99999-9999"}
        mail={"helio.csrn@gmail.com"}
        instaLogo={Logos.instaSrc}
        linkedinLogo={Logos.linkedinSrc}
        vimeoLogo={Logos.vimeoSrc}
        fadeDirection="fade-up"
        fadeDuration={"1200"}
      />

    </div>
  )
}
