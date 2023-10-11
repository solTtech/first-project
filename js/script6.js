// Масиви

// const usersArr = new Array("user1", "user2");

/* const usesArr = ["Mike", "Nikol", "Petro"];
console.log(usesArr);
*/
/*
const subscribers = [
    {name1: "Mike", name2: "Nikol", name3: "Petro"},
    {age1: 20, age2: 30, age3:40},
    {name1: "user1", age: 11, profession: "lawer"}
];
// console.log(usesArr[1]);
  
const haveYouJustGotNewSubscriber = true;
  
  if (haveYouJustGotNewSubscriber) {
    // subscribers.unshift({hobby: "Footboll", age: 20}) додає елемент на перед масиву
   // subscribers.push({hobby: "Footboll", age: 20}), // додає елемента в кінець масиву
   // subscribers.pop(), // видаляє останній елемент масиву
  //  subscribers.shift() // видаляє перший елемент масиву
    subscribers.splice(2, 0, "new string"); // додає, заміняє елемент у масиві
}
  console.log(userInfo.length);
  */

/* let congratsIfMoreThan100 = userInfo.length;

  if (congratsIfMoreThan100 = 1) {
    alert("Welcome with your achievement!!!");
  };
  */
  const userInfo = [
    {firsName: "Mike", lastName: "Soltys", age: 11, hobby: "hoсkey"},
    {firsName: "Mike", lastName: "Soltys", age: 12, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 13, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 14, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 15, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 16, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 17, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 18, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 19, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 20, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 21, hobby: "hockey"},   
    {firsName: "Mike", lastName: "Soltys", age: 22, hobby: "hockey"}
];
 console.log(userInfo.length);
 function congratsIfMoreThan100(arr) {
    if (arr.length) {
        alert("Welcome to the team, you are too famous!!!");
        alert(arr.length);
    } else {
        alert("Not enought, you are looser!");
    }
    };
 congratsIfMoreThan100(userInfo);
 console.log(typeof(congratsIfMoreThan100));