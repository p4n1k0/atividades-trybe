var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter(_name, _specialMoveName) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        _this._specialMoveName = _specialMoveName;
        return _this;
    }
    MeleeCharacter.prototype.talk = function () {
        /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
        console.log("Hi, I'm " + this._name + ". I attack at close range.");
    };
    MeleeCharacter.prototype.specialMove = function () {
        /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
        console.log(this._name + " used " + this._specialMoveName + "!");
    };
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter(_name, _specialMoveName) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        _this._specialMoveName = _specialMoveName;
        return _this;
    }
    LongRangeCharacter.prototype.talk = function () {
        /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
        console.log("Hi, I'm " + this._name + ". I can attack from a long range.");
    };
    LongRangeCharacter.prototype.specialMove = function () {
        /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
        console.log(this._name + " used " + this._specialMoveName + "!");
    };
    return LongRangeCharacter;
}(Character));
var yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
var samus = new LongRangeCharacter('Samus', 'Zero Laser');
yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();
