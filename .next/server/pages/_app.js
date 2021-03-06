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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Footer */ \"./src/styles/components/Footer.tsx\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/Footer.tsx\";\n\n\n\nconst Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"], {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Developed by \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"https://github.com/gabrielprrd\",\n      children: \"Gabriel Afonso\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 20\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4PzZmNmEiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxtQkFDdkIscUVBQUMsZ0VBQUQ7QUFBQSx5QkFDRTtBQUFBLDZDQUNlO0FBQUcsVUFBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFRZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRm9vdGVyJztcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPFMuRm9vdGVyPlxuICAgIDxwPlxuICAgICAgRGV2ZWxvcGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FicmllbHBycmRcIj5HYWJyaWVsIEFmb25zbzwvYT5cbiAgICA8L3A+XG4gIDwvUy5Gb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_QueryProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/QueryProvider */ \"./src/context/QueryProvider.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _styles_components_PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/PageWrapper */ \"./src/styles/components/PageWrapper.tsx\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_themes_dark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/themes/dark */ \"./src/styles/themes/dark.ts\");\n/* harmony import */ var _styles_themes_light__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/themes/light */ \"./src/styles/themes/light.ts\");\n/* harmony import */ var _hooks_usePersistedState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/usePersistedState */ \"./src/hooks/usePersistedState.ts\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // Context\n\n // Components\n\n\n // Styles\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const [theme, setTheme] = Object(_hooks_usePersistedState__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('theme', _styles_themes_dark__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  const {\n    0: isMounted,\n    1: setIsMounted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => setIsMounted(true), []);\n\n  const toggleTheme = () => {\n    setTheme(theme === _styles_themes_dark__WEBPACK_IMPORTED_MODULE_8__[\"default\"] ? _styles_themes_light__WEBPACK_IMPORTED_MODULE_9__[\"default\"] : _styles_themes_dark__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_QueryProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_PageWrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          toggleTheme: toggleTheme\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, undefined), isMounted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VQZXJzaXN0ZWRTdGF0ZSIsImRhcmsiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvZ2dsZVRoZW1lIiwibGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQXlCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUM5RCxRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQkMseUVBQWlCLENBQWUsT0FBZixFQUF3QkMsMkRBQXhCLENBQTNDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFFQUMseURBQVMsQ0FBQyxNQUFNRixZQUFZLENBQUMsSUFBRCxDQUFuQixFQUEyQixFQUEzQixDQUFUOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxNQUFNO0FBQ3hCUCxZQUFRLENBQUNELEtBQUssS0FBS0csMkRBQVYsR0FBaUJNLDREQUFqQixHQUF5Qk4sMkRBQTFCLENBQVI7QUFDRCxHQUZEOztBQUdBLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFSCxLQUF0QjtBQUFBLDJCQUNFLHFFQUFDLDhEQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0VBQUQ7QUFBQSxnQ0FDRSxxRUFBQywwREFBRDtBQUFRLHFCQUFXLEVBQUVRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0osU0FBUyxpQkFBSSxxRUFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRmhCLGVBR0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBckJEOztBQXVCZUYsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBDb250ZXh0XG5pbXBvcnQgUXVlcnlQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L1F1ZXJ5UHJvdmlkZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9QYWdlV3JhcHBlcic7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCc7XG5pbXBvcnQgZGFyayBmcm9tICcuLi9zdHlsZXMvdGhlbWVzL2RhcmsnO1xuaW1wb3J0IGxpZ2h0IGZyb20gJy4uL3N0eWxlcy90aGVtZXMvbGlnaHQnO1xuaW1wb3J0IHVzZVBlcnNpc3RlZFN0YXRlIGZyb20gJy4uL2hvb2tzL3VzZVBlcnNpc3RlZFN0YXRlJztcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VQZXJzaXN0ZWRTdGF0ZTxEZWZhdWx0VGhlbWU+KCd0aGVtZScsIGRhcmspO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRJc01vdW50ZWQodHJ1ZSksIFtdKTtcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBzZXRUaGVtZSh0aGVtZSA9PT0gZGFyayA/IGxpZ2h0IDogZGFyayk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxRdWVyeVByb3ZpZGVyPlxuICAgICAgICA8UGFnZVdyYXBwZXI+XG4gICAgICAgICAgPEhlYWRlciB0b2dnbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XG4gICAgICAgICAge2lzTW91bnRlZCAmJiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fVxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cbiAgICAgIDwvUXVlcnlQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/components/Footer.tsx":
/*!******************************************!*\
  !*** ./src/styles/components/Footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({\n  displayName: \"Footer\",\n  componentId: \"sc-1l86k9q-0\"\n})([\"position:absolute;bottom:0;width:100%;height:2.5rem;display:flex;justify-content:center;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9iMWE5Il0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlZCIsImZvb3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBR0Msd0RBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxnR0FBWiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/components/Footer.tsx\n");

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

/***/ "./src/styles/components/PageWrapper.tsx":
/*!***********************************************!*\
  !*** ./src/styles/components/PageWrapper.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"PageWrapper\",\n  componentId: \"sc-2oev4-0\"\n})([\"position:relative;min-height:100vh;padding-bottom:2.5rem;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIudHN4P2UyMGQiXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUFqQjtBQU1lRiwwRUFBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/components/PageWrapper.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  @font-face {\n    font-family: 'Roboto', sans-serif;\n    src: url(../assets/fonts/Roboto/Roboto-Medium.ttf) format('truetype');\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: 0;\n  }\n\n  html, body {\n    min-height: 100vh;\n    width: 100%;\n    overflow: auto;\n    background: ${({\n  theme\n}) => theme.colors.primary};\n    color: ${({\n  theme\n}) => theme.colors.text};\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n\n    a {\n      color: ${({\n  theme\n}) => theme.colors.text};\n    }\n  }\n\n\n\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFRO0FBQ3RELGFBQWEsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLElBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxJQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTdCQTtBQStCZUwsMEVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xuICB9XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgaHRtbCwgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHR9O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICB9XG4gIH1cblxuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/themes/dark.ts":
/*!***********************************!*\
  !*** ./src/styles/themes/dark.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: 'dark',\n  colors: {\n    primary: '#202442',\n    secondary: '#2B2F56',\n    highlightPrimary: '#4177DF',\n    highlightSecondary: '#D57352',\n    text: '#E9EBF9'\n  },\n  borderRadius: '15px',\n  padding: '18px',\n  shadow: '1px 1px 4px #202430'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lcy9kYXJrLnRzPzY0NjEiXSwibmFtZXMiOlsidGl0bGUiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaGlnaGxpZ2h0UHJpbWFyeSIsImhpZ2hsaWdodFNlY29uZGFyeSIsInRleHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic2hhZG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLE9BQUssRUFBRSxNQURNO0FBRWJDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsU0FESDtBQUVOQyxhQUFTLEVBQUUsU0FGTDtBQUdOQyxvQkFBZ0IsRUFBRSxTQUhaO0FBSU5DLHNCQUFrQixFQUFFLFNBSmQ7QUFLTkMsUUFBSSxFQUFFO0FBTEEsR0FGSztBQVNiQyxjQUFZLEVBQUUsTUFURDtBQVViQyxTQUFPLEVBQUUsTUFWSTtBQVdiQyxRQUFNLEVBQUU7QUFYSyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy90aGVtZXMvZGFyay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdkYXJrJyxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMyMDI0NDInLFxuICAgIHNlY29uZGFyeTogJyMyQjJGNTYnLFxuICAgIGhpZ2hsaWdodFByaW1hcnk6ICcjNDE3N0RGJyxcbiAgICBoaWdobGlnaHRTZWNvbmRhcnk6ICcjRDU3MzUyJyxcbiAgICB0ZXh0OiAnI0U5RUJGOScsXG4gIH0sXG4gIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICBwYWRkaW5nOiAnMThweCcsXG4gIHNoYWRvdzogJzFweCAxcHggNHB4ICMyMDI0MzAnLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/themes/dark.ts\n");

/***/ }),

