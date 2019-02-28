// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };
// console.log(squareArrow(5));

// exercise
// const fullName = "Mike smith";
// let fName;

// const firstName = (name) => {
//    let fName = name.split(" ")[0];
//     return fName;
// };

// const firstName = (name) => fName = name.split(" ")[0];

// console.log(firstName(fullName)); 

// Challenge area
const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * 2);
    }
};
console.log(multiplier.multiply());