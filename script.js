// Smooth Scrolling for Navigation
let navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
let interval;

for (let i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function (event) {
    event.preventDefault();
    let targetSectionID = this.textContent.trim().toLowerCase();
    let targetSection = document.getElementById(targetSectionID);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  let targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 300);
}

// Skill Bars Animation
let progressBars = document.querySelectorAll('.skill-progress > div');
let skillsContainer = document.querySelector('.skills-display');
let animationDone = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = '0%';
  }
}

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth >= targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 5);
  }
}

function checkScroll() {
  let coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}

window.addEventListener('scroll', checkScroll);

// Initialize Bars on Page Load
initialiseBars();

// ------------------------------------------------------Top Border Loading -----------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
// Contact Section
 document.querySelector("#contact-btn").addEventListener('click',(e)=>{
 alert("Message sent Successfully.")
  })
  
