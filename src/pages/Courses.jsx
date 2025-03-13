import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Courses.css";

// Import Images
import course8 from "../assets/Bootcamp.jpg";
import course6 from "../assets/cloud computing.jpg";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/CyberEssential.jpeg";
import course7 from "../assets/Testing.jpg";

// Course Data
const coursesData = [
    { img: course1, title: "Introduction to Computer Science" },
    { img: course2, title: "Data Science Principles" },
    { img: course3, title: "Leadership in the 21st Century" },
    { img: course4, title: "Artificial Intelligence Fundamentals" },
    { img: course5, title: "Cyber Security Essentials" },
    { img: course6, title: "Cloud Computing Basics" },
    { img: course7, title: "Web Development Bootcamp" },
    { img: course8, title: "Software Testing & QA" }
];

// ForwardRef ka use kiya gaya hai taaki ref accept ho sake
const Courses = forwardRef((props, ref) => {
    const navigate = useNavigate();

    const handleEnrollClick = () => {
        navigate("/enroll"); // EnrollForm page pe navigate karega
    };

    return (
        <section ref={ref} className="courses">
            <h2>Featured Courses</h2>
            <div className="course-grid">
                {coursesData.map((course, index) => (
                    <div key={index} className="course-card">
                        <img src={course.img} alt={course.title} />
                        <h3>{course.title}</h3>
                        <button className="enroll-button" onClick={handleEnrollClick}>
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Courses;
