const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;
console.log(fatorial(10));


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

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));