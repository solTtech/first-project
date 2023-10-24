function getUserById(id) {
    const endpoint = 'https://jsonplaceholder.typicode.com'
    const result = {
        id,
        name: "",
        posts: []
    }
    return new Promise((resolve, reject) => {
        fetch(`${endpoint}/users`)
        .then(data => data.json())
        .then(user => {
            const foundUser = user.find(user => user.id === id)
            result.name = foundUser.name;
            fetch(`${endpoint}/posts`)
                .then(data => data.json())
                .then(posts => {
                    result.posts = posts.filter(post => post.userId === id)
                    resolve(result)
                })
        })
    })
    
};

getUserById(3).then(data => console.log(data))