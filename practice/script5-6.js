Promise.resolve(10)
    .then((result) => {
        return result * 2;
    })
    .then((result) => {
        return result + 5;
    })
    .then((result) => {
        console.log(result);
    });