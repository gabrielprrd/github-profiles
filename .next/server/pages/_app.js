module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/Footer.tsx\";\n\n\nconst Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skChaseDot\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Developed with\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"love\",\n        children: \"\\u2764\\uFE0F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined), ' ']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skChaseDot\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [' ', \"by \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/gabrielprrd\",\n        children: \"Gabriel Afonso\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 12\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4PzZmNmEiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxtQkFDdkI7QUFBQSwwQkFDRTtBQUFBLDJCQUNFO0FBQUEsbUNBQ2lCLEdBRGpCLGVBRUU7QUFBTSxZQUFJLEVBQUMsS0FBWDtBQUFpQixzQkFBVyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUlVLEdBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBQSwyQkFDRTtBQUFBLGlCQUNHLEdBREgsc0JBRUs7QUFBRyxZQUFJLEVBQUMsZ0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQW1CZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8c2tDaGFzZURvdD5cbiAgICAgIDxwPlxuICAgICAgICBEZXZlbG9wZWQgd2l0aHsnICd9XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibG92ZVwiPlxuICAgICAgICAgIOKdpO+4j1xuICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgIDwvcD5cbiAgICA8L3NrQ2hhc2VEb3Q+XG4gICAgPHNrQ2hhc2VEb3Q+XG4gICAgICA8cD5cbiAgICAgICAgeycgJ31cbiAgICAgICAgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYWJyaWVscHJyZFwiPkdhYnJpZWwgQWZvbnNvPC9hPlxuICAgICAgPC9wPlxuICAgIDwvc2tDaGFzZURvdD5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer.tsx\n");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"react-switch\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Header */ \"./src/styles/components/Header.tsx\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/Header.tsx\";\n\n\n\n\n\nconst Header = ({\n  toggleTheme\n}) => {\n  const {\n    colors,\n    title\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeContext\"]);\n  const {\n    0: isMounted,\n    1: setIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => setIsMounted(true), []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Github Profiles\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined), isMounted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_switch__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      onChange: toggleTheme,\n      checked: title === 'light',\n      checkedIcon: false,\n      uncheckedIcon: false,\n      height: 10,\n      width: 40,\n      handleDiameter: 20,\n      offColor: colors.highlightSecondary,\n      onColor: colors.secondary,\n      id: \"theme-switcher\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4PzhlYjUiXSwibmFtZXMiOlsiSGVhZGVyIiwidG9nZ2xlVGhlbWUiLCJjb2xvcnMiLCJ0aXRsZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhpZ2hsaWdodFNlY29uZGFyeSIsInNlY29uZGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTUEsTUFBdUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQjtBQUNuRCxRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFvQkMsd0RBQVUsQ0FBQ0MsOERBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBQyx5REFBUyxDQUFDLE1BQU1GLFlBQVksQ0FBQyxJQUFELENBQW5CLEVBQTJCLEVBQTNCLENBQVQ7QUFFQSxzQkFDRSxxRUFBQyxnRUFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdELFNBQVMsaUJBQ1IscUVBQUMsbURBQUQ7QUFDRSxjQUFRLEVBQUVMLFdBRFo7QUFFRSxhQUFPLEVBQUVFLEtBQUssS0FBSyxPQUZyQjtBQUdFLGlCQUFXLEVBQUUsS0FIZjtBQUlFLG1CQUFhLEVBQUUsS0FKakI7QUFLRSxZQUFNLEVBQUUsRUFMVjtBQU1FLFdBQUssRUFBRSxFQU5UO0FBT0Usb0JBQWMsRUFBRSxFQVBsQjtBQVFFLGNBQVEsRUFBRUQsTUFBTSxDQUFDUSxrQkFSbkI7QUFTRSxhQUFPLEVBQUVSLE1BQU0sQ0FBQ1MsU0FUbEI7QUFVRSxRQUFFLEVBQUM7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBeEJEOztBQTBCZVgscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ3JlYWN0LXN3aXRjaCc7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0hlYWRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvZ2dsZVRoZW1lKCk6IHZvaWQ7XG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdG9nZ2xlVGhlbWUgfSkgPT4ge1xuICBjb25zdCB7IGNvbG9ycywgdGl0bGUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldElzTW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFMuSGVhZGVyPlxuICAgICAgPGgxPkdpdGh1YiBQcm9maWxlczwvaDE+XG4gICAgICB7aXNNb3VudGVkICYmIChcbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgICBjaGVja2VkPXt0aXRsZSA9PT0gJ2xpZ2h0J31cbiAgICAgICAgICBjaGVja2VkSWNvbj17ZmFsc2V9XG4gICAgICAgICAgdW5jaGVja2VkSWNvbj17ZmFsc2V9XG4gICAgICAgICAgaGVpZ2h0PXsxMH1cbiAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgaGFuZGxlRGlhbWV0ZXI9ezIwfVxuICAgICAgICAgIG9mZkNvbG9yPXtjb2xvcnMuaGlnaGxpZ2h0U2Vjb25kYXJ5fVxuICAgICAgICAgIG9uQ29sb3I9e2NvbG9ycy5zZWNvbmRhcnl9XG4gICAgICAgICAgaWQ9XCJ0aGVtZS1zd2l0Y2hlclwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUy5IZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/context/QueryProvider.tsx":
/*!***************************************!*\
  !*** ./src/context/QueryProvider.tsx ***!
  \***************************************/
