const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";
function renderBoard() {
  const allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach((boxElement, i) => {
    if (board[i] === "X") {
      boxElement.innerHTML = '<img src="crossicon.png" height="40px"/>';
    } else if (board[i] === "O") {
      boxElement.innerHTML = '<img src="circleicon.png" height="40px"/>';
    } else {
      boxElement.innerHTML = " ";
    }
  });
}
renderBoard();

function selectBox(boxNum) {
  if (board[boxNum] !== -1) {
    alert("Invalid Move");
    return;
  }
  board[boxNum] = currentPlayer;

  renderBoard();

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  const currentPlayerElement = document.getElementById("currentPlayer");
  currentPlayerElement.innerText = currentPlayer;

  checkforWinner();
}

function resetGame() {
  // board.forEach((box, i)=>{
  //     board[i] = -1;
  // })
  board.fill(-1);
  renderBoard();

  currentPlayer = "X";
  const currentPlayerElement = document.getElementById("currentPlayer");
  currentPlayerElement.innerText = currentPlayer;

  const winnerMessage = document.getElementById("winnerMsg");
  winnerMessage.innerHTML = ""; 
}

function presentPlayer(places, player) {
  let result = true;
  places.forEach((place) => {
    if (board[place] != player) {
      result = false;
    }
  });
  return result;
}

function checkforWinner() {
  const winnerMessage = document.getElementById("winnerMsg");

  if (
    presentPlayer([0, 1, 2], "X") ||
    presentPlayer([3, 4, 5], "X") ||
    presentPlayer([6, 7, 8], "X") ||
    presentPlayer([0, 3, 6], "X") ||
    presentPlayer([1, 4, 7], "X") ||
    presentPlayer([2, 5, 8], "X") ||
    presentPlayer([0, 4, 8], "X") ||
    presentPlayer([2, 4, 6], "X")
  ) {
    winnerMessage.innerHTML = `<p>Player X Wins!</p>`;
  } else if (
    presentPlayer([0, 1, 2], "O") ||
    presentPlayer([3, 4, 5], "O") ||
    presentPlayer([6, 7, 8], "O") ||
    presentPlayer([0, 3, 6], "O") ||
    presentPlayer([1, 4, 7], "O") ||
    presentPlayer([2, 5, 8], "O") ||
    presentPlayer([0, 4, 8], "O") ||
    presentPlayer([2, 4, 6], "O")
  ) {
    winnerMessage.innerHTML = `<p>Player O Wins!</p>`;
  } else {
    winnerMessage.innerHTML = ""; // Clear the message if no winner yet
  }
}
