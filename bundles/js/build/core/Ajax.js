"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wretch_1 = require("wretch");
var Ajax = /** @class */ (function () {
    function Ajax() {
    }
    Ajax._get = function (endpoint, data) {
        return wretch_1.default(endpoint).get(data);
    };
    Ajax._post = function (endpoint, data) {
        return wretch_1.default(endpoint).get(data);
    };
    Ajax.prototype.get = function (endpoint, data, onSuccess, onFailure) {
        return Ajax._get(endpoint, data)
            .res(function (response) { return onSuccess; })
            .catch(function (error) { return onFailure; });
    };
    Ajax.prototype.getJSON = function (endpoint, data, onSuccess, onFailure) {
        return Ajax._get(endpoint, data)
            .json(function (response) { return onSuccess; })
            .catch(function (error) { return onFailure; });
    };
    Ajax.prototype.post = function (endpoint, data, onSuccess, onFailure) {
        return Ajax._post(endpoint, data)
            .json(function (response) { return onSuccess; })
            .catch(function (error) { return onFailure; });
    };
    Ajax.prototype.postJSON = function (endpoint, data, onSuccess, onFailure) {
        return Ajax._post(endpoint, data)
            .res(function (response) { return onSuccess; })
            .catch(function (error) { return onFailure; });
    };
    return Ajax;
}());
exports.Ajax = Ajax;
//# sourceMappingURL=Ajax.js.map