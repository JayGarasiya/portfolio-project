import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import Navbar from "../../layouts/Navbar"
import Footer from "../../layouts/Footer"

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaPaintBrush,
  FaUserGraduate,
  FaProjectDiagram,
  FaBookOpen,
  FaChalkboardTeacher,
  FaDesktop,
  FaGlobe,
  FaTimes
} from "react-icons/fa"

import "../../styles/Services.css"

function Services() {

  const [selectedService, setSelectedService] = useState(null)

  const services = [

    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Modern, fast and interactive user interfaces using React.js and advanced UI libraries.",

      details:
        "I create beautiful, responsive and high-performance frontend applications using React.js, animations, reusable components and modern UI libraries.",

      features: [
        "React.js Applications",
        "Responsive Design",
        "Modern UI Animations",
        "Reusable Components",
        "Fast Performance"
      ]
    },

    {
      icon: <FaLaptopCode />,
      title: "Custom Admin Dashboards",
      description:
        "Secure and scalable admin panels with authentication, analytics and management tools.",

      details:
        "Professional admin dashboards with secure authentication systems, analytics, charts and user management functionalities.",

      features: [
        "JWT Authentication",
        "Role Management",
        "Analytics Dashboard",
        "CRUD Operations",
        "Secure APIs"
      ]
    },

    {
      icon: <FaDatabase />,
      title: "Database Architecture",
      description:
        "Optimized SQL Server database design for high performance and scalable applications.",

      details:
        "Efficient and scalable database architecture using SQL Server with optimized queries and relationships.",

      features: [
        "SQL Server",
        "Database Optimization",
        "Stored Procedures",
        "ER Diagram Design",
        "Scalable Structure"
      ]
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Design",
      description:
        "Fully responsive websites that provide seamless experiences across all devices.",

      details:
        "Modern responsive layouts that work perfectly across desktops, tablets and mobile devices.",

      features: [
        "Mobile Friendly",
        "Tablet Responsive",
        "Cross Browser Support",
        "Flexible Layouts",
        "Modern Design"
      ]
    },

    {
      icon: <FaServer />,
      title: "Backend API Development",
      description:
        "Robust REST APIs with ASP.NET Core using clean architecture and secure authentication.",

      details:
        "Powerful backend API development with ASP.NET Core including authentication and scalable architecture.",

      features: [
        "REST APIs",
        "ASP.NET Core",
        "JWT Security",
        "Clean Architecture",
        "Database Integration"
      ]
    },

    {
      icon: <FaCloud />,
      title: "Cloud Deployment",
      description:
        "Application deployment, hosting and server configuration for reliable performance.",

      details:
        "Deployment and hosting solutions with optimized server configurations and cloud support.",

      features: [
        "Cloud Hosting",
        "Server Setup",
        "Deployment Support",
        "Domain Configuration",
        "Performance Monitoring"
      ]
    },

    {
      icon: <FaShieldAlt />,
      title: "Authentication & Security",
      description:
        "Secure login systems with JWT authentication, authorization and protected routes.",

      details:
        "Secure authentication and authorization systems with encrypted data handling and protected routes.",

      features: [
        "JWT Authentication",
        "Authorization",
        "Protected Routes",
        "Password Encryption",
        "Secure APIs"
      ]
    },

    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description:
        "Website speed optimization, clean code structure and better application performance.",

      details:
        "Optimization techniques for improving website speed, loading times and application performance.",

      features: [
        "Code Optimization",
        "Fast Loading",
        "SEO Friendly",
        "Performance Tuning",
        "Clean Structure"
      ]
    },

    {
      icon: <FaPaintBrush />,
      title: "Modern UI/UX Design",
      description:
        "Beautiful and user-friendly interfaces with modern layouts, animations and interactions.",

      details:
        "Creative UI/UX designs with smooth animations, attractive layouts and user-friendly experiences.",

      features: [
        "Modern Layouts",
        "Interactive UI",
        "Smooth Animations",
        "User Friendly",
        "Creative Design"
      ]
    },

    {
      icon: <FaUserGraduate />,
      title: "College Final Year Projects",
      description:
        "Custom final year college projects with modern technologies and backend integration.",

      details:
        "Complete final year projects with frontend, backend, database and documentation support.",

      features: [
        "Final Year Projects",
        "Complete Source Code",
        "Documentation",
        "Presentation Help",
        "Project Guidance"
      ]
    },

    {
      icon: <FaProjectDiagram />,
      title: "Mini Projects Development",
      description:
        "Professional mini projects for diploma and degree students.",

      details:
        "Mini project solutions for students using modern technologies and practical implementations.",

      features: [
        "Mini Projects",
        "Frontend + Backend",
        "Database Integration",
        "Student Guidance",
        "Project Reports"
      ]
    },

    {
      icon: <FaBookOpen />,
      title: "Project Documentation",
      description:
        "Complete project reports and presentation preparation for college submissions.",

      details:
        "Detailed project documentation with diagrams, modules and professional formatting.",

      features: [
        "Project Reports",
        "Flowcharts",
        "ER Diagrams",
        "PPT Preparation",
        "Professional Documentation"
      ]
    }

  ]

  return (

    <div>

      <Navbar />

      <section
        id="services"
        className="services"
      >

        <div className="services-container">

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
            className="services-heading"
          >

            <span className="services-subtitle">
              WHAT I OFFER
            </span>

            <h2>
              Solutions Designed For Modern Businesses
            </h2>

            <p>
              I build scalable, responsive and high-performance digital solutions
              that help businesses grow and stand out online.
            </p>

          </motion.div>

          {/* Services Grid */}
          <div className="services-grid">

            {
              services.map((service, index) => (

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
                    delay: index * 0.1
                  }}
                  viewport={{
                    once: true
                  }}
                  className="service-card"
                >

                  <div className="service-icon">

                    {service.icon}

                  </div>

                  <h3>

                    {service.title}

                  </h3>

                  <p>

                    {service.description}

                  </p>

                  <button
                    className="service-btn"
                    onClick={() => setSelectedService(service)}
                  >

                    Learn More

                  </button>

                </motion.div>

              ))
            }

          </div>

        </div>

      </section>

      {/* Modal */}
      <AnimatePresence>

        {
          selectedService && (

            <motion.div
              className="service-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                className="service-modal"
                initial={{
                  scale: 0.8,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}
              >

                <button
                  className="modal-close"
                  onClick={() => setSelectedService(null)}
                >

                  <FaTimes />

                </button>

                <div className="modal-icon">

                  {selectedService.icon}

                </div>

                <h2>

                  {selectedService.title}

                </h2>

                <p className="modal-description">

                  {selectedService.details}

                </p>

                <div className="modal-features">

                  {
                    selectedService.features.map((feature, index) => (

                      <div
                        key={index}
                        className="feature-item"
                      >

                        • {feature}

                      </div>

                    ))
                  }

                </div>

                <button
                  className="modal-btn"
                  onClick={() => setSelectedService(null)}
                >

                  Cancel

                </button>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>

      <Footer />

    </div>

  )
}

export default Services