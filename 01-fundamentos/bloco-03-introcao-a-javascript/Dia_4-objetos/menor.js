function menorValor(numeros){
    let indiceMenor = 0;

    for (const index in numeros) {
        if(numeros[indiceMenor] > numeros[index]){
            indiceMenor = index
        }                
    }
    return indiceMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));