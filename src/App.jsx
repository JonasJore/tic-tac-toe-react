import { useState } from 'react';
import { INITIAL_GRID } from './const';
import { GameOverScreen } from './screens/GameOverScreen';
import { winCondition } from './engine/wincondition';

import './App.css'

function App() {
  return (
    <>
      <TicTacToeGame />
    </>
  )
}

const TicTacToeGame = () => {
  const [boardGrid, setBoardGrid] = useState(INITIAL_GRID);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  let player = turn % 2 == 0 ? 'X' : 'O';

  const handleChange = (row, column, value) => {
    let boardCopy = [...boardGrid];
    if (boardCopy[row][column] === '') {
      boardCopy[row][column] = value;
      setBoardGrid(boardCopy);
      setTurn(turn + 1);
      winCondition(boardGrid, player, () => {
        setWinner(player);
        setGameOver(true);
      });
    }
  }

  if (!gameOver) {
    return (
      <div className="gameScreen">
        <div className="board">
          {boardGrid.map((item, indexY) =>
            item.map((cell, indexX) =>
              <div
                className='boardCell'
                onClick={() => handleChange(indexY, indexX, player)}
                key={indexX}
              >
                <p>{cell}</p>
              </div>
            ))
          }
        </div>
        <div className="infoScreen">
          <div>
            <p>It is {player}'s turn to play</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <GameOverScreen winner={winner} playAgain={() => {
        setBoardGrid(INITIAL_GRID);
        setGameOver(false);
        setWinner(null);
        setTurn(0);
      }} />
    );
  }
}

export default App
