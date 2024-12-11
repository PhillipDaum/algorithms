// prints a multiplication table of a size the user enters in the terminal

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printTable(num) {
    let bigArr =[]
    let counter = 0;
    while (counter <= num) {
        if (counter === 0) {
            let arr = [];
            for (let i = 0; i <= num; i++) {
                arr.push(i);
            }
            let answer = arr.join(' ');
            bigArr.push(answer);
        } else {
            let arr = [];
            arr.push(counter);
            for (let i = 1; i <= num; i++) {
                arr.push(i*counter)
            }
            let answer = arr.join(' ');
            bigArr.push(answer);
        }
        counter++;
    }
    let bigAnswer = bigArr.join('\n');
    console.log(bigAnswer)
}

function interface() {
    rl.question("how big of a multiplication table do you want: ", (input) => {
        let numberInput = Number(input);
        if (isNaN(numberInput) || numberInput < 0 || numberInput > 50 || !Number.isInteger(numberInput)) {
            console.log("must enter an integer that is between 0 and 50, please try again.")
            interface();
        } else {
            printTable(numberInput);
            rl.close();
        }
    })
}
interface();