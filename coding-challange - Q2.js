// Coding Challenge 6

//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const cleanRoomArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let adder = [];
let adderPair = [];

const findAdder = (inputArray, targetedNumber) => {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] === targetedNumber) {
                // adder.push([inputArray[i], inputArray[j]]);
                adderPair.push([inputArray[i], inputArray[j]]);
                console.log(adderPair);
                adder.push(adderPair);
                adderPair = [];
            }
        }
    }
    console.log(adder);
};

findAdder(cleanRoomArray, 6);
