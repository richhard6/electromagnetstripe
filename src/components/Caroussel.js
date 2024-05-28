// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

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
  let items = [electro,magnet,company];
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
            {item}
          </CarouselItem>
        ))}
      </InnerCarousel>
      <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button>
    </CarouselContainer>
  );
};

export default Carousel;