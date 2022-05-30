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


// work section
const projects = [{ imageMobile: '', imageDesktop: '', projectTitle: '', stack:'',year:''}]
const workSection = document.querySelector('.works')
workSection.innerHTML = `<article>
<img src="./IMG/SnapshootPortfolio.png" class="card-image-mobile">
<img src="./IMG/SnapshootPortfolio.png" class="card-image-desktop">
<div class="side-section">
<h2 class="project-title">Tonic</h2>
<ul class="project-highlights">
<li class="organisation">Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>Front End Dev</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>2022</li>
</ul>
<p class="project-descritpion">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<ul class="stacks"><li class="stack">javaScript</li><li class="stack">Html</li></ul>
<button class="project-btn">See project</button>
</div>
</article><article>
<img src="./IMG/SnapshootPortfolio.png" class="card-image-mobile">
<img src="./IMG/SnapshootPortfolio.png" class="card-image-desktop">
<div class="side-section">
<h2 class="project-title">Tonic</h2>
<ul class="project-highlights">
<li class="organisation">Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>Front End Dev</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>2022</li>
</ul>
<p class="project-descritpion">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<ul class="stacks"><li class="stack">javaScript</li><li class="stack">Html</li></ul>
<button class="project-btn">See project</button>
</div>
</article>`
