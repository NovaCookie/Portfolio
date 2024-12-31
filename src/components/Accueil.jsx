"use client"; 

import React, { useState, useEffect } from 'react';
import About from './contents/About';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import '../../public/styles/style.css';

export default function Accueil(props) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsAtBottom(scrollBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <About />
      <Skills />
      <Projects />

      <div
        className={`bonus-tag ${isAtBottom ? 'bonus-tag-at-bottom' : 'bonus-tag-not-at-bottom'}`}
        onClick={() => alert("Section Bonus à venir !")} 
      >
        Bonus
      </div>
    </div>
  );
}
