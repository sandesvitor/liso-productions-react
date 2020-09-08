import React from 'react'
import './GallerySection.css'

import PreviousBtn from './PreviousBtn'

export default function GallerySection() {
    return (
        <div className="gallery-section animationPopIn">
            <div className="section-text">
                <h2 className="section-title">3d Art Projects</h2>
                <h6 className="section-description">
                    Planejamento de objetos, personagens e ambientes,
                    tudo personalizado para o seu conforto
                </h6>
            </div>

            <ul className="navigation"></ul>

            <PreviousBtn to="/" />

        </div>
    )
}