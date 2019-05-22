const menu = document.querySelector('nav');
const toggleMenu = () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
};

const hamburger = document.querySelector('.fa-bars');
hamburger.addEventListener('click', () => {
  toggleMenu();
});
