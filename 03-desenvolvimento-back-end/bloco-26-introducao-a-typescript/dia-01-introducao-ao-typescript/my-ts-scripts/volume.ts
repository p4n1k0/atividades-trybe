const readlineVolume = require('readline-sync');
const u = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = u.indexOf(fromUnit);
    const toIndex = u.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}

function exec() {
    const value = readlineVolume.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readlineVolume.keyInSelect(u, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readlineVolume.keyInSelect(u, "Escolha um número para a conversão:");

    const fromUnitChoice = u[fromUnitChoiceIndex];
    const toUnitChoice = u[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

    console.log(message);
}

exec();
