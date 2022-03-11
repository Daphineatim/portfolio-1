// const humberger = document.querySelector('.humberger');
// const cancel = document.querySelector('#cancel');
// const navigation = document.querySelector('.menu-icon');
// const portfolio = document.querySelector('.menu-link');
// const about = document.querySelector('.menu-link');
// const contact = document.querySelector('.menu-link');

// humberger.addEventListener('click', (e) => {
//   e.preventDefault();
//   navigation.classList.toggle('show');
//   humberger.classList.add('hide');
//   cancel.classList.remove('hide');
//   portfolio.classList.add('menu-link');
//   about.classList.add('menu-link');
//   contact.classList.add('menu-link');
// });

// cancel.addEventListener('click', () => {
//   humberger.classList.remove('hide');
//   navigation.classList.remove('show');
// });

// portfolio.addEventListener('click', (e) => {
//   e.stopPropagation();

//   navigation.classList.remove('show');
//   humberger.classList.remove('hide');
// });

// about.addEventListener('click', (e) => {
//   e.stopPropagation();

//   navigation.classList.remove('show');
//   humberger.classList.remove('hide');
// });

// contact.addEventListener('click', (e) => {
//   e.stopPropagation();

//   navigation.classList.remove('show');
//   humberger.classList.remove('hide');
// });

const menu = document.querySelector('.menu-icon');
const humberger = document.querySelector('#humberger');
// const sideBar = document.querySelector('.sidebar')
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
