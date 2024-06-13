// Promise = is an Object that manages asynchronous operations.
//           wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. cLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
    setTimeout(() => {
        console.log("You walk the dog 🐕");
    }, 1500);
}

function cleanKitchen() {
    setTimeout(() => {
        console.log('You clean the kitchen');
    }, 2500);
}