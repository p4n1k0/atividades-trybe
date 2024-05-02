function maior(a, b, c){
    if(a > b && a > c){
        return "O maior número é: " + a;
    }else if(b > a && b > c){
        return "O maior número é: " + b;
    }else if(c > a && c > b){
        return "O maior número é: " + c;
    }else{
        return "Os núemros são iguais";
    }
}

console.log(maior(50, 30, 10));
console.log(maior(30,70,9));
console.log(maior(90, 90, 90));



