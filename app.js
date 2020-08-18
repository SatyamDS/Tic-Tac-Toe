//HTML Elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//console.log(cellDivs);

//game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

//event handlers
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = 'X is next';
    winner = null;

    for(const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
    //console.log(e);
};

//functions

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner == 'x') {
        statusDiv.innerHTML = winner + ' is Winner!!!';
       // handleReset();
    } else {
        statusDiv.innerHTML = '<span> o is Winner!!! </span>';
       // handleReset();
    }

};


const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];

    console.log(topLeft,topMiddle,topRight,middleLeft,middleMiddle,middleRight,
            bottomLeft,bottomMiddle,bottomRight);

    //cgeck winner
    
    if(topLeft && topLeft == topMiddle && topLeft == topRight){
        //console.log(topLeft);
        //adding won class for changing the color of winner to red
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[1].classList.add('won');
            cellDivs[2].classList.add('won');
    } else if(middleLeft && middleLeft == middleMiddle && middleLeft ==
        middleRight) {
            handleWin(middleLeft);
            cellDivs[3].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[5].classList.add('won');
    } else if(bottomLeft && bottomLeft == bottomMiddle && bottomLeft ==
        bottomRight) {
            handleWin(bottomLeft);
            cellDivs[6].classList.add('won');
            cellDivs[7].classList.add('won');
            cellDivs[8].classList.add('won');
    } else if(topLeft && topLeft == middleLeft && topLeft == bottomLeft){
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[3].classList.add('won');
            cellDivs[6].classList.add('won');
    } else if(topMiddle && topMiddle == middleMiddle && topMiddle == bottomMiddle){
            handleWin(topMiddle);
            cellDivs[1].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[7].classList.add('won');
    } else if(topRight && topRight == middleRight && topRight == bottomRight){
            handleWin(topRight);
            cellDivs[2].classList.add('won');
            cellDivs[5].classList.add('won');
            cellDivs[8].classList.add('won');
    } else if(topLeft && topLeft == middleMiddle && topLeft == bottomRight){
            handleWin(topLeft);
            cellDivs[0].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[8].classList.add('won');
    } else if(topRight && topRight == middleMiddle && topRight == bottomLeft){
            handleWin(topRight);
            cellDivs[2].classList.add('won');
            cellDivs[4].classList.add('won');
            cellDivs[6].classList.add('won');
    } else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle
        && middleRight && bottomLeft && bottomMiddle && bottomRight){
            gameIsLive = false;
            statusDiv.innerHTML = 'Its TIE !!!';
    } else {
        xIsNext = !xIsNext;
        if(xIsNext) {
            statusDiv.innerHTML = 'X is Next';
        } else {
            statusDiv.innerHTML = '<span> o is next </span>';
        }
    }
};

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if(!gameIsLive || classList[2] == 'x' || classList[2] == 'o'){
        return;
    }

    if(xIsNext) {
        classList.add('x');
        checkGameStatus();

        //xIsNext = !xIsNext;
    }
    else{
        classList.add('o');
        checkGameStatus();

        //xIsNext = !xIsNext;
    }

    //console.log("location",location);
};
//event listeners
resetDiv.addEventListener('click',handleReset);

for(const cellDiv of cellDivs) {
    cellDiv.addEventListener('click',handleCellClick)
}