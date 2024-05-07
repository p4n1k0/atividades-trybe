function maiorMenor(a, b) {
    if (a > b) {
        return a + " é maior que " + b;
    } else if (b > a) {
        return b + " é maior que " + a;
    } else {
        return "Os números são iguais";
    }
}


console.log(maiorMenor(40, 30));
console.log(maiorMenor(30, 50));
console.log(maiorMenor(20, 20));
