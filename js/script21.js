// 'async await' construction

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/4')
    .then(response => response.json())
    .then(user => user);
}


/* function sayHello() { // функція викликає проміс, а потрібно достукаись до елемента
    const user = fetchUser()
    console.log(user);
    //alert(`Hello, ${user.name}`)
} */



/* function sayHello() { 
    fetchUser().then(data => {
        alert(`Hello, ${data.name}!`);
    });
}
sayHello(); */


/* async  function sayHello() { 
    const user = await fetchUser();
    //console.log(user);
    alert(`Hello, ${user.username}!`);
}
sayHello(); */

async  function sayHello() { 
    try {
        const user = await fetchUser();
        //console.log(user);
        alert(`Hello, ${user.username}!`);
    } catch (error) {
        alert(error.message);
    }
    
}
sayHello();