function angulos(x, y, z){
    let somaDosAngulos = x + y + z;
    let todosSaoPositivos = x > 0 && y > 0 && z > 0;

    if(todosSaoPositivos){
        if(somaDosAngulos === 180){
            return true;
        }else{
            return false;        
        }
    }else{
        return "Erro: ângulo inválido";
    }
}

console.log(angulos(60, 60, 60));
console.log(angulos(90, 90, 90));
console.log(angulos(0, 40, 50));