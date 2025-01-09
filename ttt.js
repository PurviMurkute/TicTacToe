const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";
function renderBoard(){
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach((boxElement, i)=>{
        if(board[i]==='X'){
            boxElement.innerHTML = '<img src="crossicon.png" height="40px"/>';
        }
        else if(board[i]==='O'){
            boxElement.innerHTML = '<img src="circleicon.png" height="40px"/>';
        }
        else{
            boxElement.innerHTML = ' ';
        }
    })
}
renderBoard();

function selectBox(boxNum){
    if(board[boxNum] !== -1){
        alert("Invalid Move");
        return;
    }
    board[boxNum] = currentPlayer;

    renderBoard();

    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;

    checkforWinner();
}

function resetGame(){
    // board.forEach((box, i)=>{
    //     board[i] = -1;
    // })
    board.fill(-1);
    renderBoard();

    currentPlayer = "X";
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}

function presentPlayer(places, player){
    let result = true;
    places.forEach((place)=>{
         if(board[place]!=player){
            result = false;
         }
    })
    return result;
}

function checkforWinner(){
    // winning positions:
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6]
    if(presentPlayer([0, 1, 2], "X")){
        alert("Player X Wins");
        
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([3, 4, 5], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([6, 7, 8], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([0, 3, 6], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([1, 4, 7], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([2, 5, 8], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([0, 4, 8], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }else if(presentPlayer([2, 4, 6], "X")){
        alert("Player X Wins");
        places.innerHTML = '<img src="greencross.png"/>';
    }
    if(presentPlayer([0, 1, 2], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([3, 4, 5], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([6, 7, 8], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([0, 3, 6], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([1, 4, 7], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([2, 5, 8], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([0, 4, 8], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }else if(presentPlayer([2, 4, 6], "O")){
        alert("Player O Wins");
        places.innerHTML = '<img src="greencircle.png"/>';
    }
}
