// Promise = is an Object that manages asynchronous operations.
//           wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. cLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog 🐕");
        callback()
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log('You clean the kitchen');
        callback()
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log('You take out the trash');
        callback()
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log('you finished the work!')
        })
    })
})