/*! exports provided: QueryContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QueryContext\", function() { return QueryContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/context/QueryProvider.tsx\";\n\nconst QueryContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\n\nconst QueryProvider = ({\n  children\n}) => {\n  const {\n    0: query,\n    1: setQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(QueryContext.Provider, {\n    value: {\n      query,\n      setQuery\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QueryProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9RdWVyeVByb3ZpZGVyLnRzeD84Y2JhIl0sIm5hbWVzIjpbIlF1ZXJ5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJRdWVyeVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFZTyxNQUFNQSxZQUFZLGdCQUFHQywyREFBYSxDQUF3QixFQUF4QixDQUFsQzs7QUFFUCxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBdUI7QUFDM0MsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFTLEVBQVQsQ0FBbEM7QUFFQSxzQkFDRSxxRUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRUYsV0FBRjtBQUFTQztBQUFULEtBQTlCO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQVJEOztBQVVlRCw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L1F1ZXJ5UHJvdmlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICBjcmVhdGVDb250ZXh0LFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG59IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENvbnRleHRQcm9wcyB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNldFF1ZXJ5OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+Pjtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGFydGlhbDxDb250ZXh0UHJvcHM+Pih7fSk7XG5cbmNvbnN0IFF1ZXJ5UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KTogYW55ID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcXVlcnksIHNldFF1ZXJ5IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUXVlcnlDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/QueryProvider.tsx\n");

/***/ }),

