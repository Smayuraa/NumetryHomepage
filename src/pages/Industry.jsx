import React, { useState } from "react";
import Navbar from '../components/Navbar';
import "../Styles/Industry.css"; // Importing CSS file

const Industry = () => {
  const industries = [
    { name: "Agriculture", icon: "🚜" },
    { name: "Banking & Financial Services", icon: "🏦" },
    { name: "Blockchain Consulting and Development Services", icon: "₿" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Education", icon: "🎓" },
    { name: "Entertainment & Media", icon: "🎮" },
    { name: "Fintech", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Hi-Tech", icon: "💡" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Information Services and Publishing", icon: "📚" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Life Sciences", icon: "🔬" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Media", icon: "📰" },
    { name: "Retail", icon: "🏬" },
    { name: "Startups", icon: "🚀" },
    { name: "Telecom", icon: "📡" },
    { name: "Travel", icon: "✈️" },
    { name: "Utilities", icon: "⚡" }
  ];

  // Expertise data mapped to each industry
  const expertiseData = {
    Agriculture: [
      "Digital Supply Chain",
      "Commodity Trading and Risk Management",
      "Logistics",
      "Environment, Health and Safety",
      "Food Safety",
      "Farm Mechanization",
      "Precision Farming",
      "Field Force Management",
      "Sustainable Farming",
      "Livestock Management",
      "Warehouse Management"
    ],
    "Banking & Financial Services": [
      "Corporate Banking",
      "Payment Systems & Digital Wallets",
      "Investment Banking",
      "Custody & Fund Services",
      "Risk & Compliance",
      "Wealth & Asset Management",
      "Systems for Automated Trading",
      "ERP/EDI Integration",
      "Point-of-Sale Systems",
      "Tools for data analysis and reporting",
      "Solutions for Investment and Loan Management",
      "Integrations with third-parties",
      "Tools for Risk Management",
      "Security Improvements",
      "Enhancement of performance",
      "Customer Service Resources"
    ],
    "Blockchain Consulting and Development Services": [
      "Modular construction",
      "Agile product development",
      "Broad expertise",
      "Communication that works",
      "White-label strategy",
      "Ongoing assistance"
    ],
   "E-commerce": [
    "E-commerce Website Design",
    "Development of a Quick Shop",
    "E-commerce Module Development",
    "Complete Development",
    "E-commerce Quality Assurance & Screening",
    "Easy Store Administration",
    "Integration of ERP/CRM",
    "Mobile e-commerce Development",
    "Optimization for e-commerce",
    "Chatbots for Retail Development",
    "Retail Solutions Using AI",
    "Retail Apps Based on AR/VR",
    "Apps for Big Data Retail Analytics",
    "Based on IoT, retail software"
    ],
    Education: [
     " Admission Service Providers",
   "   Enrollment Management",
      "Learning Management and Online Assessment Systems",
     " Smart Campus Solution",
      "Specialized Services",
    "  Student Information System",
     " Technology Service Providers",
     " SmartEdu Solution",
    ],
    "Entertainment & Media": [
      "Integrated Platforms and Websites",
     " Systems for Content Management",
     " Streaming Multimedia Software",
      "Mobile Applications & Game",
      "Third-party Integrations",
      "Software for AR/VR",
      "Rights and Digital Asset Management Tools",
      "Software for video and music production",
      "Enhancement of System Performance",
    ],
    Fintech: [
     " Software Development for Accounting",
      "Portfolio Administration",
      "Financial Preparation Systems Software",
      "Solutions for Banking CRM Software",
      "Solutions for Billing & Payment",
     " Financial Management of Oneself",
    ],
    Healthcare: [
      "CRM for Patient Management",
     " Data Management for Patients",
     " Complete Development",
      "Mobile Healthcare solutions",
      "Tele health and Patient Engagement",
      "Internet of Things in Healthcare",
      "Medical Portals and Content Management Systems",
      "Healthcare software QA",
      "Healthcare software optimization",
     " Services for electronic prescriptions",
     " Practice Management Software for Veterinarians",
     " Software for Pharmacy Management Claims Management",
     " Financial Management Compliance with software for revenue cycle management (RCM)",
    ],
    "Hi-Tech":[
      "Comprehensive Product Management for Technology Enterprises",
      "Digital Transformation for Hi-Tech Enterprises",
      "Next-Generation M&A IT Integration",
     " Transforming Experiences",
     " Next-Generation Application Management for Hi-Tech Enterprises",
    ],
Hospitality:[
  "Hospitality and Travel Software Solutions",
  "Booking and Travel Portal Software",
  "Contract Management Fee / Commission Management for Vacation Rental Software",
  "Software for managing timeshares",

],
"Information Services and Publishing":[
  "Content Transformation",
  "Content Delivery",
  "Content Monetization",
  "Production",
  "Distribution",
  "Audience Engagement",
 " Content Management",
  "Knowledge Management",
  "Editorial Operations",
  "Sales and Marketing",
],
Insurance:[
  "Software for Document Management",
 " Creating Custom Insurance Policies with Software",
  "Using Software to Create Custom Insurance Policies",
],
"Life Sciences":[
  "ERP Services",
  "Application Portfolio Rationalization",
 " Internet of S Things",
"  Consulting & Package Implementation Services",
 " Application Development & Maintenance",
"  Intelligent RPA"
],
Manufacturing:[
  "Automotive",

  "Operate to Transform",
  "ERP solution",
 " Cloud Transformation",
 "Data Driven Organization",
  "IOT Driven digital Transformation",
  "Experience Transformation",
  "Engineering & Construction",

  "Planning Synchronizer",
 " AP CPM",
  "Execution Workbench & Mobility Applications",
  "Project Pay Chain",
 " Project Management Cockpit",

  "Industrial Manufacturing",

  "Smart Manufacturing",
  "Test Automation",
  "Master Data Management & Data Quality",
  "ERP Service",
  "Digital Services",
  "Sales & Marketing Automation",
 " After-Sales Service Management",
  "Configure, Price & Quote",
 " Digital Twins",
 " ERP",
  "Manufacturing Information Management",
  "IT for Major Capital Projects / M&A Activities",
  "IT for Operations/Physical Layer",
  "Digital Plant Operations"
],
Media:[
  "Solutions for Media and Entertainment in the Cloud",
 " Media and entertainment software powered by AI",
  "Software for Data Management and Analytics",
 " Media and entertainment software built on the blockchain"
],
Retail:[
  "In-store Transformation",
 " Supply Chain Visibility and Planning",
 " Commerce Transformation",
 " Unified Digital Operations"
],
Startups:[
  "Custom Web Development",
  "Custom Mobile App Development",
  "Custom Cloud Development",
  "Managed IT Support",
 " Market Research",
  "Additional Personnel",
  "Consulting",
  "Quality Assurance/Quality Control for Startups",
  "DevOps"
],
Telecom:[
  "Solutions for Telecom BI",
  "IoT and M2M Solutions",
  "Software for telecom in the cloud",
 " AI Telecom Solutions",
 " Blockchain Solutions for Telecom",
],
Travel:[
  "Hospitality and Travel Software Solutions",
  "Booking and Travel Portal Software",
  "Contract Management Fee / Commission Management for Vacation Rental Software",
  "Software for managing timeshares"
],
Utilities:[
  "PRODUCTION ASSET MANAGEMENT",
  "TRANSMISSION AND DISTRIBUTION NETWORK OPERATION",
  "ENERGY SUPPLY MANAGEMENT",
 " CORPORATE FUNCTIONS: SUPPLY CHAIN/ FINANCE & TAX",
  "CORE IT SERVICES",
  "CUSTOMER SERVICE"
]
  };

  // State to track which industry is hovered
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div className="container">
      <Navbar />
      <div className="industry-chart">
        
        {/* Industries Section */}
        <div className="industry-section">
          <h2 className="title">Industries We Serve</h2>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`industry-card ${selectedIndustry === industry.name ? "active" : ""}`}
                onClick={() => setSelectedIndustry(industry.name)} // Change data on click
              >
                <div className="industry-icon">{industry.icon}</div>
                <p className="industry-name">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h2 className="title">Our Expertise</h2>
          {selectedIndustry && expertiseData[selectedIndustry] ? (
            <ul className="expertise-list">
              {expertiseData[selectedIndustry].map((expertise, index) => (
                <li key={index} className="expertise-item">{expertise}</li>
              ))}
            </ul>
          ) : (
            <p className="expertise-placeholder">Click on an industry to see related expertise.</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default Industry;
