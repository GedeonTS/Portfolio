const open = document.getElementById('open');
const close = document.getElementById('close');
const canceli = document.getElementById('canceli');
const link1 = document.getElementById('elem1');
const link2 = document.getElementById('elem2');
const link3 = document.getElementById('elem3');
const section1 = document.getElementById('section1');
const headernav = document.getElementById('headernav');

open.addEventListener('click', () => {
  open.classList.add('hide');
  open.classList.remove('show');
  close.classList.remove('hide');
  close.classList.add('show');
  canceli.classList.remove('hide');
  canceli.classList.add('show');
  section1.classList.add('blur');
});
canceli.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
  section1.classList.remove('blur');
});

link1.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
  section1.classList.remove('blur');
});

link2.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
  section1.classList.remove('blur');
});

link3.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
  section1.classList.remove('blur');
});

//  middle section

//  1st step create elements
const body = document.querySelector('body');
function standardCard(title, content, imageDesktop, imageMobile, order1, order2) {
  const inputs = {
    title,
    content,
    imageDesktop,
    imageMobile,
    order1,
    order2,
  };

  const mainContainer = document.getElementById('middle-section'); // main-section
  const container1 = document.createElement('section'); // 1st middle-section

  const project1ImageMobile = document.createElement('img'); // section image
  const project1ImageDesktop = document.createElement('img'); // section image

  const divContainer1 = document.createElement('div'); // content wrapper
  const h2Mobile = document.createElement('h2'); // mobile version header
  const h2Desktop = document.createElement('h2');// desktop version header

  const ulCanopy = document.createElement('ul'); // 1st list wrapper
  const liTitleMob = document.createElement('li'); // 1st list element 1
  const liTitleDesk = document.createElement('li'); // 1st list element 2
  const liCounter1 = document.createElement('li'); // 1st list element 3
  const liDevMob = document.createElement('li'); // 1st list element 4
  const liDevDesk = document.createElement('li'); // 1st list element 5
  const liCounter2 = document.createElement('li'); // 1st list element 6
  const liYear1 = document.createElement('li'); // 1st list element 7

  // Counter images
  const imgCounter1 = document.createElement('img');
  const imgCounter2 = document.createElement('img');

  // list links
  const alink1 = document.createElement('a');
  const alink2 = document.createElement('a');
  const alink3 = document.createElement('a');
  const alink4 = document.createElement('a');
  const alink5 = document.createElement('a');

  const parDesktop = document.createElement('p');
  const parMobile = document.createElement('p');

  const ulButtons = document.createElement('ul'); // buttons list wrapper
  const liButton1 = document.createElement('li');
  const liButton2 = document.createElement('li');
  const liButton3 = document.createElement('li');

  const Button1Container1 = document.createElement('button');
  const Button2Container1 = document.createElement('button');
  const Button3Container1 = document.createElement('button');

  const SeeProjectButton = document.createElement('button');// trigger popup here
  SeeProjectButton.setAttribute('id', 'Sbtn');

  // 2nd step assign selectors to elements

  container1.classList.add('cards', 'card1');

  project1ImageMobile.classList.add('snapshot1');
  project1ImageMobile.src = `${inputs.imageMobile}`; // mobile image source
  project1ImageMobile.alt = 'portfolio snapshot'; // mobile image alt text

  project1ImageDesktop.classList.add('snapshot2');
  project1ImageDesktop.src = `${inputs.imageDesktop}`; // destop image source
  project1ImageDesktop.alt = 'portfolio snapshot'; // desktop image alt text

  divContainer1.classList.add('cardd');

  h2Mobile.classList.add('tonic');
  h2Mobile.setAttribute('id', 'portfolio');
  h2Mobile.innerText = inputs.title;

  h2Desktop.classList.add('tonic', 'tonic1');
  h2Desktop.innerText = inputs.title;

  ulCanopy.classList.add('ulc1', 'ucl12');

  liTitleMob.classList.add('li1');
  liTitleDesk.classList.add('li1', 'li12');
  liCounter1.classList.add('counter');
  liCounter2.classList.add('counter');
  liDevMob.classList.add('li2');
  liDevDesk.classList.add('li2', 'li22');
  liYear1.classList.add('li3');

  alink1.innerText = 'CANOPY';
  alink2.innerText = 'CANOPY';
  alink3.innerText = 'Back End Dev';
  alink4.innerText = 'Back End Dev';
  alink5.innerText = '2015';

  alink1.href = '#';
  alink2.href = '#';
  alink3.href = '#';
  alink4.href = '#';
  alink5.href = '#';

  // image counter paths assignement
  imgCounter1.src = 'IMG/Counter.svg';
  imgCounter2.src = 'IMG/Counter.svg';

  parMobile.classList.add('par3');
  parDesktop.classList.add('par3', 'par3b');

  parMobile.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
  parDesktop.innerText = inputs.content;

  ulButtons.classList.add('ulc2');

  Button1Container1.classList.add('btn');
  Button2Container1.classList.add('btn');
  Button3Container1.classList.add('btn', 'disable');

  Button1Container1.innerText = 'HTML';
  Button2Container1.innerText = 'CSS';
  Button3Container1.innerText = 'JAVASCIPT';

  SeeProjectButton.classList.add('See-project');
  SeeProjectButton.innerText = 'See-project';

  // step 3 insert element
  mainContainer.append(container1);
  container1.append(project1ImageMobile, project1ImageDesktop, divContainer1);
  divContainer1.append(h2Mobile, h2Desktop, ulCanopy, parDesktop, parMobile, ulButtons);
  divContainer1.append(SeeProjectButton);
  ulCanopy.append(liTitleDesk, liTitleMob, liCounter1, liDevDesk, liDevMob, liCounter2, liYear1);
  liTitleDesk.append(alink1);
  liTitleMob.append(alink2);
  liDevMob.append(alink3);
  liDevDesk.append(alink4);
  liYear1.append(alink5);
  liCounter1.append(imgCounter1);
  liCounter2.append(imgCounter2);

  ulButtons.append(liButton1, liButton2, liButton3);
  liButton1.append(Button1Container1);
  liButton2.append(Button2Container1);
  liButton3.append(Button3Container1);

  project1ImageDesktop.style.order = inputs.order1;
  divContainer1.style.order = inputs.order2;

  // popup creation

  // variables declaration
  const popupSection = document.createElement('section');
  const popupHead = document.createElement('div');
  const tonicTitleMob = document.createElement('h2');
  const tonicTitleDes = document.createElement('h2');
  const popCloser = document.createElement('img');
  const wrapper1 = document.createElement('ul');
  const poplist1 = document.createElement('li');
  const poplist2 = document.createElement('li');
  const poplist3 = document.createElement('li');
  const poplist4 = document.createElement('li');
  const poplist5 = document.createElement('li');
  const poplist6 = document.createElement('li');
  const poplist7 = document.createElement('li');

  const linka1 = document.createElement('a');
  const linka2 = document.createElement('a');
  const linka3 = document.createElement('a');
  const linka4 = document.createElement('a');
  const linka5 = document.createElement('a');

  const separator1 = document.createElement('img');
  const separator2 = document.createElement('img');

  const popupimagVar1 = document.createElement('img');
  const popupimgaVar2 = document.createElement('img');

  const WrapperDiv = document.createElement('div');

  const footingpar = document.createElement('p');

  const buttonswrap = document.createElement('div');

  const wrapper2 = document.createElement('ul');
  const popli1 = document.createElement('li');
  const popli2 = document.createElement('li');
  const popli3 = document.createElement('li');
  const btna1 = document.createElement('button');
  const btna2 = document.createElement('button');
  const btna3 = document.createElement('button');

  const seeDiv = document.createElement('div');
  const btnb1 = document.createElement('button');
  const btnb2 = document.createElement('button');

  const imagelive = document.createElement('img');
  const imageSrc = document.createElement('img');

  // selector and value assignment

  popupSection.classList.add('popup-window', 'popup-hide');
  popupSection.setAttribute('id', 'popup-window');
  popupHead.classList.add('popup-head');

  tonicTitleMob.classList.add('tonic');
  tonicTitleDes.classList.add('tonic', 'tonic1');

  tonicTitleDes.innerText = 'Tonic';
  tonicTitleMob.innerText = 'Tonic';

  popCloser.setAttribute('id', 'close-popup');
  popCloser.src = './ICONS/close-popup.png';
  wrapper1.classList.add('ulc1', 'ulx');

  poplist1.classList.add('li1');
  poplist2.classList.add('li1', 'li12');
  poplist3.classList.add('li2');
  poplist4.classList.add('li2', 'li22');
  poplist5.classList.add('li3');
  poplist6.classList.add('counter');
  poplist7.classList.add('counter');

  linka1.href = '#';
  linka2.href = '#';
  linka3.href = '#';
  linka4.href = '#';
  linka5.href = '#';

  linka1.innerText = 'CANOPY';
  linka2.innerText = 'CANOPY';
  linka3.innerText = 'Back End Dev';
  linka4.innerText = 'Back End Dev';
  linka5.innerText = '2015';

  separator1.alt = 'image';
  separator2.alt = 'image';

  separator1.src = './IMG/Counter.svg';
  separator2.src = './IMG/Counter.svg';

  separator1.classList.add('counter');
  separator2.classList.add('counter');

  popupimagVar1.alt = 'image';
  popupimgaVar2.alt = 'image';
  popupimagVar1.src = './IMG/popup-img.png';
  popupimgaVar2.src = './IMG/mobile-popup-Portfolio.png';
  popupimagVar1.classList.add('popup-image-desktop');
  popupimgaVar2.classList.add('popup-image-mobile');

  WrapperDiv.classList.add('content-wrapper');
  footingpar.classList.add('popup-text');
  footingpar.innerText = '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';

  buttonswrap.classList.add('buttons-wrap');
  wrapper2.classList.add('ulc2', 'ulc2x');
  btna1.classList.add('btn');
  btna2.classList.add('btn');
  btna3.classList.add('btn', 'disable');
  btna1.innerText = 'HTML';
  btna2.innerText = 'CSS';
  btna3.innerText = 'Javascript';

  seeDiv.classList.add('see-div');
  btnb1.classList.add('See-project', 'seeAlt');
  btnb2.classList.add('See-project', 'seeAlt');
  btnb1.innerText = 'See Live';
  btnb2.innerText = 'See Source';

  imagelive.alt = 'image';
  imageSrc.alt = 'image';

  imagelive.src = './ICONS/see-live.png';
  imageSrc.src = './ICONS/see-source.png';

  // Attaching current variable to DOM tree

  body.append(popupSection);
  popupSection.append(popupHead, wrapper1, popupimagVar1, popupimgaVar2, WrapperDiv);
  popupHead.append(tonicTitleMob, tonicTitleDes, popCloser);
  wrapper1.append(poplist1, poplist2, poplist6, poplist3, poplist4, poplist7, poplist5);
  poplist1.append(linka1);
  poplist2.append(linka2);
  poplist6.append(separator1);
  poplist3.append(linka3);
  poplist4.append(linka4);
  poplist7.append(separator2);
  poplist5.append(linka5);

  WrapperDiv.append(footingpar, buttonswrap);
  buttonswrap.append(wrapper2, seeDiv);

  wrapper2.append(popli1, popli2, popli3);
  popli1.append(btna1);
  popli2.append(btna2);
  popli3.append(btna3);

  seeDiv.append(btnb1, btnb2);

  // popup-window manipulation
  // const popupWindow = document.getElementById('popupWindoW');
  // const BtnclosePopup = document.getElementById('close-popup');

  SeeProjectButton.addEventListener('click', () => {
    popupSection.classList.remove('popup-hide');
    section1.classList.add('blur');
    mainContainer.classList.add('blur');
    mainContainer.classList.add('backblur');
    headernav.classList.add('hide');
  });

  popCloser.addEventListener('click', () => {
    popupSection.classList.add('popup-hide');
    section1.classList.remove('blur');
    mainContainer.classList.remove('blur');
    mainContainer.classList.remove('backblur');
    headernav.classList.remove('hide');
  });
}

