import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Full-Stack CPQ Platform",
      description:
        "Designed and developed a configurable CPQ platform used to streamline customer quoting workflows, backend pricing systems, and real-time quote generation.",
      tech: ["React", "Node.js", "Express", "SQL"],
    },

    {
      title: "Modern Portfolio & UI System",
      description:
        "Built a responsive portfolio with animated UI components, reusable frontend architecture, interactive modals, and optimized mobile performance.",
      tech: ["React", "Vite", "CSS3", "UI/UX"],
    },

    {
      title: "Backend Architecture Demo",
      description:
        "Created a scalable backend architecture showcasing API routing, authentication flows, modular services, and database relationships.",
      tech: ["Node.js", "PostgreSQL", "JWT", "REST APIs"],
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <p className="tag">Projects</p>

        <h1>Featured Work</h1>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
