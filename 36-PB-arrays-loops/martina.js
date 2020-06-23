//6. **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. 
function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) { 
            // we don't have it already
            newArray.push(array[i]); 
            // we push it once! 
        }
    }
    return newArray;
}
console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]

const repeatIt = (item, times) => {
    let repeat = [];
    for (let i = 0; i < times; i++) {
        repeat.push(item);
    }
    return repeat;
};
console.log(repeatIt("example", 3));