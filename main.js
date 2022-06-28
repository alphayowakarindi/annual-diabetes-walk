const hamburgerMenu = document.querySelector(".fa-bars");
const mobileOverlay = document.querySelector("#mobile-overlay");

hamburgerMenu.addEventListener(
  "click",
  () => (mobileOverlay.style.display = "block")
);
