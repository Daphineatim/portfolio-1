const formElement = document.querySelector('#form');
const emailValue = document.querySelector('#email');
const errorMessage = document.querySelector('small');
const full_name = document.getElementById('full_name');
const message = document.getElementById('message')

formElement.addEventListener('submit', (e) => {
  if (emailValue.value === emailValue.value.toLowerCase()) {
    errorMessage.textContent = '';
    const allfields = {
      name: full_name.value,
      email: emailValue.value,
      contact_message: message.value
    }
    
    localStorage.setItem('contact_info', JSON.stringify(allfields));
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '*Write your email in lower case <br> * form invalid';
  }
});



window.onload = () => {
  const contact_info = localStorage.getItem('contact_info');   
  const parsejson = JSON.parse(contact_info)
  emailValue.value = parsejson.email ?  parsejson.email : '' ;
  full_name.value = parsejson.name ? parsejson.name: '';
  message.value = parsejson.contact_message ? parsejson.contact_message: '';
}

