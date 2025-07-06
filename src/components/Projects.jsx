import React from "react";

const Projects = () => {
  const projectList = [
    { title: "Zara Fashion Web App", tech: "Laravel, PHP, Bootstrap, JS" },
    { title: "Tripora Travel App", tech: "ReactJS, Laravel API, TailwindCSS" },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{project.title}</h3>
          <p><strong>Tech:</strong> {project.tech}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
