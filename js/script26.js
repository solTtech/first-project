// this keyword

// 1
// console.log(this);

// 2 
/* function showThis() {
    console.log(this);
}
showThis(); */

// 3

/* const obj = {
    showThis() {
        console.log(this);
    },
};
obj.showThis(); */

// 4 

/* function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
}
const person1 = new Person("Vlad");
console.log(person1);
person1.sayHello(); */

// 5
/* class Person {
    constructor(name) {
        this.name = name;
    }
    showThis() {
        console.log(`Hello, my dear ${this.name}!`);
    }
}
const person1 = new Person("Vlad")
person1.showThis();
 */

// 6 
/* const obj = {
    sayHello() {
        function inner() {
            console.log(this);
        };
        inner();
    },
    sayHelloArrow() {
        const inner = () => {
            console.log(this);
        };
        inner();
    },
};
obj.sayHello();
obj.sayHelloArrow(); */

// 7 
/* const obj1 = { name: "Vlad" };

const obj2 = {
    sayHello(a, b, c) {
        console.log(a, b, c);
        console.log(this.name);
    },
};

// obj2.sayHello();
obj2.sayHello.call(obj1);
obj2.sayHello.apply(obj1, [1,2,3,4]); */

// 8

const obj1 = { name: "Vlad" };
function sayHello() {
    console.log(this.name);
}
sayHello.bind(obj1);
const updatedContextSayHello = sayHello.bind(obj1);
updatedContextSayHello();
