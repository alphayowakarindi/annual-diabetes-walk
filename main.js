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

// Featured Speakers
const featuredSpeakers = [
  {
    id: 1,
    name: "Mutahi Kagwe",
    description: "Cabinet minister for health in the rebublic of Kenya",
    bottomImageUrl: "/speakerbg.jpg",
    topImageUrl: "mimister-of-health.jpeg",
  },

  {
    id: 2,
    name: "Peter Ndegwa",
    description: "CEO of Safaricom telecomunication company",
    bottomImageUrl: "/speakerbg.jpg",
    topImageUrl: "safaricom-ceo.jpg",
  },

  {
    id: 3,
    name: "William Ruto",
    description: "Deputy president of the republic of Kenya",
    bottomImageUrl: "/speakerbg.jpg",
    topImageUrl: "deputy-president.jpg",
  },
  {
    id: 4,
    name: "Uhuru Kenyatta",
    description: "President of the republic of Kenya",
    bottomImageUrl: "/speakerbg.jpg",
    topImageUrl: "president.jpg",
  },
];

const featuredSpeakersElement = document.querySelector(".speakers");

window.addEventListener("DOMContentLoaded", () => {
  let featuredSpeakersHtmlVersion = "";
  for (let i = 0; i < featuredSpeakers.length; i++) {
    featuredSpeakersHtmlVersion += ` 
    <div class="speaker">
    <div class="left">
      <img src="${featuredSpeakers[i].bottomImageUrl}" alt="" />
      <img src="${featuredSpeakers[i].topImageUrl}" alt="" />
    </div>
    <div class="right">
      <h3>${featuredSpeakers[i].name}</h3>
      <p>Cabinet minister for health in the rebublic of Kenya</p>
    </div>
  </div>
    `;
  }
  return (featuredSpeakersElement.innerHTML = featuredSpeakersHtmlVersion);
});
