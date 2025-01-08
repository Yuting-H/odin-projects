const gameboard = (() => {
  gameEnded = false;

  const board = [null, null, null, null, null, null, null, null, null];

  //marks a square with X or O
  const mark = (marker, index) => {
    if (!gameEnded) {
      if (board[index] == null) {
        board[index] = marker;
        if (checkWin(marker, index) == true) {
          gameEnded = true;
          console.log(marker + "Won");
        }
      }
    } else {
      console.log("Game ended, no moves can be made");
    }
  };

  //checks if a marker (X or O) won the game
  function checkWin(marker, index) {
    //checks rows
    if (index < 3) {
      if (board[0] == marker && board[1] == marker && board[2] == marker) {
        return true;
      }
    } else if (index < 6) {
      if (board[3] == marker && board[4] == marker && board[5] == marker) {
        return true;
      }
    } else if (index < 9) {
      if (board[6] == marker && board[7] == marker && board[8] == marker) {
        return true;
      }
    }

    //checks columns
    if (index / 3 < 1) {
      if (board[0] == marker && board[3] == marker && board[6] == marker) {
        return true;
      }
    } else if (index / 3 < 2) {
      if (board[1] == marker && board[4] == marker && board[7] == marker) {
        return true;
      }
    } else if (index / 3 < 3) {
      if (board[2] == marker && board[5] == marker && board[8] == marker) {
        return true;
      }
    }

    //checks diagonals
    //only check if on a diagonal square
    if (index % 2 == 0) {
      if (board[0] == marker && board[4] == marker && board[8] == marker) {
        return true;
      }

      if (board[2] == marker && board[4] == marker && board[6] == marker) {
        return true;
      }
    }

    return false;
  }

  return { mark };
})();

function Player(marker) {
  this.marker = marker;
}

p1 = new Player("X");
p2 = new Player("O");

gameboard.mark(p1.marker, 0);
gameboard.mark(p1.marker, 1);
gameboard.mark(p1.marker, 2);
