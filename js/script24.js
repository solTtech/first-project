//Фабричні функції. Функції-конструктори.
// factory / constructor


/* function createUsers (name, age, sex) {
    return {
        name,
        age,
        sex,
    }
}

const user1 = createUsers("Vlad", 16, "male");
const user2 = createUsers("Oksana", 10, "famale");
const user3 = createUsers("<Makar>", 3, "male");
const user4 = createUsers("Ivan", 5, "male");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4); */ //це синтаксис фабричних функцій


function CreateUsers(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const user1  = new CreateUsers("Vlad", 16, "male");
const user2  = new CreateUsers("Oksana", 10, "famale");
const user3  = new CreateUsers("<Makar>", 3, "male");
const user4  = new CreateUsers("Ivan", 5, "male");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);