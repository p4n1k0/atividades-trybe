let fatorial = 1;              // ariavel fatorial com valor 1, para ser incrementado na volta do loop;

for(let index = 10; index > 0; index -= 1){ // laço for para percorrer cada numero a partir do 10 - 1;
    fatorial *= index;    // fatorial recebe = !10 = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1
}

console.log(fatorial);