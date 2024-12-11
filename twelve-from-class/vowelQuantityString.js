// counts quantity of vowels in user input
// always counts 'y' as a vowel

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function countVowels (str) {
    let counter = 0;
    for (item of str) {
        let lowerCaseItem = item.toLowerCase();
        if (lowerCaseItem === "a" ||
            lowerCaseItem === "e" ||
            lowerCaseItem === "i" ||
            lowerCaseItem === "o" ||
            lowerCaseItem === "u" ||
            lowerCaseItem === "y"
         ) {
            counter++;
         }
    }
    console.log(`your input contains ${counter} vowels`)
}

rl.question("This program counts vowels \n Enter something, or just push some keys and hit enter: ", (input) => {
    countVowels(input);
    rl.close();
});