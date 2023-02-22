let input = document.getElementById("input").value;
let numbers = input.split(" ");
let code = Number(numbers[0]);
let quantity = Number(numbers[1]);
let price;
switch(code) {
    case 1: price = 4; break;
    case 2: price = 4.5; break;
    case 3: price = 5; break;
    case 4: price = 2; break;
    default: price = 1.5;
}
consoloe.log(price);
let final = price + quantity;
console.log("Total: R$ " + final.toFixed(2));
