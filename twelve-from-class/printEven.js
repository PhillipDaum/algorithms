// prints even numbers from an array

const readline = require("readline");

let userArr;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printEvens = (arr) => arr.filter((num) => num % 2 === 0).join(", ");

function doYouWantToPrint(arr) {
  rl.question(
    "would you like to print a string of all of the even numbers from your array? ",
    (input) => {
      let processedInput = input.toLowerCase();
      if (processedInput === "y" || processedInput === "yes") {
        console.log("here ya go! \n", printEvens(arr));
        rl.close();
      } else if (processedInput === "n" || processedInput === "no") {
        console.log("okay bye");
        rl.close();
      } else {
        console.log("must enter 'yes' or 'no'");
        doYouWantToPrint(userArr);
      }
    }
  );
}

function createArray() {
  rl.question("how big of an array do you want? ", (input) => {
    let numberInput = Number(input);
    if (isNaN(numberInput)) {
      console.log("entry must be a number, try again");
      createArray();
    } else {
      userArr = Array.from({ length: numberInput }, (_, index) =>
        Math.floor(Math.random() * index)
      );
      console.log("Here is your array", userArr);
      doYouWantToPrint(userArr);
    }
  });
}

createArray();
