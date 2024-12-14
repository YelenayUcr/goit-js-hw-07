function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttons = document.querySelectorAll('button[type="button"]');
buttons[1].addEventListener('click', () =>{
    const amount = +document.querySelector('input[type="number"]').value;
    if (amount >= 1 && amount <= 100) {
        const boxes = document.getElementById('boxes');
        boxes.innerHTML = '';
        for (let i = 0; i < amount; i++){
            const box = document.createElement('div');
            box.style.width = `${30 + i * 10}px`;
            box.style.height = `${30 + i * 10}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxes.appendChild(box);
        }
    }
    document.querySelector('input[type="number"]').value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
    document.getElementById('boxes').innerHTML = ''; 
    
}); 