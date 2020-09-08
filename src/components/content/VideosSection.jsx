import React, { useEffect } from 'react'
import './VideosSection.css'

import axios from 'axios'
import videosJSON from '../../DATABASE_TEMP/videosInfo.json'

import previousBtn from '../../assets/misc/prev.png'
import PreviousBtn from './PreviousBtn'

const baseUrl = '../../DATABASE_TEMP/videosInfo.json'

export default function VideoSection(props) {

    useEffect(() => {
        const ul = document.querySelector('.video-section.animationPopIn .navigation')

        console.log(videosJSON)
        videosJSON.forEach(video => {

            let li = document.createElement('li')
            let img = document.createElement('img')
            img.src = video.thumbnail

            li.appendChild(img)
            ul.appendChild(li)

            li.onclick = src => {
                document.querySelector('#slider').src = video.src
            }

        })

    }, [])

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
                allowFullScreen>
                {/* Aqui vai entrar o vídeo atual! */}
                src={videosJSON[0].src}
            </iframe>

            <ul className="navigation">
                {/* Aqui vão entrar os thumbnails! */}
            </ul>

            <PreviousBtn to="/" />

        </div>
    )
}