function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve("Kattasiz (sizga mumkin)");
        } else {
            reject("Xatolik");
        }
    })
}

checkAge(17)
    .then(console.log)
    .catch(console.log);