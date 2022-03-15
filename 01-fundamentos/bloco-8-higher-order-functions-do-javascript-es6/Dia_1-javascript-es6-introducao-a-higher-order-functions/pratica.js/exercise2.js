const numberCheker = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    
    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lottery(3, numberCheker));
