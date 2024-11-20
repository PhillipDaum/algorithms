// remove spaces from a string

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const removeSpaces = (words) => words.replace(/\s+/g, "")

rl.question("enter a string to remove spaces: ", (input) => {
    console.log(removeSpaces(input));
    rl.close();
});