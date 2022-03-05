const fatorial = number => {
    let resultado = 1;

    for (let i = 2; i <= number; i += 1) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(7));

//recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(7));

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

console.log(longestWord('Antonio foi no banheiro e nao sabemos o que aconteceu'));

//recursiva
const maiorPalavra = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));