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
        row.push(" ");
      }
      board.push(row);
     }
     let numberOfBombsPlaced = 0;

     while(numberOfBombsPlaced < numberOfBombs) {
     let randomRowIndex = Math.floor(Math.random() * numberOfRows);
     let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

     if (board[randomRowIndex][randomColumnIndex] !== 'B'){
       board[randomRowIndex][randomColumnIndex] = 'B';
       numberOfBombsPlaced++;
     }
     }
     return board;
    };

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborsOffsets = [[-1,-1],[-1,0],[1,1],[1,0],[-1,1],[1,-1],[0,1],[0,-1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset =>{
  const neighborRowIndex = rowIndex += offset[0];
  if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnsIndex >= 0 && neighborColumnsIndex < numberOfColumns)
  if(bombBoard[neighborRowIndex]['B'] == 'B'){
  numberOfBombs++;
  }
  });
  return numberOfBombs;
};

const flipTile = (playerBoard,bombBoard,rowIndex,columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' '){
  console.log('This tile has already been flipped!');
  return;
} else if (bombBoard[rowIndex][columnIndex] === 'B'){

}
}


const printBoard =  (board) => {console.log(board.map(row => row.join(' | ')).join('\n'))
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(5,5,5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
