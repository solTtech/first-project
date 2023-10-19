/* // string
// number
// boolean
// null
// undefined
// bigInt
// symbol


let number = 10;
let number2 = number;

number = 50;

console.log(number2);
console.log(number);

// Stack number = 10 - комірка стек, 
// де відразу зберігаються дані по число 10


// object

const obj1 = {
    name: "Vladyslav",
    age: 15,
};

const obj2 = obj1;

obj1.age = 30;
obj1.name = "Makar";

console.log(obj1);
console.log(obj2);
 */
// Heap
// у випадку з об'ктами, у СТЕКУ створюється посилання
// на значення об'єкта (з його унікальною назвою) в HEAP (ХІП) і при кожному такому  
// створенні об'єкта - створються нове таке посилання

const groupA = [
    "«Верес» Рівне «Авангард»",
    "«Ворскла» Полтава «Ворскла» ім. Олексія Бутовського",
    "«Динамо» Київ «Динамо» ім. Валерія Лобановського",
    "«Дніпро-1» Дніпро «Дніпро-Арена»",
    "«Полісся» Житомир Центральний",
    "«Нафтовик» Охтирка (Сумська область) «Нафтовик»",
];

/* const newArr = [...groupA]; //спред оператор - забирає значення масиву

function createTeamsForCalendarPage(teams) {
    teams.forEach((item, index) => {
        const onlyClubName = item.split(" ")[0];
        teams[index] = onlyClubName
    });
    return teams;
};

console.log(createTeamsForCalendarPage(newArr));
console.log(groupA); */


function createTeamsForCalendarPage(teams) {
    return teams.map(item => item.split(" ")[1]);
};

console.log(createTeamsForCalendarPage(groupA));
console.log(groupA);