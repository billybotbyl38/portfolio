import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m4beyd7",
        "template_7cej8zr",
        form.current,
        "GLpV7W2DQ7SWQtBtg",
      )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send message");
      });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* LEFT SIDE (unchanged) */}
        <div className="contact-left">
          <p className="tag">Contact</p>

          <h1>
            Let’s build
            <br />
            something great.
          </h1>

          <p className="contact-text">
            I’m always interested in new opportunities, software engineering
            roles, freelance work, and ambitious projects.
          </p>

          <div className="contact-info">
            <div className="info-card">
              <span>📧</span>
              <div>
                <h3>Email</h3>
                <p>billybotbyl81@yahoo.com</p>
              </div>
            </div>

            <div className="info-card">
              <span>📱</span>
              <div>
                <h3>Phone</h3>
                <p>(862) 977-1766</p>
              </div>
            </div>

            <div className="info-card">
              <span>💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/billy-botbyl-853613220/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  Click to see my LinkedIn account
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (NOW FUNCTIONAL FORM) */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-card">
            <h2>Send me a Message</h2>

            <input name="name" type="text" placeholder="Your Name" />
            <input name="email" type="email" placeholder="Your Email" />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
