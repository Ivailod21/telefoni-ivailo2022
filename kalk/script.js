let a = document.getElementById("numberA").valueAsNumber;
let b = document.getElementById("numberB").valueAsNumber;
let answer = document.getElementById("answer")
document.getElementById("sum").onclick = function() {
    answer.innerText = a + b;
};
document.getElementById("min").onclick = function() {
    answer.innerText = a - b;
};
document.getElementById("umn").onclick = function() {
   answer.innerText = a * b;
};
document.getElementById("del").onclick = function() {
   answer.innerText = a / b;
};