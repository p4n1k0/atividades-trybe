"use strict";
exports.__esModule = true;
var ConsoleNotification = /** @class */ (function () {
    function ConsoleNotification(name) {
        this.name = name;
    }
    ConsoleNotification.prototype.sendNotification = function (message) {
        console.log("Here we go again! - " + message + " from " + this.name);
    };
    return ConsoleNotification;
}());
exports["default"] = ConsoleNotification;
