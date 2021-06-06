// Coding Challenge 6
// BONUS PART 1.2

//Question 1 - Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const mixedArray = [1, "2", "4", "591", "392", 391, 2, "5", "10", 2, 1, "1", 1, 20, "20"];

let sortedNumber = mixedArray.filter((value) => {
    return typeof (value) === "number";
}).sort();
console.log(sortedNumber);

let sortedStrings = mixedArray.filter((value) => {
    return typeof (value) === "string";
}).sort();
console.log(sortedStrings);

let answer = ["Sorted number from the array is", [sortedNumber], "and Sorted strings from the array is", [sortedStrings]];

console.log(answer);