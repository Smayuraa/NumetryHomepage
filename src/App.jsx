import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/Home';
import Footer from "./Components/Footer";
import ContactUs from "./pages/ContactUs";
import HireDeveloper from './pages/HireDeveloper'
import Navbar from "./components/Navbar";
import DotNet from './pages/DotNetDeveloper'
import Service from "./pages/Service";

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
           <Route path="/contact" element={<ContactUs />} />
          <Route path="/hire" element={<HireDeveloper />} /> 
          <Route path="/hire/dotnet" element={<DotNet />} /> 
          <Route path="/services" element={<Service />} /> 



          {/* <Route path="/footer" element={<Footer />} /> */}

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
