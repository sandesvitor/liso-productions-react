import React from 'react'
import { Link as SmothLink } from 'react-scroll'
import './SmothScroller.css'


export default props =>
    <SmothLink
        activeClass="active"
        to={props.goToId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={props.scrollDuration}>

        <div className="smoth-scroller-container">
            <img
                src={require('../../assets/misc/smothScroll.png')}
                alt="Smoth Scroller icon" />
        </div>

    </SmothLink>