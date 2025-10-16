function createUser(name, age) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name, age });
        }, 1500);
    });
}

createUser("Lazizbek", 18)
    .then(console.log);