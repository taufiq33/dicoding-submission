const dataKey = "LOCALSTORAGE_KEY";
const dataElement = document.getElementById("data-penerima");
const namaElement = document.getElementById("nama");
const umurElement = document.getElementById("umur");
const domisiliElement = document.getElementById("domisili");
const mainformElement = document.getElementById("main-form");
const resetData = document.getElementById("resetData");

function putData(){
    let tempData;
    if(localStorage.getItem(dataKey) === ""){
        tempData = [];
    } else {
        tempData = JSON.parse(localStorage.getItem(dataKey));
    }
    let item = {
        nama: namaElement.value,
        umur: umurElement.value,
        domisili: domisiliElement.value
    };
    tempData.unshift(item);

    if(tempData.length > 5){
        tempData.pop();
    }

    localStorage.setItem(dataKey, JSON.stringify(tempData));
    console.log(item);
    namaElement.value = "";
    umurElement.value = "";
    domisiliElement.value = "";
    updateDisplay();
}

function getAllData(){
    if(localStorage.getItem(dataKey) === ""){
        return [];
    }
    return JSON.parse(localStorage.getItem(dataKey));
}

function renderDatatoDom(objData){
    if (objData.length < 1){
        dataElement.innerHTML = "<h2>Maaf data kosong</h2>";
    } else {
        for(item of objData){
            let tr = document.createElement("tr");
            tr.innerHTML += `<td>${item.nama}</td>`;
            tr.innerHTML += `<td>${item.umur}</td>`;
            tr.innerHTML += `<td>${item.domisili}</td>`
            dataElement.appendChild(tr);
        }
    }
}

mainformElement.addEventListener("submit", function(event){
    event.preventDefault();
    putData();
})

resetData.addEventListener("click", function(event){
    localStorage.setItem(dataKey, "");
    updateDisplay();
})

function updateDisplay(){
    dataElement.innerHTML = '';
    let allData = getAllData();
    renderDatatoDom(allData);
}

window.addEventListener("load", function(){ 
    if(typeof(Storage) === "undefined"){
        document.write("Browser anda tidak mendukung local storage");
    }else{
        if(localStorage.getItem(dataKey) === null){
            localStorage.setItem(dataKey, "");
        }
        updateDisplay();
    }
})

