// Toggle menu visibility using hamburger menu

const menu = document.querySelector('nav');
const toggleMenu = () => {
  menu.style.display === 'flex' ? (menu.style.display = 'none') : (menu.style.display = 'flex');
};

const hamburger = document.querySelector('.fa-bars');
hamburger.addEventListener('click', () => {
  toggleMenu();
});
