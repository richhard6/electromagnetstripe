// Description.js
import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  padding: 30px;
  background-color: #d3d3d3;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
  text-align: center;
`;

const HighlightText = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding: 20px;
`;

const Description = () => {
  return (
    <DescriptionContainer>
      <HighlightText>
        BizLink Global se posiciona como una solución integral que conecta
        empresas y profesionales en un ecosistema digital, impulsando la
        competitividad y el crecimiento económico a nivel global.
      </HighlightText>
    </DescriptionContainer>
  );
};

export default Description;
