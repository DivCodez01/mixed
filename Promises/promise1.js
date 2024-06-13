// Promise = is an Object that manages asynchronous operations.
//           wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. cLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback()
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log('You clean the kitchen 🧽');
//         callback()
//     }, 2500);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log('You take out the trash ♻');
//         callback()
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log('you finished the work!')
//         })
//     })
// })

function walkDog() {

    return new Promise((resolve, reject) => {

        const moveDog = false;

        setTimeout(() => {

            if (moveDog) {
                resolve("you walk the dog 🐕");
            } else {
                reject(new Error('You are not finish the work'));
            }
        }, 1500);
    })
}

function cleanKitchen(callback) {

    return new Promise((resolve, reject) => {

        const cleanYourKitchen = true;

        setTimeout(() => {
            if (cleanYourKitchen) {
                resolve("You clean the kitchen 🧽");
            } else {
                reject('You are not finished the work');
            }
        }, 1500);
    })
}

function takeOutTrash(callback) {

    return new Promise((resolve, reject) => {

        const takeYourTrash = false;

        setTimeout(() => {
            if (takeOutTrash) {
                resolve("You take out the trash ♻");
            } else {
                reject('You are not finished the work');
            }
        }, 1500);
    })
}

cleanKitchen()
    .then(out1st => { console.log(out1st); return takeOutTrash() })
    .then(out2nd => { console.log(out2nd); return walkDog() })
    .then(out3rd => { console.log(out3rd); console.log('you finished the work!') })
    // .catch(error => console.log(error.name));
    .catch(error => console.log(error.message));