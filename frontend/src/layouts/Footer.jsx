import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp
} from "react-icons/fa"

import "../styles/Footer.css"

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Logo */}
          <div className="footer-logo">

            <h2>
              <span className="white-text">
                Dev
              </span>

              <span className="blue-text">
                Portfolio
              </span>
            </h2>

            <p>
              Building scalable modern web applications.
            </p>

          </div>

          {/* Links */}
          <div className="footer-links">

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          {/* Social */}
          <div className="footer-social">

            {/* Github */}
            <a
              href="https://github.com/jaygarasiya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jaygarasiya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918320907259"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 Jay Garasiya. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="top-btn"
          >

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer