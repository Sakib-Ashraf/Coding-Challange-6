// Coding Challenge 6

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const cleanRoomArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sorted = cleanRoomArray.sort((a,b) => a - b);

let finallyCleaned = [];

let tempCleaned = [];

sorted.forEach((value, i) => {
    if (value === sorted[i + 1]) {
        tempCleaned.push(value);
    } else if (value === sorted[i - 1]) {
        tempCleaned.push(value);
        finallyCleaned.push(tempCleaned);
        tempCleaned = [];
    } else {
        finallyCleaned.push(value);
    }
    return;
});

console.log("Final Result", finallyCleaned);