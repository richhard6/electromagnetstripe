// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './CarousselCard';

const CarouselContainer = styled.div`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
`;

const InnerCarousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background-color: #555;
  }
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  items = [
    {
      valor: 'Visión',
      texto:
        'Ser la plataforma líder que conecta eficientemente mercados internacionales y talento profesional mediante soluciones tecnológicas avanzadas y centradas en la innovación.',
    },
    {
      valor: 'Misión',
      texto:
        'Desarrollar herramientas tecnológicas de vanguardia que simplifiquen el acceso a mercados globales, potencien la competitividad empresarial y promuevan la empleabilidad a nivel mundial.',
    },
  ];
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <CarouselContainer>
      <InnerCarousel currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Card
              imageUrl={
                'https://www.researchgate.net/publication/310733909/figure/fig1/AS:11431281153965942@1682607455870/Electromagnetic-fluid-coupling-simulation-model-of-contra-rotating-fan.tif'
              }
              data={item}
            ></Card>
          </CarouselItem>
        ))}
      </InnerCarousel>
      <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button>
    </CarouselContainer>
  );
};

export default Carousel;
