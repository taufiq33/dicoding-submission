const btnMenu = document.querySelector('#hamburger');
const menuDrawer = document.querySelector('#drawer');

btnMenu.addEventListener('click', (e) => {
    menuDrawer.classList.toggle('display');
});

