import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ onModuleSelect }) => {
  useEffect(() => {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
      const randomSize = Math.random() * 1.5 + 0.5; // Random size factor between 0.5 and 2
      const randomX = Math.random() * 100; // Random X position between 0 and 100
      const randomY = Math.random() * 100; // Random Y position between 0 and 100
      const randomDuration = Math.random() * 15 + 5; // Random duration between 5s and 20s

      bubble.style.setProperty("--size", `${randomSize}`);
      bubble.style.setProperty("--x-start", `${randomX}%`);
      bubble.style.setProperty("--y-start", `${randomY}%`);
      bubble.style.setProperty("--duration", `${randomDuration}s`);
    });
  }, []);

  return (
    <div className="home-container">
      {/* Bubbles in the background */}
      <div className="bubbles-container">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className="bubble"></div>
        ))}
      </div>

      {/* Title and Buttons */}
      <h1 className="title">Welcome to Communication Tracker</h1>
      <div className="button-group">
        <Link
          to="/user/dashboard"
          onClick={() => onModuleSelect("user")}
          className="button user"
        >
          User Dashboard
        </Link>
        <Link
          to="/admin/dashboard"
          onClick={() => onModuleSelect("admin")}
          className="button admin"
        >
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
