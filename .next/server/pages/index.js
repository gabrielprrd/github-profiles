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

/***/ "./src/components/LoadingIcon.tsx":
/*!****************************************!*\
  !*** ./src/components/LoadingIcon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/LoadingIcon */ \"./src/styles/components/LoadingIcon.tsx\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/LoadingIcon.tsx\";\n\n\n\nconst LoadingIcon = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n    version: \"1.1\",\n    id: \"L9\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n    x: \"0px\",\n    y: \"0px\",\n    viewBox: \"0 0 100 100\",\n    enableBackground: \"new 0 0 0 0\",\n    xmlSpace: \"preserve\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n      fill: \"#fff\",\n      d: \"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"animateTransform\", {\n        attributeName: \"transform\",\n        attributeType: \"XML\",\n        type: \"rotate\",\n        dur: \"1s\",\n        from: \"0 50 50\",\n        to: \"360 50 50\",\n        repeatCount: \"indefinite\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingIcon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSWNvbi50c3g/ZDk5OCJdLCJuYW1lcyI6WyJMb2FkaW5nSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFdBQXFCLEdBQUcsbUJBQzVCLHFFQUFDLHNFQUFEO0FBQUEseUJBQ0U7QUFDRSxXQUFPLEVBQUMsS0FEVjtBQUVFLE1BQUUsRUFBQyxJQUZMO0FBR0UsU0FBSyxFQUFDLDRCQUhSO0FBSUUsY0FBVSxFQUFDLDhCQUpiO0FBS0UsS0FBQyxFQUFDLEtBTEo7QUFNRSxLQUFDLEVBQUMsS0FOSjtBQU9FLFdBQU8sRUFBQyxhQVBWO0FBUUUsb0JBQWdCLEVBQUMsYUFSbkI7QUFTRSxZQUFRLEVBQUMsVUFUWDtBQUFBLDJCQVdFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxPQUFDLEVBQUMsZ0dBRko7QUFBQSw2QkFJRTtBQUNFLHFCQUFhLEVBQUMsV0FEaEI7QUFFRSxxQkFBYSxFQUFDLEtBRmhCO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFHLEVBQUMsSUFKTjtBQUtFLFlBQUksRUFBQyxTQUxQO0FBTUUsVUFBRSxFQUFDLFdBTkw7QUFPRSxtQkFBVyxFQUFDO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQStCZUEsMEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSWNvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNWR0NvbnRhaW5lciBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Mb2FkaW5nSWNvbic7XG5cbmNvbnN0IExvYWRpbmdJY29uOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPFNWR0NvbnRhaW5lcj5cbiAgICA8c3ZnXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIGlkPVwiTDlcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB4PVwiMHB4XCJcbiAgICAgIHk9XCIwcHhcIlxuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIGQ9XCJNNzMsNTBjMC0xMi43LTEwLjMtMjMtMjMtMjNTMjcsMzcuMywyNyw1MCBNMzAuOSw1MGMwLTEwLjUsOC41LTE5LjEsMTkuMS0xOS4xUzY5LjEsMzkuNSw2OS4xLDUwXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcbiAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgZnJvbT1cIjAgNTAgNTBcIlxuICAgICAgICAgIHRvPVwiMzYwIDUwIDUwXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L1NWR0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdJY29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LoadingIcon.tsx\n");

/***/ }),

/***/ "./src/components/SubmitButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/SubmitButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Button */ \"./src/styles/components/Button.tsx\");\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/SubmitButton.tsx\";\n\n\n\nconst SubmitButton = ({\n  label\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  type: \"submit\",\n  \"aria-label\": \"submit button\",\n  \"data-testid\": \"submit-button\",\n  children: label\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 9,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubmitButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWJtaXRCdXR0b24udHN4PzQ2ZWUiXSwibmFtZXMiOlsiU3VibWl0QnV0dG9uIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxNQUFNQSxZQUE2QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNwQyxxRUFBQyxpRUFBRDtBQUFRLE1BQUksRUFBQyxRQUFiO0FBQXNCLGdCQUFXLGVBQWpDO0FBQWlELGlCQUFZLGVBQTdEO0FBQUEsWUFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBTWVELDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3VibWl0QnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0J1dHRvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbGFiZWwgfSkgPT4gKFxuICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBhcmlhLWxhYmVsPVwic3VibWl0IGJ1dHRvblwiIGRhdGEtdGVzdGlkPVwic3VibWl0LWJ1dHRvblwiPlxuICAgIHtsYWJlbH1cbiAgPC9CdXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubmitButton.tsx\n");

