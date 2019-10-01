(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riot-tags"],{

/***/ "./bundles/riot/build/timer.js":
/*!*************************************!*\
  !*** ./bundles/riot/build/timer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar timer = {\r\n  'css': `timer,[is=\"timer\"]{ display: block; max-width: 300px; margin: 0 auto; border: 1px solid rgba(64, 139, 194, .5); border-radius: 6px; color: rgba(64, 139, 194, 1); height: 100px; line-height: 100px; text-align: center; background: white; } timer p,[is=\"timer\"] p{ margin: 0; }`,\r\n\r\n  'exports': {\r\n    onBeforeMount(props) {\r\n        // create the component initial state\r\n        this.state = {\r\n            time: props.start || 0\r\n        };\r\n    },\r\n\r\n    onUnmounted() {},\r\n\r\n    onClick() {\r\n        this.doApiRequest('test');\r\n    },\r\n\r\n    doApiRequest(rqst) {\r\n        return debounce((rqst) => {\r\n            fetch(`http://127.0.0.1:5000/?${rqst}`)\r\n                .then((res) => res.json())\r\n                .then((data) => {\r\n                    this.update({\r\n                        time: data.time\r\n                    });\r\n                });\r\n        }, 500)(rqst)\r\n    }\r\n  },\r\n\r\n  'template': function(template, expressionTypes, bindingTypes, getComponent) {\r\n    return template('<p expr0=\"expr0\"> </p>', [{\r\n      'redundantAttribute': 'expr0',\r\n      'selector': '[expr0]',\r\n\r\n      'expressions': [{\r\n        'type': expressionTypes.TEXT,\r\n        'childNodeIndex': 0,\r\n\r\n        'evaluate': function(scope) {\r\n          return ['Seconds Elapsed: ', scope.state.time].join('');\r\n        }\r\n      }, {\r\n        'type': expressionTypes.EVENT,\r\n        'name': 'onclick',\r\n\r\n        'evaluate': function(scope) {\r\n          return scope.onClick;\r\n        }\r\n      }]\r\n    }]);\r\n  },\r\n\r\n  'name': 'timer'\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\r\n\n\n//# sourceURL=webpack:///./bundles/riot/build/timer.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./bundles/riot/build/timer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./bundles/riot/build/timer.js */\"./bundles/riot/build/timer.js\");\n\n\n//# sourceURL=webpack:///multi_./bundles/riot/build/timer.js?");

/***/ })

},[[0,"runtime"]]]);