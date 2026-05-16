import { useState } from "react"

import { motion } from "framer-motion"

import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

import {
  FaGithub,
  FaPlay
} from "react-icons/fa"

import "../styles/Projects.css"

function Projects() {

  const [activeCategory, setActiveCategory] =
    useState("All")

  const [selectedVideo, setSelectedVideo] =
    useState(null)

  const categories = [
    "All",
    "Client Projects",
    "College Projects",
    "Personal Projects"
  ]

  const projects = [

  // =========================
  // CLIENT PROJECTS
  // =========================

  {
    title: "HL Warehouse Stock Management",

    category: "Client Projects",

    description:
      "Warehouse stock management system with inventory tracking, reports and product management features.",

    image:
      "/projects/hlwarehouse.png",

    video:
      "/videos/hlwarehouse-demo.mp4",

    screenshots: [
      "/projects/hlwarehouse1.png",
      "/projects/hlwarehouse2.png"
    ],

    tech: [
      "ASP.NET Core MVC",
      "SQL Server",
      "Bootstrap"
    ],

    github:
     "https://github.com/JayGarasiya/stock-counting-web-app-hl"
  },

  {
    title: "MegaSlider",

    category: "Client Projects",

    description:
      "Business management application with modern dashboard, product handling and reporting system.",

    image:
      "/projects/megaslider.png",

    video:
      "/videos/megaslider-demo.mp4",

    screenshots: [
      "/projects/megaslider1.png",
      "/projects/megaslider2.png"
    ],

    tech: [
      "ASP.NET Core MVC",
      "Entity Framework",
      "SQL Server"
    ],

    github:
      "https://github.com/JayGarasiya/MegaSlider"
  },

  {
    title: "Larsen Lights E-Commerce",

    category: "Client Projects",

    description:
      "E-Commerce platform for lighting products with cart, orders and product management system.",

    image:
      "/projects/larsenlights.png",

    video:
      "/videos/larsenlights-demo.mp4",

    screenshots: [
      "/projects/larsenlights1.png",
      "/projects/larsenlights2.png"
    ],

    tech: [
      "ASP.NET Core MVC",
      "SQL Server",
      "Bootstrap"
    ],

    github:
    "https://github.com/JayGarasiya/larsen_lights"
  },

  {
    title: "Account Billing System",

    category: "Client Projects",

    description:
      "Billing and invoice management software with account handling and reporting features.",

    image:
      "/projects/billing.png",

    video:
      "/videos/billing-demo.mp4",

    screenshots: [
      "/projects/billing1.png",
      "/projects/billing2.png"
    ],

    tech: [
      "ADO.NET",
      "SQL Server",
      "Windows Forms"
    ],

    github:
      "https://github.com/JayGarasiya/Account-Billing-"
  },

  // =========================
  // COLLEGE PROJECTS
  // =========================

  {
    title: "Doctor Appointment System",

    category: "College Projects",

    description:
      "Doctor appointment booking platform with authentication and appointment scheduling.",

    image:
      "/projects/doctor.png",

    video:
      "/videos/doctor-demo.mp4",

    screenshots: [
      "/projects/doctor1.png",
      "/projects/doctor2.png"
    ],

    tech: [
      "React JS",
      "Web API",
      "SQL Server"
    ],

    github:
      "https://github.com/JayGarasiya/doctor-"
  },

  {
    title: "TechTronix E-Commerce",

    category: "College Projects",

    description:
      "Modern e-commerce application with shopping cart, products and responsive UI.",

    image:
      "/projects/techtronix.png",

    video:
      "/videos/techtronix-demo.mp4",

    screenshots: [
      "/projects/techtronix1.png",
      "/projects/techtronix2.png"
    ],

    tech: [
      "React JS",
      "JavaScript",
      "CSS"
    ],

    github:
      "https://github.com/JayGarasiya/TechTronix"
  },

  {
    title: "Beauty Bliss E-Commerce",

    category: "College Projects",

    description:
      "Beauty products e-commerce website with product management and shopping features.",

    image:
      "/projects/beautybliss.png",

    video:
      "/videos/beautybliss-demo.mp4",

    screenshots: [
      "/projects/beautybliss1.png",
      "/projects/beautybliss2.png"
    ],

    tech: [
      "PHP",
      "MySQL",
      "Bootstrap"
    ],

    github:
      "https://github.com/JayGarasiya/beauty_bliss"
  },

  {
    title: "Insurance Management System",

    category: "College Projects",

    description:
      "Insurance management platform with APIs, customer records and policy management.",

    image:
      "/projects/insurance.png",

    video:
      "/videos/insurance-demo.mp4",

    screenshots: [
      "/projects/insurance1.png",
      "/projects/insurance2.png"
    ],

    tech: [
      "ASP.NET Core MVC",
      "Web APIs",
      "SQL Server"
    ],

    github:
      "https://github.com/JayGarasiya/InsuranceManagement"
  },

  // =========================
  // PERSONAL PROJECTS
  // =========================

  {
    title: "Portfolio Website",

    category: "Personal Projects",

    description:
      "Modern developer portfolio with animations, responsive design and API integration.",

    image:
      "/projects/portfolio.png",

    video:
      "/videos/portfolio-demo.mp4",

    screenshots: [
      "/projects/portfolio1.png",
      "/projects/portfolio2.png"
    ],

    tech: [
      "React JS",
      "JavaScript",
      "ASP.NET Core MVC",
      "Web APIs"
    ],

    github:
      "https://github.com/jaygarasiya/portfolio-project"
  }

]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        )

  return (

    <div>

      <Navbar />

      <section
        id="projects"
        className="projects"
      >

        <div className="projects-container">

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
            className="projects-heading"
          >

            <span className="projects-subtitle">

              MY WORK

            </span>

            <h2>

              Featured Projects & Case Studies

            </h2>

            <p>

              A collection of modern applications and
              real-world projects built with scalable
              technologies and clean UI design.

            </p>

          </motion.div>

          {/* Categories */}
          <div className="projects-categories">

            {
              categories.map((category, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={
                    activeCategory === category
                      ? "category-btn active-category"
                      : "category-btn"
                  }
                >

                  {category}

                </button>

              ))
            }

          </div>

          {/* Grid */}
          <div className="projects-grid">

            {
              filteredProjects.map((project, index) => (

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
                    duration: 0.6,
                    delay: index * 0.15
                  }}
                  viewport={{
                    once: true
                  }}
                  className="project-card"
                >

                  {/* Image */}
                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                  </div>

                  {/* Content */}
                  <div className="project-content">

                    {/* Category */}
                    <span className="project-category">

                      {project.category}

                    </span>

                    <h3>

                      {project.title}

                    </h3>

                    <p>

                      {project.description}

                    </p>

                    {/* Tech Stack */}
                    <div className="tech-stack">

                      {
                        project.tech.map((tech, i) => (

                          <span key={i}>

                            {tech}

                          </span>

                        ))
                      }

                    </div>

                    {/* Buttons */}
                    <div className="project-buttons">

                      {/* Screenshots */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                      >

                        <FaGithub />

                        Source Code

                      </a>

                      {/* Video */}
                      <button
                        className="live-btn"
                        onClick={() =>
                          setSelectedVideo(project.video)
                        }
                      >
                        <FaPlay />
                        Watch Demo
                      </button>

                    </div>

                  </div>

                </motion.div>

              ))
            }

          </div>

        </div>

      </section>

      {/* VIDEO MODAL */}
      {
        selectedVideo && (

          <div
            className="video-modal"
            onClick={() =>
              setSelectedVideo(null)
            }
          >

            <div
              className="video-box"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <video
                src={selectedVideo}
                controls
                autoPlay
              />

              <button
                className="close-video"
                onClick={() =>
                  setSelectedVideo(null)
                }
              >

                ✕

              </button>

            </div>

          </div>

        )
      }

      <Footer />

    </div>

  )
}

export default Projects