/***/ }),

/***/ "./src/components/TextInput.tsx":
/*!**************************************!*\
  !*** ./src/components/TextInput.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/TextInput.tsx\";\n\n\nconst TextInput = ({\n  onChange,\n  placeHolder\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n  type: \"text\",\n  onChange: onChange,\n  placeholder: placeHolder,\n  \"data-testid\": \"text-input\",\n  required: true\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 9,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQudHN4PzI1NTQiXSwibmFtZXMiOlsiVGV4dElucHV0Iiwib25DaGFuZ2UiLCJwbGFjZUhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU9BLE1BQU1BLFNBQTBCLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxrQkFDakM7QUFDRSxNQUFJLEVBQUMsTUFEUDtBQUVFLFVBQVEsRUFBRUQsUUFGWjtBQUdFLGFBQVcsRUFBRUMsV0FIZjtBQUlFLGlCQUFZLFlBSmQ7QUFLRSxVQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVVlRix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RleHRJbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBwbGFjZUhvbGRlcjogc3RyaW5nO1xufVxuXG5jb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCBwbGFjZUhvbGRlciB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfVxuICAgIGRhdGEtdGVzdGlkPVwidGV4dC1pbnB1dFwiXG4gICAgcmVxdWlyZWRcbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TextInput.tsx\n");

/***/ }),

