let n = 6;
let asteristico = '*';
let espaco = '';

for(let indexlinha = 0; indexlinha < n; indexlinha += 1){ // enqto indice de linha for menor q 6; indice soma + 1, faz a volta, soma dnv até chegar no indice 5;
    console.log(espaco); // 1a volta imprime uma linha de 5 asteristocps, 2a volta uma linha de 4 asteristicos, eassi por diante até chegar em um asteristico
    espaco = espaco + asteristico; // após impressão da primeira volta, variavel espaco recebe ela msma + simbolo de asteristico, para formar a proxima linha de 4 asteristicos
}