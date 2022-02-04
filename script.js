const container = document.getElementById('container');

//container size : 30remx30rem

let boardSize = 8;

for (let i = 0; i < boardSize ** 2; i++) {
    const element = document.createElement('div');

    element.textContent = i+1;
    element.style.fontSize = '7px';

    element.onmouseenter = () => element.style.background = 'whitesmoke';

    container.appendChild(element);
}

container.style.gridTemplateColumns = 'repeat(' + boardSize + ', 1fr)';
