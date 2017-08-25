class Game {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._board = new Board(numberOfRows,numberOfColumns,numberOfBombs)
  }

  playMove(rowIndex,columnIndex){
  this._board.flipTile(rowIndex,columnIndex);
  if (this._board.playerBoard[rowIndex][columnIndex] === 'B'){
    console.log('Game Over!');
    this._board.print();
  } else if (this._board.playerBoard !== this._board.playerBoard.hasSafeTiles()){
    console.log('You won!')
} else {
 console.log('Current Board:');
 this._board.print();
};
};
};




class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns
    this._playerBoard = Board.generatePlayerBoard(numberOfColumns, numberOfRows);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs);

    }
    get playerBoard(){
      return this._playerBoard
    };


  flipTile(rowIndex,columnIndex){
      if (this._playerBoard[rowIndex][columnIndex] !== ' '){
      return;
    }
    if (this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(rowIndex,columnIndex);
    }
    this._numberOfTiles--;
    };



   getNumberOfNeighborBombs(rowIndex, columnIndex) {
      const neighborsOffsets = [[-1,-1],[-1,0],[1,1],[1,0],[-1,1],[1,-1],[0,1],[0,-1]];
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._ombBoard[0].length;
      let numberOfBombs = 0;

      neighborsOffsets.forEach(offset =>{
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
      if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
      numberOfBombs++;
      }
    }
      });
      return numberOfBombs;
    };


    hasSafeTiles(){
      return this._numberOfTiles !== this._numberOfBombs;
    }


    print(board){console.log(board.map(row => row.join(' | ')).join('\n'));
    };


    static generatePlayerBoard(numberOfRows, numberOfColumns){
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




    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
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


};


const g = new Game(3,3,3);
g.playMove(0,0);







//let playerBoard = generatePlayerBoard(5,5);
//let bombBoard = generateBombBoard(5,5,13);

//console.log('Player Board:');
//printBoard(playerBoard);
//console.log('Bomb Board:');
//printBoard(bombBoard);
//flipTile(1,4);
//console.log('Updated Player Board:');
//printBoard(playerBoard);
