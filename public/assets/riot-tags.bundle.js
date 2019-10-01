var Nemesi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundles/riot/build/timer.js":
/*!*************************************!*\
  !*** ./bundles/riot/build/timer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar timer = {\n  'css': `timer,[is=\"timer\"]{ display: block; max-width: 300px; margin: 0 auto; border: 1px solid rgba(64, 139, 194, .5); border-radius: 6px; color: rgba(64, 139, 194, 1); height: 100px; line-height: 100px; text-align: center; background: white; } timer p,[is=\"timer\"] p{ margin: 0; }`,\n\n  'exports': {\n    onBeforeMount(props) {\n        // create the component initial state\n        this.state = {\n            time: props.start || 0\n        };\n    },\n\n    onUnmounted() {},\n\n    onClick() {\n        this.doApiRequest('test');\n    },\n\n    doApiRequest(rqst) {\n        return debounce((rqst) => {\n            fetch(`http://127.0.0.1:5000/?${rqst}`)\n                .then((res) => res.json())\n                .then((data) => {\n                    this.update({\n                        time: data.time\n                    });\n                });\n        }, 500)(rqst)\n    }\n  },\n\n  'template': function(template, expressionTypes, bindingTypes, getComponent) {\n    return template('<p expr0=\"expr0\"> </p>', [{\n      'redundantAttribute': 'expr0',\n      'selector': '[expr0]',\n\n      'expressions': [{\n        'type': expressionTypes.TEXT,\n        'childNodeIndex': 0,\n\n        'evaluate': function(scope) {\n          return ['Seconds Elapsed: ', scope.state.time].join('');\n        }\n      }, {\n        'type': expressionTypes.EVENT,\n        'name': 'onclick',\n\n        'evaluate': function(scope) {\n          return scope.onClick;\n        }\n      }]\n    }]);\n  },\n\n  'name': 'timer'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n\n//# sourceURL=webpack://Nemesi/./bundles/riot/build/timer.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./bundles/riot/build/timer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./bundles/riot/build/timer.js */\"./bundles/riot/build/timer.js\");\n\n\n//# sourceURL=webpack://Nemesi/multi_./bundles/riot/build/timer.js?");

/***/ })

/******/ })["default"];