"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var riot_1 = require("riot");
var Dom = /** @class */ (function () {
    function Dom() {
    }
    Dom.prototype.getByID = function (id) {
        return document.getElementById(id);
    };
    Dom.prototype.appendTo = function (id, tag, data) {
        var el = document.createElement(tag);
        this.getByID(id).appendChild(el);
        riot_1.mount(tag, function () { return (data); });
    };
    Dom.prototype.replace = function (id, tag, data) {
        var el = document.createElement(tag);
        this.getByID(id).replaceWith(el);
        riot_1.mount(tag, function () { return (data); });
    };
    return Dom;
}());
exports.Dom = Dom;
//# sourceMappingURL=Dom.js.map