// creation of projects data

const ProjectWrapper = [{
  title: 'Tonic', content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', imageDesktop: './IMG/Snap1.png', imageMobile: './IMG/Snapshoot-Portfolio-1.svg', order1: '1', order2: '2',
},
{
  title: 'Multi-Post Stories', content: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', imageDesktop: './IMG/Snap2.png', imageMobile: './IMG/Snapshoot-Portfolio2.svg', order1: '2', order2: '1',
},
{
  title: 'Facebook _360', content: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', imageDesktop: './IMG/Snap3.png', imageMobile: './IMG/Snapshoot-Portfolio-1.svg', order1: '1', order2: '2',
},
{
  title: 'ber Navigation', content: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', imageDesktop: './IMG/Snap4.png', imageMobile: './IMG/Snapshoot-Portfolio2.svg', order1: '2', order2: '1',
}];

for (let i = 0; i < ProjectWrapper.length; i += 1) {
  const titleValue = ProjectWrapper[i].title;
  const contentValue = ProjectWrapper[i].content;
  const imageDesktopValue = ProjectWrapper[i].imageDesktop;
  const imageMValue = ProjectWrapper[i].imageMobile;
  const order1Value = ProjectWrapper[i].order1;
  const order2Value = ProjectWrapper[i].order2;

  standardCard(titleValue, contentValue, imageDesktopValue, imageMValue, order1Value, order2Value);
}

