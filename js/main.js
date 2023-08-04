const nav = document.querySelector('.nav');

// Add background to Nav
const navBg = () => {
  if (window.scrollY >= 100) {
    nav.classList.add('nav-bg');
  } else {
    nav.classList.remove('nav-bg');
  }
};

navBg();
window.addEventListener('scroll', navBg);

// Remove active class when screen resize
window.addEventListener('resize', () => {
  hamburgerMenu.classList.remove('active');
  nav.classList.remove('active');
});

// Add active class when hamburger menu is clicked
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close the nav menu when link clicked
const navLinks = document.querySelectorAll('.nav-links .nav-link');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    nav.classList.remove('active');
  });
});

// Svg color hover
const sosmed = document.querySelectorAll('.sosmed-link');
sosmed.forEach((s) => {
  s.addEventListener('mouseenter', () =>
    s.querySelector('path').setAttribute('fill', '#94a3b8')
  );
  s.addEventListener('mouseleave', () =>
    s.querySelector('path').setAttribute('fill', '#cbd5e1')
  );
});

// Lightbox
document.querySelectorAll('.card img').forEach((img) => {
  img.addEventListener('click', () => {
    document.querySelector('.lightbox-container').classList.add('active');
    document.querySelector('.lightbox-content').classList.add('active');
    document
      .querySelector('.lightbox-content img')
      .setAttribute('src', img.getAttribute('src'));
  });
});

document.querySelectorAll('.lightbox-container').forEach((lightbox) => {
  lightbox.addEventListener('click', () => {
    lightbox.querySelector('.lightbox-content').classList.remove('active');
    setTimeout(() => {
      lightbox.classList.remove('active');
    }, 250);
  });
});
