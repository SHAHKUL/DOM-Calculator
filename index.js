<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Calculator</title>
    <link rel="stylesheet" href="sir.css">
  </head>
  <body bg-secondary>
    <h1 id="title" style="text-align: center;margin-top: 50px;"> DOM Calculator</h1>
    <p  id="description" style="text-align: center;font-size: larger;">In this Task we are going to build a Calculator. By using JavaScript Programming Language</p>
    <div class="container">
      <div class="calc">
        <span class="text-right"id="span"><p></p></span><br>
        <input type="text" id = "result" class="text-right form-control"><br>
        
        <button type= "button" id="clear" >Delete All</button>
        <button id="del">Back Space</button>
        
        
        <button type= "button" value="7" id="7" class="bg-dark text-light">7</button>
        <button type= "button" value="8" id="8" class="bg-dark text-light">8</button>
        <button type= "button" value="9" id="9" class="bg-dark text-light">9</button>
        
        <button type= "button" value="/" id="div" class="bg-warning text-dark">/</button>
        <button type= "button" value="4" id="4" class="bg-dark text-light">4</button>
        <button type= "button" value="5" id="5" class="bg-dark text-light">5</button>
        <button type= "button" value="6" id="6" class="bg-dark text-light">6</button>
       
        <button type= "button" value="*" id="mul" class="bg-warning text-dark">X</button><br>
        <button type= "button" value="1" id="1" class="bg-dark text-light">1</button>
        <button type= "button" value="2" id="2" class="bg-dark text-light">2</button>
        <button type= "button" value="3" id="3" class="bg-dark text-light">3</button>

       
        
        <button type= "button" value="-" id="subtract" class="bg-warning text-dark">-</button><br>
        <button type= "button"  id="equal" class="bg-success text-light">=</button>
        <button type= "button" value="0" id="0" class="bg-dark text-light">0</button>
        <button type= "button" value="+" id="add" class="bg-warning text-dark">+</button><br>
      </div>
      
    </div>
    <script src="index.js"></script>
    
   
  </body>
</html>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
}

.calc{
    display:inline-block;
    min-width: 300px;
    max-width: 310px;
    background-color: rgb(141, 140, 140);
    padding: 10px;
    border-radius: 50px;

}

result{
    background-color:   rgb(221, 220, 220);
    border: none;
    font-size: 10px;
    font-weight: bolder;
    font: larger;
    display: inline-block; 
    text-align: right; 
    width: 95%;
    border-radius: 50px;
    
}
span{
    font-size: 20px;
    height: 38px;
    overflow: hidden;
    display: inline-block; 
    text-align: right; 
    width: 95%;
    
}

button{
   
height: 50px;
width: 50px;
background-color: rgb(252, 45, 45);
border-radius:50% ;
border: none;
box-shadow:  -5px -5px 12px rgb(221, 187, 187),
                     5px  5px 12px wheat;
margin: 9px;
font-size: 16px;
font-family: sans-serif;

}

#equal,#del,#clear{
    width: 120px;
    border-radius: 40px;
    box-shadow:  -5px -5px 12px rgb(221, 187, 187),
                   5px  5px 12px wheat
}
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
