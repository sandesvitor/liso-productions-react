import React from 'react'
import './GallerySection.css'

import PreviousBtn from './PreviousBtn'

import Images from '../../DATABASE_TEMP/Images'

export default function GallerySection() {
    const imagesArray = Images()

    function renderImg() {
        return imagesArray.map((art, index) => {
            return (
                <li key={index}>
                    <a
                        href={art.src}
                        data-lightbox="mygallery"
                        data-title={art.imageTitle}
                    >
                        <img src={art.src} alt={art.alt} />
                    </a>
                </li>
            )
        })
    }

    return (
        <div className="gallery-section animationPopIn">
            <div className="section-text">
                <h2 className="section-title">3d Art Projects</h2>
                <h6 className="section-description">
                    Planejamento de objetos, personagens e ambientes,
                    tudo personalizado para o seu conforto
                </h6>
            </div>

            <ul className="navigation">
                {renderImg()}
            </ul>

            <PreviousBtn to="/" />

        </div>
    )
}