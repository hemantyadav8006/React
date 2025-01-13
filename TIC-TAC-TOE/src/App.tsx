import Block from "./components/Block";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
      return false;
    }
    return null;
  };
  const handleBlockClick = (index: number) => {
    const StateCopy = Array.from(state);
    if (StateCopy[index] !== null) return;

    StateCopy[index] = currentTurn;
    setState(StateCopy);

    const win = checkWinner();
    if (win) {
      alert(`Player ${currentTurn} wins!`);
    }
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
    </>
  );
}

export default App;
