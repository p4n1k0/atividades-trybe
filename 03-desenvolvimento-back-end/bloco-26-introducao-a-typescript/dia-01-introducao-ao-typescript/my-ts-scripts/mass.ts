import readline from "readline-sync";
const unit = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");

    const fromUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a unidade base:");

    const toUnitChoiceIndex = readline.keyInSelect(unit, "Escolha um número para a conversão:");

    const fromUnitChoice = unit[fromUnitChoiceIndex];

    const toUnitChoice = unit[toUnitChoiceIndex];

    const result = convertMass(value, fromUnitChoice, toUnitChoice)


    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
 
    console.log(message);
}

exec();
