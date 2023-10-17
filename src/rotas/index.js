import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sistema" element={<Sistema />} />
        </Routes>
      </Router>
    );
  }
  
  function Home() {
    return (
      <div className="home-btn">
        <div>Home</div>
      </div>
    );
  }
  
  function About() {
    return (
    <div className="about-btn">   
      <div>Sobre</div>
    </div>
    ); 
  }

  function Cadastro() {
    return (
    <div className="cadastro-btn">   
      <div>Cadastro</div>
    </div>
    ); 
  }

  function Sistema() {
    return (
    <div className="sistem-btn">   
      <div>Sistema</div>
    </div>
    ); 
  }

export default Rotas; 