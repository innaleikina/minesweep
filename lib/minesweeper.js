'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];

  for (var numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++) {
    var row = [];
    for (var numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(1, 4));