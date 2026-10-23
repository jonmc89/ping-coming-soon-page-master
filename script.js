// Variables

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

// Form Validation

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    errorMessage.textContent =
      'Whoops! It looks like you forgot to add your email';
  } else if (!emailRegExp.test(emailValue)) {
    errorMessage.textContent = 'Please provide a valid email address';
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.remove('error-message-show');
    emailInput.classList.remove('input-error');

    return;
  }

  errorMessage.classList.add('error-message-show');
  emailInput.classList.add('input-error');
});
