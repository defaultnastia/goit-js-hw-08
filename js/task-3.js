const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
function onUsernameInput(event) {
  nameOutputEl.textContent =
    event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value.trim()
      : 'Anonymous';
}
nameInputEl.addEventListener('input', onUsernameInput);
