const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Lazizbek Rahimov");
    }, 1000);
});

myPromise.then(console.log);