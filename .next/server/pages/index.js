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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/SubmitButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/SubmitButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/SubmitButton.tsx\";\n\n\nconst SubmitButton = ({\n  value\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n  type: \"submit\",\n  \"aria-label\": \"submit button\",\n  value: value\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 8,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubmitButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJtaXRCdXR0b24udHN4PzQ2ZWUiXSwibmFtZXMiOlsiU3VibWl0QnV0dG9uIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFNQSxNQUFNQSxZQUE2QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNwQztBQUFPLE1BQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFXLGVBQWhDO0FBQWdELE9BQUssRUFBRUE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQUllRCwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBTdWJtaXRCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHZhbHVlIH06IFByb3BzKSA9PiAoXG4gIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgYXJpYS1sYWJlbD1cInN1Ym1pdCBidXR0b25cIiB2YWx1ZT17dmFsdWV9IC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubmitButton.tsx\n");

/***/ }),

/***/ "./src/components/TextInput.tsx":
/*!**************************************!*\
  !*** ./src/components/TextInput.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/TextInput.tsx\";\n\n\nconst TextInput = ({\n  onChange\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n  type: \"text\",\n  onChange: onChange\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 9,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQudHN4PzI1NTQiXSwibmFtZXMiOlsiVGV4dElucHV0Iiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFPQSxNQUFNQSxTQUEwQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNqQztBQUFPLE1BQUksRUFBQyxNQUFaO0FBQW1CLFVBQVEsRUFBRUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQUllRCx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RleHRJbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBvbkNoYW5nZTogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xufVxuXG5jb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlIH0pID0+IChcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TextInput.tsx\n");

/***/ }),

