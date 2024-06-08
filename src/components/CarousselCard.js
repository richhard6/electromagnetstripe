/* // Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 20px;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
  text-align: center;
`;

const Card = ({ imageUrl, data }) => (
  <CardContainer>
    <Image src={imageUrl} alt="Card image" />
    <h2>{data.valor}</h2>
    <Paragraph>{data.texto}</Paragraph>
  </CardContainer>
);

export default Card;
 */

// Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin-top: 15px;
  font-size: 20px;
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
  text-align: center;
`;

const Card = ({ data }) => (
  <CardContainer>
    <Image src={data.imgUrl} alt="Card image" />
    <Title>{data.valor}</Title>
    <Paragraph>{data.texto}</Paragraph>
  </CardContainer>
);

export default Card;
