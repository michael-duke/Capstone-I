import toggleMenu from './mobile-menu.js';
import navScrollSpy from './nav-desktop.js';

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);

window.addEventListener('scroll', navScrollSpy);
