// prints the highest number in an array
const randomArr = Array.from({ length: 100 }, (_, index) => Math.floor(Math.random() * 300));

const max = (nums) => {
    let max = null;
    for (item of nums) {
        if (item > max) {
            max = item
        }
    }
    return max;
}

let answer = max(randomArr);
console.log(answer)