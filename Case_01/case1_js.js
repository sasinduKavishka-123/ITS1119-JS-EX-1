
let letterArray = ["A", "B", "C", "D", "E"];
let divArray = document.getElementsByClassName("numberHolder");

setInterval(() => {

    letterArray.unshift(letterArray.pop());

    for(let i=0; i<letterArray.length; i++){
        divArray[i].innerText = letterArray[i];
    }
}, 2000);