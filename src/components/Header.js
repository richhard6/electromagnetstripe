import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const electroMagnetLogo = './Electrom.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

/* const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`; */

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #fff;
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>
      <img src={electroMagnetLogo} alt="Electromagnet Logo" />
      Electromagnet Inc.
    </Logo>

    <SocialIcons>
      <a href="https://facebook.com">
        <FaFacebook />
      </a>
      <a href="https://twitter.com">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com">
        <FaLinkedin />
      </a>
    </SocialIcons>
  </HeaderContainer>
);

export default Header;

/* <header className="header">
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
        <button className="btn">
          <a href="https://buy.stripe.com/8wM3gebfZ5MP9uUdQQ">
            Compra la acción
          </a>
        </button>
      </div>
    </header> */
