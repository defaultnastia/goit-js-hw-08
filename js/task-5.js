function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = bodyEl.querySelector('.change-color');
const colorOutputTextEl = bodyEl.querySelector('.color');

function onChangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;

  colorOutputTextEl.textContent = randomColor;
}

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);
