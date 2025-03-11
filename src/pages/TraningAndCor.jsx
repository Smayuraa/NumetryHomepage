import React, { useRef } from "react";
import "../Styles/TrainingAndCor.css";
import Courses from "../pages/Courses"; // Courses component import kiya

const TrainingAndCor=()=>{
    const coursesRef = useRef(null); // Courses section ka reference

    const handleScroll = () => {
        if (coursesRef.current) {
            coursesRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
        }
    };
return(
    <>
     <section className="hero">
                <h1>Welcome to Harvard Online</h1>
                <p>Explore our wide range of online courses and advance your career.</p>

                <h3 className="hero-subheading">Learn from the best instructors at your own pace.</h3>

                <ul className="hero-features">
                    <li>✅ 100+ Online Courses</li>
                    <li>✅ Industry Experts</li>
                    <li>✅ Flexible Learning</li>
                </ul>

                <button className="cta-button" onClick={handleScroll}>Browse Courses</button>
            </section>

            {/* Courses component ko reference pass kar rahe hain */}
            <Courses ref={coursesRef} />
    </>
)
}
export default TrainingAndCor