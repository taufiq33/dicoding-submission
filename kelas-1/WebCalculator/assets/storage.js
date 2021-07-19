const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return (typeof(Storage)) !== "undefined";
}

function putHistory(data){
    if(checkForStorage()){
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) == null){
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);
        console.log(historyData);

        if(historyData.length > 5){
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

function showHistory(){
    if(checkForStorage()){
        if(localStorage.getItem(CACHE_KEY) !== "null"){
            return JSON.parse(localStorage.getItem(CACHE_KEY));
        }
    }
    
}

function renderHistory(){
    let historyData = showHistory();
    if(historyData === null){
        historyData = [];
    }
    console.log("HistoryData di renderHistory adalah " );
    console.log(historyData)
    let historyDOMList = document.querySelector("#historyList");
    historyDOMList.innerHTML = '';

    for(historyItem of historyData){
        let row = document.createElement("tr");
        row.innerHTML += `
            <td>${historyItem.firstNumber.toString()}</td>
            <td>${historyItem.operator.toString()}</td>
            <td>${historyItem.secondNumber.toString()}</td>
            <td>${historyItem.result.toString()}</td>
        `;

        historyDOMList.appendChild(row);
    }
}

renderHistory();