function numero(a){
   if(a > 0){
       return "positive";
   }else if(a < 0 ){
       return "negative";
   }else{
       return 0;
   }
}

console.log(numero(4));
console.log(numero(-2));
console.log(numero(0));


