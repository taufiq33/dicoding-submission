let btn = document.querySelector('#hamburger');
let menuDrawer = document.querySelector("#drawer");
let mainElement = document.querySelector("main");

btn.addEventListener('click', function(e){
    menuDrawer.classList.toggle('open');
    e.stopPropagation();
});

mainElement.addEventListener('click', function(e) {
    menuDrawer.classList.remove('open');
    e.stopPropagation();
})


