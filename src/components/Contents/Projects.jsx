'use client';
import React, { useEffect, useState } from 'react';
import ProjectsCard from './Cards/ProjectsCard';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Erreur lors du chargement des données : ", error));
    }, []);
    return (
        <div id="projects">
            <div className="container mt-5">
                <h2 className="text-center mb-3">Mes projets</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectsCard
                            key={index}
                            image={project.image}
                            alt={project.alt}
                            title={project.title}
                            text={project.text}
                            githubLink={project.githubLink}
                            aperçusLink={project.aperçusLink}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

