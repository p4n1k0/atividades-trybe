let player = {
    name:'Marta',
    lastname:'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora possui " + player["medals"].golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");                               

// console.log("A jogadora " + player.name + " " + player.lastname + " foi eleita a melhor do mundo " + player.bestInTheWorld.length + " vezes");

// console.log("A jogadora " + player.name + " " + player.lastname + " tem" + " " + player.age);