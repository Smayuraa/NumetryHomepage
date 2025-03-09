import React from "react";
import { motion } from "framer-motion";
import "../styles/Stats.css";

const services = [
  { title: "BI Consulting", description: "Expert guidance for Power BI implementation." },
  { title: "Dashboard Development", description: "Create powerful, user-friendly dashboards." },
  { title: "Power BI Reporting", description: "Generate insightful reports for better decisions." },
  { title: "Power BI Migration", description: "Seamless migration to Power BI with minimal downtime." },
  { title: "Data Analytics", description: "Transform raw data into actionable insights." },
  { title: "Custom Visualizations", description: "Interactive and tailored data visual representations." }
];

const ServiceCard = () => {
  return (
    <section className="stats-section border-blue">
      {/* Animated Heading with Hover Effect */}
      <motion.div 
        className="text-center mb-2 mt-5 hover-effect"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          style={{ color: "white", display: "inline-block", position: "relative" }}
          whileHover={{ scale: 1.05 }}
        >
          Power BI Services
          {/* Animated Hover Line */}
          <motion.div
            className="hover-line"
            initial={{ width: "50px" }}
            whileHover={{ width: "120px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.h1>
      </motion.div>

      {/* Description */}
      <motion.p 
        className="text-center mb-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        style={{ color: "white" }}
      >
        We offer expert Power BI consulting and development services to help you make the most of your business analytics.
      </motion.p>

      {/* Service Cards */}
      <div className="stats-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="stat-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4 className="text-primary">{service.title}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
