import React from "react";
import "../styles/MeetTheTeam.css"; // Import CSS

const teamMembers = [
  { name: "Amit Verma", role: "CEO", image: "/assets/emptyimg.png" },
  { name: "Sneha Kapoor", role: "CTO", image: "/assets/emptyimg.png" },
  { name: "Rohan Deshmukh", role: "VP, Engineering", image: "/assets/emptyimg.png" },
  { name: "Priya Mehta", role: "VP, Product Management", image: "/assets/emptyimg.png" },
  { name: "Karan Malhotra", role: "VP, Sales & Marketing", image: "/assets/emptyimg.png" },
]

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team-container">
      <h2 className="meet-the-team-title">Meet the Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
