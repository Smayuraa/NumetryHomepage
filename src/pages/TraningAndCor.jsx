import React, { useRef } from "react";
import "../Styles/TrainingAndCor.css";
import Courses from "../pages/Courses"; // Importing Courses component

const TrainingAndCor = () => {
    const coursesRef = useRef(null); // Reference for the Courses section

    const handleScroll = () => {
        if (coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to Courses section
        }
    };

    return (
        <>
            <section className="hero">
                <h1>Enhance Your Skills with Industry-Leading Training</h1>
                <p>Your trusted partner in IT training and professional career development.</p>

                <h3 className="hero-subheading">
                    Master industry-relevant skills with guidance from seasoned professionals.
                </h3>

                <ul className="hero-features">
                    <li>✅ Comprehensive, hands-on IT training programs</li>
                    <li>✅ Career support, including placement assistance and mentorship</li>
                    <li>✅ Expert-led courses available in both online and offline formats</li>
                </ul>

                <button className="cta-button" onClick={handleScroll}>Discover Our Courses</button>
            </section>

            {/* Passing reference to the Courses component */}
            <Courses ref={coursesRef} />
        </>
    );
};

export default TrainingAndCor;
