// linear search algorithm
const randomArr = Array.from({ length: 100 }, (_, index) => Math.floor(Math.random() * 300));
const orderedArr = Array.from({ length: 100 }, (_, index) => index * 2 + Math.floor(Math.random() * 3));

const linearSearch = (nums, x) => {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === x) {
            return `the array contains ${x}`
        }
    }
    return -1
}

let answer = linearSearch(randomArr, 4)
console.log(answer)