const hamburgerMenu = document.querySelector(".fa-bars");
const mobileOverlay = document.querySelector("#mobile-overlay");
const xMark = document.querySelector(".fa-xmark");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

hamburgerMenu.addEventListener(
  "click",
  () => (mobileOverlay.style.display = "block")
);

xMark.addEventListener("click", () => (mobileOverlay.style.display = "none"));

mobileNavLinks.forEach((mobileNavLink) => {
  mobileNavLink.addEventListener(
    "click",
    () => (mobileOverlay.style.display = "none")
  );
});
