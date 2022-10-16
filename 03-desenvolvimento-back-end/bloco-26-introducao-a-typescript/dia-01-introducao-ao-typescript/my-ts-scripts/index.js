"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
// cria array de objetos com o nome do script e o caminho do script a ser executado
var scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];
// cria novo array somente com os nomes dos scripts
var scriptNames = scripts.map(function (item) { return item.name; });
// pede à pessoa usuária para escolher um dos scripts de conversão
var choice = readline_sync_1["default"].keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");
require(scripts[choice].script); // executamos o script escolhido usando o require
