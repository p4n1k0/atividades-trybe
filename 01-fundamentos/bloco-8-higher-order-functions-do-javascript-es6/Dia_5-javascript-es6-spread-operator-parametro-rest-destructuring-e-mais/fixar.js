// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamão', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite-moça', 'leite em pó'];

const fruitSalad = (fruit, additional) => {  
  const salad = [...fruit.specialFruit, ...additional.additionalItens];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));