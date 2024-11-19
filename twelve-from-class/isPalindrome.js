// takes in user input, returns if it is a palendrome or not
// removes all punctuation and spaces

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const isPalindrome = (str) => { 
    // make a copy that is plain and an array
    let plainCopy = str.replace(/\s+/g, "").replace(/\?.,;:'"!/g).toLowerCase().split('');

    // split it in half, if its not even take out the middle, it can be discarded actually
    let firstHalf;
    let secondHalf; // it can just be Math.ceil because it will work
    let len = plainCopy.length;

    // if its even split them evenly
    if (len % 2 === 0) {
        secondHalf = plainCopy.splice(0, (len/2));
    }

    console.log(secondHalf)
    /// if its odd, take out the middle, then split evenly



}


rl.question("enter a word or phrase: ", (input) => {
    isPalindrome(input)
    rl.close();
})