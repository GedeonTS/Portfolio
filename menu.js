const open = document.getElementById('open');
const close = document.getElementById('close');
const canceli = document.getElementById('canceli');
const link1 = document.getElementById('elem1');
const link2 = document.getElementById('elem2');
const link3 = document.getElementById('elem3');

open.addEventListener('click', () => {
  open.classList.add('hide');
  open.classList.remove('show');
  close.classList.remove('hide');
  close.classList.add('show');
  canceli.classList.remove('hide');
  canceli.classList.add('show');
});
canceli.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});

link1.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add("show");
});

link2.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});

link3.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});
