import React, { useState } from "react";
import { Row, LabelText, RestartButton } from "./App.styled";

import { calculateWinner } from "./utils/utils";
import SquareComponent from "./components/SquareComponent";

const App: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [isFirstPlayer, setIsFirstPlayer] = useState<boolean>(true);

  const winnerDecided = calculateWinner(squares);
  const status = winnerDecided
    ? `And the winner is ${winnerDecided}!`
    : `Next player: Player ${isFirstPlayer ? 1 : 2}`;

  const handleClick = (i: number): void => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const updatedSquares = [...squares];
    updatedSquares[i] = isFirstPlayer ? "X" : "O";
    setSquares(updatedSquares);
    setIsFirstPlayer(!isFirstPlayer);
  };

  const handleReset = (): void => {
    setIsFirstPlayer(true);
    setSquares(Array(9).fill(null));
  };

  const renderSquare = (i: number, testId?: string): JSX.Element => {
    return (
      <SquareComponent value={squares[i]} onClick={() => handleClick(i)} />
    );
  };

  return (
    <>
      <LabelText>{status}</LabelText>
      <Row>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Row>
      <Row>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Row>
      <Row>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Row>
      <RestartButton onClick={handleReset}>Restart</RestartButton>
    </>
  );
};

export default App;
