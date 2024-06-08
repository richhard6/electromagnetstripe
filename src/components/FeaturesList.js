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
    {
      name: 'Base de Datos Robusta:',
      feature:
        'Una extensa base de datos que incluye todas las categorías de bienes y servicios que un empresario pueda necesitar.',
    },
    {
      name: 'Portal de Licitaciones:',
      feature:
        'Una plataforma donde las empresas pueden competir por solventar problemas mediante contratos, mejorando la transparencia y eficiencia en la adjudicación de proyectos.',
    },
    {
      name: 'Directorio de Profesionales y Trabajadores:',
      feature:
        'Permite a las personas registrarse y obtener empleo, mientras que los empresarios pueden contratar a personas mediante un modelo premium.',
    },
  ];

  return (
    <div>
      <Title>Nuestro producto:</Title>
      <FeaturesContainer>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <FeatureTitle>{feature.name}</FeatureTitle> {feature.feature}
            </ListItem>
          ))}
        </List>
      </FeaturesContainer>
    </div>
  );
};

export default FeaturesList;