/***/ "./src/components/UserTopFourRepos.tsx":
/*!*********************************************!*\
  !*** ./src/components/UserTopFourRepos.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingIcon */ \"./src/components/LoadingIcon.tsx\");\n/* harmony import */ var _context_QueryProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/QueryProvider */ \"./src/context/QueryProvider.tsx\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/UserTopFourRepos.tsx\";\n\n\n // Context\n\n\n\nconst UserTopFourRepos = () => {\n  const {\n    0: topFourRepos,\n    1: setTopFourRepos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    query\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_QueryProvider__WEBPACK_IMPORTED_MODULE_4__[\"QueryContext\"]);\n  const {\n    data\n  } = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://api.github.com/users/${query}/repos`); // Gets top four repositories based on stars\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data !== undefined) {\n      if (data.message !== 'Not Found') {\n        const repositories = data.sort((repo1, repo2) => repo1.watchers - repo2.watchers).filter((repo, index) => index < 4);\n        setTopFourRepos(repositories);\n      }\n    }\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LoadingIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, undefined) : topFourRepos.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: repo.url,\n        children: repo.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }, undefined))\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTopFourRepos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyVG9wRm91clJlcG9zLnRzeD9lNDMzIl0sIm5hbWVzIjpbIlVzZXJUb3BGb3VyUmVwb3MiLCJ0b3BGb3VyUmVwb3MiLCJzZXRUb3BGb3VyUmVwb3MiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIlF1ZXJ5Q29udGV4dCIsImRhdGEiLCJ1c2VGZXRjaCIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJyZXBvc2l0b3JpZXMiLCJzb3J0IiwicmVwbzEiLCJyZXBvMiIsIndhdGNoZXJzIiwiZmlsdGVyIiwicmVwbyIsImluZGV4IiwibWFwIiwidXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0E7O0FBUUEsTUFBTUEsZ0JBQTBCLEdBQUcsTUFBVztBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQWUsRUFBZixDQUFoRDtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFZQyx3REFBVSxDQUFDQyxtRUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXQywrREFBUSxDQUN0QixnQ0FBK0JKLEtBQU0sUUFEZixDQUF6QixDQUg0QyxDQU81Qzs7QUFDQUsseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUYsSUFBSSxLQUFLRyxTQUFiLEVBQXdCO0FBQ3RCLFVBQUlILElBQUksQ0FBQ0ksT0FBTCxLQUFpQixXQUFyQixFQUFrQztBQUNoQyxjQUFNQyxZQUFZLEdBQUdMLElBQUksQ0FDdEJNLElBRGtCLENBQ2IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCRCxLQUFLLENBQUNFLFFBQU4sR0FBaUJELEtBQUssQ0FBQ0MsUUFENUIsRUFFbEJDLE1BRmtCLENBRVgsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCQSxLQUFLLEdBQUcsQ0FGZCxDQUFyQjtBQUdBakIsdUJBQWUsQ0FBQ1UsWUFBRCxDQUFmO0FBQ0Q7QUFDRjtBQUNGLEdBVFEsRUFTTixDQUFDTCxJQUFELENBVE0sQ0FBVDtBQVdBLHNCQUNFO0FBQUEsY0FDRyxDQUFDQSxJQUFELGdCQUNDLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FHQ04sWUFBWSxDQUFDbUIsR0FBYixDQUFrQkYsSUFBRCxpQkFDZjtBQUFBLDZCQUNFO0FBQUcsWUFBSSxFQUFFQSxJQUFJLENBQUNHLEdBQWQ7QUFBQSxrQkFBb0JILElBQUksQ0FBQ0k7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFKSixtQkFERjtBQWFELENBaENEOztBQWtDZXRCLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVXNlclRvcEZvdXJSZXBvcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG5cbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuL0xvYWRpbmdJY29uJztcblxuLy8gQ29udGV4dFxuaW1wb3J0IHsgUXVlcnlDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9RdWVyeVByb3ZpZGVyJztcblxuaW50ZXJmYWNlIFJlcG9zaXRvcnkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB3YXRjaGVyczogbnVtYmVyO1xufVxuXG5jb25zdCBVc2VyVG9wRm91clJlcG9zOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xuICBjb25zdCBbdG9wRm91clJlcG9zLCBzZXRUb3BGb3VyUmVwb3NdID0gdXNlU3RhdGU8UmVwb3NpdG9yeVtdPihbXSk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZUNvbnRleHQoUXVlcnlDb250ZXh0KTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VGZXRjaDxSZXBvc2l0b3J5W10+KFxuICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7cXVlcnl9L3JlcG9zYFxuICApO1xuXG4gIC8vIEdldHMgdG9wIGZvdXIgcmVwb3NpdG9yaWVzIGJhc2VkIG9uIHN0YXJzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGRhdGEubWVzc2FnZSAhPT0gJ05vdCBGb3VuZCcpIHtcbiAgICAgICAgY29uc3QgcmVwb3NpdG9yaWVzID0gZGF0YVxuICAgICAgICAgIC5zb3J0KChyZXBvMSwgcmVwbzIpID0+IHJlcG8xLndhdGNoZXJzIC0gcmVwbzIud2F0Y2hlcnMpXG4gICAgICAgICAgLmZpbHRlcigocmVwbywgaW5kZXgpID0+IGluZGV4IDwgNCk7XG4gICAgICAgIHNldFRvcEZvdXJSZXBvcyhyZXBvc2l0b3JpZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWRhdGEgPyAoXG4gICAgICAgIDxMb2FkaW5nSWNvbiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgdG9wRm91clJlcG9zLm1hcCgocmVwbykgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPXtyZXBvLnVybH0+e3JlcG8ubmFtZX08L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclRvcEZvdXJSZXBvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UserTopFourRepos.tsx\n");

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

