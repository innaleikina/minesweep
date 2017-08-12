const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
let board = [];

for(let numberOfRowsIndex=0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
  let row =[];
    for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for(let numberOfRowsIndex=0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
    let row =[];
      for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++) {
        row.push(null);
      }
      board.push(row);
     }
    return board;
    };

    let numberOfBombsPlaced = 0;

    while(numberOfBombsPlaced < numberOfBombs) {
    

    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
};

const printBoard = console.log(board.map(row => row.join(' | ')).join('/n')) => {
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(5,5,5);

console.log('Player Board: ' + printBoard(playerBoard));
console.log('Bomb Board: ' + printBoard(bombBoard));
