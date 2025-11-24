import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const images = [
  "/image/download.webp",
  "/image/OIP.jpeg",
  "/image/OIP1.webp",
  "/image/save1.webp"
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-slider" style={{ backgroundImage: `url(${images[index]})` }}>
      <div className="overlay"></div>

      <div className="content">
        <h1>Smart Financial Planning</h1>
        <p>Make informed decisions with AI-powered insights</p>

        <div className="buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}

