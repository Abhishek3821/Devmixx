import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar"    
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Project from "./Pages/Project";
function App() {


  return (
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
