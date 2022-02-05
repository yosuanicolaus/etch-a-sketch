const container = document.getElementById('container');
let boardSize = 16;

function fillBoard() {
    container.style.gridTemplateColumns = 'repeat(' + boardSize + ', 1fr)';
    for (let i = 0; i < boardSize ** 2; i++) {
        const element = document.createElement('div');
    
        // element.textContent = i+1;
        // element.style.fontSize = '7px';
    
        element.onmouseenter = () => element.style.background = 'whitesmoke';
    
        container.appendChild(element);
    }
}

function clearBoard() {
    // console.log("clearing the board!!!");
    for (let i = 0; i < boardSize ** 2; i++) {
        container.removeChild(container.firstChild);
    }
}

function resetBoard() {
    clearBoard();
    fillBoard();
}

function setNewSize() {
    let newSize = prompt('set new size for the board (max: 100)');
    if (newSize > 100) {
        newSize = 100;
    }
    clearBoard();
    boardSize = newSize;
    fillBoard();
}

fillBoard();

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', resetBoard);

const btnBoardSize = document.getElementById('btnBoardSize');
btnBoardSize.addEventListener('click', setNewSize);

