import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Services from "../components/home/Services";
import ContactMessages from "../pages/admin/ContactMessages"
import AdminLogin from "../pages/admin/AdminLogin"
import ProtectedRoute from "./ProtectedRoute"

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/messages" element={<ProtectedRoute> <ContactMessages /> </ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes