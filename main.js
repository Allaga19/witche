var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 0,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
   // Responsive breakpoints
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

// Gamburger
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');

})