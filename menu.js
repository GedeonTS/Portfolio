const open = document.getElementById("open");
const close = document.getElementById("close");
const canceli = document.getElementById("canceli");

open.addEventListener("click", () => {
  open.classList.add("hide");
  close.classList.remove("hide");
  close.classList.add("show");
  canceli.classList.remove("hide");
  canceli.classList.add("show");
});

canceli.addEventListener("click", () => {
  close.classList.add("hide");
  close.classList.remove("show");
  canceli.classList.add("hide");
  open.classList.remove("hide");
  open.classList.add("show");
});
