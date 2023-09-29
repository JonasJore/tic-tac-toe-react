export const winCondition = (board, player, onWin) => {
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