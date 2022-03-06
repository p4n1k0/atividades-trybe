//Parte 2
//Exercício 1 
const factorial = number => {
    let result = 1

    for (let i = 2; i <= number; i += 1) {
        result = result * i;
    }
    return result;
}

console.log(factorial(4));

//Bônus 
const fatorial = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;
console.log(fatorial(4)); 

//Exercício 2 

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }        
    }
    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


