'use client';
import React, { useEffect, useState } from 'react';
import SkillCard from './Cards/SkillCard';

export default function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/data/skills.json')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error("Erreur lors du chargement des données : ", error));
    }, []);

    return (
        <div id="skills">
            <div className="container mt-5">
                <h2 className="text-center mb-3">Mes compétences</h2>
                <div className="row d-flex align-items-stretch">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            image={skill.image}
                            alt={skill.alt}
                            title={skill.title}
                            text={skill.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
