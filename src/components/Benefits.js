// Benefits.js
import React from 'react';
import styled from 'styled-components';

const BenefitsContainer = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 12px;
  max-width: 1200px;
  margin: 30px auto;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
`;

const BenefitsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BenefitCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const Benefits = () => {
  return (
    <BenefitsContainer>
      <MainTitle>Beneficios para los usuarios</MainTitle>
      <BenefitsGrid>
        <BenefitCard>
          <Image src="https://via.placeholder.com/400x200" alt="Empresas" />
          <Title>Empresas</Title>
          <Paragraph>
            {/*           BizLink Global proporciona a las empresas herramientas avanzadas para
          gestionar sus operaciones de manera eficiente, aumentar la
          productividad y reducir los costos operativos mediante la
          automatización y la integración con múltiples plataformas. */}
            Acceso a una amplia base de proveedores y oportunidades de
            licitaciones, optimizando la cadena de suministro y reduciendo
            costos.
          </Paragraph>
        </BenefitCard>
        <BenefitCard>
          <Image
            src="https://via.placeholder.com/400x200"
            alt="Profesionales"
          />
          <Title>Profesionales</Title>
          <Paragraph>
            Oportunidades laborales en el mercado internacional, mejorando la
            visibilidad y conectividad con potenciales empleadores.
          </Paragraph>
        </BenefitCard>
      </BenefitsGrid>
    </BenefitsContainer>
  );
};

export default Benefits;
