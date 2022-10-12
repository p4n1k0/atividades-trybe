const readlineArea = require('readline-sync');
const un = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = un.indexOf(fromUnit);
    const toIndex = un.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}

function exec() {
    const value = readlineArea.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readlineArea.keyInSelect(un, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readlineArea.keyInSelect(un, "Escolha um número para a conversão:");

    const fromUnitChoice = un[fromUnitChoiceIndex];
    const toUnitChoice = un[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

    console.log(message);
}

exec();
