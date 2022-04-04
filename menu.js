const open = document.getElementById("open");
const close = document.getElementById("close");
const canceli = document.getElementById("canceli");

open.addEventListener("click", () => {
  open.classList.add("hide");
  open.classList.remove("show");
  close.classList.remove("hide");
  close.classList.add("show");
  canceli.classList.remove("hide");
    canceli.classList.add("show");
    close.focus();
});
canceli.addEventListener("click", () => {
  close.classList.add("hide");
  close.classList.remove("show");
  canceli.classList.add("hide");
  canceli.classList.remove("show");
  open.classList.remove("hide");
  open.classList.add("show");
});
