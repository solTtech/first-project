const obj1 = {
    name1: "Vladyslav",
    age: 28,
    favouiteFood: {
        sweet: "chocolate",
        salty: "pizza",
        spaci: "horseradish",
    },
    sayHello1() {
        console.log("hello");
    },
};


//const obj2 = {...obj1};
//const obj2 = Object.assign({}, obj1);
//const obj2 = JSON.parse(JSON.stringify(obj1));
//lodash
const obj2 = _.cloneDeep(obj1);




obj2.name1 = "Makar";
obj2.age = 40;

obj2.favouiteFood.sweet = "caramel";

console.log(obj1);
console.log(obj2);


const arr1 = [
    {
        sweet: "chocolate",
        salty: "pizza",
        spaci: "horseradish",
        sayHello() {
            console.log("hello");
        },
    },
    {
        sweet: "caramel",
        salty: "potate",
        spaci: "sauce",
    },
    {
        sweet: "nooga",
        salty: "soup",
        spaci: "paprika",
    },
];

//const arr2 = [...arr1];

//const arr2 = JSON.parse(JSON.stringify(arr1));

const arr2 = _.cloneDeep(arr1);

arr2.push({
    sweet: "marshmellou",
    salty: "pasta",
    spaci: "cheepse",
});

arr2[0].sweet = "mouse";

console.log(arr1);
console.log(arr2);
