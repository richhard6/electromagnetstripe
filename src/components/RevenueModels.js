// RevenueModels.js
import React from 'react';
import styled from 'styled-components';

const ModelsContainer = styled.div`
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Model = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const ModelTitle = styled.h2`
  font-size: 22px;
  color: #555;
  margin-bottom: 10px;
`;

const ModelDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const RevenueModels = () => {
  return (
    <ModelsContainer>
      <Title>Modelos de Ingresos</Title>
      <Model>
        <ModelTitle>Venta de suscripciones</ModelTitle>
        <ModelDescription>
          Se planea alcanzar 1.000 usuarios registrados en las primeras dos
          semanas, con un costo de 110€ por suscripción. Además, se ofrece un
          10% de comisión para referidos.
        </ModelDescription>
      </Model>
      <Model>
        <ModelTitle>Freemium y publicidad</ModelTitle>
        <ModelDescription>
          Los usuarios freemium pueden publicar sus CV y ofertas de empleo. El
          beneficio generado por estas cuentas será a través de publicidad.
        </ModelDescription>
      </Model>
    </ModelsContainer>
  );
};

export default RevenueModels;
