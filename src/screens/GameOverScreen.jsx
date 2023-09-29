import { useEffect } from "react";
import { drawCircle, drawCross } from "./shapes";

export const GameOverScreen = ({ winner, playAgain }) => {
  useEffect(() => {
    winner === 'X' ? drawCross() : drawCircle();
  });

  return (
    <div className="gameOverScreen">
      <p>🎉 Winner! 🎉</p>
      <canvas id="canvas"></canvas>
      <button onClick={() => playAgain()}>PLAY AGAIN?</button>
    </div>
  )
}