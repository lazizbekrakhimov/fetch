const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello promise");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});