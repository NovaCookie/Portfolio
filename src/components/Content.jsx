import React from 'react';
import About from './Contents/About';
import Skills from './Contents/Skills';
import Projects from './Contents/Projects';

export default function Content(props) {
    return (
        <div>
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

