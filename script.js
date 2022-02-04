const container = document.getElementById('container');
let boardSize = 8;
container.style.gridTemplateColumns = 'repeat(' + boardSize + ', 1fr)';

function fillBoard() {
    for (let i = 0; i < boardSize ** 2; i++) {
        const element = document.createElement('div');
    
        element.textContent = i+1;
        element.style.fontSize = '7px';
    
        element.onmouseenter = () => element.style.background = 'whitesmoke';
    
        container.appendChild(element);
    }
}

function clearBoard() {
    console.log("clearing the board!!!");
    for (let i = 0; i < boardSize ** 2; i++) {
        container.removeChild(container.firstChild);
    }
    fillBoard();
}

fillBoard();

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clearBoard);
