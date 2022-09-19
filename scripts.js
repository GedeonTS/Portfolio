/*   popup elements  */
const popupMenu = document.querySelector('.popup-menu');
const body = document.querySelector('body');
const headSection = document.querySelector('.headline-section');
const logo = document.querySelector('.logo');

const openPopup = document.querySelector('.humburger');
const closePopup = document.querySelector('.fa-remove');

const popupLinks = document.querySelectorAll('.popup-link');
const projectPopup = document.querySelector('.popup-overlay');
const headerSection = document.querySelector('header');

/*   popup events  */
const showPopup = () => {
  popupMenu.classList.remove('hide');
  popupMenu.classList.add('show');
  body.classList.add('overflow');
  headSection.classList.add('blur');
  openPopup.classList.add('hide');
  logo.classList.add('hide');
};

const hidePopup = () => {
  popupMenu.classList.add('hide');
  popupMenu.classList.remove('show');
  body.classList.remove('overflow');
  headSection.classList.remove('blur');
  openPopup.classList.remove('hide');
  logo.classList.remove('hide');
};

openPopup.addEventListener('click', () => {
  showPopup();
});

closePopup.addEventListener('click', () => {
  hidePopup();
});

popupLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hidePopup();
  });
});

// works section
const projects = [{
  imageMobile: './IMG/projects/recipeLight.png',
  imageDesktop: './IMG/projects/RecipeImage.png',
  projectTitle: 'Recipe App',
  stack: 'Full Stack Dev',
  year: '2022',
  demo: 'https://recipe-gedeonts.herokuapp.com/',
  source: 'https://github.com/GedeonTS/Recipe-app',
  description2: 'An app that keeps track of all your recipes, ingredients, and inventory. It also allows you to create a shopping list based on the recipes you want to cook.',
  description: 'An app that keeps track of all your recipes, ingredients, and inventory. It also allows you to create a shopping list based on the recipes you want to cook.',
  technologies: ['Ruby', 'Rails', 'PostgresSQL'],
}, {
  imageMobile: './IMG/projects/movie-website.png',
  imageDesktop: './IMG/projects/movie-website.png',
  projectTitle: 'Movie-website',
  stack: 'Front End Dev',
  year: '2022',
  demo: 'https://gedeonts.github.io/movie-website/',
  source: 'https://github.com/GedeonTS/movie-website',
  description2: 'A website which displays a list of movies and allows the user to leave a comment and like.',
  description: 'A website that displays a list of movies and allows the user to leave a comment and like.',
  technologies: ['javasCript', 'Html', 'css'],
}, {
  imageMobile: './IMG/projects/math-magician.png',
  imageDesktop: './IMG/projects/math-magician.png',
  projectTitle: 'Math magicians',
  stack: 'Front End Dev',
  year: '2022',
  demo: 'https://math-magician-gedeonts.netlify.app/',
  source: 'https://github.com/GedeonTS/math-magician',
  description2: 'math-magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote',
  description: 'math-magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote',
  technologies: ['javasCript', 'Html', 'css'],
}, {
  imageMobile: './IMG/projects/air.png',
  imageDesktop: './IMG/projects/air.png',
  projectTitle: 'Air quality',
  stack: 'Front End Dev',
  year: '2022',
  demo: 'https://air-quality-monitoring-a.netlify.app/',
  source: 'https://github.com/GedeonTS/air-quality-monitor-app',
  description: 'A single page mobile application(SPA) that provides air pollution data from European capitals,',
  description2: 'A single page mobile application(SPA) that provides air pollution data from European capitals, using the the air pollution API that provides the amount of CO,NH3,NO,NO2,O3 and most importantly the PM2_5,PM10,SO2.',
  technologies: ['javasCript', 'React', 'css'],
},
];

const workSection = document.querySelector('.works');
projects.forEach((project) => {
  workSection.innerHTML += `<article>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src="${project.imageDesktop}" class="card-image-desktop desktop-image">
<section class="side-section">
<h2 class="project-title">${project.projectTitle}</h2>
<ul class="project-highlights">
<li class="organisation">Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.stack}</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.year}</li>
</ul>
<p class="project-descritpion">${project.description}</p>
<ul class="stacks">
<li class="stack">${project.technologies[0]}</li>
<li class="stack">${project.technologies[1]}</li>
<li class="stack">${project.technologies[2]}</li>
</ul>
<button class="project-btn trigger">See project</button>
</section>
</article>`;

  // project popup section
  projectPopup.innerHTML += `<div class='popup-content hide'><div class="popup-header">
    <h2 class="project-title">${project.projectTitle}</h2>
   <div class="canel-icon-wrapper"><img class="cancel-icon" src="./ICONS/cancel-icon.png" alt="cancel-icon"></div>
    </div>
<ul class="project-highlights">
<li>Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.stack}</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.year}</li>
</ul>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src="${project.imageDesktop}" class="card-image-desktop desktop-popup-image">
<div class="project-content">
<div class="project-popup-descritpion">
<p class="project-descritpion">${project.description2}</p>
</div>
<div class="right-section">
<ul class="stacks">
<li class="stack">${project.technologies[0]}</li>
<li class="stack">${project.technologies[1]}</li>
<li class="stack">${project.technologies[2]}</li>
</ul>
<div class="project-popup-btns">
<a href="${project.demo}" class="project-btn popup-btn popup-btn1" target="_blank">See live <img src="./ICONS/live.png"></a>
<a href="${project.source}" class="project-btn popup-btn" target="_blank">See source<img src="./ICONS/github.png"></a>
</div>
</div>
</div>
</div>
`;
});

