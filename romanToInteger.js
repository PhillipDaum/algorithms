// takes in a string of roman numbers and returns an integer 

const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let romanNum1 = "XXVII";
let romanNum2 = "MCMXCIV";

const convert = (str) => {
    let prev = 'I';
    let sum = 0;
    for (let i = (str.length -1) ; i >=0; i--){
        romans[str[i]] >= romans[prev] ? sum += romans[str[i]] : sum -= romans[str[i]];
        prev = str[i];
    }
    return sum;
}
let answer = convert(romanNum2);
console.log(answer)