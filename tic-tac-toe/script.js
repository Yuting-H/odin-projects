let boardElem = document.getElementById("board");

const gameboard = (() => {
  gameEnded = false;

  let board = [null, null, null, null, null, null, null, null, null];

  function resetGame() {
    board = [null, null, null, null, null, null, null, null, null];

    gameEnded = false;
    players.reset();
    boardDom.refreshBoardDom();
  }

  //marks a square with X or O
  function mark(marker, index) {
    if (!gameEnded) {
      if (board[index] == null) {
        //marks the tile
        board[index] = marker;
        boardElem.childNodes[index].innerHTML = marker;

        if (checkWin(marker, index) == true) {
          gameEnded = true;
          console.log(marker + " Won");
        }

        if (fullBoard()) {
          gameEnded = true;
        }
      }
    } else {
      console.log("Game ended, no moves can be made");
    }
  }

  //checks if the board is full or not
  function fullBoard() {
    board.forEach((element) => {
      if (element == null) {
        return true;
      }
    });
    return false;
  }

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

    //checks columns, only check the columns where the last move was played
    if (index % 3 < 1) {
      if (board[0] == marker && board[3] == marker && board[6] == marker) {
        return true;
      }
    } else if (index % 3 < 2) {
      if (board[1] == marker && board[4] == marker && board[7] == marker) {
        return true;
      }
    } else if (index % 3 < 3) {
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

  return { mark, resetGame };
})();

const players = (() => {
  this.mark = "O";

  function reset() {
    mark = "O";
  }

  //switch up marks whenever it is called
  function getMark() {
    if (mark == "O") {
      mark = "X";
    } else if (mark == "X") {
      mark = "O";
    }
    return mark;
  }

  return { getMark, reset };
})();

//Variable containing board dom model
const boardDom = (() => {
  function refreshBoardDom() {
    boardElem.innerHTML = "";
    for (let index = 0; index < 9; index++) {
      boardElem.appendChild(createTile(index));
    }
  }

  function createTile(index) {
    var tile = document.createElement("div");
    tile.classList.add("tile");

    //when clicked, update board model
    tile.addEventListener("click", () => {
      gameboard.mark(players.getMark(), index);
    });
    return tile;
  }
  return { refreshBoardDom };
})();

boardDom.refreshBoardDom();
