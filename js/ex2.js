console.log("Piersol's Output from HW 5 Example 2");

let numbers = [1,2,3,4,5,6,7,8,9,10]
let oddNumbers = numbers.filter (x => x % 2 === 0)
let numbersDivisibleBy2or5 = numbers.filter (x => x % 2 === 0 || x % 5 === 0)
let numbersDivisibleby3Squared = numbers.filter (x => x % 3 === 0).map(x => x ** 2)
let numbersSum = numbers.filter(x => x % 5 === 0).map(x => x ** 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log (oddNumbers)
console.log (numbersDivisibleBy2or5)
console.log (numbersDivisibleby3Squared)
console.log (numbersSum)