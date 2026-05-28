import "../styles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-content">
        {/* ✨ HERO TOP SECTION */}
        <div className="hero-glow">
          <div className="glow-orb" />
          <div className="code-line">
            <span>const</span> engineer = {"{"} fullStack: true, scalable: true{" "}
            {"}"};
          </div>
        </div>

        <p className="tag">Full-Stack Software Engineer</p>

        <h1>
          Building scalable backend systems
          <br />& modern UI experiences
        </h1>

        <p className="subtitle">
          7+ years of experience developing production-grade applications,
          designing APIs, and building responsive frontend interfaces with
          modern frameworks.
        </p>

        <div className="buttons">
          <button className="primary" onClick={() => navigate("/projects")}>
            View Projects
          </button>

          <button
            className="secondary"
            onClick={() => setShowPopup(!showPopup)}
          >
            Contact Me
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
              <h2 className="contactMePopup">Contact Me</h2>

              {/* EMAIL → NAVIGATES TO CONTACT PAGE */}
              <button
                className="contact-item"
                onClick={() => {
                  setShowPopup(false);
                  navigate("/contact");
                }}
              >
                <span>📧</span>
                <span id="emailPopup">billybotbyl81@yahoo.com</span>
              </button>

              <div className="contact-item-2">
                <span>📱</span>
                <p>(862) 977-1766</p>
              </div>

              <button className="close-btn" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <div className="stats">
          <div>
            <h3>Backend</h3>
            <p>APIs, Databases, System Design</p>
          </div>

          <div>
            <h3>Frontend</h3>
            <p>React, UI Systems, UX Design</p>
          </div>

          <div>
            <h3>Architecture</h3>
            <p>Scalable & Maintainable Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
