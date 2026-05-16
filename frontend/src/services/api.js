import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5163/api"
})

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token")

  if (token) {

    config.headers.Authorization =
      `Bearer ${token}`
  }

  return config
})

export default api




// import axios from "axios"

// const api = axios.create({
//   baseURL: "https://portfolio-backend-production-a42c.up.railway.app/api"
// })

// api.interceptors.request.use((config) => {

//   const token = localStorage.getItem("token")

//   if (token) {

//     config.headers.Authorization =
//       `Bearer ${token}`
//   }

//   return config
// })

// export default api