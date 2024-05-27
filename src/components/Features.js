import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Características</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Fácil de usar</h3>
          <p>Interfaz intuitiva y fácil de navegar.</p>
        </div>
        <div className="feature-item">
          <h3>Seguridad</h3>
          <p>Tus datos siempre están seguros con nosotros.</p>
        </div>
        <div className="feature-item">
          <h3>Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte en cualquier momento.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
