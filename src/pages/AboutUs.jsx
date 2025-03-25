import React from "react";
import "./styling/AboutUs.css"; // Add styles for a better design

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Project</h1>
        <p>Empowering mental well-being through technology</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our project is dedicated to providing students with a **safe space**
            to express their thoughts, track their mental health, and receive
            recommendations. We aim to bridge the gap between mental health
            awareness and technology.
          </p>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li>📊 **Daily Mental Health Check-ins**</li>
            <li>💡 **Personalized Recommendations**</li>
            <li>💬 **AI-Powered Chat Support**</li>
            <li>📈 **Mood & Wellness Tracking**</li>
            <li>🔍 **Community & Support Resources**</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Mental Health Matters</h2>
          <p>
            Mental health plays a crucial role in our overall well-being.
            Students often face **stress, anxiety, and pressure**, making it
            essential to have **accessible tools** for mental wellness.
          </p>
        </section>

        <section className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            We are a team of passionate developers and mental health advocates
            working to build a **user-friendly, engaging, and impactful**
            solution.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
