import React, { useEffect } from 'react'
import './VideosSection.css'

import axios from 'axios'
import videosJSON from '../../DATABASE_TEMP/videosInfo.json'

import PreviousBtn from './PreviousBtn'
import Thumbnails from '../../DATABASE_TEMP/Thumbnails'



export default function VideoSection(props) {
    const thumbnailsArray = Thumbnails()

    useEffect(() => {
        console.debug("Adding event listener 'click' to thumbnails")

        const iframe = document.querySelector('#slider')
        const thumbs = document.querySelectorAll('.navigation li img')
        thumbs.forEach(thumb => {
            thumb.addEventListener("click", () => {
                iframe.src = thumb.getAttribute("linkVimeo")
            })
        })

        return () => {
            thumbs.forEach(thumb => {
                thumb.removeEventListener("click", () => {

                })
            })
        }
    }, [])

    function renderThumbnails() {
        return thumbnailsArray.map((thumbnail, index) => {
            return (
                <li key={index}>
                    <img src={thumbnail.src} linkVimeo={videosJSON[index].src} />
                </li>
            )
        })
    }

    return (
        <div className="video-section animationPopIn">
            <div className="section-text">
                <h2 className="section-title">Portfolio em Vídeo:</h2>
                <h6 className="section-description">
                    São anos de material compilado em meu canal do Vimeo:
                    teaser trailers, curtas, trabalhos institucionais, comerciais,
                    documentários para Web Series e projetos pessoais.
                </h6>
            </div>


            <iframe id="slider"
                width="640" height="auto"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                src={videosJSON[0].src}>
            </iframe>

            <ul className="navigation">
                {renderThumbnails()}
            </ul>

            <PreviousBtn to="/" />

        </div>
    )
}