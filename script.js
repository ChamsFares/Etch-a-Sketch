const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid');
let currentColor = 'black'; 
let gridSize = 16;

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('grid-item');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = currentColor;
  });
  return square;
}

function createGrid(size) {
  gridContainer.innerHTML = ''; 
  gridSize = size; 
  const squareSize = Math.floor(960 / size);

  for (let i = 1; i <= gridSize ; i++) {
    for (let j = 1; j <= gridSize; j++) {
      const square = createSquare();
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      gridContainer.appendChild(square);
    }
  }
}

createGrid(gridSize); 

function getNewGridSize() {
  const newSize = prompt('Enter the number of squares per side (max 100):');
  if (newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(parseInt(newSize));
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

newGridButton.addEventListener('click', getNewGridSize);
