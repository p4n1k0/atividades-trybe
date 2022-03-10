function employeeGenerator (fullname) {
    const email = fullname.toLowerCase().replace(/ /g, '_');
    
    return {
        fullname,
        email: `${email}@trybe.com`
    };
};

function newEmployees(callback) {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(employeeGenerator)); 


function numberChecker (myNumber, number) {
    if (myNumber === number) {
        return 'Lucky day, you won!';
    }
    if (myNumber !== number) {
        return 'Try Again!';
    }
}

function lotteryResult (myNumber, callback) {
    const number = Math.floor((Math.random() * 5) + 1);

    console.log(number);
    return callback(myNumber, number);
}

console.log(lotteryResult(2, numberChecker));


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
function compareAnswers (rigthAnswer, studentAnswer) {
    if (rigthAnswer === studentAnswer) {
        return 1;
    }
    if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

function countPoints (rigthAnswers, studentAnswers, callback) {
    let count = 0;
    for (let i = 0; i < rigthAnswers.length; i += 1) {
        const callbackReturn = callback(rigthAnswers[i], studentAnswers[i]);
        count = count + callbackReturn;
    }
    return `Resultado final: ${count} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
