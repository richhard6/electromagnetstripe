import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Electromagnet Company</h1>
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
        <h2>Bienvenido a Electromagnet Company</h2>
        <p>La mejor solución para gestionar tu negocio.</p>
        <button>
          <a href="https://buy.stripe.com/8wM3gebfZ5MP9uUdQQ" className="btn">
            Compra la acción
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