/***/ "./src/hooks/usePersistedState.ts":
/*!****************************************!*\
  !*** ./src/hooks/usePersistedState.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return usePersistedState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction usePersistedState(key, initialState) {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (false) {}\n\n    return initialState;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    localStorage.setItem(key, JSON.stringify(state));\n  }, [key, state]);\n  return [state, setState];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlUGVyc2lzdGVkU3RhdGUudHM/N2RmNiJdLCJuYW1lcyI6WyJ1c2VQZXJzaXN0ZWRTdGF0ZSIsImtleSIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWUsU0FBU0EsaUJBQVQsQ0FDYkMsR0FEYSxFQUViQyxZQUZhLEVBR0E7QUFDYixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsTUFBTTtBQUN2QyxlQUFxQixFQUdwQjs7QUFFRCxXQUFPSCxZQUFQO0FBQ0QsR0FQaUMsQ0FBbEM7QUFTQUkseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJQLEdBQXJCLEVBQTBCUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsS0FBZixDQUExQjtBQUNELEdBRlEsRUFFTixDQUFDRixHQUFELEVBQU1FLEtBQU4sQ0FGTSxDQUFUO0FBSUEsU0FBTyxDQUFDQSxLQUFELEVBQVFDLFFBQVIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZVBlcnNpc3RlZFN0YXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFJlc3BvbnNlPFQ+ID0gW1QsIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFQ+Pl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBlcnNpc3RlZFN0YXRlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgaW5pdGlhbFN0YXRlOiBUXG4pOiBSZXNwb25zZTxUPiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICBpZiAodHlwZW9mIHN0b3JhZ2VWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gIH0sIFtrZXksIHN0YXRlXSk7XG5cbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/usePersistedState.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_QueryProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/QueryProvider */ \"./src/context/QueryProvider.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_themes_dark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/themes/dark */ \"./src/styles/themes/dark.ts\");\n/* harmony import */ var _styles_themes_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/themes/light */ \"./src/styles/themes/light.ts\");\n/* harmony import */ var _hooks_usePersistedState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/usePersistedState */ \"./src/hooks/usePersistedState.ts\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // Components\n\n\n // Styles\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const [theme, setTheme] = Object(_hooks_usePersistedState__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('theme', _styles_themes_dark__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  const {\n    0: isMounted,\n    1: setIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => setIsMounted(true), []);\n\n  const toggleTheme = () => {\n    setTheme(theme === _styles_themes_dark__WEBPACK_IMPORTED_MODULE_7__[\"default\"] ? _styles_themes_light__WEBPACK_IMPORTED_MODULE_8__[\"default\"] : _styles_themes_dark__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_QueryProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        toggleTheme: toggleTheme\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), isMounted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 23\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VQZXJzaXN0ZWRTdGF0ZSIsImRhcmsiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvZ2dsZVRoZW1lIiwibGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBeUIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzlELFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyx3RUFBaUIsQ0FBZSxPQUFmLEVBQXdCQywyREFBeEIsQ0FBM0M7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUVBQyx5REFBUyxDQUFDLE1BQU1GLFlBQVksQ0FBQyxJQUFELENBQW5CLEVBQTJCLEVBQTNCLENBQVQ7O0FBRUEsUUFBTUcsV0FBVyxHQUFHLE1BQU07QUFDeEJQLFlBQVEsQ0FBQ0QsS0FBSyxLQUFLRywyREFBVixHQUFpQk0sNERBQWpCLEdBQXlCTiwyREFBMUIsQ0FBUjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVILEtBQXRCO0FBQUEsMkJBQ0UscUVBQUMsOERBQUQ7QUFBQSw4QkFDRSxxRUFBQywwREFBRDtBQUFRLG1CQUFXLEVBQUVRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0osU0FBUyxpQkFBSSxxRUFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRmhCLGVBR0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FuQkQ7O0FBcUJlRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUXVlcnlQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L1F1ZXJ5UHJvdmlkZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCBkYXJrIGZyb20gJy4uL3N0eWxlcy90aGVtZXMvZGFyayc7XG5pbXBvcnQgbGlnaHQgZnJvbSAnLi4vc3R5bGVzL3RoZW1lcy9saWdodCc7XG5pbXBvcnQgdXNlUGVyc2lzdGVkU3RhdGUgZnJvbSAnLi4vaG9va3MvdXNlUGVyc2lzdGVkU3RhdGUnO1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVBlcnNpc3RlZFN0YXRlPERlZmF1bHRUaGVtZT4oJ3RoZW1lJywgZGFyayk7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldElzTW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKHRoZW1lID09PSBkYXJrID8gbGlnaHQgOiBkYXJrKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFF1ZXJ5UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkZXIgdG9nZ2xlVGhlbWU9e3RvZ2dsZVRoZW1lfSAvPlxuICAgICAgICB7aXNNb3VudGVkICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L1F1ZXJ5UHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/components/Header.tsx":
