const menu = document.querySelector('.menu-icon');
const humberger = document.querySelector('#humberger');
const cancel = document.querySelector('.cancel');

humberger.addEventListener('click', () => {
  menu.style.display = 'block';
  humberger.style.display = 'none';
  cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
  menu.style.display = 'none';
  cancel.style.display = 'none';
  humberger.style.display = 'block';
});
