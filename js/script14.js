// const users [...]

function sayHello() {
    console.log("hello");
};

const sayHello2 = () => {
    console.log("hello2");
}

function sayHelloToPerson(name) {
    console.log("hello, " + name);
};

const sayHelloToPerson2 = name => {
    console.log("hello, " + name + "!"); 
};

function summ(a, b) {
    console.log(a + b);
};

/* const summ2 = (a, b) => {
    //console.log(a + b);
    return a + b;
}; */

const summ2 = (a, b) => a + b;


sayHello();
sayHello2();
sayHelloToPerson2("Vladyslav");
//summ2(10, 20);
console.log(summ2(20, 30));