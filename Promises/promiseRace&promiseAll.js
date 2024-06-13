const recoreVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recoreVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recoreVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.race([
    recoreVideoOne,
    recoreVideoTwo,
    recoreVideoThree
]).then((message) => {
    console.log(message)
})

Promise.all([
    recoreVideoOne,
    recoreVideoTwo,
    recoreVideoThree
]).then((messages) => {
    console.log(messages)
})