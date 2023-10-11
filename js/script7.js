/* JS loops:
- for
- for of
- for in
- while
- do while
*/

const userInfo = [
    {name: "Pavlo", isCloseFriend: false},
    {name: "Petro", isCloseFriend: true},
    {name: "Vlad", isCloseFriend: true},
    {name: "Halyna", isCloseFriend: false},
    {name: "Dmytro", isCloseFriend: true},
    {name: "Yevgen", isCloseFriend: false},
    {name: "Myhaylo", isCloseFriend: true},
    {name: "Olexandr", isCloseFriend: true},
    {name: "Riko", isCloseFriend: false}
]
/*
for(let i = 0; i < userInfo.length; i++) {   // пробігатися по елементам
    console.log(userInfo[i])
}


for (const item of userInfo) {  // пробігатися по елементам
    console.log(item);

}
*/

const obj = {
    name: "Vlad",
    age: 28,
    sex: "male",
    nation: "Ukranian",
    hobby: "football"
}

// for (const key in obj) {
//    console.log(obj[key]);  // пробігатися по ключам або значеннях
// }
 
/*
let i = 0;
while (i < userInfo.length) {
    console.log(userInfo[i]);
    i++;
}
*/


const luckyNumber = [
    13, 43, 32, 4565, 323, 21, 
    23, 4, 64, 34, 55, 11, 6432, 3321
];

//console.log(luckyNumber);
/*
function squareArr(arr) {  // через функцію "for in", піднесення значення елементів масиву
    for (const i in arr) {
        arr[i] *= arr[i];
        console.log(arr[i]);
    }
}
squareArr(luckyNumber);
*/

function sqareAdd(add) {
    for (let i = 0; i < add.length; i++) {
        add[i] *= add[i]
    }
    return add
};

console.log(sqareAdd(luckyNumber));
console.log(sqareAdd(obj));