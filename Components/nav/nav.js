const menu = document.querySelector('nav');
const maxWidth = window.matchMedia('(max-width: 800px)');
const widthFn = () => {
  if (!maxWidth.matches) {
    menu.style.height = 'inherit';
  }
};

const toggleMenu = () => {
  if (menu.style.display === 'flex') {
    // menu.style.display = 'none';
    TweenMax.fromTo(menu, 0.5, { opacity: 1 }, { opacity: 0, height: 0, display: 'none' });
  } else {
    // menu.style.display = 'flex';
    TweenMax.fromTo(menu, 0.5, { opacity: 0 }, { opacity: 1, height: 350, display: 'flex' });
  }
};

const hamburger = document.querySelector('.fa-bars');
hamburger.addEventListener('click', () => {
  toggleMenu();
});

// Resets nav height when swapping from mobile/tablet/desktop view.
window.addEventListener('resize', () => {
  widthFn();
});
