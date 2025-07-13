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
      title="Property Website"
      videoUrl="https://www.youtube.com/watch?v=rzFqNJJPlVQ"
      projectLink="https://essentialthreads.netlify.app/"
      description="A fully functioning e-commerce website built with Next JS and Tailwind as a practice project."
    />

    <ProjectDemo
      title="Ecommerce Website"
      videoUrl="https://www.youtube.com/embed/P9HxIypxhyc"
      projectLink="https://essentialthreads.netlify.app/"
      description="A fully functioning e-commerce website built with React JS and Django as a practice project. It includes PayPal and credit card payment integration and is fully mobile responsive."
    />

    <ProjectDemo
      title="Portfolio Website"
      videoUrl="https://www.youtube.com/embed/kAZS0-XAdvU"
      projectLink="https://portfoliofayiz.netlify.app/"
      description="My personal portfolio built with React. Showcases my skills, projects, and background with a clean, responsive design."
    />

    <ProjectDemo
      title="Rock Paper Scissors game"
      videoUrl="https://www.youtube.com/embed/J0qImx_EUSM"
      projectLink="https://rpsgamefayiz.netlify.app/"
      description="This was the first project I ever made. It took a lot of effort believe it or not"
    />

    <ProjectDemo
      title="Tic Tac Toe"
      videoUrl="https://www.youtube.com/embed/qw0rJ6Yx2IM"
      projectLink="https://tic-tac-toe-fayiz.netlify.app/"
      description="This is that one game you played in 5th grade. I honestly had nostalgia while making this. This is the one thing I miss about middle school."
    />

    </div>
  );
}
