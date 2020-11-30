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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/TextInput.tsx\";\n\n\nconst TextInput = ({\n  onChange,\n  placeHolder\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n  type: \"text\",\n  onChange: onChange,\n  placeholder: placeHolder,\n  required: true\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 9,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQudHN4PzI1NTQiXSwibmFtZXMiOlsiVGV4dElucHV0Iiwib25DaGFuZ2UiLCJwbGFjZUhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU9BLE1BQU1BLFNBQTBCLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxrQkFDakM7QUFBTyxNQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFRLEVBQUVELFFBQTdCO0FBQXVDLGFBQVcsRUFBRUMsV0FBcEQ7QUFBaUUsVUFBUTtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBSWVGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGV4dElucHV0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHBsYWNlSG9sZGVyIH0pID0+IChcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj17cGxhY2VIb2xkZXJ9IHJlcXVpcmVkIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TextInput.tsx\n");

/***/ }),

/***/ "./src/components/UserTopFourRepos.tsx":
/*!*********************************************!*\
  !*** ./src/components/UserTopFourRepos.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/components/UserTopFourRepos.tsx\";\n\n\n\nconst UserTopFourRepos = ({\n  query\n}) => {\n  const {\n    0: topFourRepos,\n    1: setTopFourRepos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    data\n  } = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://api.github.com/users/${query}/repos`); // Gets top four repositories based on stars\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data !== undefined) {\n      if (data.message !== 'Not Found') {\n        const repositories = data.sort((repo1, repo2) => repo1.watchers - repo2.watchers).filter((repo, index) => index < 4);\n        setTopFourRepos(repositories);\n      }\n    }\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, undefined) : topFourRepos.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: repo.url,\n        children: repo.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }, undefined))\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTopFourRepos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyVG9wRm91clJlcG9zLnRzeD9lNDMzIl0sIm5hbWVzIjpbIlVzZXJUb3BGb3VyUmVwb3MiLCJxdWVyeSIsInRvcEZvdXJSZXBvcyIsInNldFRvcEZvdXJSZXBvcyIsInVzZVN0YXRlIiwiZGF0YSIsInVzZUZldGNoIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwibWVzc2FnZSIsInJlcG9zaXRvcmllcyIsInNvcnQiLCJyZXBvMSIsInJlcG8yIiwid2F0Y2hlcnMiLCJmaWx0ZXIiLCJyZXBvIiwiaW5kZXgiLCJtYXAiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLE1BQU1BLGdCQUE2QyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW9CO0FBQ3hFLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBZSxFQUFmLENBQWhEO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFRLENBQ3RCLGdDQUErQkwsS0FBTSxRQURmLENBQXpCLENBRndFLENBTXhFOztBQUNBTSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJRixJQUFJLEtBQUtHLFNBQWIsRUFBd0I7QUFDdEIsVUFBSUgsSUFBSSxDQUFDSSxPQUFMLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDLGNBQU1DLFlBQVksR0FBR0wsSUFBSSxDQUN0Qk0sSUFEa0IsQ0FDYixDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FBa0JELEtBQUssQ0FBQ0UsUUFBTixHQUFpQkQsS0FBSyxDQUFDQyxRQUQ1QixFQUVsQkMsTUFGa0IsQ0FFWCxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUJBLEtBQUssR0FBRyxDQUZkLENBQXJCO0FBR0FkLHVCQUFlLENBQUNPLFlBQUQsQ0FBZjtBQUNEO0FBQ0Y7QUFDRixHQVRRLEVBU04sQ0FBQ0wsSUFBRCxDQVRNLENBQVQ7QUFXQSxzQkFDRTtBQUFBLGNBQ0csQ0FBQ0EsSUFBRCxnQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQUdDSCxZQUFZLENBQUNnQixHQUFiLENBQWtCRixJQUFELGlCQUNmO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUVBLElBQUksQ0FBQ0csR0FBZDtBQUFBLGtCQUFvQkgsSUFBSSxDQUFDSTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUpKLG1CQURGO0FBYUQsQ0EvQkQ7O0FBaUNlcEIsK0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyVG9wRm91clJlcG9zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gJy4uL2hvb2tzL3VzZUZldGNoJztcblxuaW50ZXJmYWNlIFJlcG9zaXRvcnkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB3YXRjaGVyczogbnVtYmVyO1xufVxuXG5jb25zdCBVc2VyVG9wRm91clJlcG9zOiBSZWFjdC5GQzx7IHF1ZXJ5OiBzdHJpbmcgfT4gPSAoeyBxdWVyeSB9KTogYW55ID0+IHtcbiAgY29uc3QgW3RvcEZvdXJSZXBvcywgc2V0VG9wRm91clJlcG9zXSA9IHVzZVN0YXRlPFJlcG9zaXRvcnlbXT4oW10pO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoPFJlcG9zaXRvcnlbXT4oXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtxdWVyeX0vcmVwb3NgXG4gICk7XG5cbiAgLy8gR2V0cyB0b3AgZm91ciByZXBvc2l0b3JpZXMgYmFzZWQgb24gc3RhcnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZGF0YS5tZXNzYWdlICE9PSAnTm90IEZvdW5kJykge1xuICAgICAgICBjb25zdCByZXBvc2l0b3JpZXMgPSBkYXRhXG4gICAgICAgICAgLnNvcnQoKHJlcG8xLCByZXBvMikgPT4gcmVwbzEud2F0Y2hlcnMgLSByZXBvMi53YXRjaGVycylcbiAgICAgICAgICAuZmlsdGVyKChyZXBvLCBpbmRleCkgPT4gaW5kZXggPCA0KTtcbiAgICAgICAgc2V0VG9wRm91clJlcG9zKHJlcG9zaXRvcmllcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshZGF0YSA/IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRvcEZvdXJSZXBvcy5tYXAoKHJlcG8pID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj17cmVwby51cmx9PntyZXBvLm5hbWV9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUb3BGb3VyUmVwb3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UserTopFourRepos.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./src/pages/user.tsx\");\n/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TextInput */ \"./src/components/TextInput.tsx\");\n/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubmitButton */ \"./src/components/SubmitButton.tsx\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/index.tsx\";\n\n // Pages\n\n // Components\n\n\n\n\nconst Home = () => {\n  const {\n    0: query,\n    1: setQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: submittedQuery,\n    1: setSubmittedQuery\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: isSubmitted,\n    1: setIsSubmitted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const handleChange = e => {\n    setQuery(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    setSubmittedQuery(query);\n    setIsSubmitted(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Homepage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          placeHolder: \"Type an username\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          value: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), isSubmitted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        query: submittedQuery\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZFF1ZXJ5Iiwic2V0U3VibWl0dGVkUXVlcnkiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBYyxHQUFHLE1BQU07QUFDM0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFTLEVBQVQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBUyxFQUFULENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDSixzREFBUSxDQUFVLEtBQVYsQ0FBOUM7O0FBRUEsUUFBTUssWUFBWSxHQUFJQyxDQUFELElBQTRDO0FBQy9EUCxZQUFRLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLFlBQVksR0FBSUgsQ0FBRCxJQUF3QjtBQUMzQ0EsS0FBQyxDQUFDSSxjQUFGO0FBQ0FSLHFCQUFpQixDQUFDSixLQUFELENBQWpCO0FBQ0FNLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBQSw4QkFDRTtBQUFNLGdCQUFRLEVBQUVLLFlBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFBVyxxQkFBVyxFQUFDLGtCQUF2QjtBQUEwQyxrQkFBUSxFQUFFSjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBYyxlQUFLLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFNR0YsV0FBVyxpQkFBSSxxRUFBQyw2Q0FBRDtBQUFVLGFBQUssRUFBRUY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsa0JBREY7QUFnQkQsQ0EvQkQ7O0FBaUNlSixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyBQYWdlc1xuaW1wb3J0IFVzZXJQYWdlIGZyb20gJy4vdXNlcic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1N1Ym1pdEJ1dHRvbic7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbc3VibWl0dGVkUXVlcnksIHNldFN1Ym1pdHRlZFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTdWJtaXR0ZWRRdWVyeShxdWVyeSk7XG4gICAgc2V0SXNTdWJtaXR0ZWQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lcGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8VGV4dElucHV0IHBsYWNlSG9sZGVyPVwiVHlwZSBhbiB1c2VybmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB2YWx1ZT1cIlNlYXJjaFwiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7aXNTdWJtaXR0ZWQgJiYgPFVzZXJQYWdlIHF1ZXJ5PXtzdWJtaXR0ZWRRdWVyeX0gLz59XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/pages/user.tsx":
