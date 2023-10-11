// closures

const firstName = "Vladyslav";

function sayHello() {
    const lastName = "Soltys";
    return function () {
        console.log(firstName);
        console.log(lastName);
    };
}


// const testFunction = sayHello();
// testFunction();

sayHello()();

let weGo = "Let's go";

function hiGo() {
    console.log(weGo);
};
weGo = "Stop";

hiGo();