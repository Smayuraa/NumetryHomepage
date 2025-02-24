import React, { useState, useEffect } from "react";
import "../styles/Stats.css";

const Stats = () => {
  const [count, setCount] = useState({ a: 0, b: 0, c: 0, d: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        a: Math.min(prev.a + 1, 94),
        b: Math.min(prev.b + 1, 98),
        c: Math.min(prev.c + 1, 92),
        d: Math.min(prev.d + 1, 97),
      }));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <h2>We Deliver Real Value to Businesses</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>{count.a}%</h3>
          <p>Clients recommend us</p>
        </div>
        <div className="stat-card">
          <h3>{count.b}%</h3>
          <p>Exceptional quality delivered</p>
        </div>
        <div className="stat-card">
          <h3>{count.c}%</h3>
          <p>Clients report added value</p>
        </div>
        <div className="stat-card">
          <h3>{count.d}%</h3>
          <p>Meeting customer needs</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
