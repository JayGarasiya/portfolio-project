import { useState } from "react"

import { motion } from "framer-motion"

import {
  FaCode,
  FaDatabase,
  FaReact,
  FaBootstrap,
  FaGithub
} from "react-icons/fa"

import {
  SiDotnet,
  SiJavascript,
  SiTailwindcss
} from "react-icons/si"

import "../../styles/skills.css"

function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(null)

 const skills = [

  {
    icon: <SiDotnet />,
    name: ".NET Core",
    percentage: "90%",
    description:
      "Experienced in building scalable backend applications and APIs using .NET Core."
  },

  {
    icon: <SiDotnet />,
    name: "ASP.NET Core MVC",
    percentage: "90%",
    description:
      "Building secure and scalable web applications using ASP.NET Core MVC architecture."
  },

  {
    icon: <FaCode />,
    name: "HTML5",
    percentage: "90%",
    description:
      "Building semantic and SEO-friendly webpage structures using HTML5."
  },

  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    percentage: "90%",
    description:
      "Creating responsive UI quickly using Bootstrap components and grid system."
  },

  {
    icon: <FaCode />,
    name: "OOP Concepts",
    percentage: "90%",
    description:
      "Strong understanding of inheritance, encapsulation and polymorphism."
  },

  {
    icon: <FaCode />,
    name: "C#",
    percentage: "85%",
    description:
      "Strong knowledge of OOP concepts, LINQ, collections and backend development in C#."
  },

  {
    icon: <FaDatabase />,
    name: "SQL Server",
    percentage: "85%",
    description:
      "Experienced in database design, stored procedures and query optimization using SQL Server."
  },

  {
    icon: <FaCode />,
    name: "CSS3",
    percentage: "85%",
    description:
      "Designing responsive modern UI layouts and animations using CSS3."
  },

  {
    icon: <FaDatabase />,
    name: "Entity Framework",
    percentage: "85%",
    description:
      "Working with ORM, LINQ queries and migrations using Entity Framework."
  },

  {
    icon: <FaCode />,
    name: "Postman",
    percentage: "85%",
    description:
      "Testing and debugging APIs efficiently using Postman."
  },

  {
    icon: <FaGithub />,
    name: "Git / GitHub",
    percentage: "85%",
    description:
      "Managing source code and project collaboration using Git and GitHub."
  },

  {
    icon: <FaReact />,
    name: "React JS",
    percentage: "80%",
    description:
      "Creating responsive frontend applications using React components and APIs."
  },

  {
    icon: <SiJavascript />,
    name: "JavaScript",
    percentage: "80%",
    description:
      "Working with modern JavaScript ES6 concepts, DOM and async programming."
  },

  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    percentage: "80%",
    description:
      "Building modern utility-first responsive UI designs using Tailwind CSS."
  },

  {
    icon: <FaDatabase />,
    name: "ADO.NET",
    percentage: "80%",
    description:
      "Handling direct database connections and commands using ADO.NET."
  },

  {
    icon: <FaCode />,
    name: "Authentication & Authorization",
    percentage: "80%",
    description:
      "Implementing secure authentication systems and role-based access."
  },

  {
    icon: <FaDatabase />,
    name: "MySQL",
    percentage: "75%",
    description:
      "Knowledge of CRUD operations, joins and relational database management using MySQL."
  },

  {
    icon: <FaCode />,
    name: "jQuery",
    percentage: "70%",
    description:
      "Using jQuery for DOM manipulation, animations and AJAX operations."
  }

]

  return (

    <section
      id="skills"
      className="skills-section"
    >

      {/* Glow */}
      <div className="skills-glow skills-glow-1"></div>

      <div className="skills-glow skills-glow-2"></div>

      <div className="skills-container">

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
          className="skills-heading"
        >

          <h2>

            My <span>Skills</span>

          </h2>

          <p>

            Technologies and tools I use to build
            scalable modern applications.

          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {
            skills.map((skill, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}
                viewport={{
                  once: true
                }}
                className="skill-card"
                onClick={() => setSelectedSkill(skill)}
              >

                {/* Top */}
                <div className="skill-top">

                  <div className="skill-info">

                    <div className="skill-icon">

                      {skill.icon}

                    </div>

                    <h3>

                      {skill.name}

                    </h3>

                  </div>

                  <span>

                    {skill.percentage}

                  </span>

                </div>

                {/* Progress */}
                <div className="progress-bar">

                  <motion.div
                    initial={{
                      width: 0
                    }}
                    whileInView={{
                      width: skill.percentage
                    }}
                    transition={{
                      duration: 1.2
                    }}
                    viewport={{
                      once: true
                    }}
                    className="progress-fill"
                  />

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

      {/* Popup */}
      {
        selectedSkill && (

          <div className="skill-popup-overlay">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="skill-popup"
            >

              <div className="popup-icon">

                {selectedSkill.icon}

              </div>

              <h3>

                {selectedSkill.name}

              </h3>

              <p>

                {selectedSkill.description}

              </p>

              <button
                className="popup-close-btn"
                onClick={() => setSelectedSkill(null)}
              >

                Cancel

              </button>

            </motion.div>

          </div>

        )
      }

    </section>
  )
}

export default Skills