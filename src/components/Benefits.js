// Benefits.js
import React from 'react';
import styled from 'styled-components';

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f0f4f8;
`;

const BenefitCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  flex: 1 1 300px;
  max-width: 400px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const Benefits = () => {
  return (
    <BenefitsContainer>
      <BenefitCard>
        <Image src="https://via.placeholder.com/400x200" alt="Empresas" />
        <Title>Empresas</Title>
        <Paragraph>
          {/*           BizLink Global proporciona a las empresas herramientas avanzadas para
          gestionar sus operaciones de manera eficiente, aumentar la
          productividad y reducir los costos operativos mediante la
          automatización y la integración con múltiples plataformas. */}
          Acceso a una amplia base de proveedores y oportunidades de
          licitaciones, optimizando la cadena de suministro y reduciendo costos.
        </Paragraph>
      </BenefitCard>
      <BenefitCard>
        <Image src="https://via.placeholder.com/400x200" alt="Profesionales" />
        <Title>Profesionales</Title>
        <Paragraph>
          Oportunidades laborales en el mercado internacional, mejorando la
          visibilidad y conectividad con potenciales empleadores.
        </Paragraph>
      </BenefitCard>
    </BenefitsContainer>
  );
};

export default Benefits;
