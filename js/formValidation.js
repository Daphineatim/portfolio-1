const formElement = document.querySelector('#form');
const emailValue = document.querySelector('#email');
const errorMessage = document.querySelector('small');
const fullName = document.getElementById('full_name');
const message = document.getElementById('message');

formElement.addEventListener('submit', (e) => {
  if (emailValue.value === emailValue.value.toLowerCase()) {
    errorMessage.textContent = '';
    const allfields = {
      name: fullName.value,
      email: emailValue.value,
      contact_message: message.value,
    };
    localStorage.setItem('contact_info', JSON.stringify(allfields));
  } else {
    e.preventDefault();
    errorMessage.innerHTML = '*Write your email in lower case <br> * form invalid';
  }
});

window.onload = () => {
  const contactInfo = localStorage.getItem('contact_info');
  const parsejson = JSON.parse(contactInfo);
  emailValue.value = parsejson.email ? parsejson.email : '';
  fullName.value = parsejson.name ? parsejson.name : '';
  message.value = parsejson.contact_message ? parsejson.contact_message : '';
};
