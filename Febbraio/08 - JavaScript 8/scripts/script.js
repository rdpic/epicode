document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const drawButton = document.getElementById('drawButton');
    const cells = [];
    const drawnNumbers = [];
  
    for (let i = 1; i <= 76; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;
        board.appendChild(cell);
        cells.push(cell);
    }
  
    function getRandomNumber() {
        let randomNumber;

        if (drawnNumbers.length === 76) {
            drawButton.disabled = true;
            return null;
        }
        
        do {
          randomNumber = Math.floor(Math.random() * 76) + 1;
        } while (drawnNumbers.includes(randomNumber));
        return randomNumber;
    }
  
    function highlightCell(number) {
        const index = number - 1;
        cells[index].classList.add('highlight');
    }
  
    drawButton.addEventListener('click', function() {
        const drawnNumber = getRandomNumber();
        drawnNumbers.push(drawnNumber);
        highlightCell(drawnNumber);
    });
})