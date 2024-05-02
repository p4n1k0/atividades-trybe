import readline from "readline-sync";
const uni = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = uni.indexOf(fromUnit);
    const toIndex = uni.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(1000, exponent);
}

function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readline.keyInSelect(uni, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readline.keyInSelect(uni, "Escolha um número para a conversão:");

    const fromUnitChoice = uni[fromUnitChoiceIndex];

    const toUnitChoice = uni[toUnitChoiceIndex];

    const result = convertVolume(value, fromUnitChoice, toUnitChoice)
    

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
 
    console.log(message);
}

exec();
