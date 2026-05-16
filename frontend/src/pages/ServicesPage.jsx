import { motion } from "framer-motion"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaPaintBrush
} from "react-icons/fa"

function ServicesPage() {

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Modern, scalable and high-performance web applications using ASP.NET Core MVC and React JS.",

      features: [
        "Responsive Design",
        "REST API Integration",
        "Authentication System",
        "Admin Dashboard"
      ]
    },

    {
      icon: <FaLaptopCode />,
      title: "Custom Software",
      description:
        "Business-oriented software solutions tailored to your workflow and requirements.",

      features: [
        "ERP Systems",
        "Billing Software",
        "Inventory Management",
        "Employee Management"
      ]
    },

    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Efficient SQL Server database architecture with optimization and security.",

      features: [
        "Database Optimization",
        "Stored Procedures",
        "Relationships",
        "Backup & Security"
      ]
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive UI",
      description:
        "Pixel-perfect responsive interfaces optimized for desktop, tablet and mobile devices.",

      features: [
        "Mobile Friendly",
        "Tailwind CSS",
        "Modern Animations",
        "Fast UI"
      ]
    },

    {
      icon: <FaRocket />,
      title: "Startup Solutions",
      description:
        "Helping startups build MVPs and scalable digital products quickly.",

      features: [
        "MVP Development",
        "Scalable Architecture",
        "Fast Deployment",
        "Cloud Ready"
      ]
    },

    {
      icon: <FaPaintBrush />,
      title: "Modern UI/UX",
      description:
        "Clean, elegant and user-focused interfaces with smooth interactions.",

      features: [
        "Glassmorphism",
        "Dark UI",
        "Smooth Animations",
        "Premium Design"
      ]
    }
  ]

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-slate-950 text-white py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-2xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-2xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-blue-500 text-lg mb-4">
            WHAT I OFFER
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            My
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Services
            </span>

          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            I build scalable modern applications and business solutions
            that help companies grow faster with technology.
          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                whileHover={{
                  y: -10
                }}
                className="
                  bg-white/5
                  backdrop-blur-sm
                  border border-white/10
                  rounded-3xl
                  p-8
                  transition duration-300
                  hover:border-blue-500/50
                  transform-gpu
                  will-change-transform
                "
              >

                {/* Icon */}
                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-blue-500/10
                  flex items-center justify-center
                  text-3xl text-blue-500
                  mb-6
                ">

                  {service.icon}

                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4">

                  {service.title}

                </h2>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">

                  {service.description}

                </p>

                {/* Features */}
                <ul className="space-y-3">

                  {
                    service.features.map((feature, i) => (

                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-300"
                      >

                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>

                        {feature}

                      </li>

                    ))
                  }

                </ul>

                {/* Button */}
                <button className="
                  mt-8
                  w-full
                  bg-blue-600 hover:bg-blue-700
                  py-3 rounded-2xl
                  transition duration-300
                  font-medium
                ">

                  Get Started

                </button>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>
      <Footer />
    </div>
  )
}

export default ServicesPage