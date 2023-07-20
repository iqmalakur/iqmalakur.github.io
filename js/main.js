const nav = document.querySelector('.nav');

const navBg = () => {
  if (window.scrollY >= 100) {
    nav.classList.add('nav-bg');
  } else {
    nav.classList.remove('nav-bg');
  }
};

navBg();
window.addEventListener('scroll', navBg);

window.addEventListener('resize', (e) => {
  if (window.innerWidth <= 665) {
    hamburgerMenu.classList.remove('active');
    nav.classList.remove('active');
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
});
