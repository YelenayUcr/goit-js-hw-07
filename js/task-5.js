function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
 
changeColorButton.addEventListener('click', function () {
    const randomColor = getRandomHexColor(); 
    document.body.style.backgroundColor  = randomColor;
    color.textContent = randomColor;
});
