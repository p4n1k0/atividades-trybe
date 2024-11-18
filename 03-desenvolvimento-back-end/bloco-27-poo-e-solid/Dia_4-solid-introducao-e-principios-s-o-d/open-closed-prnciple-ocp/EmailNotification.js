"use strict";
exports.__esModule = true;
var EmailNotification = /** @class */ (function () {
    function EmailNotification(email) {
        this.email = email;
    }
    EmailNotification.prototype.sendNotification = function (message) {
        console.log("Here should go the implementation       to send notification to the email: " + this.email + " - " + message);
    };
    return EmailNotification;
}());
exports["default"] = EmailNotification;