/***/ "./src/hooks/useFetch.ts":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useFetch; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint comma-dangle: [\"error\", \"never\"] */\n\nfunction useFetch(url) {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(url, async url => {\n    const response = await fetch(url);\n    const json = await response.json();\n    return json;\n  });\n  return {\n    data,\n    isLoading: !error && !data,\n    isError: error\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRmV0Y2gudHM/Mzc4ZSJdLCJuYW1lcyI6WyJ1c2VGZXRjaCIsInVybCIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiaXNMb2FkaW5nIiwiaXNFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUEyQ0MsR0FBM0MsRUFBNkQ7QUFDMUUsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JDLDBDQUFNLENBQWNILEdBQWQsRUFBbUIsTUFBT0EsR0FBUCxJQUFlO0FBQzlELFVBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdBQUQsQ0FBNUI7QUFDQSxVQUFNTSxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxJQUFULEVBQW5CO0FBRUEsV0FBT0EsSUFBUDtBQUNELEdBTDZCLENBQTlCO0FBTUEsU0FBTztBQUNMTCxRQURLO0FBRUxNLGFBQVMsRUFBRSxDQUFDTCxLQUFELElBQVUsQ0FBQ0QsSUFGakI7QUFHTE8sV0FBTyxFQUFFTjtBQUhKLEdBQVA7QUFLRCIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VGZXRjaC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBjb21tYS1kYW5nbGU6IFtcImVycm9yXCIsIFwibmV2ZXJcIl0gKi9cbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRmV0Y2g8RGF0YSA9IGFueSwgRXJyb3IgPSBhbnk+KHVybDogc3RyaW5nKTogYW55IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPERhdGEsIEVycm9yPih1cmwsIGFzeW5jICh1cmwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxuICAgIGlzRXJyb3I6IGVycm9yLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useFetch.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/pages/user.tsx\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TextInput */ \"./src/components/TextInput.tsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton.tsx\");\n/* harmony import */ var _context_QueryProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/QueryProvider */ \"./src/context/QueryProvider.tsx\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/index.tsx\";\n\n // Pages\n\n // Components\n\n\n // Context\n\n\n\nconst Home = () => {\n  const {\n    0: queryOnInput,\n    1: setQueryOnInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    setQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_QueryProvider__WEBPACK_IMPORTED_MODULE_6__[\"QueryContext\"]);\n  const {\n    0: isSubmitted,\n    1: setIsSubmitted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const handleChange = e => {\n    setQueryOnInput(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    setQuery(queryOnInput);\n    setIsSubmitted(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Homepage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        \"data-testid\": \"form\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          placeHolder: \"Type an username\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          label: \"search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), isSubmitted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 25\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInF1ZXJ5T25JbnB1dCIsInNldFF1ZXJ5T25JbnB1dCIsInVzZVN0YXRlIiwic2V0UXVlcnkiLCJ1c2VDb250ZXh0IiwiUXVlcnlDb250ZXh0IiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQVMsRUFBVCxDQUFoRDtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFlQyx3REFBVSxDQUFDQyxtRUFBRCxDQUEvQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0wsc0RBQVEsQ0FBVSxLQUFWLENBQTlDOztBQUVBLFFBQU1NLFlBQVksR0FBSUMsQ0FBRCxJQUE0QztBQUMvRFIsbUJBQWUsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsWUFBWSxHQUFJSCxDQUFELElBQXdCO0FBQzNDQSxLQUFDLENBQUNJLGNBQUY7QUFDQVYsWUFBUSxDQUFDSCxZQUFELENBQVI7QUFDQU8sa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFBLDhCQUNFO0FBQU0sZ0JBQVEsRUFBRUssWUFBaEI7QUFBOEIsdUJBQVksTUFBMUM7QUFBQSxnQ0FDRSxxRUFBQyw2REFBRDtBQUFXLHFCQUFXLEVBQUMsa0JBQXZCO0FBQTBDLGtCQUFRLEVBQUVKO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxnRUFBRDtBQUFjLGVBQUssRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU1HRixXQUFXLGlCQUFJLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBZ0JELENBL0JEOztBQWlDZVAsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gUGFnZXNcbmltcG9ydCBVc2VyUGFnZSBmcm9tICcuL3VzZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dElucHV0JztcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXRCdXR0b24nO1xuXG4vLyBDb250ZXh0XG5pbXBvcnQgeyBRdWVyeUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1F1ZXJ5UHJvdmlkZXInO1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXJ5T25JbnB1dCwgc2V0UXVlcnlPbklucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCB7IHNldFF1ZXJ5IH0gPSB1c2VDb250ZXh0KFF1ZXJ5Q29udGV4dCk7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0SXNTdWJtaXR0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFF1ZXJ5T25JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRRdWVyeShxdWVyeU9uSW5wdXQpO1xuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZXBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZGF0YS10ZXN0aWQ9XCJmb3JtXCI+XG4gICAgICAgICAgPFRleHRJbnB1dCBwbGFjZUhvbGRlcj1cIlR5cGUgYW4gdXNlcm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gbGFiZWw9XCJzZWFyY2hcIiAvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2lzU3VibWl0dGVkICYmIDxVc2VyUGFnZSAvPn1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/pages/user.tsx":
/*!****************************!*\
  !*** ./src/pages/user.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n/* harmony import */ var _components_UserTopFourRepos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserTopFourRepos */ \"./src/components/UserTopFourRepos.tsx\");\n/* harmony import */ var _components_LoadingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoadingIcon */ \"./src/components/LoadingIcon.tsx\");\n/* harmony import */ var _context_QueryProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/QueryProvider */ \"./src/context/QueryProvider.tsx\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/user.tsx\";\n\n\n\n\n\n\n\nconst UserPage = () => {\n  const {\n    0: userFound,\n    1: setUserFound\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    query\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_QueryProvider__WEBPACK_IMPORTED_MODULE_6__[\"QueryContext\"]);\n  const {\n    data: userData\n  } = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`https://api.github.com/users/${query}`); // Alert if no user was found or displays the user\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(userData);\n\n    if (userData !== undefined) {\n      if (userData.message === 'Not Found') {\n        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({\n          title: 'Invalid username',\n          icon: 'error'\n        });\n        setUserFound(false);\n      } else {\n        setUserFound(true);\n      }\n    }\n  }, [userData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !userData ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LoadingIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, undefined) : userFound && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: userData.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Username: \", userData.login]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: userData.avatar_url,\n        alt: \"avatar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Followers:\", userData.followers]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Repositories: \", userData.public_repos]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UserTopFourRepos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlci50c3g/MjY4MyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsInVzZXJGb3VuZCIsInNldFVzZXJGb3VuZCIsInVzZVN0YXRlIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiUXVlcnlDb250ZXh0IiwiZGF0YSIsInVzZXJEYXRhIiwidXNlRmV0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsInN3YWwiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwibmFtZSIsImxvZ2luIiwiYXZhdGFyX3VybCIsImZvbGxvd2VycyIsInB1YmxpY19yZXBvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBVUEsTUFBTUEsUUFBa0IsR0FBRyxNQUFXO0FBQ3BDLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBVSxLQUFWLENBQTFDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVlDLHdEQUFVLENBQUNDLG1FQUFELENBQTVCO0FBRUEsUUFBTTtBQUFFQyxRQUFJLEVBQUVDO0FBQVIsTUFBcUJDLCtEQUFRLENBQ2hDLGdDQUErQkwsS0FBTSxFQURMLENBQW5DLENBSm9DLENBUXBDOztBQUNBTSx5REFBUyxDQUFDLE1BQVk7QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaOztBQUNBLFFBQUlBLFFBQVEsS0FBS0ssU0FBakIsRUFBNEI7QUFDMUIsVUFBSUwsUUFBUSxDQUFDTSxPQUFULEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDQywwREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsZUFBSyxFQUFFLGtCQURDO0FBRVJDLGNBQUksRUFBRTtBQUZFLFNBQVY7QUFJQWhCLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsT0FORCxNQU1PO0FBQ0xBLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBYlEsRUFhTixDQUFDTSxRQUFELENBYk0sQ0FBVDtBQWNBLHNCQUNFO0FBQUEsY0FDRyxDQUFDQSxRQUFELGdCQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FHQ1AsU0FBUyxpQkFDUDtBQUFBLDhCQUNFO0FBQUEsa0JBQUtPLFFBQVEsQ0FBQ1c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxpQ0FBY1gsUUFBUSxDQUFDWSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFLLFdBQUcsRUFBRVosUUFBUSxDQUFDYSxVQUFuQjtBQUErQixXQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsaUNBQWNiLFFBQVEsQ0FBQ2MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxxQ0FBa0JkLFFBQVEsQ0FBQ2UsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBTE4sbUJBREY7QUFrQkQsQ0F6Q0Q7O0FBMkNldkIsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCB1c2VGZXRjaCBmcm9tICcuLi9ob29rcy91c2VGZXRjaCc7XG5pbXBvcnQgVXNlclRvcEZvdXJSZXBvcyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJUb3BGb3VyUmVwb3MnO1xuXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nSWNvbic7XG5pbXBvcnQgeyBRdWVyeUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1F1ZXJ5UHJvdmlkZXInO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9naW46IHN0cmluZztcbiAgYXZhdGFyX3VybDogc3RyaW5nO1xuICBmb2xsb3dlcnM6IG51bWJlcjtcbiAgcHVibGljX3JlcG9zOiBudW1iZXI7XG59XG5cbmNvbnN0IFVzZXJQYWdlOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xuICBjb25zdCBbdXNlckZvdW5kLCBzZXRVc2VyRm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VDb250ZXh0KFF1ZXJ5Q29udGV4dCk7XG5cbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSB9ID0gdXNlRmV0Y2g8VXNlcj4oXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtxdWVyeX1gXG4gICk7XG5cbiAgLy8gQWxlcnQgaWYgbm8gdXNlciB3YXMgZm91bmQgb3IgZGlzcGxheXMgdGhlIHVzZXJcbiAgdXNlRWZmZWN0KCgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG4gICAgaWYgKHVzZXJEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh1c2VyRGF0YS5tZXNzYWdlID09PSAnTm90IEZvdW5kJykge1xuICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCB1c2VybmFtZScsXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFVzZXJGb3VuZChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyRm91bmQodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbdXNlckRhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyF1c2VyRGF0YSA/IChcbiAgICAgICAgPExvYWRpbmdJY29uIC8+XG4gICAgICApIDogKFxuICAgICAgICB1c2VyRm91bmQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e3VzZXJEYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxwPlVzZXJuYW1lOiB7dXNlckRhdGEubG9naW59PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJEYXRhLmF2YXRhcl91cmx9IGFsdD1cImF2YXRhclwiIC8+XG4gICAgICAgICAgICA8cD5Gb2xsb3dlcnM6e3VzZXJEYXRhLmZvbGxvd2Vyc308L3A+XG4gICAgICAgICAgICA8cD5SZXBvc2l0b3JpZXM6IHt1c2VyRGF0YS5wdWJsaWNfcmVwb3N9PC9wPlxuICAgICAgICAgICAgPFVzZXJUb3BGb3VyUmVwb3MgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/user.tsx\n");

