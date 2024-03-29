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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auxiliarFunctions_messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliarFunctions/messages.js */ \"./src/auxiliarFunctions/messages.js\");\n/* harmony import */ var _auxiliarFunctions_timing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliarFunctions/timing.js */ \"./src/auxiliarFunctions/timing.js\");\n\r\n\r\n\r\ndocument.getElementById('btnAlert')\r\n    .addEventListener('click',_auxiliarFunctions_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"showAlert\"])\r\n\r\n\r\nwindow.onload=_auxiliarFunctions_timing_js__WEBPACK_IMPORTED_MODULE_1__[\"showTime\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYXV4aWxpYXJGdW5jdGlvbnMvbWVzc2FnZXMuanMnXHJcbmltcG9ydCB7IHNob3dUaW1lIH0gZnJvbSAnLi9hdXhpbGlhckZ1bmN0aW9ucy90aW1pbmcuanMnXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQWxlcnQnKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93QWxlcnQpXHJcblxyXG5cclxud2luZG93Lm9ubG9hZD1zaG93VGltZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/auxiliarFunctions/messages.js":
/*!*******************************************!*\
  !*** ./src/auxiliarFunctions/messages.js ***!
  \*******************************************/
/*! exports provided: showAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAlert\", function() { return showAlert; });\nfunction showAlert(){\r\n        alert('Hello word')\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV4aWxpYXJGdW5jdGlvbnMvbWVzc2FnZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXV4aWxpYXJGdW5jdGlvbnMvbWVzc2FnZXMuanM/MDcyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KCl7XHJcbiAgICAgICAgYWxlcnQoJ0hlbGxvIHdvcmQnKVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/auxiliarFunctions/messages.js\n");

/***/ }),

/***/ "./src/auxiliarFunctions/timing.js":
/*!*****************************************!*\
  !*** ./src/auxiliarFunctions/timing.js ***!
  \*****************************************/
/*! exports provided: showTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTime\", function() { return showTime; });\n\r\nlet showTime=function (){\r\n     setInterval(function(){\r\n        document.getElementById('timeId').innerText(new Date.now())\r\n     },1000)\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV4aWxpYXJGdW5jdGlvbnMvdGltaW5nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2F1eGlsaWFyRnVuY3Rpb25zL3RpbWluZy5qcz85MDRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgc2hvd1RpbWU9ZnVuY3Rpb24gKCl7XHJcbiAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZUlkJykuaW5uZXJUZXh0KG5ldyBEYXRlLm5vdygpKVxyXG4gICAgIH0sMTAwMClcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2hvd1RpbWV9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/auxiliarFunctions/timing.js\n");

/***/ })

/******/ });