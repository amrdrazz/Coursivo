// import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">

        <div className="main">
          <h1>Coursivo</h1>
          <p>Learn. Build. Grow.<br/><br/>Master new skills with expert-led courses and advance your career.  </p>
        </div>
        <div className="social">
          <h1>Social Media</h1>
          <div className="icons">
              <FaFacebook />
              <AiFillTikTok />
              <FaWhatsapp />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
