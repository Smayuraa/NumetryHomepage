import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaLaravel, FaAndroid, FaApple, FaMicrosoft, FaAngular } from "react-icons/fa";
import "../styles/HireDeveloper.css";


const developers = [
  { name: ".NET Developer", key: "dotnet", icon: <FaMicrosoft /> },
  { name: "Angular Developer", key: "angular", icon: <FaAngular /> },
  { name: "React JS Developer", key: "reactjs", icon: <FaReact /> },
  { name: "React Native Developer", key: "reactnative", icon: <FaReact /> },
  { name: "Node JS Developer", key: "nodejs", icon: <FaNodeJs /> },
  { name: "Laravel Developer", key: "laravel", icon: <FaLaravel /> },
  { name: "iOS App Developer", key: "ios", icon: <FaApple /> },
  { name: "Android App Developer", key: "android", icon: <FaAndroid /> },
];

const HireDeveloper = () => {
  return (
    <div>
        {/* <Navbar /> */}
    <div className="hire-developer">
      <h1 className="title">Hire a Developer</h1>
      <div className="developer-grid">
        {developers.map((dev) => (
          <Link to={`/hire/${dev.key}`} key={dev.key} className="developer-card">
            <div className="dev-icon">{dev.icon}</div>
            <p>{dev.name}</p>
          </Link>
        ))}
      </div>
     
    </div>

    </div>
    
  );
};

export default HireDeveloper;
