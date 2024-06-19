let maiorPrimo = 0; //variavel ira receber maior numero primo;

for(let numeroAtual = 0; numeroAtual < 51; numeroAtual += 1){ // percorre cada numero entre 0 e 50; numero atual muda;
    let primo = true; // entao numero é primo
    for(let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1){  // aqui enqto divisor for menor q numero atual, divisor soma mais 1;
        if(numeroAtual % divisorAtual === 0){ // se numero atual dividido por divisor atual for zero;
            primo = false; // entao numero é falso
        }
    }

    if(primo){  // se numero atual for primo
        maiorPrimo = numeroAtual; // variavel recebe o numero primo maior entre 0 e 50
    }
}

console.log(maiorPrimo); //imprime o numero primo maior