import React from 'react'
import './SumaryBlock.css'

export default function SumaryBlock(props) {
    return (
        <span className="sumary-block">
            <div data-aos={props.fadeDirection}
                data-aos-duration={props.fadeDuration}>

                <img src={props.iconSrc} alt="Ícone de Seção" />
                <h2>{props.blockTitle}</h2>

            </div>
        </span>
    )
}