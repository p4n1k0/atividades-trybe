let word = 'tryber';

let novaPalavra = "";    //vai receber a nova palavra.

for(let index = 0; index < word.length; index += 1){ // percorre cada letra de nossa primeira variável
    novaPalavra += word[word.length - 1 - index]; // variavel vazia recebe a palavra trybe inverso.
}

console.log(novaPalavra);  //imprime a nova palavra 