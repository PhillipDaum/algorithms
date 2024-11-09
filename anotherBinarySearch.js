const arr = Array.from({ length: 100 }, (_, index) => index * 2 + Math.floor(Math.random() * 2));

const binarySearch = (nums, x) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        if (nums[mid] === x) return true;
        nums[mid] > x ? end = mid - 1 : start = mid + 1
    }
    return false
}

let answer = binarySearch(arr, 15);
console.log(answer)