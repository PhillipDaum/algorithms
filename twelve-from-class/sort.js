//sort ascending

const arr = Array.from({length: 100}, (_, index) => Math.floor(Math.random()*256));
console.log(arr)

const sort = (nums) => nums.toSorted((a, b) => b - a);

let answer = sort(arr);
console.log(answer)