"use strict";
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * .1; }
    return console.log(value + bonus);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
//# sourceMappingURL=defaultfunctionparameter.js.map