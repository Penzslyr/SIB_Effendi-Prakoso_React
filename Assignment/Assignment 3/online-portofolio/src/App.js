import './App.css';
import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Interest from './pages/Interest';
import Skill from './pages/Skill';
import { Link } from "react-scroll";
import Skills from './pages/Skills';

function App() {
  
  return (
    <>
    <Sidebar/>
    <div className="main">
    {/* <Home/> */}
    <About/>
    <Experience/>
    {/* <Skills
          sharedSkills={data.skills}
          resumeBasicInfo={data.basic_info}
        />
    <Skill/> */}
    <Skill/>
    <Interest/>
    <Awards/>
    
    
    </div>
    </>
  );
}

export default App;
