
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.getElementById('boxes'); 
function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box); 
    size += 10; 
  }

  boxesContainer.innerHTML = ''; 
  boxesContainer.append(...boxes); 
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = +document.querySelector('input[type="number"]').value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  document.querySelector('input[type="number"]').value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);