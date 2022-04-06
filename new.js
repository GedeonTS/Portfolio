const mainContainer = document.getElementById('middle-section');  //main-section
const container1 = document.createElement('section');  //1st middle-section

const project1ImageMobile = document.createElement('img');   //section image
const project1ImageDesktop = document.createElement('img');   //section image

const divContainer1 = document.createElement('div'); // content wrapper
const h2Mobile = document.createElement('h2'); //mobile version header
const h2Desktop = document.createElement('h2');//desktop version header

const ulCanopy = document.createElement('ul'); // 1st list wrapper
const liTitleMob = document.createElement('li'); //1st list element 1
const liTitleDesk = document.createElement('li'); //1st list element 2
const liCounter1 = document.createElement('li'); //1st list element 3
const liDevMob = document.createElement('li'); //1st list element 4
const liDevDesk = document.createElement('li'); //1st list element 5
const liCounter2 = document.createElement('li'); //1st list element 6
const liYear1 = document.createElement('li'); //1st list element 7

//Counter images
const imgCounter1 = document.createElement('img');
const imgCounter2 = document.createElement('img');

//list links
const alink1 = document.createElement('a');
const alink2 = document.createElement('a');
const alink3 = document.createElement('a');
const alink4 = document.createElement('a');
const alink5 = document.createElement('a');

const parDesktop = document.createElement('p'); 
const parMobile = document.createElement('p'); 

const ulButtons = document.createElement('ul'); //buttons list wrapper
const liButton1 = document.createElement('li');
const liButton2 = document.createElement('li');
const liButton3 = document.createElement('li');

const Button1Container1 = document.createElement('button');
const Button2Container1 = document.createElement('button');
const Button3Container1 = document.createElement('button');

const SeeProjectButton = document.createElement('button');//trigger popup here


//2nd step assign selectors to elements

container1.classList.add('cards', 'card1');

project1ImageMobile.classList.add('snapshot1');
project1ImageMobile.src = './IMG/Snapshoot-Portfolio-1.svg'; //mobile image source
project1ImageMobile.alt = 'portfolio snapshot'; //mobile image alt text

project1ImageDesktop.classList.add('snapshot2');
project1ImageDesktop.src = './IMG/Snap1.png'; //destop image source
project1ImageDesktop.alt = 'portfolio snapshot'; //desktop image alt text

divContainer1.classList.add('cardd');

h2Mobile.classList.add('tonic');
h2Mobile.setAttribute('id', 'portfolio')
h2Mobile.innerText = 'Tonic';

h2Desktop.classList.add('tonic', 'tonic1');
h2Desktop.innerText = 'Tonic';

ulCanopy.classList.add('ulc1','ucl12');

liTitleMob.classList.add('li1');
liTitleDesk.classList.add('li1' ,'li12');
liCounter1.classList.add('counter');
liCounter2.classList.add('counter');
liDevMob.classList.add('li2');
liDevDesk.classList.add('li2','li22');
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

//image counter paths assignement
imgCounter1.src = 'IMG/Counter.svg';
imgCounter2.src = 'IMG/Counter.svg';

parMobile.classList.add('par3');
parDesktop.classList.add('par3','par3b');

parMobile.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
parDesktop.innerText = '--------------------------------------------------------------';

ulButtons.classList.add('ulc2');

Button1Container1.classList.add('btn');
Button2Container1.classList.add('btn');
Button3Container1.classList.add('btn','disable');

Button1Container1.innerText = 'HTML';
Button2Container1.innerText = 'CSS';
Button3Container1.innerText = 'JAVASCIPT';

SeeProjectButton.classList.add('See-project');
SeeProjectButton.innerText = 'See-project';

//step 3 insert element
mainContainer.append(container1);
container1.append(project1ImageMobile, project1ImageDesktop, divContainer1);
divContainer1.append(h2Mobile, h2Desktop, ulCanopy, parDesktop, parMobile, ulButtons, SeeProjectButton);
ulCanopy.append(liTitleDesk, liTitleMob, liCounter1, liDevDesk, liDevMob, liCounter2, liYear1);
liTitleDesk.append(alink1);
liTitleMob.append(alink2);
liDevMob.append(alink3);
liDevDesk.append(alink4)
liYear1.append(alink5);
liCounter1.append(imgCounter1);
liCounter2.append(imgCounter2);

ulButtons.append(liButton1, liButton2, liButton3);
liButton1.append(Button1Container1);
liButton2.append(Button2Container1);
liButton3.append(Button3Container1);



//second container
const container2 = document.createElement('section'); 
container2.classList.add('cards', 'card1');











//function declaration
// function displayPopup(title, description, projectImage) {
//   const projectDisplay = {
//     title: title,
//     description: description,
//     Imge: projectImage,
//     popUpText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
//   };
// }
