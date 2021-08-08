/* eslint-disable no-undef */
import './style-script/style-script'; // NEVER REMOVE THIS

console.log('script!');

$(document).ready(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Scrolltop
  $('.scroll').click(() => {
    $('html, body').animate(
      {
        scrollTop: $('.aboutme').offset().top,
      },
      1000,
    );
  });

  const menuToggle = document.querySelector('.toggle');
  const bg = document.querySelector('.bg');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    bg.classList.toggle('active');
  });
});
