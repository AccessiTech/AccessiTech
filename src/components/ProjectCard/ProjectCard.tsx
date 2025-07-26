import React from 'react';
import './ProjectCard.scss';
import { Project } from '../../store/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="project-card" aria-label={project.name}>
    <header>
      <a
        href={`https://github.com/${project.url}`}
        target="_blank"
        rel="noopener"
        aria-label={`GitHub repository: ${project.url}`}
      >
        <h3>{project.name}</h3>
      </a>
    </header>
    <p>{project.description}</p>
    <ul className="features-list">
      {project.features?.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
    <ul className="accessibility-list">
      {project.accessibility?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <div className="project-links">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener" aria-label="GitHub Repository">
          GitHub
        </a>
      )}
      {project.npmUrl && (
        <a href={project.npmUrl} target="_blank" rel="noopener" aria-label="npm Package">
          npm
        </a>
      )}
    </div>
    <div className="project-meta">
      {project.version && <span>v{project.version}</span>}
      {project.updated && <span>Updated: {project.updated}</span>}
      {project.license && <span>License: {project.license}</span>}
    </div>
    {project.badge && (
      <div className="project-badge-row">
        <span className="project-badge">{project.badge}</span>
      </div>
    )}
    {project.status && (
      <div
        className={`status-banner bg-${project.status}`}
        aria-label={`Status: ${project.status}`}
      >
        {project.status}
      </div>
    )}
  </article>
);

export default ProjectCard;
