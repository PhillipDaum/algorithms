const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// requires an array in numerical order
const arr = Array.from({length: 100}, (_, index) => index*2 + Math.floor(Math.random()*3));


// finds num in arr, if it is there and arr is in numerical order
function binarySearch (num, arr) {
    let start = 0;
    let end = arr.length -1;

    while (start < end) {
        let mid = Math.floor((start + end)/2);
        if (num === arr[mid]) {
            console.log(`Eureka! your number ${num} is in the array at index ${mid}`)
            rl.close()
        } else if (num > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }
    console.log(`alas it ain't here`)
    rl.close();
}

function pickNumber () {
    rl.question("enter an integer between 0 and 1000: ", (input) => {
        let userNumber = Number(input);
        if (isNaN(userNumber) ||
            userNumber < 0 ||
            userNumber > 1000 ||
            !Number.isInteger(userNumber)) {
                console.log("your number does not fit the qualifications, please try again: ")
                pickNumber()
            } else {
        binarySearch(userNumber, arr);
            }
    })
}

function ui () {
    rl.question("Would you like to search the random array for you number? ", (input) => {
        let userInput = input.toLowerCase();
        if (userInput === "y" || userInput === "yes") {
            pickNumber()
        } else if (userInput === "n" || userInput === "no") {
            console.log("okay bye")
            rl.close();
        } else {
            console.log("must respond yes or no, please try again")
            ui()
        }
    })
}
ui();