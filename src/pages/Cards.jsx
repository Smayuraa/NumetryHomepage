import React from "react";
import '../styles/Cards.css';

const Card = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <h2 className="weoffer">We Offers</h2>
      <section className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <div className="card__background" style={{ backgroundImage: "url(https://i.pinimg.com/736x/04/a0/a7/04a0a77d64f3b28bb8cd4a2c2b61897b.jpg)" }}></div>
            <div className="card__content">
              <p className="card__category">Full Stack Development</p>
              <h3 className="card__heading">Custom Web & App Development</h3>
            </div>
          </a>
          
          <a className="card" href="#">
            <div className="card__background" style={{ backgroundImage: "url(https://i.pinimg.com/736x/a3/25/f0/a325f0ebea243b138f0b65e892526669.jpg)" }}></div>
            <div className="card__content">
              <p className="card__category">Other Technologies</p>
              <h3 className="card__heading">AI & Machine Learning Solutions</h3>
            </div>
          </a>
          
          <a className="card" href="#">
            <div className="card__background" style={{ backgroundImage: "url(https://i.pinimg.com/736x/7d/f2/0f/7df20fbfade0f68b0b428da6e2c463d0.jpg)" }}></div>
            <div className="card__content">
              <p className="card__category">Full Stack Development</p>
              <h3 className="card__heading">Cloud & DevOps Services</h3>
            </div>
          </a>

          <a className="card" href="#">
            <div className="card__background" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)" }}></div>
            <div className="card__content">
              <p className="card__category">Other Technologies</p>
              <h3 className="card__heading">Cybersecurity & Data Protection</h3>
            </div>
          </a>

    
        </div>
      </section>
    </>
  );
};

export default Card;