/***/ }),

/***/ "./src/styles/components/Button.tsx":
/*!******************************************!*\
  !*** ./src/styles/components/Button.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"Button\",\n  componentId: \"sc-1josjkg-0\"\n})([\"background:\", \";color:\", \";border:none;padding:\", \";border-radius:\", \";cursor:pointer;\"], ({\n  theme\n}) => theme.colors.secondary, ({\n  theme\n}) => theme.colors.text, ({\n  theme\n}) => theme.padding, ({\n  theme\n}) => theme.borderRadius);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQnV0dG9uLnRzeD8xNjlmIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwidGV4dCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLCtGQUNJLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxTQURoQyxFQUVELENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxJQUYzQixFQUlDLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksT0FKdEIsRUFLTyxDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNLLFlBTDVCLENBQVo7QUFTZVIscUVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wYWRkaW5nfTtcbiAgYm9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJSYWRpdXN9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/components/Button.tsx\n");

/***/ }),

/***/ "./src/styles/components/LoadingIcon.tsx":
/*!***********************************************!*\
  !*** ./src/styles/components/LoadingIcon.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SVGContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({\n  displayName: \"LoadingIcon__SVGContainer\",\n  componentId: \"dyrm6c-0\"\n})([\"width:300px;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (SVGContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTG9hZGluZ0ljb24udHN4PzgyMDciXSwibmFtZXMiOlsiU1ZHQ29udGFpbmVyIiwic3R5bGVkIiwic3ZnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvQkFBbEI7QUFJZUYsMkVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTG9hZGluZ0ljb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNWR0NvbnRhaW5lciA9IHN0eWxlZC5zdmdgXG4gIHdpZHRoOiAzMDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNWR0NvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/components/LoadingIcon.tsx\n");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sweetalert2\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiP2MyZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3dlZXRhbGVydDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2VldGFsZXJ0MlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sweetalert2\n");

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