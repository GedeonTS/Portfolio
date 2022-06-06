/*   popup elements  */
const popupMenu = document.querySelector('.popup-menu');
const body = document.querySelector('body');
const headSection = document.querySelector('.headline-section');
const logo = document.querySelector('.logo');

const openPopup = document.querySelector('.humburger');
const closePopup = document.querySelector('.fa-remove');

const popupLinks = document.querySelectorAll('.popup-link');
const projectPopup = document.querySelector('.popup-overlay');
const headerSection =document.querySelector('header')


/*   popup events  */
const showPopup = () => {
    popupMenu.classList.remove('hide');
    popupMenu.classList.add('show');
    body.classList.add('overflow');
    headSection.classList.add('blur');
    openPopup.classList.add('hide');
    logo.classList.add('hide');
}

const hidePopup = () => {
    popupMenu.classList.add('hide');
    popupMenu.classList.remove('show');
    body.classList.remove('overflow');
    headSection.classList.remove('blur');
    openPopup.classList.remove('hide');
    logo.classList.remove('hide');

}

openPopup.addEventListener('click', () => {
    showPopup();
});

closePopup.addEventListener('click', () => {
    hidePopup();
});

popupLinks.forEach(link => {
    link.addEventListener('click', () => {
        hidePopup();
    });
});


// works section
const projects = [{
    imageMobile: './IMG/SnapshootPortfolio.png',
    imageDesktop: './IMG/SnapshootPortfolio.png',
    projectTitle: 'the 1st sample',
    stack: 'Front End Dev',
    year: '2022',
    order: 'this is a long descritpion for popup',
    description2:"",
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required.', technologies: ["javasCript", "Html", "css"]
}, {
    imageMobile: './IMG/SnapshootPortfolio.png',
    imageDesktop: './IMG/SnapshootPortfolio.png',
    projectTitle: 'the 2nd sample',
    stack: 'Front End Dev',
    year: '2022',
    order: 'this is a long descritpion for popup',
    description2:"",
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ["javasCript", "Html", "css"]
}, {
    imageMobile:  './IMG/SnapshootPortfolio.png',
    imageDesktop: './IMG/SnapshootPortfolio.png',
    projectTitle: 'the 3rd sample',
    stack: 'Front End Dev',
    year: '2022',
    order: '',
    description2:"this is a long descritpion for popupthis is a long descritpion for popup",
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ["javasCript", "Html", "css"]
}]
const workSection = document.querySelector('.works');
projects.forEach((project)=> {
    workSection.innerHTML += `<article>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src=".${project.imageDesktop}" class="card-image-desktop">
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
</article>`

    // project popup section
    projectPopup.innerHTML += `<div class='popup-content hide'><div class="popup-header">
    <h2 class="project-title">${project.projectTitle}</h2>
   <div class="canel-icon-wrapper"><img class="cancel-icon" src="./ICONS/cancel-icon.png" alt="cancel-icon"></div>
    </div>
<ul class="project-highlights">
<li>CANOPY</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>Back End Dev</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>2015</li>
</ul>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src=".${project.imageDesktop}" class="card-image-desktop">
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
<a src="link to demo" class="project-btn popup-btn popup-btn1">See live <img src="./ICONS/live.png"></a>
<a src="link to github" class="project-btn popup-btn">See source<img src="./ICONS/github.png"></a>
</div>
</div>
</div>
</div>
`
})

const seeProjectBtns = document.querySelectorAll('.trigger');
const popupContent = document.querySelectorAll('.popup-content');
const cancelIcon = document.querySelectorAll('.popup-header');





seeProjectBtns.forEach((seeProjectBtn, i) => {
    const revealPopup=()=> {
        projectPopup.classList.remove('hide');
        popupContent[i].classList.remove('hide');
        body.style = "overflow-y: hidden";
        workSection.classList.add('blur');
        headerSection.classList.add('header-handle')
    }

    const coverPopup=()=> {
        projectPopup.classList.add('hide');
        popupContent[i].classList.add('hide');
        body.style = "overflow-y: scroll";
        workSection.classList.remove('blur');
        headerSection.classList.remove('header-handle')
    }
    seeProjectBtn.addEventListener('click', revealPopup);
    cancelIcon[i].addEventListener('click', coverPopup);


})



