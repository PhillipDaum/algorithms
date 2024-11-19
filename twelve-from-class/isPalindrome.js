// takes in user input, returns if it is a palendrome or not
// removes all punctuation and spaces from input

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const isPalindrome = (str) => { 
    // make a copy, remove spaces and punctuation, put to lowercase, split into array of individual characters
    let plainCopy = str.replace(/\s+/g, "").replace(/[?.,;:'"!]/g, "").toLowerCase().split('');

    // split plainCopy in half, if its length is odd, disgard the middle character
    let len = plainCopy.length;
    let secondHalf = plainCopy.splice(Math.ceil(len/2));
    let firstHalf;
    if (len % 2 === 0) {
        firstHalf = plainCopy;
    } else {
       let missing = plainCopy.pop();
        firstHalf = plainCopy;
    }

    // if they match, tell user its a palindrome, if they do not, tell user it is not
    firstHalf.join('') === secondHalf.reverse().join('') ? 
        console.log(`"${str}" is a palindrome!`) : console.log(`"${str}" is NOT a palindrome!`);
}


rl.question("enter a word or phrase: ", (input) => {
    isPalindrome(input)
    rl.close();
})