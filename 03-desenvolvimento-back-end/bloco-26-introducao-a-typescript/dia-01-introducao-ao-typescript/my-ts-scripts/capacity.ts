const readlineCapacity = require('readline-sync');
const unit = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    const value = readlineCapacity.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readlineCapacity.keyInSelect(unit, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readlineCapacity.keyInSelect(unit, "Escolha um número para a conversão:");

    const fromUnitChoice = unit[fromUnitChoiceIndex];
    const toUnitChoice = unit[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

    console.log(message);
}

exec();
