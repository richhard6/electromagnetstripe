import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">SoftwareProduct</h1>
        <ul className="nav-links">
          <li>
            <a href="#features">Características</a>
          </li>
          <li>
            <a href="#pricing">Precios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h2>Bienvenido a SoftwareProduct</h2>
        <p>La mejor solución para gestionar tu negocio.</p>
        <a href="#contact" className="btn">
          Contáctanos
        </a>
      </div>
    </header>
  );
};

export default Header;
