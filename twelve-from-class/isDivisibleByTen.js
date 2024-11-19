// takes a number as an input and returns a boolean if is divisible by 10

// imports readline module 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter a number: ", (input) => {
    let x = parseInt(input);
    x % 10 === 0 ? console.log(`${x} is divisible by 10`) : console.log(`${x} is not divisble by 10`);
    rl.close();
})


