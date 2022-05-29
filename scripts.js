/*   popup menu events  */
const popupMenu = document.querySelector('.popup-menu');
const body = document.querySelector('body');
const headSection = document.querySelector('.headline-section');
const logo = document.querySelector('.logo');

const openPopup = document.querySelector('.humburger');
const closePopup = document.querySelector('.fa-remove');

const portfolio = document.getElementById('portfolio-link');
const contact = document.getElementById('contact-link');
const about = document.getElementById('about-link');

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
})