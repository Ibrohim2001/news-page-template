const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.nav_menu');
const menuIcon = document.querySelector('.menu_btn img');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  if(menu.classList.contains('open')) {
    menu.classList.remove('open')
    header.classList.remove('open')
    menuIcon.setAttribute('src', "./assets/images/icon-menu.svg");
  } else {
    menu.classList.add('open')
    header.classList.add('open')
    menuIcon.setAttribute('src', "./assets/images/icon-menu-close.svg");
  }
});