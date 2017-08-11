'use strict';

var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
};

var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

console.log(printBoard(board));

board[0].splice(1, 1, "1");
board[2].splice(3, 1, 'B');

console.log(printBoard(board));