const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello world");
    }, 1000);
});

myPromise
    .then((message) => {
        console.log(message);
        return "Hello JS";
    })
    .then((message) => {
        console.log(message);
        return "Hello React";
    })
    .then((message) => {
        console.log(message);
    });