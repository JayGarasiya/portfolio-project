import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import Navbar from "../../layouts/Navbar"
import Footer from "../../layouts/Footer"

import api from "../../services/api"

import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaCalendarAlt,
  FaTrash
} from "react-icons/fa"

import "../../styles/admin/AdminContacts.css"

function Contact() {

  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  // =========================
  // FETCH CONTACTS
  // =========================

  const fetchContacts = async () => {

    try {

      const res = await api.get("/contact")

      setContacts(res.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  // =========================
  // DELETE CONTACT
  // =========================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    )

    if (!confirmDelete) return

    try {

      await api.delete(`/contact/${id}`)

      // Instant UI update
      setContacts(
        contacts.filter(
          (contact) => contact.id !== id
        )
      )

      alert("Message Deleted Successfully")

    } catch (error) {

      console.log(error)

      alert("Delete Failed")

    }
  }

  // =========================
  // USE EFFECT
  // =========================

  useEffect(() => {

    fetchContacts()

  }, [])

  return (

    <div>

      <Navbar />

      <section className="contact-page">

        {/* Glow */}
        <div className="contact-glow glow-left"></div>
        <div className="contact-glow glow-right"></div>

        <div className="contact-container">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7
            }}
            className="contact-heading"
          >

            <span className="contact-subtitle">
              CONTACT MANAGEMENT
            </span>

            <h1>

              Client

              <span>
                {" "}Messages
              </span>

            </h1>

            <p>
              Manage and view all contact form submissions from your portfolio.
            </p>

          </motion.div>

          {/* Loader */}
          {
            loading && (

              <div className="loader-wrapper">

                <div className="loader"></div>

              </div>

            )
          }

          {/* Empty */}
          {
            !loading && contacts.length === 0 && (

              <div className="empty-state">

                <h2>
                  No Messages Found
                </h2>

                <p>
                  Contact form submissions will appear here.
                </p>

              </div>

            )
          }

          {/* Grid */}
          <div className="contact-grid">

            {
              contacts.map((contact, index) => (

                <motion.div
                  key={contact.id}
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
                    delay: index * 0.1
                  }}
                  viewport={{
                    once: true
                  }}
                  className="contact-card"
                >

                  {/* User */}
                  <div className="contact-user">

                    <div className="user-icon">

                      <FaUser />

                    </div>

                    <div>

                      <h2>
                        {contact.fullName}
                      </h2>

                      <p>
                        Portfolio Client
                      </p>

                    </div>

                  </div>

                  {/* Email */}
                  <div className="contact-info">

                    <FaEnvelope className="info-icon" />

                    <span>
                      {contact.email}
                    </span>

                  </div>

                  {/* Message */}
                  <div className="message-box">

                    <div className="message-title">

                      <FaCommentDots className="info-icon" />

                      <h3>
                        Message
                      </h3>

                    </div>

                    <p>
                      {contact.message}
                    </p>

                  </div>

                  {/* Date */}
                  <div className="contact-date">

                    <FaCalendarAlt className="info-icon" />

                    <span>

                      {
                        new Date(contact.createdAt)
                          .toLocaleDateString()
                      }

                    </span>

                  </div>

                  {/* DELETE BUTTON */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(contact.id)
                    }
                  >

                    <FaTrash />

                    Delete Message

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

export default Contact