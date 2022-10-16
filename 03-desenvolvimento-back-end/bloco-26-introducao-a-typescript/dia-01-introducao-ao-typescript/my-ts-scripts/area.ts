import readline from "readline-sync"; 
const u = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = u.indexOf(fromUnit);
    const toIndex = u.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}

function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readline.keyInSelect(u, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readline.keyInSelect(u, "Escolha um número para a conversão:");

    const fromUnitChoice = u[fromUnitChoiceIndex];

    const toUnitChoice = u[toUnitChoiceIndex];

    const result = convertArea(value, fromUnitChoice, toUnitChoice)


    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
 
    console.log(message);
}

exec();
