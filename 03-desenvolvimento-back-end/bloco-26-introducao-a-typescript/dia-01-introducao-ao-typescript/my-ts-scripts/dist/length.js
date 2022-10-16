"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pega index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pega index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calcula o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
