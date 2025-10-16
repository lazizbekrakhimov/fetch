const myPromise = new Promise((resolve) => {
    resolve([1, 2, 3, 4, 5]);
});

myPromise
    .then(console.log);