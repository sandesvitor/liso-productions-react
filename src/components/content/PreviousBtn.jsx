import React from 'react'
import { Link } from 'react-router-dom'
import './PreviousBtn.css'

import previousBtn from '../../assets/misc/prev.png'

export default props =>
    <Link to={props.to}>
        <div className="img-prev">
            <img src={previousBtn} alt="previous-arrow-button" />
        </div>
    </Link>