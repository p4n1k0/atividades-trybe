function repete(numeros){
    let repete = numeros[0];

    for (const index in numeros) {
        if(repete === numeros[index].length){
            repete = index;
        }        
    }
    return repete;
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]));