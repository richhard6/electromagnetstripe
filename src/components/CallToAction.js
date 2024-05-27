import React from 'react';
import styled from 'styled-components';

const CallToActionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f4f4f4;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 12px 25px;
  }
`;

const CallToAction = () => (
  <CallToActionContainer>
    <Title>
      Únete a Nosotros en la Innovación Tecnológica, Electromagnet Inc.
    </Title>
    <Description>
      Descubre cómo nuestras soluciones tecnológicas pueden transformar tu
      negocio. ¡No pierdas la oportunidad de ser parte del futuro!
    </Description>
    <Button href="#contact">
      <a href="https://buy.stripe.com/8wM3gebfZ5MP9uUdQQ">Compra la acción</a>
    </Button>
  </CallToActionContainer>
);

export default CallToAction;
