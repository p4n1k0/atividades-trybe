"use strict";
// Como a alteração será feita apenas no construtor da classe `ReadingTracker`, o restante do código permanece inalterado.
exports.__esModule = true;
var ConsoleNotification_1 = require("./ConsoleNotification");
var ReadingTracker = /** @class */ (function () {
    // O construtor deixa de instanciar um novo objeto do tipo Notificator
    // e agora passa a receber ele como parâmetro
    function ReadingTracker(readingGoal, notificator) {
        if (notificator === void 0) { notificator = new ConsoleNotification_1["default"]('console'); }
        this.notificator = notificator;
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    ReadingTracker.prototype.trackReadings = function (readsCount) {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification('Congratulations! You\'ve reached your reading goal!');
            return;
        }
        this.notificator.sendNotification('There are still some books to go!');
    };
    return ReadingTracker;
}());
exports["default"] = ReadingTracker;
