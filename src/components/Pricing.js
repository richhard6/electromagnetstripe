import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Precios</h2>
      <div className="pricing-plans">
        <div className="plan">
          <h3>Plan Básico</h3>
          <p>$9.99/mes</p>
          <ul>
            <li>Funcionalidad 1</li>
            <li>Funcionalidad 2</li>
          </ul>
          <a href="#" className="btn">
            Elegir Plan
          </a>
        </div>
        <div className="plan">
          <h3>Plan Pro</h3>
          <p>$19.99/mes</p>
          <ul>
            <li>Funcionalidad 1</li>
            <li>Funcionalidad 2</li>
            <li>Funcionalidad 3</li>
          </ul>
          <a href="#" className="btn">
            Elegir Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
