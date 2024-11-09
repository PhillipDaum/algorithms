// Binary search algorithm
const arr = Array.from({ length: 100 }, (_, index) => index * 2 + Math.floor(Math.random() * 3));

const binarySearch = (nums, x) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === x) {
            return `Found it`;
        } else if (nums[mid] > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return `not found`;
}

console.log(arr);
let answer = binarySearch(arr, 15);
console.log(answer);
