// document.querySelectorAll('.mobile-humberger').forEach(menu => {
//     menu.addEventListener('click', (event) =>  {
//     menu.classList.toggle('open')
// })
// })

//Create veriable that contains DOM elements(1.hamburger button-2.cross button) list items to show up
// container(mobile menu class)
const humberger = document.getElementById('mobile-humberger');
const close = document.getElementById('close');
const menuList = document.getElementById('nav-menu');
const menuItems = document.querySelectorAll('nav-list'); // output ==> array
const navbarContainer = document.getElementById('navbar flex');
//humburger.clickevent ===> display container block
//cross.clickevent ===> display container none
//<li> clickevent ===> display container none</li>
function openNavBar () {
    navbarContainer.style.display='block';
}
function closeNavBar (){
  navbarContainer.style.display='none';
}
humberger.addEventListener('click',openNavBar);
close.addEventListener('click',closeNavBar);
//for each item element display none
//for each element of the list item add a clik event listener that makes container display none
//exp:
// array1.forEach(element => console.log(element));
// // expected output: "a"
// // expected output: "b"
// // expected output: "c"
menuItems.forEach((element) =>{
 element.addEventListener('click',closeNavBar)
});

