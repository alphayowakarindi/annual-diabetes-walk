const hamburgerMenu = document.querySelector(".fa-bars");
const mobileOverlay = document.querySelector("#mobile-overlay");
const xMark = document.querySelector(".fa-xmark");

hamburgerMenu.addEventListener(
  "click",
  () => (mobileOverlay.style.display = "block")
);

xMark.addEventListener("click", () => (mobileOverlay.style.display = "none"));
