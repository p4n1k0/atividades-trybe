"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const u = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convertArea(value, fromUnit, toUnit) {
    const fromIndex = u.indexOf(fromUnit);
    const toIndex = u.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(u, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(u, "Escolha um número para a conversão:");
    const fromUnitChoice = u[fromUnitChoiceIndex];
    const toUnitChoice = u[toUnitChoiceIndex];
    const result = convertArea(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
