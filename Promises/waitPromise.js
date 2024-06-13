function wait(ms) {
    return new Promise(function (resolve, reject) {
        if (ms <= 0) {
            reject(new Error("Cannot wait 0 seconds or less than 0"));
            return;
        }

        setTimeout(() => {
            resolve();
        }, ms);
    })
}

wait(1000).then(function () {
    console.log("we have waited 1 second!");
}).catch(function (error) {
    console.log(`There was an error: ${error.message}`);
})