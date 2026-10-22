// Variables

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

// Form Validation

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value.trim();
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

  if (!emailRegExp.test(emailValue)) {
    event.preventDefault();
    errorMessage.textContent = 'Please provide a valid email address';
    errorMessage.classList.add('error-message-show');
    emailInput.classList.add('input-error');
  }

  if (emailValue == '') {
    event.preventDefault();
    errorMessage.textContent =
      'Whoops! It looks like you forgot to add your email';
    errorMessage.classList.add('error-message-show');
    emailInput.classList.add('input-error');
  }
});
