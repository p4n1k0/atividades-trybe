const readlineMass = require('readline-sync');
const unites = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unites.indexOf(fromUnit);
    const toIndex = unites.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    // pega valor a ser convertido digitado pela pessoa usuária
    const value = readlineMass.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readlineMass.keyInSelect(unites, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readlineMass.keyInSelect(unites, "Escolha um número para a conversão:");

    const fromUnitChoice = unites[fromUnitChoiceIndex];
    const toUnitChoice = unites[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

    console.log(message);
}

exec();
