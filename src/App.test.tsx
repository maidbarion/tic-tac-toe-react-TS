import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders status correctly', () => {
    render(<App />);
    const statusElement = screen.getByText(/Next player: Player 1/i);
    expect(statusElement).toBeInTheDocument();
  });

  it('renders restart button', () => {
    render(<App />);
    const restartButton = screen.getByText(/Restart/i);
    expect(restartButton).toBeInTheDocument();
  });

  it('renders squares and handles clicks', () => {
    render(<App />);
    const square0 = screen.getAllByTestId('square')[0];
    fireEvent.click(square0);
    expect(square0.textContent).toBe('X');
  });

  it('displays winner when game is won', () => {
    render(<App />);

    const squares = screen.getAllByTestId('square');

    fireEvent.click(squares[0]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[2]);

    const winnerStatus = screen.getByText(/And the winner is/i);
    expect(winnerStatus).toBeInTheDocument();
  });

  it('resets the game when restart button is clicked', () => {
    render(<App />);

    const squares = screen.getAllByTestId('square');

    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);

    const restartButton = screen.getByText(/Restart/i);
    fireEvent.click(restartButton);

    squares.forEach(square => expect(square.textContent).toBe(''));
  });
});