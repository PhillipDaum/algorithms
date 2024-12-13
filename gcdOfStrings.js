// finds the greatest common divisor between two strings
let a = "ABABAB";
let b = "ABAB";
let c = "LEET";
let d = "CODE";

const gcdOfStrings = (str1, str2) => {
    // first make sure they aren't an empty string
    if (str1 === '' || str2 === '') return '';
    // first see if they can even work
    if (str1 + str2 !== str2 + str1) return '';
    // then, find the gdc of the numbers
    // first find the lengths
    let a = str1.length;
    let b = str2.length;
    // find the longer one
    let long = a >= b ? a : b;
    let short = long === a ? b : a;
    let thing = long % short;
    console.log(thing)
}

let answer = gcdOfStrings(a,b);
console.log(answer)