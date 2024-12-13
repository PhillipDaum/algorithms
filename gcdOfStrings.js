// finds the greatest common divisor between two strings

let a = "ABABAB";
let b = "ABAB";
let c = "LEET";
let d = "CODE";


// Euler's algorithm
function gdc (a,b) {
    if (b === 0)
        return a;
    else 
     return  gdc (b, (a % b))
}


const gcdOfStrings = (str1, str2) => {
    // first see if they can even work
    if (str1 + str2 !== str2 + str1) return '';
    // then, find the gdc of the numbers 
    let x = str1.length;
    let y = str2.length;
   console.log(gdc (x, y));
}

gcdOfStrings(a,b);