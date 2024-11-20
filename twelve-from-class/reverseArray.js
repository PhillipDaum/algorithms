// reverse and array
const arr = Array.from({length: 100}, (_, index) => index); 

const reverse = (nums) => nums.reverse();

let answer = reverse(arr);
console.log(answer)