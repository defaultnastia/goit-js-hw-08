const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const loginForm = event.target;
  const email = loginForm.elements.email.value;

  const password = loginForm.elements.password.value;
  if (email === '' || password === '') {
    window.alert('All form fields must be filled in');
    return;
  }

  const userCredentials = {};
  userCredentials.email = email.trim();
  userCredentials.password = password.trim();
  console.log(userCredentials);

  loginForm.reset();
}

formEl.addEventListener('submit', onFormSubmit);
