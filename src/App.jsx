import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Stats from './pages/Stats'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/contactus" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hire" element={<HireDeveloper />} /> */}
        </Routes>
      </div>
    </Router></>
  )
}

export default App
