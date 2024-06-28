let n = 5;   // variavel para ser usada como parametro dentro do for
let asteristico = '*'; // variavel para ser atribuida a outra variavel e formar uma linha de asteristicos
let espaco = ''; //variavel que recebera ela mesma + a variavel asteristico

for (let indexlinha = 0; indexlinha < n; indexlinha += 1) { // enqto o indice de linha for menor que 5(n), indice de linha soma + 1 até chegar em 4
    espaco = espaco + asteristico; //quando chega no indice 4, variavel espaco vai receber ela mesma + variavel asteristico
};
for (let indexlinha = 0; indexlinha < n; indexlinha += 1) { // variavel indice linha para parar qdo chegar no indice 4
    console.log(espaco); // imprime variavel espaco atribuida
};
