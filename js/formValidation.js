const formElement = document.querySelector('#form');
const emailValue = document.querySelector('.email');
const errorMessage = document.querySelector('small');

formElement.addEventListener('submit', (e) => {
  if (emailValue.value === emailValue.value.toLowerCase()) {
    errorMessage.textContent = '';
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '*Write your email in lower case <br> * form invalid';
  }
});
