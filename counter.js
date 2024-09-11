const negativeBtn = document.getElementById("btn-negative")
const positiveBtn = document.getElementById("btn-positive")
const counter = document.getElementById("counter")
const reset = document.getElementById("reset")

let x=0;
negativeBtn.addEventListener("click", function(){
    x=x-1;
    counter.innerHTML = x;
});
positiveBtn.addEventListener("click", function(){
    x= x+1;
    counter.innerHTML= x;
});
reset.addEventListener("click", function(){
    counter.innerHTML = 0;
    x=0
});