/***/ "./src/styles/themes/light.ts":
/*!************************************!*\
  !*** ./src/styles/themes/light.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: 'light',\n  colors: {\n    primary: '#E9EBF9',\n    secondary: '#dedede',\n    highlightPrimary: '#4177DF',\n    highlightSecondary: '#202442',\n    text: '#202442'\n  },\n  borderRadius: '15px',\n  padding: '18px',\n  shadow: '1px 1px 4px #E9E9F9'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lcy9saWdodC50cz80Njc0Il0sIm5hbWVzIjpbInRpdGxlIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImhpZ2hsaWdodFByaW1hcnkiLCJoaWdobGlnaHRTZWNvbmRhcnkiLCJ0ZXh0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNoYWRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxPQUFLLEVBQUUsT0FETTtBQUViQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsYUFBUyxFQUFFLFNBRkw7QUFHTkMsb0JBQWdCLEVBQUUsU0FIWjtBQUlOQyxzQkFBa0IsRUFBRSxTQUpkO0FBS05DLFFBQUksRUFBRTtBQUxBLEdBRks7QUFTYkMsY0FBWSxFQUFFLE1BVEQ7QUFVYkMsU0FBTyxFQUFFLE1BVkk7QUFXYkMsUUFBTSxFQUFFO0FBWEssQ0FBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWVzL2xpZ2h0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ2xpZ2h0JyxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyNFOUVCRjknLFxuICAgIHNlY29uZGFyeTogJyNkZWRlZGUnLFxuICAgIGhpZ2hsaWdodFByaW1hcnk6ICcjNDE3N0RGJyxcbiAgICBoaWdobGlnaHRTZWNvbmRhcnk6ICcjMjAyNDQyJyxcbiAgICB0ZXh0OiAnIzIwMjQ0MicsXG4gIH0sXG4gIGJvcmRlclJhZGl1czogJzE1cHgnLFxuICBwYWRkaW5nOiAnMThweCcsXG4gIHNoYWRvdzogJzFweCAxcHggNHB4ICNFOUU5RjknLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/themes/light.ts\n");

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