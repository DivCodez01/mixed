function divide(a, b) {
    return new Promise(function (resolve, reject) {
        if (b === 0) {
            // reject("You cannot divide by 0!");
            reject(new Error("You cannot divide by 0!"));
            return;
        }
        resolve(a / b);
    })
}

divide(10, 0).then(function (result) {
    console.log(`Division Success: ${result}`);
}).catch(function (error) {
    console.log("There was an error with the division");
    console.log(error);
});