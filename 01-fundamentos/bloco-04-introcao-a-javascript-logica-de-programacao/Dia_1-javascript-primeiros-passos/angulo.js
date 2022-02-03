const x = 60;
const y = -60;
const z = 60;

let somaDosAngulos = x + y + z;
let todosSaoPositivos = x > 0 && y > 0 && z > 0;

if(todosSaoPositivos){
    if(somaDosAngulos === 180){
        console.log(true);
    }else{
    console.log(false);
    };

}else{
    console.log("Erro: ângulo inválido");
}
