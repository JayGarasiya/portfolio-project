import { motion } from "framer-motion"

import {
  FaCode,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa"

import "../../styles/about.css"

function About() {

  const cards = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc:
        "Building scalable and responsive web applications using ASP.NET Core MVC and React."
    },

    {
      icon: <FaLaptopCode />,
      title: "Clean Architecture",
      desc:
        "Writing maintainable, optimized and structured code following industry best practices."
    },

    {
      icon: <FaRocket />,
      title: "Freelancing & Startup",
      desc:
        "Focused on building products and helping businesses grow with digital solutions."
    }
  ]

  return (
    <section id="about" className="about-section">

      {/* Glow */}
      <div className="about-glow about-glow-1"></div>

      <div className="about-glow about-glow-2"></div>

      <div className="about-container">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{
            once: true
          }}
          className="about-heading"
        >

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Passionate ASP.NET Core MVC Developer focused on building
            modern scalable and business-oriented web applications.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="about-grid">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7
            }}
            viewport={{
              once: true
            }}
          >

            <h3 className="about-subtitle">
              Who Am I?
            </h3>

            <p className="about-text">
              I am an ASP.NET Core MVC Developer with experience
              building secure and scalable web applications.
              I have worked on real-world business projects and
              now focusing on freelancing and startup development.
            </p>

            <p className="about-text">
              I enjoy solving business problems through technology
              and creating modern digital solutions for clients.
            </p>

            {/* Stats */}
            <div className="stats-grid">

              <div className="stat-card">

                <h4>1+</h4>

                <p>Years Experience</p>

              </div>

              <div className="stat-card">

                <h4>5+</h4>

                <p>Projects</p>

              </div>

              <div className="stat-card">

                <h4>100%</h4>

                <p>Dedication</p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7
            }}
            viewport={{
              once: true
            }}
            className="about-cards"
          >

            {
              cards.map((card, index) => (

                <div
                  key={index}
                  className="about-card"
                >

                  <div className="about-icon">

                    {card.icon}

                  </div>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.desc}
                  </p>

                </div>

              ))
            }

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About