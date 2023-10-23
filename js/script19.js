// Promises

/* const promise = new Promise((resolve, reject) => {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
        resolve({ name: "Vlad", age: 18})
    } else {
        reject("Sorry, you are not logged in!")
    }
}) */

//promise.then((data) => console.log(data)).catch((error) => console.log(error));
//promise.catch((error) => console.log(error));

/* promise // ланцюгові виклики
    .then((data) => console.log(data))
    .catch((error) => console.log(error)) */

const promise = new Promise((resolve, reject) => {
     const isUserLoggedIn = true;
    if (isUserLoggedIn) {
         setTimeout(() => resolve("You are logged in!"), 1000)
     } else {
        setTimeout(() => reject("Sorry, you are not logged in!"), 1000)
    }
 })

promise 
    .then(data => {
        return new Promise((resolve, reject) => {
            if (5 < 10) {
                console.log(data)
                resolve(`${data} in promise 2`)
            } else {
                reject("error!!!")
            }
        })
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error))

console.log(promise);

promise.then()