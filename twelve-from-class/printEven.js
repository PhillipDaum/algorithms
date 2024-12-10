// prints even numbers from an array 

const readline = require('readline');

let userArr;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function createArray () {
    rl.question("how big of an array do you want? ", (input) => {
        let numberInput = Number(input);
        if (isNaN(numberInput)) {
            console.log("entry must be a number, try again")
            createArray();
        } else {
            arr = Array.from({length: numberInput}, (_, index) => Math.floor(Math.random()*index));
            console.log("Here is your array", arr)
        }
    });
} 

function printEvens (arr) {
    rl.question("would you like to print a string of all of the even numbers from your array? ", (input) => {
        // will take y, n, yes, or no
        // remove all caps, 
        let processedInput = input.toLowerCase;
        console.log(processedInput)
    });
}

function printEven () {
    console.log("is there?", userArr)
    createArray();
    printEvens(userArr);
}

printEven();