const seeProjectBtns = document.querySelectorAll('.trigger');
const popupContent = document.querySelectorAll('.popup-content');
const cancelIcon = document.querySelectorAll('.popup-header');
const sideSection = document.querySelectorAll('.side-section');
const desktopImageSection = document.querySelectorAll('.desktop-image');

seeProjectBtns.forEach((seeProjectBtn, i) => {
  const revealPopup = () => {
    projectPopup.classList.remove('hide');
    popupContent[i].classList.remove('hide');
    body.style = 'overflow-y: hidden';
    workSection.classList.add('blur');
    headerSection.classList.add('header-handle');
  };

  const coverPopup = () => {
    projectPopup.classList.add('hide');
    popupContent[i].classList.add('hide');
    body.style = 'overflow-y: scroll';
    workSection.classList.remove('blur');
    headerSection.classList.remove('header-handle');
  };
  seeProjectBtn.addEventListener('click', revealPopup);
  cancelIcon[i].addEventListener('click', coverPopup);
});

sideSection.forEach((section, i) => {
  if ((i + 1) % 2 === 0) {
    section.classList.add('order1');
    desktopImageSection[i].classList.add('order2');
  }
});

const formName = document.querySelector('.form-name');
const formNameValue = localStorage.getItem('formName');

if (formNameValue) {
  formName.value = formNameValue;
}

formName.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});

const formEmail = document.querySelector('.form-email');
const formEmailValue = localStorage.getItem('formEmail');

if (formEmailValue) {
  formEmail.value = formEmailValue;
}

formEmail.addEventListener('input', (e) => {
  localStorage.setItem('formEmail', e.target.value);
});

formName.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});

const formText = document.querySelector('.form-text');
const formTextValue = localStorage.getItem('formText');

if (formTextValue) {
  formText.value = formTextValue;
}

formText.addEventListener('input', (e) => {
  formText.style.color = '#000';
  localStorage.setItem('formText', e.target.value);
});

const AboutSection = document.querySelector('.about-second');
AboutSection.innerHTML = ` <div class="languages-topic list-item">
<h5>Languages</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div>
<ul class="languages contents hide">
<li>
  <img
    src="./IMG/Languages/js.png"
    alt="image"
    class="languages-item"
  />JavasScript
</li>
<li>
  <img
    src="./IMG/ruby.png"
    alt="image"
    class="languages-item"
  />Ruby
</li>
<li>
  <img src="./IMG/Languages/html.png" class="languages-item" 
  alt="image"/>HTML
</li>
<li>
  <img src="./IMG/Languages/js.png" class="languages-item" alt="image"/>CSS
</li>
</ul>
<div class="languages-topic list-item">
<h5>Frameworks</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div><ul class="languages contents hide">

<li>
  <img src="./IMG/rubyonrails.png" class="languages-item" alt="image"/>Ruby on Rails
</li>
<li>
  <img src="./IMG/express.png" class="languages-item" alt="image"/>Express
</li>
</ul>
<div class="languages-topic list-item">
<h5>Skills</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div>
<div class=" languages contents hide">
<div class="technical-skill">
 React,Redux, Ruby on Rails,postgresql
</div>
<div class="technical-skill">
 Effective Communication
</div>
<div class="technical-skill">
 Working in Teams
</div>
<div class="technical-skill">
  Problem Solving
</div>
<div class="technical-skill">
  Adaptability
</div>
<div class="technical-skill">
  Leadership
</div>
<div class="technical-skill">
  Creativity
</div>
</div>`;

const downArrows = document.querySelectorAll('.arrow-down');
const rightArrows = document.querySelectorAll('.arrow-right');
const contents = document.querySelectorAll('.contents');
const languagesTopic = document.querySelectorAll('.languages-topic');

languagesTopic.forEach((topic, i) => {
  topic.addEventListener('click', () => {
    if (downArrows[i].classList.contains('hide')) {
      downArrows.forEach((downArrow, i) => {
        if (!downArrow.classList.contains('hide')) {
          downArrow.classList.add('hide');
          languagesTopic[i].classList.add('list-item');
          contents[i].classList.add('hide');
          rightArrows[i].classList.remove('hide');
        }
      });
      downArrows[i].classList.remove('hide');
      rightArrows[i].classList.add('hide');
      topic.classList.remove('list-item');
      contents[i].classList.remove('hide');
    } else {
      downArrows[i].classList.add('hide');
      rightArrows[i].classList.remove('hide');
      topic.classList.add('list-item');
      contents[i].classList.add('hide');
    }
  });
});
