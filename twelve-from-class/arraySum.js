// returns sum of all items in an array
const randomArr = Array.from({length: 100}, () => Math.floor(Math.random()*500));

/// long way
const extendedSum = (nums) => {
    let sum = null;
    for (item of nums) {
        sum += item
    }
    return sum;
}

/// short way
const quickSum = (nums) => nums.reduce((sum, partialSum) => sum + partialSum);

let answer = extendedSum(randomArr);
let alsoAnswer = quickSum(randomArr);
console.log("long:", answer)
console.log("short:", alsoAnswer)