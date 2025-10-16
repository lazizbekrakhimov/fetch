const myPromise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello promise 1")
    }, 500);
});

const myPromise2 = new Promise((_resolve, reject) => {
    setTimeout(() => {
        reject("Hello promise 2")
    }, 1000);
});

const myPromise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello promise 3")
    }, 1500);
});

const myPromise4 = new Promise((_resolve, reject) => {
    setTimeout(() => {
        reject("Hello promise 4")
    }, 2000);
});

Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
    .then(console.log);