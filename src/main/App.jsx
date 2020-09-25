import React, { useEffect } from "react"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../node_modules/fontawesome/generate'

import Logos from '../data/logoImgs'

import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"

export default function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <BrowserRouter>
      <div className="app">

        <Header title={"Helio Chrockatt"} subTitle={"Liso Productions"} />

        <Section />

        <Footer
          celphone={"+55 21 99999-9999"}
          mail={"helio.csrn@gmail.com"}
          instaLogo={Logos.instaSrc}
          linkedinLogo={Logos.linkedinSrc}
          vimeoLogo={Logos.vimeoSrc} />

      </div>
    </BrowserRouter>
  )
}
