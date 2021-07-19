if(typeof(Storage) === undefined){
    alert("Web Browser anda tidak mendukung Web Storage");
}
let btn = document.querySelector("#btnCounter");
let btnReset = document.querySelector("#btnResetSession");
let domCounter = document.querySelector("#counter");
if(sessionStorage.getItem("counter") === null){
    sessionStorage.setItem("counter", 0);
}

function updateDisplay(){
    domCounter.innerText = sessionStorage.getItem("counter");
}

updateDisplay();

btn.addEventListener("click", function(event){
    let counter = sessionStorage.getItem("counter");
    sessionStorage.setItem("counter", parseInt(counter) + 1);

    updateDisplay();
});

btnReset.addEventListener("click", function(event){
    sessionStorage.setItem("counter", 0);
    updateDisplay();
})

let btn2 = document.querySelector("#btnCounter2");
let btnReset2 = document.querySelector("#btnResetLocal");
let domCounter2 = document.querySelector("#counter2");
if(localStorage.getItem("counter") === null){
    localStorage.setItem("counter", 0);
}

function updateDisplay2(){
    domCounter2.innerText = localStorage.getItem("counter");
}

updateDisplay2();

btn2.addEventListener("click", function(event){
    let counter = localStorage.getItem("counter");
    localStorage.setItem("counter", parseInt(counter) + 1);

    updateDisplay2();
});

btnReset2.addEventListener("click", function(event){
    localStorage.setItem("counter", 0);
    updateDisplay2();
})