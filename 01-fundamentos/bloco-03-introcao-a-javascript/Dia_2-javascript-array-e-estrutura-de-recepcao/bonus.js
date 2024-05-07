let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for(let index = 0; index < numbers.length; index += 1){
    if(index + 1 < numbers.length){                          // Se index + 1 for menor que a array number 
        newNumbers.push(numbers[index] * numbers[index + 1]); // Array newNumbers recebe indice 0 da array numbers multiplicado por ela mesma e soma + 1 para o próximo índice.
    }else{
        newNumbers.push(numbers[index] * 2); // Senão array newNumbers recebe índices da array numbers multiplicado por 2;
    }
}

console.log(newNumbers);