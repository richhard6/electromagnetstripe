// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './CarousselCard';
import NavigationButtons from './NavigationButtons';

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
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVHhfMmxs7jy3c73a5iw7lWy-7cmRTsSthug&s',
    },
    {
      valor: 'Misión',
      texto:
        'Desarrollar herramientas tecnológicas de vanguardia que simplifiquen el acceso a mercados globales, potencien la competitividad empresarial y promuevan la empleabilidad a nivel mundial.',
      imgUrl:
        'https://www.projectmanager.com/wp-content/uploads/2018/11/181112_Blog_Feature_Mission.jpg',
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
            <Card data={item}></Card>
          </CarouselItem>
        ))}
      </InnerCarousel>
      <NavigationButtons onPrevious={prevSlide} onNext={nextSlide} />
    </CarouselContainer>
  );
};

export default Carousel;
