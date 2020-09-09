import React, { memo } from "react"
import "./Footer.css"

function Footer(props) {
  return (
    <footer id="footer">
      <div className="footer-container">

        <div className="contact-info">
          <h2>Contato:</h2>
          <h5>{props.celphone}</h5>
          <h5>{props.mail}</h5>
        </div>

        <div className="social-media-logos">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chrockatt/?hl=pt-br">
            <img
              src={props.instaLogo}
              alt="instagram-logo" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/heliochk">
            <img
              src={props.vimeoLogo}
              alt="vimeo-logo" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/helio-chrockatt-0833ab50/">
            <img
              src={props.linkedinLogo}
              alt="linkedin-logo" />
          </a>
        </div>

        <div className="rights-reserved">
          <p>
            © All rights reserved,<br />
            Liso Productions inc. 2020
        </p>
        </div>

      </div>
    </footer>
  )
}

export default memo(Footer)
