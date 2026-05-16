import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp
} from "react-icons/fa"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import { Link } from "react-router-dom"

import "../../styles/Hero.css"

// Local Images
import coding1 from "../../assets/coding1.jpg"
import coding2 from "../../assets/coding2.jpg"
import coding3 from "../../assets/coding3.jpg"
import coding4 from "../../assets/coding4.jpg"
import coding5 from "../../assets/coding5.jpg"

// Resume
import resume from "../../assets/Jay-Resume.pdf"

function Hero() {

  // Images Array
  const images = [
    coding1,
    coding2,
    coding3,
    coding4,
    coding5
  ]

  // Random Image
  const randomImage =
    images[Math.floor(Math.random() * images.length)]

  return (

    <section className="hero-section">

      {/* Glow */}
      <div className="hero-glow-blue"></div>
      <div className="hero-glow-purple"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >

          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1 className="hero-title">

            <span className="hero-name-white">
              Jay
            </span>

            <br />

            <span className="hero-name-gradient">
              Garasiya
            </span>

          </h1>

          {/* Typing */}
          <div className="hero-typing">

            <TypeAnimation
              sequence={[
                "ASP.NET Core MVC Developer",
                2000,

                "React Developer",
                2000,

                "Freelancer",
                2000,

                "Startup Builder",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Description */}
          <p className="hero-description">

            I build scalable, secure and high-performance web applications
            using ASP.NET Core MVC, React, SQL Server and modern UI technologies.

          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            {/* Hire Me */}
            <button className="btn-primary">
              Hire Me
            </button>

            {/* View Projects */}
            <Link to="/projects">

              <button className="btn-outline">
                View Projects
              </button>

            </Link>

            {/* Resume */}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
            >

              <button className="btn-dark">

                <FaDownload />

                Resume

              </button>

            </a>

          </div>

          {/* Social */}
          <div className="hero-social">

            {/* GitHub */}
            <a
              href="https://github.com/jaygarasiya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jaygarasiya"
              target="_blank"
              rel="noreferrer"
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

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-right"
        >

          <div className="hero-image-wrapper">

            {/* Glow */}
            <div className="hero-image-glow"></div>

            {/* Random Image */}
            <motion.img
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              src={randomImage}
              alt="Coding"
              className="hero-image"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero