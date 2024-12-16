function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxes = document.getElementById('boxes');
    boxes.innerHTML = ''; 

    let html = ''; 

    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }

    boxes.innerHTML = html; 
}

document.querySelector('[data-create]').addEventListener('click', () => {
    const amount = +document.querySelector('input[type="number"]').value;
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
    }
    document.querySelector('input[type="number"]').value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
    document.getElementById('boxes').innerHTML = ''; 
});