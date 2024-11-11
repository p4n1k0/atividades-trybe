"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("./Subject");
var Teacher_1 = require("./Teacher");
var math = new Subject_1.default('Matemática');
var history = new Subject_1.default('História');
var philosophy = new Subject_1.default('Filosofia');
var marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
var joao = new Teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
var lucio = new Teacher_1.default('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
console.log(marta);
console.log(joao);
console.log(lucio);
// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
