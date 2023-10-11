// Область видимості / Scope
const number = 10;
let name = "Vladyslav";
console.log(number);

function consoleTest() {
    let kont  = "Solt";
    console.log(name);
}

consoleTest();

// console.log(kont); // з глобальної області видимості не 
// можливо достукатись до локальної



let look = "White";

let look1 = "Pink";

console.log(look);