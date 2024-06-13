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