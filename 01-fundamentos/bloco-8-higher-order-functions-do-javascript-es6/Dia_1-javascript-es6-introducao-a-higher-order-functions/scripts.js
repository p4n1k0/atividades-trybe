const employeeGenerator = fullname => {
    const email = fullname.toLowerCase().replace(/ /g, '_');
    return {
        fullname, 
        email: `${email}@trybe.com` 
    };
};

const newEmployees = callback => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

console.log(newEmployees(employeeGenerator));


const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    
    return callback(myNumber, number) ? `Lucky day, you won!` : `Try Again!`;
};

console.log(lotteryResult(2, numberChecker));
