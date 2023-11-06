// Prototypes

/* function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Vlad", 25)
const user2 = new User("Oksana", 26)

console.log(user1);

console.log(user1.__proto__ === User.prototype); */


/* function LotteryCard(index, isWinning) {
    this.index = index;
    this.isWinning = isWinning;
}

LotteryCard.prototype.hendleTry = function (attemp, square, squareContainer) {
    if (this.isWinning) {
        alert("Congrats! You have won!");
        square.classList.add("square-correct");
    } else {
        if (attemp === 3) {
            alert("Sorry, it was your last turn");
            squareContainer.innerHTML = null;
            return;
        }
        alert("Sorry, try one more time!");
        square.classList.add("square-wrong");
    }
}; */
/* const card1 = new LotteryCard(1, false)
const card2 = new LotteryCard(2, false)
const card3 = new LotteryCard(3, false)

console.log(card1.__proto__.testValue);
console.log(card2.__proto__.testValue);
console.log(card3.__proto__.testValue); */


/* const cards = [
    new LotteryCard(8, true),
    new LotteryCard(4, false),
    new LotteryCard(6, false),
    new LotteryCard(3, false),
    new LotteryCard(9, false),
    new LotteryCard(7, false),
    new LotteryCard(5, false),
    new LotteryCard(1, false),
    new LotteryCard(2, false),
];

function renderSquares(squares) {
    let attemp = 0;
    const squareContainer = document.querySelector(".squares-container");
    squares.forEach((item) => {
        const square = document.createElement("div");
        const squareIndex = document.createElement("h4");
        squareIndex.innerHTML = item.index;
        square.appendChild(squareIndex);
        square.classList.add("square");
        square.addEventListener("click", () =>
            item.hendleTry(++attemp, square, squareContainer)
        );
        squareContainer.appendChild(square);
    });
}
renderSquares(cards); */

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.hello = "hello";

const user1 = new User("Vlad, 27");

console.log(user1);
console.log(user1.hello);

console.log(Object.prototype.someDumpValue = "Vlad");
console.log([].someDumpValue);
console.log("".someDumpValue);
const test = 10;
console.log(test.someDumpValue);