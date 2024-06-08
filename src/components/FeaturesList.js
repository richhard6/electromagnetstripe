// FeaturesList.js
import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  font-size: 18px;
  color: #555;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const FeatureTitle = styled.span`
  font-weight: bold;
  color: #000;
`;

const FeaturesList = () => {
  const features = [
    'Integración con múltiples plataformas',
    'Automatización de procesos de negocio',
    'Análisis avanzado y reportes en tiempo real',
    'Seguridad y cumplimiento de estándares internacionales',
    'Interfaz de usuario intuitiva y personalizable',
  ];

  return (
    <div>
      <Title>Nuestro producto: BizLink Global</Title>
      <FeaturesContainer>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <FeatureTitle>Característica {index + 1}:</FeatureTitle> {feature}
            </ListItem>
          ))}
        </List>
      </FeaturesContainer>
    </div>
  );
};

export default FeaturesList;
