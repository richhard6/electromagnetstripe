import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
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

const CompanyInfo = styled.div`
  font-size: 0.9em;

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
    margin-bottom: 10px;
  }
`;
 */
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

const Footer = () => (
  <FooterContainer>
    <CompanyInfo>
      &copy; 2024 Electromagnet Inc. Todos los derechos reservados.
    </CompanyInfo>

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
  </FooterContainer>
);

export default Footer;