/*!******************************************!*\
  !*** ./src/styles/components/Header.tsx ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"Header\",\n  componentId: \"gzo3z6-0\"\n})([\"display:flex;justify-content:space-between;align-items:center;padding:1em;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvSGVhZGVyLnRzeD85OGQ0Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBR0Msd0RBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxrRkFBWiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/components/Header.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: 0;\n  }\n\n  html, body {\n    min-height: 100vh;\n    width: 100%;\n    overflow: auto;\n    background: ${({\n  theme\n}) => theme.colors.primary};\n    color: ${({\n  theme\n}) => theme.colors.text};\n\n    a {\n      color: ${({\n  theme\n}) => theme.colors.text};\n    }\n  }\n\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQVE7QUFDdEQsYUFBYSxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsSUFBSztBQUM5QztBQUNBO0FBQ0EsZUFBZSxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsSUFBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxDQXBCQTtBQXNCZUwsMEVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICBodG1sLCBib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICB9XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/themes/dark.ts":
/*!***********************************!*\
  !*** ./src/styles/themes/dark.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: 'dark',\n  colors: {\n    primary: '#202442',\n    secondary: '#2B2F56',\n    highlightPrimary: '#4177DF',\n    highlightSecondary: '#D57352',\n    text: '#E9EBF9'\n  },\n  borderRadius: '15px',\n  padding: '18px'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lcy9kYXJrLnRzPzY0NjEiXSwibmFtZXMiOlsidGl0bGUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaGlnaGxpZ2h0UHJpbWFyeSIsImhpZ2hsaWdodFNlY29uZGFyeSIsInRleHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLE9BQUssRUFBRSxNQURNO0FBRWJDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsU0FESDtBQUVOQyxhQUFTLEVBQUUsU0FGTDtBQUdOQyxvQkFBZ0IsRUFBRSxTQUhaO0FBSU5DLHNCQUFrQixFQUFFLFNBSmQ7QUFLTkMsUUFBSSxFQUFFO0FBTEEsR0FGSztBQVNiQyxjQUFZLEVBQUUsTUFURDtBQVViQyxTQUFPLEVBQUU7QUFWSSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy90aGVtZXMvZGFyay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdkYXJrJyxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMyMDI0NDInLFxuICAgIHNlY29uZGFyeTogJyMyQjJGNTYnLFxuICAgIGhpZ2hsaWdodFByaW1hcnk6ICcjNDE3N0RGJyxcbiAgICBoaWdobGlnaHRTZWNvbmRhcnk6ICcjRDU3MzUyJyxcbiAgICB0ZXh0OiAnI0U5RUJGOScsXG4gIH0sXG4gIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICBwYWRkaW5nOiAnMThweCcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/themes/dark.ts\n");

/***/ }),

/***/ "./src/styles/themes/light.ts":
/*!************************************!*\
  !*** ./src/styles/themes/light.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: 'light',\n  colors: {\n    primary: '#E9EBF9',\n    secondary: '#2B2F56',\n    highlightPrimary: '#4177DF',\n    highlightSecondary: '#D57352',\n    text: '#202442'\n  },\n  borderRadius: '15px',\n  padding: '18px'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lcy9saWdodC50cz80Njc0Il0sIm5hbWVzIjpbInRpdGxlIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImhpZ2hsaWdodFByaW1hcnkiLCJoaWdobGlnaHRTZWNvbmRhcnkiLCJ0ZXh0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxPQUFLLEVBQUUsT0FETTtBQUViQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsYUFBUyxFQUFFLFNBRkw7QUFHTkMsb0JBQWdCLEVBQUUsU0FIWjtBQUlOQyxzQkFBa0IsRUFBRSxTQUpkO0FBS05DLFFBQUksRUFBRTtBQUxBLEdBRks7QUFTYkMsY0FBWSxFQUFFLE1BVEQ7QUFVYkMsU0FBTyxFQUFFO0FBVkksQ0FBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWVzL2xpZ2h0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ2xpZ2h0JyxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyNFOUVCRjknLFxuICAgIHNlY29uZGFyeTogJyMyQjJGNTYnLFxuICAgIGhpZ2hsaWdodFByaW1hcnk6ICcjNDE3N0RGJyxcbiAgICBoaWdobGlnaHRTZWNvbmRhcnk6ICcjRDU3MzUyJyxcbiAgICB0ZXh0OiAnIzIwMjQ0MicsXG4gIH0sXG4gIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICBwYWRkaW5nOiAnMThweCcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/themes/light.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-switch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIj84NTVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-switch\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });