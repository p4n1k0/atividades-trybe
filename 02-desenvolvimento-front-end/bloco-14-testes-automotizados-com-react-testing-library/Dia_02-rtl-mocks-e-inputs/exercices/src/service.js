const randomNumber = () => Math.floor(Math.random() * 101);
const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) => str.CharAt(0);
const thirdFunction = (str1,str2) => str1.concat(str2);

module.exports = { randomNumber, firstFunction, secondFunction, thirdFunction };