import "../styles/Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const [openEmail, setOpenEmail] = useState(false);

  useEffect(() => {
    if (openEmail) {
      window.location.href =
        "mailto:billybotbyl81@yahoo.com?subject=Portfolio Inquiry&body=Hi William,%0D%0A%0D%0AI found your portfolio and wanted to reach out.";
    }
  }, [openEmail]);

  return (
    <section className="home">
      <div className="home-content">
        {/* ✨ NEW HERO TOP SECTION */}
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
              <h2>Contact Me</h2>

              <button
                className="contact-item"
                onClick={() => setOpenEmail(true)}
              >
                <span>📧</span>
                <p>billybotbyl81@yahoo.com</p>
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

// import "../styles/Home.css";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const [openEmail, setOpenEmail] = useState(false);

//   useEffect(() => {
//     if (openEmail) {
//       window.location.href =
//         "mailto:billybotbyl81@yahoo.com?subject=Portfolio Inquiry&body=Hi William,%0D%0A%0D%0AI found your portfolio and wanted to reach out.";
//     }
//   }, [openEmail]);

//   return (
//     <section className="home">
//       <div className="home-content">
//         <p className="tag">Full-Stack Software Engineer</p>

//         <h1>
//           Building scalable backend systems
//           <br />& modern UI experiences
//         </h1>

//         <p className="subtitle">
//           7+ years of experience developing production-grade applications,
//           designing APIs, and building responsive frontend interfaces with
//           modern frameworks.
//         </p>

//         <div className="buttons">
//           <button className="primary" onClick={() => navigate("/projects")}>
//             View Projects
//           </button>
//           <button
//             className="secondary"
//             onClick={() => setShowPopup(!showPopup)}
//           >
//             Contact Me
//           </button>
//         </div>
//         {showPopup && (
//           <div className="popup-overlay" onClick={() => setShowPopup(false)}>
//             <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
//               <h2>Contact Me</h2>

//               <button
//                 className="contact-item"
//                 onClick={() => setOpenEmail(true)}
//               >
//                 <span>📧</span>
//                 <p>billybotbyl81@yahoo.com</p>
//               </button>

//               <div className="contact-item-2">
//                 <span>📱</span>
//                 <p>(862) 977-1766</p>
//               </div>

//               <button className="close-btn" onClick={() => setShowPopup(false)}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="stats">
//           <div>
//             <h3>Backend</h3>
//             <p>APIs, Databases, System Design</p>
//           </div>

//           <div>
//             <h3>Frontend</h3>
//             <p>React, UI Systems, UX Design</p>
//           </div>

//           <div>
//             <h3>Architecture</h3>
//             <p>Scalable & Maintainable Systems</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
