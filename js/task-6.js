function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDivEl = document.querySelector('#controls');
const numberInputEl = controlsDivEl.querySelector('input[type="number"]');
const createBtnEl = controlsDivEl.querySelector('button[data-create]');
const destroyBtnEl = controlsDivEl.querySelector('button[data-destroy]');

const boxesDivEl = document.querySelector('#boxes');

function createDivs(amount) {
  const divsArray = [];
  for (let i = 0; i < amount; i++) {
    const divSize = `${30 + i * 10}px`;
    const divEl = document.createElement('div');
    divEl.style.width = divSize;
    divEl.style.height = divSize;
    divEl.style.backgroundColor = getRandomHexColor();

    divsArray.push(divEl);
  }
  boxesDivEl.append(...divsArray);
}

function onCreateBtnClick() {
  boxesDivEl.innerHTML = '';

  const arrayLength = +numberInputEl.value;
  if (arrayLength <= 0 || arrayLength > 100) {
    return;
  }

  createDivs(arrayLength);
  numberInputEl.value = '';
}

function onDestroyBtnClick(event) {
  boxesDivEl.innerHTML = '';
  numberInputEl.value = '';
}

createBtnEl.addEventListener('click', onCreateBtnClick);

destroyBtnEl.addEventListener('click', onDestroyBtnClick);
