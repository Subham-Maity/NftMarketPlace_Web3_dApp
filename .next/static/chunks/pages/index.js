/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5Cmains%5CNftMarketPlace_Web3_dApp%5Cpages%5Cindex.js&page=%2F!":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5Cmains%5CNftMarketPlace_Web3_dApp%5Cpages%5Cindex.js&page=%2F! ***!
  \************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1GJTNBJTVDbWFpbnMlNUNOZnRNYXJrZXRQbGFjZV9XZWIzX2RBcHAlNUNwYWdlcyU1Q2luZGV4LmpzJnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YTA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5Cmains%5CNftMarketPlace_Web3_dApp%5Cpages%5Cindex.js&page=%2F!\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/index.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"flex h-screen items-center justify-center\",\n    connectWalletButton: \"rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white \"\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var connectWithMetamask = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useMetamask)();\n    var address = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useAddress)();\n    var Auth = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: style.wrapper,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWithMetamask,\n                className: style.connectWalletButton,\n                children: \"Connect Metamask\"\n            }, void 0, false, {\n                fileName: \"F:\\\\mains\\\\NftMarketPlace_Web3_dApp\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"F:\\\\mains\\\\NftMarketPlace_Web3_dApp\\\\pages\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"LOGGED IN\"\n        }, void 0, false, {\n            fileName: \"F:\\\\mains\\\\NftMarketPlace_Web3_dApp\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 25\n        }, this) : Auth()\n    }, void 0, false);\n};\n_s(Home, \"kEQup+ZLHz5M5fn4zG29qd7GJbw=\", false, function() {\n    return [\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useMetamask,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useAddress\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTZEOztBQUU3RCxJQUFNRSxLQUFLLEdBQUc7SUFDVkMsT0FBTyxFQUFHLDJDQUF5QztJQUNuREMsbUJBQW1CLEVBQUcsMkZBQXlGO0NBQ2xIO0FBQ2MsU0FBU0MsSUFBSSxHQUFHOzs7SUFDM0IsSUFBTUMsbUJBQW1CLEdBQUdMLGdFQUFXLEVBQUU7SUFDekMsSUFBTU0sT0FBTyxHQUFHUCwrREFBVSxFQUFFO0lBRTVCLElBQU1RLElBQUksR0FBRyxXQUFNO1FBQ2YscUJBQ0ksOERBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFUixLQUFLLENBQUNDLE9BQU87c0JBQ3pCLDRFQUFDUSxRQUFNO2dCQUNIQyxPQUFPLEVBQUVOLG1CQUFtQjtnQkFDNUJJLFNBQVMsRUFBRVIsS0FBSyxDQUFDRSxtQkFBbUI7MEJBQ3ZDLGtCQUVEOzs7OztxQkFBUzs7Ozs7aUJBQ1AsQ0FDVDtLQUNKO0lBRUQscUJBQU87a0JBQUdHLE9BQU8saUJBQUcsOERBQUNFLEtBQUc7c0JBQUMsV0FBUzs7Ozs7Z0JBQU0sR0FBR0QsSUFBSSxFQUFFO3FCQUFJO0NBQ3hEO0dBbEJ1QkgsSUFBSTs7UUFDSUosNERBQVc7UUFDdkJELDJEQUFVOzs7QUFGTkssS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFkZHJlc3MsIHVzZU1ldGFtYXNrIH0gZnJvbSAnQHRoaXJkd2ViLWRldi9yZWFjdCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgd3JhcHBlcjogYGZsZXggaC1zY3JlZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYCxcbiAgICBjb25uZWN0V2FsbGV0QnV0dG9uOiBgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWJsYWNrIHB4LTEwIHB5LTUgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBgLFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBjb25uZWN0V2l0aE1ldGFtYXNrID0gdXNlTWV0YW1hc2soKVxuICAgIGNvbnN0IGFkZHJlc3MgPSB1c2VBZGRyZXNzKClcblxuICAgIGNvbnN0IEF1dGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2l0aE1ldGFtYXNrfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNvbm5lY3RXYWxsZXRCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0IE1ldGFtYXNrXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiA8PnthZGRyZXNzID8gPGRpdj5MT0dHRUQgSU48L2Rpdj4gOiBBdXRoKCl9PC8+XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VBZGRyZXNzIiwidXNlTWV0YW1hc2siLCJzdHlsZSIsIndyYXBwZXIiLCJjb25uZWN0V2FsbGV0QnV0dG9uIiwiSG9tZSIsImNvbm5lY3RXaXRoTWV0YW1hc2siLCJhZGRyZXNzIiwiQXV0aCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=F%3A%5Cmains%5CNftMarketPlace_Web3_dApp%5Cpages%5Cindex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);