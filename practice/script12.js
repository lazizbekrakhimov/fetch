const promises = [
    new Promise((resolve) => setTimeout(() => resolve("1"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("2"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("3"), 3000))
];

Promise.race(promises).then(console.log);