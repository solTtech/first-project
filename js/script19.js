// Promises

const promise = new Promise((resolve, reject) => {
    const isUserLoggedIn = false;
    if (isUserLoggedIn) {
        resolve({ name: "Vlad", age: 18})
    } else {
        reject("Sorry, you are not logged in!")
    }
})

promise.then((data) => console.log(data)).catch((error) => console.log(error));
//promise.catch((error) => console.log(error));