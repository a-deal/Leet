/*

Given a MxN matrix, find the total number of possible paths from top-left to
bottom-right element, you can go rightwards and downwards only.
Now, assume some of the entries in the matrix are blocked, find the number of such paths.
For example: For a 3X3 matrix, total number of paths in first case is 6!/3!3! = 20.
For second case, if we block entry (2,2), we have only 2 paths available.

*/

"use strict";

function initializePaths(board) {
  var firstRow = board[0]
  for (var i = 0; i < board.length; i++)
    for (var j = 0; j < board[i].length; j++)
      if (board[i][j] === 1) board[i][j] = 'x';
  for (i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === 'x') break;
    firstRow[i] = 1;
  }
  for (i = 0; i < board.length; i++) {
    if (board[i][0] === 'x') break;
    board[i][0] = 1;
  }
}

function uniquePathsWithObstacles (board) {
  initializePaths(board);
  for (var i = 1; i < board.length; i++) {
    for (var j = 1; j < board[i].length; j++) {
      if ((board[i - 1][j] === 'x' && board[i][j - 1] === 'x') || board[i][j] === 'x') continue;
      if (board[i - 1][j] === 'x') {
        board[i][j] = board[i][j - 1];
      } else if (board[i][j - 1] === 'x') {
        board[i][j] = board[i - 1][j];
      } else {
        board[i][j] = board[i - 1][j] + board[i][j - 1];
      }
    }
  }
  return board[board.length - 1][board[0].length - 1] === 'x' ? 0 : board[board.length - 1][board[0].length - 1];
}

let tests = [
              [
                [1],
                [0]
              ],
              [
                [0,1,0,0],
                [0,0,0,0],
                [0,0,0,0]
              ],
              [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
              ],
              [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0]
              ]
            ]

tests.forEach((test) => {
  console.log(uniquePathsWithObstacles(test));
})
