import { useState } from "react"

import { motion } from "framer-motion"

import api from "../../services/api"

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt
} from "react-icons/fa"

import "../../styles/ContactForm.css"

function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await api.post("/contact", formData)

      alert(res.data.message)

      setFormData({
        fullName: "",
        email: "",
        message: ""
      })

    } catch (error) {

      console.log(error)

      alert("Something went wrong")

    }
  }

  return (

    <section
      id="contact"
      className="contact-form-section"
    >

      {/* Glow */}
      <div className="contact-form-glow-blue"></div>

      <div className="contact-form-glow-purple"></div>

      <div className="contact-form-container">

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
          className="contact-form-heading"
        >

          <h2>

            Contact <span>Me</span>

          </h2>

          <p>

            Let’s discuss your next project,
            startup or business idea.

          </p>

        </motion.div>

        {/* Grid */}
        <div className="contact-form-grid">

          {/* Left Card */}
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

            <div className="contact-left-card">

              <div>

                <h3>

                  Get In Touch

                </h3>

                <p className="contact-description">

                  I’m available for freelance projects,
                  startup collaborations and modern
                  business website development.

                </p>

              </div>

              {/* Info */}
              <div className="contact-details">

                {/* Email */}
                <div className="contact-detail-box">

                  <div className="contact-detail-icon">

                    <FaEnvelope />

                  </div>

                  <div>

                    <h4>

                      Email

                    </h4>

                    <p>

                      jaygarasiyaofficial@gmail.com

                    </p>

                  </div>

                </div>

                {/* Phone */}
                <div className="contact-detail-box">

                  <div className="contact-detail-icon">

                    <FaPhoneAlt />

                  </div>

                  <div>

                    <h4>

                      Phone

                    </h4>

                    <p>

                      +91 8320907259

                    </p>

                  </div>

                </div>

                {/* Location */}
                <div className="contact-detail-box">

                  <div className="contact-detail-icon">

                    <FaMapMarkerAlt />

                  </div>

                  <div>

                    <h4>

                      Location

                    </h4>

                    <p>

                      Gujarat, India

                    </p>

                  </div>

                </div>

              </div>

              {/* Social */}
              <div className="contact-social-icons">

                {/* GitHub */}
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

          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="contact-right-card"
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
          >

            {/* Name */}
            <div className="contact-form-group">

              <label>

                Full Name

              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>

            {/* Email */}
            <div className="contact-form-group">

              <label>

                Email Address

              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            {/* Message */}
            <div className="contact-form-group">

              <label>

                Message

              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-submit-btn"
            >

              <FaPaperPlane />

              Send Message

            </button>

          </motion.form>

        </div>

      </div>

    </section>

  )
}

export default ContactForm