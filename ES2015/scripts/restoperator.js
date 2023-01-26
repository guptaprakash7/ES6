"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColors = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    // console.log(message);
    for (var i in color) {
        console.log(color[i]);
    }
};
var message = "List of Colors";
var colorArray = ["red", "blue", "green"];
//displayColors(message, 'red');
displayColors.apply(void 0, __spreadArrays([message], colorArray));
//# sourceMappingURL=restoperator.js.map