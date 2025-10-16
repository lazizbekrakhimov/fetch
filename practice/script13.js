const promise = new Promise((resolve) => {
    resolve(5);
});

promise
    .then((result) => {
        return result + 3;
    })
    .then((result) => {
        return result * 2;
    })
    .then((result) => {
        console.log(result - 10);
    });