import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.scss';
import Metadata from '../../components/Metadata/Metadata';
import { HeaderRow } from '../../components/Header/Header';
import { metadata as projectsMetadata } from './projects-meta';

import { useProjectEntriesArray, useProjectsLoading } from '../../store/projects';
import { useDispatch } from 'react-redux';
import { getProjects } from '../../store/projects';
import { AppDispatch } from '../../store/store';

const Projects: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const projects = useProjectEntriesArray({ type: filter });
  const loading = useProjectsLoading();
  const [view, setView] = useState<'card' | 'list'>('card');
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch, filter]);

  const filteredProjects = projects.filter((project: any) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <HeaderRow />
      <Row className="breadcrumb-row projects">
        <Col xs={12} sm={12} lg={12}>
          <Metadata {...projectsMetadata} />
          <header>
            <h1>Open Source Projects</h1>
            <p>
              Explore accessibility-focused open-source packages, tools, and scripts maintained by
              AccessiTech.
            </p>
          </header>
        </Col>
      </Row>
      <Row className="content-row">
        <main id="main" aria-label="Open Source Projects" className="projects-page">
          <Col xs={12} sm={12} lg={12}>
            <section className="projects-controls">
              <input
                type="search"
                aria-label="Search projects"
                placeholder="Search by name or keyword"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <select
                aria-label="Filter by type"
                value={filter}
                onChange={e => setFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="package">Packages</option>
                <option value="tool">Tools</option>
                <option value="script">Scripts</option>
              </select>
              <div className="view-toggle" style={{ marginLeft: '1rem' }}>
                <label htmlFor="view-toggle-select" style={{ marginRight: '0.5rem' }}>
                  View:
                </label>
                <select
                  id="view-toggle-select"
                  aria-label="Toggle project view"
                  value={view}
                  onChange={e => setView(e.target.value as 'card' | 'list')}
                >
                  <option value="card">Card</option>
                  <option value="list">List</option>
                </select>
              </div>
            </section>
            {loading ? (
              <div role="status" aria-live="polite">
                Loading projects...
              </div>
            ) : (
              <section className="projects-list" aria-label="Project list">
                {filteredProjects.length === 0 ? (
                  <p>No projects found.</p>
                ) : view === 'list' ? (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {filteredProjects.map((project: any) => (
                      <li key={project.name}>
                        <Row style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                          <Col xs={12} md={2} style={{ fontWeight: 'bold' }}>
                            {project.name}
                          </Col>
                          <Col xs={12} md={4}>
                            {project.description}
                          </Col>
                          <Col xs={6} md={2}>
                            <strong>Type:</strong> {project.type}
                          </Col>
                          <Col xs={6} md={1}>
                            <strong>Status:</strong> {project.status}
                          </Col>
                          <Col xs={6} md={1}>
                            <strong>Version:</strong> {project.version}
                          </Col>
                          <Col xs={6} md={2}>
                            <strong>License:</strong> {project.license}
                          </Col>
                        </Row>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Row className="projects-card-row g-4">
                    {filteredProjects.map((project: any) => (
                      <Col
                        key={project.name}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={3}
                        className="d-flex"
                      >
                        <ProjectCard project={project} />
                      </Col>
                    ))}
                  </Row>
                )}
              </section>
            )}
            <footer className="projects-footer">
              <p>
                Want to contribute?{' '}
                <a href="/contributing" aria-label="Contribution guidelines">
                  See how to get involved
                </a>
                .
              </p>
            </footer>
          </Col>
        </main>
      </Row>
    </>
  );
};

export default Projects;
