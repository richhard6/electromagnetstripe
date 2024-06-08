// ProductDescription.js
import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  padding: 30px;
  background-color: #f1f1f1;
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

const Subtitle = styled.h2`
  font-size: 22px;
  color: #555;
  text-align: center;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #000;
`;

const ProductDescription = () => {
  return (
    <DescriptionContainer>
      <Title>BizLink Global</Title>
      <Subtitle>La solución integral para la gestión empresarial</Subtitle>
      <Paragraph>
        Descripción del Producto: <Highlight>BizLink Global</Highlight> es una
        herramienta empresarial diseñada para{' '}
        <Highlight> facilitar el acceso</Highlight> a un mercado internacional
        de productos y servicios. Ofrece las siguientes funcionalidades:
      </Paragraph>
    </DescriptionContainer>
  );
};

export default ProductDescription;
