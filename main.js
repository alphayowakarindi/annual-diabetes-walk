const hamburgerMenu = document.querySelector('.fa-bars');
const mobileOverlay = document.querySelector('#mobile-overlay');
const xMark = document.querySelector('.fa-xmark');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburgerMenu.addEventListener('click', () => {
  mobileOverlay.style.display = 'block';
});

xMark.addEventListener('click', () => {
  mobileOverlay.style.display = 'none';
});

mobileNavLinks.forEach((mobileNavLink) => {
  mobileNavLink.addEventListener('click', () => {
    mobileOverlay.style.display = 'none';
  });
});

// Featured Speakers
const featuredSpeakers = [
  {
    id: 1,
    name: 'Mutahi Kagwe',
    subtitle: 'Cabinet minister for health in the rebublic of Kenya',
    description:
      'A Kenyan tenured politician and currently serves as the Cabinet Secretary for Health in the Republic of Kenya.',
    bottomImageUrl: 'images/speakerbg.jpg',
    topImageUrl: 'images/mimister-of-health.jpeg',
  },

  {
    id: 2,
    name: 'Peter Ndegwa',
    subtitle: 'CEO of Safaricom telecomunication company',
    description:
      'An experienced Board level leader with a wealth of experience in General Management.',
    bottomImageUrl: 'images/speakerbg.jpg',
    topImageUrl: 'images/safaricom-ceo.jpg',
  },

  {
    id: 3,
    name: 'William Ruto',
    subtitle: 'Deputy president of the republic of Kenya',
    description: 'The Deputy President of Kenya. Before this, he was a Member of Parliament for the Eldoret North Constituency since 1997.',
    bottomImageUrl: 'images/speakerbg.jpg',
    topImageUrl: 'images/deputy-president.jpg',
  },
  {
    id: 4,
    name: 'Uhuru Kenyatta',
    subtitle: 'President of the republic of Kenya',
    description: 'The Deputy President of Kenya. Before this, he was a Member of Parliament for the GatunduConstituency since 2001.',
    bottomImageUrl: 'images/speakerbg.jpg',
    topImageUrl: 'images/president.jpg',
  },
];

const featuredSpeakersElement = document.querySelector('.speakers');

window.addEventListener('DOMContentLoaded', () => {
  let featuredSpeakersHtmlVersion = '';
  for (let i = 0; i < featuredSpeakers.length; i += 1) {
    featuredSpeakersHtmlVersion += ` 
    <div class="speaker">
    <div class="left">
      <img src="${featuredSpeakers[i].bottomImageUrl}" alt="" />
      <img src="${featuredSpeakers[i].topImageUrl}" alt="" />
    </div>
    <div class="right">
      <h3>${featuredSpeakers[i].name}</h3>
      <p class="subtitle">${featuredSpeakers[i].subtitle}</p>
      <p class"description">${featuredSpeakers[i].description}</p>
    </div>
  </div>
    `;
  }
  featuredSpeakersElement.innerHTML = featuredSpeakersHtmlVersion;
  return featuredSpeakersElement.innerHTML;
});