/*!****************************!*\
  !*** ./src/pages/user.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n/* harmony import */ var _components_UserTopFourRepos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserTopFourRepos */ \"./src/components/UserTopFourRepos.tsx\");\n\n\nvar _jsxFileName = \"/home/gabrielprrd/development/github-profiles/src/pages/user.tsx\";\n\n\n\n\n\nconst UserPage = ({\n  query\n}) => {\n  const {\n    0: userFound,\n    1: setUserFound\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    data\n  } = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`https://api.github.com/users/${query}`); // Alert if no user was found or displays the user\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data !== undefined) {\n      if (data.message === 'Not Found') {\n        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({\n          title: 'Invalid username',\n          icon: 'error'\n        });\n        setUserFound(false);\n      } else {\n        setUserFound(true);\n      }\n    }\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, undefined) : userFound && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: data.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Username: \", data.login]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: data.avatar_url,\n        alt: \"avatar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Followers:\", data.followers]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Repositories: \", data.public_repos]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UserTopFourRepos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        query: query\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXNlci50c3g/MjY4MyJdLCJuYW1lcyI6WyJVc2VyUGFnZSIsInF1ZXJ5IiwidXNlckZvdW5kIiwic2V0VXNlckZvdW5kIiwidXNlU3RhdGUiLCJkYXRhIiwidXNlRmV0Y2giLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwic3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJuYW1lIiwibG9naW4iLCJhdmF0YXJfdXJsIiwiZm9sbG93ZXJzIiwicHVibGljX3JlcG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxNQUFNQSxRQUFxQyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW9CO0FBQ2hFLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBVSxLQUFWLENBQTFDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFRLENBQVEsZ0NBQStCTCxLQUFNLEVBQTdDLENBQXpCLENBRmdFLENBSWhFOztBQUNBTSx5REFBUyxDQUFDLE1BQVk7QUFDcEIsUUFBSUYsSUFBSSxLQUFLRyxTQUFiLEVBQXdCO0FBQ3RCLFVBQUlILElBQUksQ0FBQ0ksT0FBTCxLQUFpQixXQUFyQixFQUFrQztBQUNoQ0MsMERBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGVBQUssRUFBRSxrQkFEQztBQUVSQyxjQUFJLEVBQUU7QUFGRSxTQUFWO0FBSUFWLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsT0FORCxNQU1PO0FBQ0xBLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBWlEsRUFZTixDQUFDRSxJQUFELENBWk0sQ0FBVDtBQWFBLHNCQUNFO0FBQUEsY0FDRyxDQUFDQSxJQUFELGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBR0NILFNBQVMsaUJBQ1A7QUFBQSw4QkFDRTtBQUFBLGtCQUFLRyxJQUFJLENBQUNTO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsaUNBQWNULElBQUksQ0FBQ1UsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBSyxXQUFHLEVBQUVWLElBQUksQ0FBQ1csVUFBZjtBQUEyQixXQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsaUNBQWNYLElBQUksQ0FBQ1ksU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxxQ0FBa0JaLElBQUksQ0FBQ2EsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUUscUVBQUMsb0VBQUQ7QUFBa0IsYUFBSyxFQUFFakI7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBTE4sbUJBREY7QUFrQkQsQ0FwQ0Q7O0FBc0NlRCx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy91c2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gJy4uL2hvb2tzL3VzZUZldGNoJztcbmltcG9ydCBVc2VyVG9wRm91clJlcG9zIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclRvcEZvdXJSZXBvcyc7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2dpbjogc3RyaW5nO1xuICBhdmF0YXJfdXJsOiBzdHJpbmc7XG4gIGZvbGxvd2VyczogbnVtYmVyO1xuICBwdWJsaWNfcmVwb3M6IG51bWJlcjtcbn1cblxuY29uc3QgVXNlclBhZ2U6IFJlYWN0LkZDPHsgcXVlcnk6IHN0cmluZyB9PiA9ICh7IHF1ZXJ5IH0pOiBhbnkgPT4ge1xuICBjb25zdCBbdXNlckZvdW5kLCBzZXRVc2VyRm91bmRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoPFVzZXI+KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7cXVlcnl9YCk7XG5cbiAgLy8gQWxlcnQgaWYgbm8gdXNlciB3YXMgZm91bmQgb3IgZGlzcGxheXMgdGhlIHVzZXJcbiAgdXNlRWZmZWN0KCgpOiB2b2lkID0+IHtcbiAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZGF0YS5tZXNzYWdlID09PSAnTm90IEZvdW5kJykge1xuICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCB1c2VybmFtZScsXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFVzZXJGb3VuZChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyRm91bmQodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWRhdGEgPyAoXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICApIDogKFxuICAgICAgICB1c2VyRm91bmQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+VXNlcm5hbWU6IHtkYXRhLmxvZ2lufTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmF2YXRhcl91cmx9IGFsdD1cImF2YXRhclwiIC8+XG4gICAgICAgICAgICA8cD5Gb2xsb3dlcnM6e2RhdGEuZm9sbG93ZXJzfTwvcD5cbiAgICAgICAgICAgIDxwPlJlcG9zaXRvcmllczoge2RhdGEucHVibGljX3JlcG9zfTwvcD5cbiAgICAgICAgICAgIDxVc2VyVG9wRm91clJlcG9zIHF1ZXJ5PXtxdWVyeX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/user.tsx\n");

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