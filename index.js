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
