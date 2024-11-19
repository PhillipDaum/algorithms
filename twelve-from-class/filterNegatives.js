// filters all negative numbers from an array
const arr = Array.from({length: 100}, (_, index) => {
    let modifier = Math.floor(Math.random()*3);
    let num = Math.floor(Math.random()*256);
    modifier === 1 ? num = -num : num = num;
    return num;
});

const filterNegs = (nums) => nums.filter((x) => x >=0);

function filterNegsLong(nums) {
    let noNegs = [];
    for (item of nums) {
        if (item >= 0) {
            noNegs.push(item)
        }
    }
    return noNegs;
}

let answer = filterNegs(arr);
console.log("less code", answer)

let alsoAnswer = filterNegsLong(arr);
console.log("more code", alsoAnswer)
