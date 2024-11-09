arr = ["flower","flow","flight"]

const findPrefix = (strs) => {
    let commonPrefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        if (strs.every( word => word[i] === char )) {
            commonPrefix += char
        } else {
            break
        }
    }
    return commonPrefix
}
let answer = findPrefix(arr);
console.log(answer)