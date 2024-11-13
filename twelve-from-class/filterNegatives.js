// filters negatives from an array 

// makes array with negative numbers between -300 and 300
const randomArr = Array.from({length: 100}, (_,index) => {
    // do the random thing but make some negative 
    let num = index * Math.floor(Math.random()*300)
    if (Math.floor(Math.random()*5) > 3) {
        num = -num
    }
    return num
})
console.log(randomArr);


// longer way
const filterNegatives = (nums) => {
    let noNegs = [];
    for (item of nums) {
        if (item >= 0) {
            noNegs.push(item);
        }
    }
    return noNegs;
}

// shorter way
// ok, not quite, this returns a bunch of booleans!
const fastFilter = (nums) => nums.map((x)=> x >=0 );

let answer = filterNegatives(randomArr);
let alsoAnswer = fastFilter(randomArr);
console.log("one way:", answer);
console.log("another way", alsoAnswer);