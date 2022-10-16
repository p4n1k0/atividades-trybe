import readline from "readline-sync"; 
const unites = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unites.indexOf(fromUnit);
    const toIndex = unites.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readline.keyInSelect(unites, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readline.keyInSelect(unites, "Escolha um número para a conversão:");

    const fromUnitChoice = unites[fromUnitChoiceIndex];

    const toUnitChoice = unites[toUnitChoiceIndex];

    const result = convertCapacity(value, fromUnitChoice, toUnitChoice)
    

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
 
    console.log(message);
}

exec();
