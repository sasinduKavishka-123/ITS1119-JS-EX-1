
let divs = document.getElementsByClassName("colorBlocks");

let arrayStyles = ["#ff0000", "#05ff00", "#0033fe" ,
                            "#f8ff00", "#fd00ff", "#8300ff"];

for(let i=0 ; i< divs.length; i++){
    divs[i].style.backgroundColor = arrayStyles[i];
}

console.log("aaaaaaaaaa");

setInterval(() =>{

    arrayStyles.unshift(arrayStyles.pop());

    for(let i=0 ; i<divs.length; i++){
        divs[i].style.backgroundColor = arrayStyles[i];
    }
}, 3000);