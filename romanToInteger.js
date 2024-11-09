// takes in a string of roman numbers and returns an integer 
// this method works, but I think it is adding additional complexity
// due to the second check, how can I change this
// maybe I could also just do it by seeing if it is less than, if that one is less, then it can be subtracted.
/// I see why it isn't working! 


const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
const subs = {
    IV: 1,
    XL: 10,
    XC: 10,
    CD: 100,
    CM: 100,
}

let romanNum1 = "XXVII";
let romanNum2 = "MCMXCIV";

const convert = (str) => {
    /// loop over the string backwards
    /// save the previous element
    let prev;
    let sum = 0;
    for (let i = (str.length -1) ; i >=0; i--){
        console.log("roman", romans[str[i]]);
        let subtractor = str[i] + prev;
        console.log ("subtractor", subtractor)
        sum += romans[str[i]];
        console.log("sum", sum)
        if (subtractor in subs) {
            sum -= subs[subtractor];
            console.log("take away", sum)
        } /// how do I check to see if subs has this key
        prev = str[i];
    }
    return sum;
}
let answer = convert(romanNum2);
console.log(answer)