import { useState } from "react";
import "../Styles/EnrollmentForm.css"; // Importing CSS file
import formImg from '../assets/courseformImg.png'

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Successful!");
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        {/* Left Image Section */}
        <div className="image-container">
          <img src={formImg} alt="Enroll Now" />
        </div>

        {/* Right Form Section */}
        <div className="form-container">
          <h2>Enroll Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Select Course</label>
              <select name="course" required onChange={handleChange}>
                <option value="">Choose a course</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="AI & ML">AI & ML</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Any special requests?"
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