/***/ "./src/hooks/useFetch.ts":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFetch; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint comma-dangle: [\"error\", \"never\"] */\n\nfunction useFetch(url) {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(url, async url => {\n    const response = await fetch(url);\n    const json = await response.json();\n    return json;\n  });\n  return {\n    userData: data,\n    isLoading: !error && !data,\n    isError: error\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHM/Mzc4ZSJdLCJuYW1lcyI6WyJ1c2VGZXRjaCIsInVybCIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwidXNlckRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQTJDQyxHQUEzQyxFQUE2RDtBQUMxRSxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFrQkMsMENBQU0sQ0FBY0gsR0FBZCxFQUFtQixNQUFPQSxHQUFQLElBQWU7QUFDOUQsVUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsR0FBRCxDQUE1QjtBQUNBLFVBQU1NLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFFQSxXQUFPQSxJQUFQO0FBQ0QsR0FMNkIsQ0FBOUI7QUFNQSxTQUFPO0FBQ0xDLFlBQVEsRUFBRU4sSUFETDtBQUVMTyxhQUFTLEVBQUUsQ0FBQ04sS0FBRCxJQUFVLENBQUNELElBRmpCO0FBR0xRLFdBQU8sRUFBRVA7QUFISixHQUFQO0FBS0QiLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRmV0Y2gudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgY29tbWEtZGFuZ2xlOiBbXCJlcnJvclwiLCBcIm5ldmVyXCJdICovXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZldGNoPERhdGEgPSBhbnksIEVycm9yID0gYW55Pih1cmw6IHN0cmluZyk6IGFueSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxEYXRhLCBFcnJvcj4odXJsLCBhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdXNlckRhdGE6IGRhdGEsXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXG4gICAgaXNFcnJvcjogZXJyb3IsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useFetch.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/pages/user.tsx\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TextInput */ \"./src/components/TextInput.tsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton.tsx\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/index.tsx\";\n\n // Pages\n\n // Components\n\n\n\n\n\nconst Home = () => {\n  const {\n    0: query,\n    1: setQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: isSubmitted,\n    1: setIsSubmitted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    userData\n  } = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(`https://api.github.com/users/${query}`);\n\n  const handleChange = e => {\n    setQuery(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    setIsSubmitted(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Homepage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          placeholder: \"Type an username\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          value: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined), isSubmitted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: userData.name,\n        login: userData.login,\n        avatarUrl: userData.avatar_url,\n        followers: userData.followers,\n        repositories: userData.public_repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsImlzU3VibWl0dGVkIiwic2V0SXNTdWJtaXR0ZWQiLCJ1c2VyRGF0YSIsInVzZUZldGNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwibG9naW4iLCJhdmF0YXJfdXJsIiwiZm9sbG93ZXJzIiwicHVibGljX3JlcG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQVVBLE1BQU1BLElBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBUyxFQUFULENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRixzREFBUSxDQUFVLEtBQVYsQ0FBOUM7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBZUMsK0RBQVEsQ0FBUSxnQ0FBK0JOLEtBQU0sRUFBN0MsQ0FBN0I7O0FBRUEsUUFBTU8sWUFBWSxHQUFJQyxDQUFELElBQTRDO0FBQy9EUCxZQUFRLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLFlBQVksR0FBSUgsQ0FBRCxJQUF3QjtBQUMzQ0EsS0FBQyxDQUFDSSxjQUFGO0FBQ0FSLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQSw4QkFDRTtBQUFNLGdCQUFRLEVBQUVPLFlBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFBVyxxQkFBVyxFQUFDLGtCQUF2QjtBQUEwQyxrQkFBUSxFQUFFSjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBYyxlQUFLLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFNR0osV0FBVyxpQkFDVixxRUFBQyw2Q0FBRDtBQUNFLFlBQUksRUFBRUUsUUFBUSxDQUFDUSxJQURqQjtBQUVFLGFBQUssRUFBRVIsUUFBUSxDQUFDUyxLQUZsQjtBQUdFLGlCQUFTLEVBQUVULFFBQVEsQ0FBQ1UsVUFIdEI7QUFJRSxpQkFBUyxFQUFFVixRQUFRLENBQUNXLFNBSnRCO0FBS0Usb0JBQVksRUFBRVgsUUFBUSxDQUFDWTtBQUx6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBd0JELENBdENEOztBQXdDZWxCLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgVXNlclBhZ2UgZnJvbSAnLi91c2VyJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRJbnB1dCc7XG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0QnV0dG9uJztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9naW46IHN0cmluZztcbiAgYXZhdGFyX3VybDogc3RyaW5nO1xuICBmb2xsb3dlcnM6IG51bWJlcjtcbiAgcHVibGljX3JlcG9zOiBudW1iZXI7XG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyB1c2VyRGF0YSB9ID0gdXNlRmV0Y2g8VXNlcj4oYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtxdWVyeX1gKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc1N1Ym1pdHRlZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWVwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIGFuIHVzZXJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHZhbHVlPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHtpc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgPFVzZXJQYWdlXG4gICAgICAgICAgICBuYW1lPXt1c2VyRGF0YS5uYW1lfVxuICAgICAgICAgICAgbG9naW49e3VzZXJEYXRhLmxvZ2lufVxuICAgICAgICAgICAgYXZhdGFyVXJsPXt1c2VyRGF0YS5hdmF0YXJfdXJsfVxuICAgICAgICAgICAgZm9sbG93ZXJzPXt1c2VyRGF0YS5mb2xsb3dlcnN9XG4gICAgICAgICAgICByZXBvc2l0b3JpZXM9e3VzZXJEYXRhLnB1YmxpY19yZXBvc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/pages/user.tsx":
/*!****************************!*\
  !*** ./src/pages/user.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/user.tsx\";\n\n\nconst UserPage = ({\n  name,\n  login,\n  avatarUrl,\n  followers,\n  repositories\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: name\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Username: \", login]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: avatarUrl,\n    alt: \"avatar\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Followers:\", followers]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Repositories: \", repositories]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 10,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlci50c3g/MjY4MyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsIm5hbWUiLCJsb2dpbiIsImF2YXRhclVybCIsImZvbGxvd2VycyIsInJlcG9zaXRvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBTUosR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQyxXQUFmO0FBQTBCQyxXQUExQjtBQUFxQ0M7QUFBckMsQ0FBRCxrQkFDSDtBQUFBLDBCQUNFO0FBQUEsY0FBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDZCQUFjQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBSyxPQUFHLEVBQUVDLFNBQVY7QUFBcUIsT0FBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQUEsNkJBQWNDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGlDQUFrQkMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7O0FBZ0JlTCx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy91c2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJQYWdlOiBSZWFjdC5GQzx7XG4gIG5hbWU7XG4gIGxvZ2luO1xuICBhdmF0YXJVcmw7XG4gIGZvbGxvd2VycztcbiAgcmVwb3NpdG9yaWVzO1xufT4gPSAoeyBuYW1lLCBsb2dpbiwgYXZhdGFyVXJsLCBmb2xsb3dlcnMsIHJlcG9zaXRvcmllcyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntuYW1lfTwvaDE+XG4gICAgPHA+VXNlcm5hbWU6IHtsb2dpbn08L3A+XG4gICAgPGltZyBzcmM9e2F2YXRhclVybH0gYWx0PVwiYXZhdGFyXCIgLz5cbiAgICA8cD5Gb2xsb3dlcnM6e2ZvbGxvd2Vyc308L3A+XG4gICAgPHA+UmVwb3NpdG9yaWVzOiB7cmVwb3NpdG9yaWVzfTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/user.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });