import React from "react";
import {Square} from '../App.styled';

interface SquareProps {
  onClick: () => void;
  value: string | number | null;
}

const SquareComponent: React.FC<SquareProps> = ({ onClick, value }) => {
  return (
    <Square data-testid="square" onClick={onClick}>
      {value}
    </Square>
  );
};

export default SquareComponent;