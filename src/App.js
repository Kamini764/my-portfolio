import React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './companants/home/Home';
import Skills from './companants/skills/Skills';
import Project from './companants/project/Project';
import Experience from './companants/experience/Experience';
import Contact from './companants/contact/Contact';
import Header from './companants/header/Header';
import Footer from './companants/footer/Footer';
import About from './companants/about/About';

export const App = () => {
  return (
  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="skills" element={<Skills/>} />
      <Route path="project" element={<Project/>} />
      <Route path="experience" element={<Experience/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}

export default App;




