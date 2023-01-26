"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var personA = /** @class */ (function () {
    function personA(name) {
        var _this = this;
        this.greetPerson = function () { return console.log("person " + _this.name); };
        this.name = name;
        console.log(this.name);
    }
    personA.staticMethod = function () {
        console.log("static method");
    };
    return personA;
}());
var pp = new personA("Prakash");
personA.staticMethod();
pp.greetPerson();
var personB = /** @class */ (function () {
    function personB() {
        this.getID = function () { return 10; };
        console.log("person B");
    }
    return personB;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp() {
        var _this = _super.call(this) || this;
        console.log("constructor child");
        return _this;
    }
    return Emp;
}(personB));
var e = new Emp();
console.log(e.getID());
//# sourceMappingURL=class.js.map