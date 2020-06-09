$(document).ready(function () {
  
  // Слайдер на главной 
  const mainSlider = new Swiper('.swiper-container-main', {
    loop: true,
    navigation: {
      nextEl: '.main-slider-next',
      prevEl: '.main-slider-prev',
    }
  });

  // Мобильное меню
  $('.hamburger').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });  
});
