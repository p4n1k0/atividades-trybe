const validateInfo = (name, age) => {
    if (!name || !age) {
        throw new Error("Todas as informações são necessárias");
    }
};

const validateLegalAge = (age) => {
    if (age < 18) {
        throw new Error(
            "Ops, infelizmente nesse momento você não pode fazer as aulas"
        );
    }
};

const studentRegister = (name, age) => {
    validateInfo(name, age);
    validateLegalAge(age);
    return `${name}, boas-vindas à AuTrybe!`;
};

console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) // Fluxo de exceção
