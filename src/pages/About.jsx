import "../styles/About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <p className="intro">
          I’m a software engineer with 7+ years of experience building scalable
          backend systems and modern frontend applications.
        </p>

        <p>
          I specialize in full-stack development, working across APIs,
          databases, and user interfaces. I enjoy designing systems that are
          efficient, maintainable, and built to scale.
        </p>

        <div className="skills">
          <div className="card">
            <h3>Backend</h3>
            <p>APIs, Node.js, Databases, System Design</p>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <p>React, UI Design, Responsive Layouts</p>
          </div>

          <div className="card">
            <h3>Architecture</h3>
            <p>Scalable systems, clean code, performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
