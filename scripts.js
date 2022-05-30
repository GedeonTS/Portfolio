/*   popup menu events  */
const popupMenu = document.querySelector('.popup-menu');
const body = document.querySelector('body');
const headSection = document.querySelector('.headline-section');
const logo = document.querySelector('.logo');

const openPopup = document.querySelector('.humburger');
const closePopup = document.querySelector('.fa-remove');

const popupLinks = document.querySelectorAll('.popup-link')


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
const projects = [{ imageMobile: './IMG/SnapshootPortfolio.png', imageDesktop: './IMG/SnapshootPortfolio.png', projectTitle: 'Leaderboard', stack: 'Front End Dev', year: '2022', order: '', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', technologies: ["javasCript", "Html", "css"] },{ imageMobile: './IMG/SnapshootPortfolio.png', imageDesktop: './IMG/SnapshootPortfolio.png', projectTitle: 'Leaderboard', stack: 'Front End Dev', year: '2022', order: '', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', technologies: ["javasCript", "Html", "css"] },{ imageMobile: './IMG/SnapshootPortfolio.png', imageDesktop: './IMG/SnapshootPortfolio.png', projectTitle: 'Leaderboard', stack: 'Front End Dev', year: '2022', order: '', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', technologies: ["javasCript", "Html", "css"] }]
const workSection = document.querySelector('.works');
projects.forEach(project => {
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
<ul class="stacks"><li class="stack">${project.technologies[0]}</li><li class="stack">${project.technologies[1]}</li><li class="stack">${project.technologies[2]}</li></ul>
<button class="project-btn">See project</button>
</section>
</article>`


})
