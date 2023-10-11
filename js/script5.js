// Functions

// const userName = "Vladyslav";
// const age = 24;
// const gender = "male";

/*
function sayHello(name, age, gender) {

    alert("Hello, dear " + name + "!")
    if (age > 25) {
        alert("You are too old!")
    }
    if (gender === "male") {
        alert("Welcome join to the team!")
    }

}
sayHello(userName, age, gender);
*/
/*
function newUserName(name) {
    const result = name.toUpperCase();
    return result;
}

// const userName = newUserName();
console.log(newUserName(userName));
*/

function sayHello(greetings) { // FUNCTION DECLARATION
    alert(greetings);
}

// sayHello("bonjour")


const sayHello2 = function(greetings) { // FUNCTION EXPRESSION
    alert(greetings);
}

const car = {
    speed: 100,
    color: "red",
    drive: function() {
        console.log("I love to drive more!")
    }
}
car.drive()