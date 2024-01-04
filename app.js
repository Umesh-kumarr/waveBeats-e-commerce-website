const menu = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links ');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
};