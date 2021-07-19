let slideShow = {
    element: document.querySelector("#slideshow-photo"),
    photoList: [
        "assets/images/slideshow1.png",
        "assets/images/slideshow2.png",
        "assets/images/slideshow3.png",
        "assets/images/slideshow4.png"
    ],
    counter: 0,
}

let jumbotronDescriptionTextElement = document.querySelector(".jumbotron-description");
let jumbotronDescriptionText = "bebas dan terbuka, user-friendly, dan Lengkap fiturnya serta cantik tampilannya.";
let jumbotronDescriptionTextCounter = 0;
let jumbotronDescriptionTextEffectSpeed = 50;

let BtnSlideShowRight = document.querySelector(".slideshow-nav-right");
let BtnSlideShowLeft = document.querySelector(".slideshow-nav-left");

function efekKetik(){
    if (jumbotronDescriptionTextCounter < jumbotronDescriptionText.length){
        jumbotronDescriptionTextElement.innerHTML += jumbotronDescriptionText.charAt(jumbotronDescriptionTextCounter);
        jumbotronDescriptionTextCounter++;
        setTimeout(efekKetik, jumbotronDescriptionTextEffectSpeed);
    }
}

function slideShowStart(direksional){
    if(direksional === "maju"){
        slideShow.counter += 1; 
    } else {
        slideShow.counter -= 1;
    }
    
    if(slideShow.counter > 3){
        slideShow.counter = 0;
    } else if(slideShow.counter < 0){
        slideShow.counter = 3;
    }
    slideShow.element.src = slideShow.photoList[slideShow.counter];
}


let tabContent = {
    prevActiveTabCounter : 0,
    nowActiveTabCounter : 2,
    tabContentElement : [
        document.querySelector("#tab-content-kubuntu"),
        document.querySelector("#tab-content-lubuntu"),
        document.querySelector("#tab-content-xubuntu"),
        document.querySelector("#tab-content-ubuntumate"),
    ],
    tabLinkElement : [
        document.querySelector("#tab-link-kubuntu"),
        document.querySelector("#tab-link-lubuntu"),
        document.querySelector("#tab-link-xubuntu"),
        document.querySelector("#tab-link-ubuntumate"),
    ],
};

let BtnDropdownNavBar = document.querySelector("#burger-menu");
let NavBarToShow = document.querySelector(".menu-utama");

function openTab(indexElement){
    tabContent.tabLinkElement[tabContent.nowActiveTabCounter].classList.toggle("tab-nav-active");
    tabContent.tabLinkElement[indexElement].classList.toggle("tab-nav-active");
    tabContent.tabContentElement[tabContent.nowActiveTabCounter].classList.toggle("tab-content-item-active");
    tabContent.tabContentElement[indexElement].classList.toggle("tab-content-item-active");
    tabContent.prevActiveTabCounter = tabContent.nowActiveTabCounter;
    tabContent.nowActiveTabCounter = indexElement;
}

efekKetik();

BtnSlideShowRight.addEventListener("click", function(){
    slideShowStart("maju");
})

BtnSlideShowLeft.addEventListener("click", function(){
    slideShowStart("mundur");
})

BtnDropdownNavBar.addEventListener("click", function(){
    NavBarToShow.classList.toggle("show");
})

setInterval(function(){
    slideShowStart("maju");
}, 5500);
