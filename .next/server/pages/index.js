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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/spacey/Downloads/Telegram Desktop/Week_6_Assignment/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nconst Home = ({\n  covidCasesInGH\n}) => {\n  return __jsx(\"div\", {\n    className: \"jsx-2919037783\" + \" \" + \"body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    width: \"100px\",\n    src: covidCasesInGH.countryInfo.flag,\n    className: \"jsx-2919037783\" + \" \" + \"card__photo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-2919037783\" + \" \" + \"card__profile\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-2919037783\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 17\n    }\n  }, covidCasesInGH.country), __jsx(\"p\", {\n    className: \"jsx-2919037783\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, \"Cases: \", covidCasesInGH.cases), __jsx(\"p\", {\n    className: \"jsx-2919037783\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, \"Deaths: \", covidCasesInGH.deaths), __jsx(\"p\", {\n    className: \"jsx-2919037783\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"Recovered: \", covidCasesInGH.recovered), __jsx(\"p\", {\n    className: \"jsx-2919037783\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, \"Active: \", covidCasesInGH.active)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2919037783\",\n    __self: undefined\n  }, \"html.jsx-2919037783{background:#333;}.body.jsx-2919037783{margin:5% auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:350px;height:450px;color:#f5f5f5;background:#e64321;text-align:center;font-family:Nunito,sans-serif;font-size:24px;}.card__photo.jsx-2919037783{width:90px;height:90px;border-radius:50%;margin-left:36.8%;margin-top:-29px;position:relative;}.card__profile.jsx-2919037783{margin:0 auto;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NwYWNleS9Eb3dubG9hZHMvVGVsZWdyYW0gRGVza3RvcC9XZWVrXzZfQXNzaWdubWVudC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhd0IsQUFHcUMsQUFLRixBQVlKLEFBUUcsV0FQRixHQVFmLENBcEJnQixDQUxoQixPQWtCc0Isa0JBQ0Esa0JBQ0QsaUJBRXRCLGFBaEIyQixLQWdCMUIseUVBZmUsWUFDQyxhQUNFLGNBQ0ksbUJBQ0Esa0JBQ2EsOEJBQ2hCLGVBQ25CIiwiZmlsZSI6Ii9ob21lL3NwYWNleS9Eb3dubG9hZHMvVGVsZWdyYW0gRGVza3RvcC9XZWVrXzZfQXNzaWdubWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgSG9tZSA9ICh7IGNvdmlkQ2FzZXNJbkdIIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZF9fcGhvdG9cIiB3aWR0aD1cIjEwMHB4XCIgc3JjPXtjb3ZpZENhc2VzSW5HSC5jb3VudHJ5SW5mby5mbGFnfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPGgxPntjb3ZpZENhc2VzSW5HSC5jb3VudHJ5fTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+Q2FzZXM6IHtjb3ZpZENhc2VzSW5HSC5jYXNlc308L3A+XG4gICAgICAgICAgICAgICAgPHA+RGVhdGhzOiB7Y292aWRDYXNlc0luR0guZGVhdGhzfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5SZWNvdmVyZWQ6IHtjb3ZpZENhc2VzSW5HSC5yZWNvdmVyZWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkFjdGl2ZToge2NvdmlkQ2FzZXNJbkdILmFjdGl2ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGh0bWx7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLmJvZHl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjo1JSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjM1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNjQzMjE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgLmNhcmRfX3Bob3Rve1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo5MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzYuOCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yOXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcmRfX3Byb2ZpbGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29yb25hLmxtYW8ubmluamEvdjIvY291bnRyaWVzL2doXCIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvdmlkQ2FzZXNJbkdIOiBhd2FpdCByZXNwb25zZS5qc29uKCksXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\\n/*@ sourceURL=/home/spacey/Downloads/Telegram Desktop/Week_6_Assignment/pages/index.js */\"));\n};\n\nasync function getStaticProps(context) {\n  const response = await fetch(\"https://corona.lmao.ninja/v2/countries/gh\");\n  return {\n    props: {\n      covidCasesInGH: await response.json()\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb3ZpZENhc2VzSW5HSCIsImNvdW50cnlJbmZvIiwiZmxhZyIsImNvdW50cnkiLCJjYXNlcyIsImRlYXRocyIsInJlY292ZXJlZCIsImFjdGl2ZSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9wcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXdCO0FBQ2pDLFNBQ0k7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUE2QixTQUFLLEVBQUMsT0FBbkM7QUFBMkMsT0FBRyxFQUFFQSxjQUFjLENBQUNDLFdBQWYsQ0FBMkJDLElBQTNFO0FBQUEsd0NBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBLHdDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixjQUFjLENBQUNHLE9BQXBCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdILGNBQWMsQ0FBQ0ksS0FBMUIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWUosY0FBYyxDQUFDSyxNQUEzQixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFlTCxjQUFjLENBQUNNLFNBQTlCLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVlOLGNBQWMsQ0FBQ08sTUFBM0IsQ0FMSixDQUZKO0FBQUE7QUFBQTtBQUFBLG8rR0FESjtBQTRDSCxDQTdDRDs7QUErQ08sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDMUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQywyQ0FBRCxDQUE1QjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0haLG9CQUFjLEVBQUUsTUFBTVUsUUFBUSxDQUFDRyxJQUFUO0FBRG5CO0FBREosR0FBUDtBQUtIO0FBRWNkLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEhvbWUgPSAoeyBjb3ZpZENhc2VzSW5HSCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmRfX3Bob3RvXCIgd2lkdGg9XCIxMDBweFwiIHNyYz17Y292aWRDYXNlc0luR0guY291bnRyeUluZm8uZmxhZ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgIDxoMT57Y292aWRDYXNlc0luR0guY291bnRyeX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPkNhc2VzOiB7Y292aWRDYXNlc0luR0guY2FzZXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkRlYXRoczoge2NvdmlkQ2FzZXNJbkdILmRlYXRoc308L3A+XG4gICAgICAgICAgICAgICAgPHA+UmVjb3ZlcmVkOiB7Y292aWRDYXNlc0luR0gucmVjb3ZlcmVkfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BY3RpdmU6IHtjb3ZpZENhc2VzSW5HSC5hY3RpdmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBodG1se1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC5ib2R5e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46NSUgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ1MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZTY0MzIxO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC5jYXJkX19waG90b3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM2LjglO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjlweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJkX19wcm9maWxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2NvdW50cmllcy9naFwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb3ZpZENhc2VzSW5HSDogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });