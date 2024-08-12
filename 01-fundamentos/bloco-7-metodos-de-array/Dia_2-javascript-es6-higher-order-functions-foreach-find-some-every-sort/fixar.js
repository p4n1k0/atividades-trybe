//.forEach
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);   


//.find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())

<<<<<<< HEAD:01-fundamentos/bloco-7-metodos-de-array/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
<<<<<<< HEAD:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/script.js
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//   return names.find((name) => name.length === 5);
// }
=======
=======
>>>>>>> exercicios/8.3:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
//.find
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}
<<<<<<< HEAD:01-fundamentos/bloco-7-metodos-de-array/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
>>>>>>> exercicios/8.3:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js

//console.log(findNameWithFiveLetters());
=======

console.log(findNameWithFiveLetters());
>>>>>>> exercicios/8.3:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js


//find.
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id === id);
  }
  
<<<<<<< HEAD:01-fundamentos/bloco-7-metodos-de-array/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
<<<<<<< HEAD:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/script.js
  console.log(findMusic('31031685'));


  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Ana'));


// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   //Adicione seu código aqui
//   return arr.every((person) => person.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a, b) => b.age - a.age);

console.log(people);
=======
  console.log(findMusic('31031685'))

>>>>>>> exercicios/8.3:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
=======
  console.log(findMusic('31031685'))

>>>>>>> exercicios/8.3:01-fundamentos/bloco-8-higher-order-functions-do-javascript-es6/Dia_2-javascript-es6-higher-order-functions-foreach-find-some-every-sort/fixar.js
