import React from 'react'
import { Link as SmothLink } from 'react-scroll'
import './SmothScroller.css'


export default props =>
    <div className="smoth-scroller-container">
        <SmothLink
            activeClass="active"
            to={props.goToId}
            spy={true}
            smooth={true}
            offset={-70}
            duration={props.scrollDuration}>


            <i className="far fa-arrow-alt-circle-down fa-2x"></i>

        </SmothLink>
    </div>