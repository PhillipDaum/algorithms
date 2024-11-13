// prints the highest number in an array
const randomArr = Array.from({ length: 100 }, (_, index) => Math.floor(Math.random() * 300));

// longer
const max = (nums) => {
    let max = null;
    for (item of nums) {
        if (item > max) {
            max = item
        }
    }
    return max;
}

// shorter 
const shortMax = (nums) => Math.max(...nums);

let answer = max(randomArr);
let alsoAnswer = shortMax(randomArr)
console.log(alsoAnswer)
console.log(answer)