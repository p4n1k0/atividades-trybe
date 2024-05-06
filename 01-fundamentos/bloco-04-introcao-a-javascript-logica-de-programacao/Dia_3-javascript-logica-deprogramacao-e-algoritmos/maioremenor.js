let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];      // variável que irá receber a maior palavra dentro do array
let menorPalavra = array[0];     // variável que irá receber a menor palavra dentro do array                              

for(let index = 0; index < array.length; index += 1){  // percorre array começando pelo indice 0; enqto indice for menor que conteudo da array;indice muda para o proximo indice  
    if(array[index].length > maiorPalavra.length){ // faz a busca da maior palavra da array
        maiorPalavra = array[index];  // variavel recebe maior palavra
    }
}

for(let index = 0; index < array.length; index += 1){ // percorre array começando pelo índice 0; enqto indice for menor que conteudo da array; indice muda para o proximo indice;
    if(array[index].length < menorPalavra.length){ //faz a busca da menor palavra dentro da array
        menorPalavra = array[index]; // variavel recebe menor palavra.
    }
}

console.log(maiorPalavra); // mostra maior e menor palavra ...
console.log(menorPalavra);