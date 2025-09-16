// all number id here

let oneEl = document.getElementById('one');
let twoEl = document.getElementById("two");
let threeEl = document.getElementById('three');
let fourEl = document.getElementById('four');
let fiveEl = document.getElementById('five');
let sixEl = document.getElementById('six');
let sevenEl = document.getElementById('seven');
let eightEl =document.getElementById("eight");
let nineEl = document.getElementById('nine');
let zeroEl = document.getElementById('zero');

// result calculation 
let resultbtn = document.getElementById('result');

let plusbtn = document.getElementById('plus');
let minusbtn = document.getElementById('minus');
let equalbtn  = document.getElementById('equal');
let intobtn = document.getElementById('into');

//functionality ka code here
oneEl.onclick=function(){
    resultbtn.textContent=1;
}
plusbtn.onclick=function(){
    resultbtn.textContent+= "+";
}
twoEl.onclick=function(){
    resultbtn.textContent+="2";
}
equalbtn.onclick=function(){
    resultbtn.textContent=3;
}