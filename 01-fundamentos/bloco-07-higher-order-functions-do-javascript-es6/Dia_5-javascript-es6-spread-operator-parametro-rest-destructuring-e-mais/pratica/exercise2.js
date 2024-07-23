const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(4, 7, 8, 9, 60));