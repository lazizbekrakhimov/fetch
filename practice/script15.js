function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello promise 1");
        }, 1000);
    });
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello promise 2");
        }, 2000);
    });
}

function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello promise 3");
        }, 3000);
    });
}

async function sequential() {
    const result1 = await promise1();
    console.log(result1);
    const result2 = await promise2();
    console.log(result2);
    const result3 = await promise3();
    console.log(result3);
}

sequential();