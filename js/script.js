let greetingsSolt = 'Welcome Soltech';

console.log(greetingsSolt);
// Data types (primitive);

// String
const soltech2 = 'Hi my friend';
console.log(typeof soltech2);

// Number
const num = 222;
console.log(typeof num);

// Boolean
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);
console.log(typeof boolFalse);

// Null

const someNullValue = null;
console.log(someNullValue);

// underfined

const someUndefinedfValue = undefined;
console.log(someUndefinedfValue);

/*const name = 'Vlad';
const age = 26;
const gender = 'male';
*/

// object


/*const obj2 = new Object();
const obj3 = {};
console.log(typeof obj);
console.log(typeof obj2);
console.log(typeof obj3);
*/
//1
const obj = {
    name: 'Vlad',
    age: 26,
    gender: 'male'
};
console.log(obj)
//2
const obj1 = {};
obj1.name = 'Vlad';
obj1.age = 26;
obj1.gender = 'male';

console.log(obj1)

//3
const obj2 = {};
obj2['Name'] = 'Vlad';
obj2['age'] = 26;

obj2.age = 34;
console.log(obj2.age);

// Big Int
const bigInt = BigInt('99999999999999999999999999');
const bigInt2 = 99999999999999999999999999n;
console.log(typeof bigInt);
console.log(bigInt);
console.log(typeof bigInt2);
console.log(bigInt2);

//console.log(9999999999999999999999999999999);
console.log(Number.MAX_SAFE_INTEGER);

// Sumbol

const user = {
    id: 45,
    age: 49,
    height: 180
}

const id = Symbol('soltexh2');
user[id] = 158;

console.log(user);