// print a multiplication table of a size the user enters in the terminal

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str = "1 2 3 4 5 \n 2 4 6 8 10";

const printTable = (num) => {
    // create an array
        // the length is the num^2 + num -1 
        // when you get to num add \n
        // then do the same thing * 1++ until you get to num 
    // join it into a string, with spaces
    // console.log the string
}

// do try catch here later
rl.question("how big of a multiplication table do you want: ", (input) => {
    printTable(input);
    rl.close();
})