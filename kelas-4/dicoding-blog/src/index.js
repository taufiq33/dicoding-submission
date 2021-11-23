import './styles/main.css';

const btnMenu = document.querySelector("#hamburger");
const menuContainer = document.querySelector("#drawer");

btnMenu.addEventListener('click', function(e){
    menuContainer.classList.toggle("open");
    e.stopPropagation();
})

document.querySelector('body').addEventListener('click', function(e){
    menuContainer.classList.remove("open");
    e.stopPropagation();
});