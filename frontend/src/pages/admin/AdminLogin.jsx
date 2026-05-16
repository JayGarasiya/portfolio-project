import { useState } from "react"

import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import "../../styles/admin/AdminLogin.css"

function AdminLogin() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
        "/auth/login",
        formData
      )

      localStorage.setItem(
        "token",
        res.data.token
      )

      alert("Login Successful")

      navigate("/admin/messages")

    } catch (error) {

      console.log(error)

      alert("Invalid Username Or Password")

    }
  }

  return (

    <section className="admin-login-page">

      <div className="admin-login-card">

        <h1>

          Admin Login

        </h1>

        <p>

          Only admin can access messages

        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Login

          </button>

        </form>

      </div>

    </section>

  )
}

export default AdminLogin