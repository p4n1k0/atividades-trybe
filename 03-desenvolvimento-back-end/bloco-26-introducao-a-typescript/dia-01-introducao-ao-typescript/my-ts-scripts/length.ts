const readlineLength = require('readline-sync'); // importa pacote readline-sync
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit); // pega index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pega index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calcula o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

function exec() {
    // pega valor a ser convertido digitado pela pessoa usuária
    const value = readlineLength.questionFloat("Digite o valor a ser convertido: \n");

    // pede a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readlineLength.keyInSelect(units, "Escolha um número para a unidade base:");

    // pede a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readlineLength.keyInSelect(units, "Escolha um número para a conversão:");

    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];

    const result = convert(value, fromUnitChoice, toUnitChoice)

    // monta mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

    // printa mensagem de saída no terminal
    console.log(message);
}

exec();
