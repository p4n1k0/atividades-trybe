const grade = 100;
let message = '';

if (grade >= 80) {
    message = "Parabéns, você faz parte do grupo de pessoas aprovadas!";
}

else if (grade < 80 && grade >= 60) {
    message = "Você está na nossa lista de espera.";
}

else if (grade < 60) {
    message = "Infelizmente, você reprovou.";
}

console.log(message);
