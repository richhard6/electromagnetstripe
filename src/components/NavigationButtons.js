// NavigationButtons.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  &::before {
    content: '←';
  }
`;

const NextButton = styled(Button)`
  &::before {
    content: '→';
  }
`;

//no entiendo

const NavigationButtons = ({ onPrevious, onNext }) => {
  return (
    <div>
      <PrevButton onClick={onPrevious} aria-label="Previous" />
      <NextButton onClick={onNext} aria-label="Next" />
    </div>
  );
};

export default NavigationButtons;
