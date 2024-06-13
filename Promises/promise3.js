const userLeft = false;
const userWatchingcatMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: ":("
            })
        } else if (userWatchingcatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "WebDevSimplified < Cat"
            })
        } else {
            resolve("Thumbs up and Subscribe");
        }
    })
}