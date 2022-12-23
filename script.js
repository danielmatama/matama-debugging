const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mark = document.querySelector(".xmark");
const getBody = document.body;
const Items = document.querySelectorAll(".nav-bar .ax");
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
mark.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hide");
});
Items.forEach((n) => {
  n.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
});

// popup!!!

const body = document.querySelector("body");
const section = document.createElement("section");
body.appendChild(section);
section.innerHTML = `
  <div class="popup-window pophide">
  <div class="popup pophide">
  <div class="phead">
   <span class="xsign"><i class="fa-solid fa-xmark xsign-icon"></i></span>
   <img src="" alt="" class="pop-img" />
  </div>
  <h2 class="phead-h2"></h2>
    <ul class="plist">
      <li><a href="#" class="panc card-a4">Ruby on rails</a></li>
      <li><a href="#" class="panc card-a2">CSS</a></li>
      <li><a href="#" class="panc card-a3">Javscript</a></li>
    </ul>
  <p class="ptext"> </p>
  <ul class="pbuttons">
  <button class="see" type="button" name="button">
  <span>See Live</span>
  <span><img src="images/upload.svg" alt=""></span>
  </button>
  <button class="see" type="button" name="button">
  <span>See Source</span>
  <span><img src="images/vector.svg" alt=""></span>
  </button>
  </ul>
  </div>
  </div>
`;

const projectDetails = [
  {
    name: 'Multi-post stories story one',
    description: 'tempor incididunt ut labore et dolorveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatt anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },

  {
    name: 'My name is Daniel',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullain culpa qui officia de.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },

  {
    name: 'Multi-post story three',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },

  {
    name: 'Multi-post story four',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullait anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },

  {
    name: 'Multi-post stories five',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n culpt anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },

  {
    name: 'Multi-post stories six',
    description: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu futeur dmollit anim id est laborum.',
    featuredImage: './img/coding-modified.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
    mobileSrc: "images/pop.svg",
  },
];


const button = document.querySelectorAll(".see-button");
const popup = document.querySelector(".popup");
const popupWindow = document.querySelector('.popup-window')
const sign = document.querySelector(".xsign");
const windowHeader = document.querySelector('.phead-h2');
const windowText = document.querySelector('.ptext');
const windowImage = document.querySelector('.pop-img')

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    popup.classList.toggle('pophide');
    popupWindow.classList.toggle('pophide');
    windowHeader.innerHTML = projectDetails[i].name;
    windowText.innerHTML = projectDetails[i].description;
    windowImage.src = projectDetails[i].mobileSrc;
    console.log(button);
  })
}

sign.addEventListener("click", () => {
  popup.classList.toggle("pophide");
  popupWindow.classList.toggle('pophide');
});

const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const msg = document.querySelector('form .message');
const name = document.querySelector('input[type="text"]');
const text = document.querySelector('textarea');

function showError(m) {
  msg.style.display = 'block';
  msg.innerText = m;
}

function showSuccess(mass) {
  msg.style.display = 'block';
  msg.style.color = 'white';
  msg.style.backgroundColor = '#ff6b00';
  msg.innerText = mass;
}

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError('please write the email in lowercase');
  } else {
    showSuccess('Thank You.');
    form.submit();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkLowerCase(email);
});



// mediaquery







// let max_slides = 4;
// let max_items = 3;
// const screen_size = window.matchMedia("(max-width: 600px)");
//
// function getSlidesCount () {
//
//   console.log(window.innerWidth);
//
//   if (screen_size.matches) { // If media query matches
//     max_slides = 4;
//     max_items = 3;
//     console.log('Media query matches screen_size query');
//   } else {
//     max_slides = 2;
//     max_items = 6;
//     console.log('Media query does not match screen_size query');
//   }
// }
//
// getSlidesCount();
// window.addEventListener('resize', getSlidesCount);









// const madia = matchMedia('(min-width:600px)');
// media.addEventListener("change", e => console.log(e));






// const open = document.querySelector(".see-button");
// open.addEventListener('click', ()=> {
//   const main = document.createElement('div');
//   main.className = 'main';
//   const popup = document.createElement('div');
//   popup.className = 'popup';
//   popup.innerHTML = `
//   <h2>Works</h2>
//   <img src="images/coding-modified.png" alt="">
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//   <button class="close" type="button" name="button">more</button>
//
//   `;
//   main.appendChild(popup);
//   body.appendChild(main);
//
//   const close = document.querySelector('.close');
//   close.addEventListener('click', ()=> {
//       body.removeChild(main);
//   })
// })
