// Hoisting  (підняття)
/*
writeHello();

function writeHello() {
    console.log("hello");
};

console.log(old);

var old = 30;


console.log(age);
const age = 20;
*/
// написати функцію, яка приймає 2 аргументи: масив чисел і число.
// функція повертає кількість повторюваності переданого числа в масиві
// якщо даного числа там не має, функція повертає текст
// "Даного числа в масиві немає!"

const numbers = [1, 2, 5, 6, 5, 2, 1, 3, 4, 5, 6, 8, 2, 1, 55, 5, 2, 3]


function getRepetitionOFNumber(numbersArr, number) {
   let couner = 0;
    for (item of numbersArr) {
    if (item === number) {
        couner++;

    }
   }
    return couner > 0 ? couner : alert("Даного числа в масиві немає!");
};


console.log(getRepetitionOFNumber(numbers, 11));