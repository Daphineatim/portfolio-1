const humberger = document.querySelector('#humberger');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const wrapper = document.querySelector('.wrapper');

humberger.addEventListener('click', () => {
  sideBar.classList.add('active');
  wrapper.classList.add('show');
});

cancel.addEventListener('click', () => {
  sideBar.classList.remove('active');
  wrapper.classList.remove('show');
});

document.querySelectorAll('.menu-link').forEach((link) => link.addEventListener('click', () => {
  sideBar.classList.remove('active');
  wrapper.classList.remove('show');
}));

// preserve data
const formContainer = document.querySelector('.contact_container');
const emailValue = document.querySelector('.email');
const messageError = document.querySelector('.errorMessage');

formContainer.addEventListener('submit', (e) => {
  if (emailValue.value === emailValue.value.toLowerCase()) {
    messageError.textContent = '';
    const formData = {
      name: document.querySelector('name').value,
      email: document.querySelector('email').value,
      message: document.querySelector('message').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  } else {
    e.preventDefault();
    messageError.innerHTML = '*Write your email in lower case <br> * form invalid';
  }
});

if (formContainer) {
  const { name, email, message } = JSON.parse(localStorage.getItem('formData'));
  document.querySelector('name').value = name;
  document.querySelector('email').value = email;
  document.querySelector('message').value = message;
}
