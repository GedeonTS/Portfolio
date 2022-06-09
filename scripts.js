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
  imageMobile: './IMG/projects/Leaderboard.png',
  imageDesktop: './IMG/projects/Leaderboard.png',
  projectTitle: 'Leaderboard',
  stack: 'Front End Dev',
  year: '2022',
  demo: 'https://gedeonts.github.io/Leaderboard_App/',
  source: 'https://github.com/GedeonTS/Leaderboard_App',
  description2: 'A website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to an external API service',
  description: 'A website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to an external API service',
  technologies: ['javasCript', 'Html', 'css'],
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
}];

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
