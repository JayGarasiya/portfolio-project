import { useState } from "react"

import { motion } from "framer-motion"

import api from "../services/api"

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane
} from "react-icons/fa"

import "../styles/Contact.css"

function Contact() {

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

      const res = await api.post(
        "/contact",
        formData
      )

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

    <section className="contact-page-main">

      {/* Glow */}
      <div className="contact-page-glow-left"></div>

      <div className="contact-page-glow-right"></div>

      <div className="contact-page-container">

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
          className="contact-page-heading"
        >

          <h1>

            Contact

            <span>
              {" "}Us
            </span>

          </h1>

          <p>

            Let’s discuss your next project,
            startup or business idea.

          </p>

        </motion.div>

        {/* Form */}
        <motion.form

          onSubmit={handleSubmit}

          className="contact-page-form"

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
        >

          {/* Full Name */}
          <div className="contact-page-input-group">

            <label>

              <FaUser />

              Full Name

            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>

          {/* Email */}
          <div className="contact-page-input-group">

            <label>

              <FaEnvelope />

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
          <div className="contact-page-input-group">

            <label>

              <FaCommentDots />

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

          {/* Button */}
          <button
            type="submit"
            className="contact-page-btn"
          >

            <FaPaperPlane />

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  )
}

export default Contact