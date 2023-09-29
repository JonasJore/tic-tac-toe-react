import { useEffect, useState } from 'react'
import { drawCircle, drawCross } from './shapes'
import './App.css'

const winCondition = (board, player, onWin) => {
  if (
    // horizontal wins
    board[0][0] === player && board[0][1] === player && board[0][2] === player
    || board[1][0] === player && board[1][1] === player && board[1][2] === player
    || board[2][0] === player && board[2][1] === player && board[2][2] === player
    // vertical wins
    || board[0][0] === player && board[1][0] === player && board[2][0] === player
    || board[0][1] === player && board[1][1] === player && board[2][1] === player
    || board[0][2] === player && board[1][2] === player && board[2][2] === player
    // skråttover wins
    || board[0][0] === player && board[1][1] === player && board[2][2] === player
    || board[0][2] === player && board[1][1] === player && board[2][0] === player
  ) {
    onWin();
  }
}

function App() {
  return (
    <>
      <TicTacToeGame />
    </>
  )
}

const GameOverScreen = ({ winner }) => {
  useEffect(() => {
    winner === 'X' ? drawCross() : drawCircle();
  });

  return (
    <div className="gameOverScreen">
      <p>winner!</p>
      <canvas id="canvas"></canvas>
    </div>
  )
}

const TicTacToeGame = () => {
  let board = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => ''));

  const [boardGrid, setBoardGrid] = useState(board);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  let player = turn % 2 == 0 ? 'X' : 'O';

  const handleChange = (row, column, value) => {
    let boardCopy = [...boardGrid];
    boardCopy[row][column] = value;
    setBoardGrid(boardCopy);
    setTurn(turn + 1);
    winCondition(boardGrid, player, () => {
      setWinner(player);
      setGameOver(true);
    });
  }

  if (!gameOver) {
    return (
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
    )
  } else {
    return (<GameOverScreen winner={winner} />);
  }
}

export default App
