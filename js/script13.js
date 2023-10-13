// Array methods

const users = [
    {
        name: "Vladyslv",
        age: 28,
        sex: "male",
    },
    {
        name: "Petro",
        age: 55,
        sex: "male",
    },
    {
        name: "Oksana",
        age: 29,
        sex: "female",
    },
    {
        name: "Maka",
        age: 3,
        sex: "male",
    },
    {
        name: "Larysa",
        age: 52,
        sex: "female",
    },
];
/*
users.forEach(function(item, index) {
    console.log(item);
    console.log(index);
});
*/
/*
// method forEach
const count ={
    men: 0,
    women: 0
};

users.forEach(function (element, index) {
    element.sex === "male" ? count.men++ : count.women++;
});

console.log(count);
*/
/*
const adultsUsers = users.filter(function (element) {
    return element.age >= 18;
});
console.log(adultsUsers);
*/
const correctName = users.map(function (item) {
    return item.sex == "male" ? "Mr. " + item.name : "Mrs. " + item.name;
});
console.log(correctName);