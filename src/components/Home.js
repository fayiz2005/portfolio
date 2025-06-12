// Home.js
import React from "react";

function ProjectDemo({ title, videoUrl, projectLink, description }) {
  return (
    <div className="project-demo">
      <div className="video-and-text row">
        <div className="video-container roq col">
          <iframe
            src={videoUrl}
            title={`${title} demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-info col">
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="home-container">
      <h2 className="projects-title">My Projects</h2>

      <ProjectDemo
        title="Ecommerce Website"
        videoUrl="https://www.youtube.com/embed/YOUR_WEATHER_APP_VIDEO_ID"
        projectLink="https://essentialthreads-frontend.onrender.com/"
        description="A fully functioning e-commerce website built with React JS and Django as a practice project. It includes PayPal and credit card payment integration and is fully mobile responsive."
      />

      <ProjectDemo
        title="Portfolio Website"
        videoUrl="https://www.youtube.com/embed/YOUR_PORTFOLIO_VIDEO_ID"
        projectLink="https://yourportfolio.com"
        description="My personal portfolio built with React. Showcases my skills, projects, and background with a clean, responsive design."
      />
    </div>
  );
}
