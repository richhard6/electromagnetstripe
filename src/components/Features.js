/* import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>BizLink Global</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Mercado Global</h3>
          <p>Interfaz intuitiva y fácil de navegar.</p>
        </div>
        <div className="feature-item">
          <h3>Portal de licitaciones</h3>
          <p>Tus datos siempre están seguros con nosotros.</p>
        </div>
        <div className="feature-item">
          <h3>Directorio de recursos humanos</h3>
          <p>Estamos aquí para ayudarte en cualquier momento.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
 */

import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaGavel, FaUsers } from 'react-icons/fa'; // Importando los iconos

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 33%;
`;

const IconWrapper = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: center;
`;

const HighlightText = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding: 20px;
`;

const Features = () => {
  return (
    <Container>
      <Title>Bizlink Global</Title>
      <FeaturesContainer>
        <Feature>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <Description>
            <HighlightText>Mercado Global</HighlightText> Un espacio donde las
            empresas pueden vender y comprar productos y servicios a nivel
            internacional.
          </Description>
        </Feature>
        <Feature>
          <IconWrapper>
            <FaGavel />
          </IconWrapper>
          <Description>
            <HighlightText>Portal de Licitaciones</HighlightText> Empresas y
            profesionales pueden competir en concurso y licitaciones de manera
            transparente y estructurada.
          </Description>
        </Feature>
        <Feature>
          <IconWrapper>
            <FaUsers />
          </IconWrapper>
          <Description>
            <HighlightText> Directorio de R.H. </HighlightText> Un directorio
            para que las empresas contraten talento cualificado.
          </Description>
        </Feature>
      </FeaturesContainer>
    </Container>
  );
};

export default Features;
