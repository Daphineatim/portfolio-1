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

const cards = [
  {
    key: 1,
    name: 'Tonic',
    option: ['CANOPY', 'Back End Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './assets/tonic.svg',
    desktopImage: './assets/tonic.svg',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://daphineatim.github.io/portfolio-1',
    linktosource: 'https://github.com/Daphineatim/portfolio-1',
  },
  {
    key: 2,
    name: 'Multi-post Stories',
    option: ['FACEBOOK', 'Back End Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './assets/multi-post.svg.svg',
    desktopImage: './assets/multi-post.svg.svg',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://daphineatim.github.io/portfolio-1',
    linktosource: 'https://github.com/Daphineatim/portfolio-1',
  },
  {
    key: 3,
    name: 'FACEBOOK 360',
    option: ['FACEBOOK', 'Full Stack Dev', '2015'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: './assets/facebook.svg',
    desktopImage: './assets/facebook.svg',
    technologies: ['html', 'css', 'javascript', 'ruby'],
    linktoliveversion: 'https://daphineatim.github.io/portfolio-1',
    linktosource: 'https://github.com/Daphineatim/portfolio-1',
  },
  {
    key: 4,
    name: 'Uber Navigation',
    option: ['Uber', 'Lead Developer', '2018'],
    optionMobile: ['CANOPY', 'Back End Dev', '2015'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './assets/uber.svg',
    desktopImage: './assets/uber.svg',
    technologies: ['html', 'css', 'javascript', 'git hub', 'ruby', 'Bootstrap'],
    linktoliveversion: 'https://daphineatim.github.io/portfolio-1',
    linktosource: 'https://github.com/Daphineatim/portfolio-1',
  },
];

const gridContainer = document.querySelector('.works-card-list');
const modalContainer = document.querySelector('.modal');
const wrapperContainer = document.querySelector('.wrapper-container');
const windowContent = cards.map((element) => ` <li class="works-card first-card">
          <div><img
            src="${element.featuredImage}"
            alt="tonic project"
          /></div>
          <div class="works-card-text">
            <h2 class="works-card-title">${element.name}</h2>
            <div class="works-card-sub">
              <p class="sub-1">CANOPY</p>
              <ul class="works-card-sub-list">
                <li class="works-card-sub-link">Backend Dev</li>
                <li class="works-card-sub-link">2015</li>
              </ul>
            </div>
            <p class="works-card-desc">
              ${element.description}
            </p>
            <div class="works-card-topics-list">
              <p class="works-card-topic">html</p>
              <p class="works-card-topic">css</p>
              <p class="works-card-topic">javascript</p>
            </div>
            <div class="works-card-btn">
              <button type="button" id ="showmodal"  class="btn">See Project</button>
            </div>
          </div>
        </li>`).join('');

gridContainer.innerHTML += windowContent;

// modal pop up window

const modalWindow = `
<div class = "content-container"> 

<button class="cancels" id = "cancelbtn" type="button">&times;</button>
  <div class="modal-inner">
    <h2>Tonic</h2>
    <ul>
      <li>Canopy</li>
      <li>Back End Dev</li>
      <li>2015</li>
    </ul>
    <img src="./assets/tonic.svg" alt>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit assumenda ad totam et explicabo. Voluptate, veritatis! Eum labore sint exercitationem libero qui deserunt aliquam eveniet! Iusto optio aperiam quisquam quia.</p>
    <ul class="color_ul">
      <li>html</li>
    <li>css</li>
    <li>javascript</li>
    </ul>
   <button class="button-btn">See live</button>
   <button class="button-btn">See Source</button>
  </div></div>`;

// modalContainer.appendChild(template.content);
modalContainer.innerHTML += modalWindow;

// show modal function
document.getElementById('cancelbtn').onclick = () => {
  modalContainer.style.display = 'none';
  wrapperContainer.classList.remove('active');
};

document.getElementById('showmodal').onclick = () => {
  modalContainer.style.display = 'block';
  wrapperContainer.classList.add('active');
};
