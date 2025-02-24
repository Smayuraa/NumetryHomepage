import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import '../styles/IndustryChart.css';

Chart.register(ArcElement, Tooltip, Legend);

const IndustryChart = () => {
  const data = {
    labels: [
      "Information Technology",
      "Media & Entertainment",
      "Retail",
      "Booking & Finance",
      "Oil & Finance",
      "Education",
      "Telecom",
      "Real Estate",
      "Healthcare & Pharma",
      "Manufacturing",
    ],
    datasets: [
      {
        data: [20.6, 14, 12.1, 11.2, 11.2, 6.5, 5.6, 4.7, 4.7, 1.9],
        backgroundColor: [
          "#0B2545", "#382A4F", "#6A497F", "#DA7297", "#FFC3A0",
          "#FFB4A2", "#AC6C82", "#33415C", "#397097", "#5EC5D9"
        ],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2 className="heading">Our Industrial Experience</h2>
        <Doughnut data={data} />
      </div>
      <br />
      <div className="right-section">
        <div className="content-box">
          <h3>Our Strengths</h3>
          <p>
            We are a one-stop solution for all requirements, from specification, 
            architecture design, UXD, coding, testing, validation to product maintenance 
            and support. We handle everything seamlessly.
          </p>
        </div>
        <div className="content-box">
          <h3>Personal Approach</h3>
          <p>
            We thoroughly examine each customer’s case. Based on the project requirement, 
            we employ a dedicated team of business analysts to analyze and understand 
            clients’ specific objectives and needs.
          </p>
        </div>
        <div className="content-box">
          <h3>Exceptional Quality</h3>
          <p>
            Each project at NUMETRY Soft is under the supervision of a dedicated quality 
            assurance team that monitors all project activities and results at each 
            development phase.
          </p>
        </div>
        <div className="content-box">
          <h3>Complete Transparency</h3>
          <p>
            Depending on precise requirements, our professionals take clients through 
            each phase of solution development, providing sound advice on technology 
            and application design options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryChart;
