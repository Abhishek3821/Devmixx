import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Project from "./Pages/Project";
import Seo from "./Component/Service/Seo";
import WebDevelopment from "./Component/Service/WebDevelopment";
import SMMServices from "./Component/Service/SMMServices";
import BrandingServices from "./Component/Service/BrandingServices";
import PPCServices from "./Component/Service/PPCServices";
import ContentMarketing from "./Component/Service/ContentMarketing";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/web-dev" element={<WebDevelopment />} />
        <Route path="/services/smm" element={<SMMServices />} />
        <Route path="/services/branding" element={<BrandingServices />} />
        <Route path="/services/ppc" element={<PPCServices />} />
        <Route path="/services/content" element={<ContentMarketing />} />


        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
