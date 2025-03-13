import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import ContactUs from "./pages/ContactUs";
import HireDeveloper from "./pages/HireDeveloper";
import Navbar from "./Components/Navbar";
import DotNet from "./pages/DotNetDeveloper";
import Service from "./pages/Service";
import Industry from "./pages/Industry";
import Traning from "./pages/TraningAndCor"; // ✅ Hero component import kiya
import EnrollmentForm from "./pages/EnrollmentForm"; // ✅ Form ka import sahi kiya
import AboutUs from './pages/AboutUs'
import Tech from './pages/Technologies'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navbar should be outside Routes */}
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/technologies" element={<Tech/>} />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/hire" element={<HireDeveloper />} />
          <Route path="/hire/dotnet" element={<DotNet />} />
          <Route path="/services" element={<Service />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/training-courses" element={<Traning />} />
          <Route path="/enroll" element={<EnrollmentForm />} /> {/* ✅ Fixed Route */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
