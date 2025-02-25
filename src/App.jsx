import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Footer from "./Components/Footer";
import ContactUs from "./pages/ContactUs";
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
          {/*<Route path="/footer" element={<Footer />} />
          <Route path="/hire" element={<HireDeveloper />} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
