// convert cm to inches

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const centimetersToInches = (num) => num/2.54;

function convert () {
    rl.question("how many cm? ", (input) => {
        const numberInput = Number(input);
        if (isNaN(numberInput)) {
            console.log("must enter a number");
            convert()
        } else {
            console.log(centimetersToInches(numberInput));
            rl.close();
        }
    });
}

convert();