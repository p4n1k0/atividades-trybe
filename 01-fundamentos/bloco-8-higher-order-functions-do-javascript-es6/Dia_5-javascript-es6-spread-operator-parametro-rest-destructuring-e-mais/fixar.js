// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamão', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite-moça', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
  fruit = specialFruit;
  additional = additionalItens;
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const customer = { ...user, ...jobInfos };

// const { name, age, nationality, profession, squad, squadInitials } = customer;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);



let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));


const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));