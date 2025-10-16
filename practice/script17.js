const myPromise1 = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve("Hello promise");
    }, 1000);
})

const myPromise2 = new Promise((_resolve, reject) => {
    setTimeout(() => {
        reject("Promise timeout");
    }, 3000);
})

Promise.race([myPromise1, myPromise2])
    .then(console.log)
    .catch(console.error);