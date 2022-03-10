const menu = document.querySelector('.menu-icon');
const humberger =document.querySelector('#humberger');
const cancel = document.querySelector('.cancel');

humberger.addEventListener('click',  (event) => {
  console.log(menu.classList)
  menu.classList.remove('menu-toggle');
  cancel.classList.remove('hide');
   humberger.classList.add('hide');
});

cancel.addEventListener('click', e => {
  menu.classList.add('hide');
  // cancel.classList.add("hide")
  // humberger.classList.add("display");
})