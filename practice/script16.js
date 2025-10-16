const numbers = [1, 2, 3, 4, 5];

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(numbers);
    }, 1000);
});

myPromise
    .then((nums) => {
        return nums.filter((num) => num % 2 === 0);
    })
    .then(console.log);