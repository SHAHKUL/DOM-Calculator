let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("0")

let add = document.getElementById("add")
let sub = document.getElementById("subtract")
let mul = document.getElementById("mul")
let div = document.getElementById("div")

let del=document.getElementById("del")
del.addEventListener("click",delt)

let calc = document.querySelector(".calc")
calc.addEventListener("click", display)

let clear = document.getElementById("clear")
clear.addEventListener("click",clearHistory)

let equal = document.getElementById("equal")
equal.addEventListener("click",output)

let result = document.querySelector(".calc")
let finalResult = document.querySelector("#result")
output.finalResult = ""



function display(e){
    let span = document.querySelector("#span")
    if(e.target.value===undefined){
        span.innerHTML = span.innerHTML+""
    }else{
        span.innerHTML = span.innerHTML+e.target.value;
    }
    
}

function clearHistory(){
    let span = document.querySelector("#span")
    let finalResult = document.querySelector("#result")
    span.innerHTML=""
    finalResult.value = "0"
}

function output(){
    let span = document.querySelector("#span"); 
    let finalResult = document.querySelector("#result")
    finalResult.value = eval(span.innerText); 
}


document.body.addEventListener("keypress",keypress)
function keypress(e){
    let span = document.querySelector("#span");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        span.innerText += e.key
    }else if(e.key==="Enter"){
        output()
    }
}

function delt(){
    let span = document.querySelector("#span")
    span.innerHTML=span.innerHTML.slice(0,-1);

}
