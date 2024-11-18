"use strict";
exports.__esModule = true;
// Criando variáveis para guardar cada tipo aceito por nossa função
var consoleNotification = {
    type: 'Console',
    send: function (message) { return console.log('Console: ', message); }
};
var emailNotification = {
    type: 'Email',
    send: function (message) { return console.log('Email: ', message); }
};
var phoneNotification = {
    type: 'Phone',
    send: function (message) { return console.log('Phone: ', message); }
};
var notifications = [
    consoleNotification,
    emailNotification,
    phoneNotification,
];
// Agora podemos adicionar novos tipos sem modificar nossa função
function progressNotification(message, type_, notificationsArray) {
    if (type_ === void 0) { type_ = 'Console'; }
    if (notificationsArray === void 0) { notificationsArray = notifications; }
    notificationsArray.forEach(function (notification) {
        if (notification.type === type_) {
            notification.send(message);
        }
    });
}
exports["default"] = progressNotification;
