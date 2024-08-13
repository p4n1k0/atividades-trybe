const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (acc, number) => ((number % 2 === 0) ? acc + number : acc);
const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers));
