// sorts a random array from lowest to highest

const randomArr = Array.from({length: 100}, (_, index) => Math.floor(Math.random()*153));
console.log("the array:", randomArr)

//less code
const findMin = (arr) => Math.min(...arr);
let theMin = findMin(randomArr);
console.log("less code:", theMin)


/// could use two pointers or removing the element from the array 

//more code
const alsoFindMin = (arr) => {
    let min = Infinity;
    for (item of arr) {
        if (item < min) {
            min = item
        }
    }
    return min;
}
let min = alsoFindMin(randomArr);
console.log("more code:", min)


// one way
const selectionSort = (nums) => {
    let sortedArr = [];
    while(nums) {
        let min = findMin(nums); // or alsoFindMin(nums)
        sortedArr.push(min)
    }
    return sortedArr
} 

// let answer = selectionSort(randomArr);
// console.log(answer)

