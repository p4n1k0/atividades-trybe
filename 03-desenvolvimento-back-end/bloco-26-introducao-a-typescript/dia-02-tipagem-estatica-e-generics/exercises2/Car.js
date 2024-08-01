"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.turnOn = function () {
        console.log("Carro ligado.");
    };
    Car.prototype.turnOff = function () {
        console.log("Carro desligado.");
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando para a ".concat(direction, "."));
    };
    Car.prototype.speedUp = function () {
        console.log("Acelerando o carro.");
    };
    Car.prototype.speedDown = function () {
        console.log("Reduzindo a velocidade do carro.");
    };
    Car.prototype.stop = function () {
        console.log("Parando o carro.");
    };
    Car.prototype.honk = function () {
        console.log("Buzinando: BIP BIP");
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("Abrindo a porta ".concat(door, "."));
    };
    Car.prototype.closeTheDoor = function (door) {
        console.log("Fechando a porta ".concat(door, "."));
    };
    return Car;
}());
exports["default"] = Car;
