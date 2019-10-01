(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nemesi"],{

/***/ "./bundles/js/build/Nemesi.js":
/*!************************************!*\
  !*** ./bundles/js/build/Nemesi.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Ajax_1 = __webpack_require__(/*! ./core/Ajax */ \"./bundles/js/build/core/Ajax.js\");\r\nvar Dom_1 = __webpack_require__(/*! ./core/Dom */ \"./bundles/js/build/core/Dom.js\");\r\nvar Utils_1 = __webpack_require__(/*! ./core/Utils */ \"./bundles/js/build/core/Utils.js\");\r\nexports.default = {\r\n    'Ajax': new Ajax_1.Ajax(),\r\n    'Dom': new Dom_1.Dom(),\r\n    'Utils': new Utils_1.Utils()\r\n};\r\n//# sourceMappingURL=Nemesi.js.map\n\n//# sourceURL=webpack:///./bundles/js/build/Nemesi.js?");

/***/ }),

/***/ "./bundles/js/build/core/Ajax.js":
/*!***************************************!*\
  !*** ./bundles/js/build/core/Ajax.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar wretch_1 = __webpack_require__(/*! wretch */ \"./node_modules/wretch/dist/index.js\");\r\nvar Ajax = /** @class */ (function () {\r\n    function Ajax() {\r\n    }\r\n    Ajax._get = function (endpoint, data) {\r\n        return wretch_1.default(endpoint).get(data);\r\n    };\r\n    Ajax._post = function (endpoint, data) {\r\n        return wretch_1.default(endpoint).get(data);\r\n    };\r\n    Ajax.prototype.get = function (endpoint, data, onSuccess, onFailure) {\r\n        return Ajax._get(endpoint, data)\r\n            .res(function (response) { return onSuccess; })\r\n            .catch(function (error) { return onFailure; });\r\n    };\r\n    Ajax.prototype.getJSON = function (endpoint, data, onSuccess, onFailure) {\r\n        return Ajax._get(endpoint, data)\r\n            .json(function (response) { return onSuccess; })\r\n            .catch(function (error) { return onFailure; });\r\n    };\r\n    Ajax.prototype.post = function (endpoint, data, onSuccess, onFailure) {\r\n        return Ajax._post(endpoint, data)\r\n            .json(function (response) { return onSuccess; })\r\n            .catch(function (error) { return onFailure; });\r\n    };\r\n    Ajax.prototype.postJSON = function (endpoint, data, onSuccess, onFailure) {\r\n        return Ajax._post(endpoint, data)\r\n            .res(function (response) { return onSuccess; })\r\n            .catch(function (error) { return onFailure; });\r\n    };\r\n    return Ajax;\r\n}());\r\nexports.Ajax = Ajax;\r\n//# sourceMappingURL=Ajax.js.map\n\n//# sourceURL=webpack:///./bundles/js/build/core/Ajax.js?");

/***/ }),

/***/ "./bundles/js/build/core/Dom.js":
/*!**************************************!*\
  !*** ./bundles/js/build/core/Dom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar riot_1 = __webpack_require__(/*! riot */ \"./node_modules/riot/riot.esm.js\");\r\nvar Dom = /** @class */ (function () {\r\n    function Dom() {\r\n    }\r\n    Dom.prototype.getByID = function (id) {\r\n        return document.getElementById(id);\r\n    };\r\n    Dom.prototype.appendTo = function (id, tag, data) {\r\n        var el = document.createElement(tag);\r\n        this.getByID(id).appendChild(el);\r\n        riot_1.mount(tag, function () { return (data); });\r\n    };\r\n    Dom.prototype.replace = function (id, tag, data) {\r\n        var el = document.createElement(tag);\r\n        this.getByID(id).replaceWith(el);\r\n        riot_1.mount(tag, function () { return (data); });\r\n    };\r\n    return Dom;\r\n}());\r\nexports.Dom = Dom;\r\n//# sourceMappingURL=Dom.js.map\n\n//# sourceURL=webpack:///./bundles/js/build/core/Dom.js?");

/***/ }),

/***/ "./bundles/js/build/core/Utils.js":
/*!****************************************!*\
  !*** ./bundles/js/build/core/Utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Utils = /** @class */ (function () {\r\n    function Utils() {\r\n    }\r\n    return Utils;\r\n}());\r\nexports.Utils = Utils;\r\n//# sourceMappingURL=Utils.js.map\n\n//# sourceURL=webpack:///./bundles/js/build/core/Utils.js?");

/***/ })

},[["./bundles/js/build/Nemesi.js","runtime","vendor"]]]);