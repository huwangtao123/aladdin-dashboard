/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/OnchainProviders.tsx":
/*!**************************************!*\
  !*** ./src/app/OnchainProviders.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _coinbase_onchainkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coinbase/onchainkit */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/index.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/query-core/build/modern/queryClient.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var viem_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! viem/chains */ \"(app-pages-browser)/./node_modules/viem/_esm/chains/definitions/base.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/context.js\");\n/* harmony import */ var _wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wagmi */ \"(app-pages-browser)/./src/app/wagmi.ts\");\n/* harmony import */ var _wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction OnchainProviders(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiProvider, {\n        config: _wagmi__WEBPACK_IMPORTED_MODULE_2__.wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit__WEBPACK_IMPORTED_MODULE_1__.OnchainKitProvider, {\n                apiKey: process.env.PUBLIC_ONCHAINKIT_API_KEY,\n                chain: viem_chains__WEBPACK_IMPORTED_MODULE_6__.base,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/taowang/workspace/aladdin-dashboard/src/app/OnchainProviders.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/taowang/workspace/aladdin-dashboard/src/app/OnchainProviders.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/taowang/workspace/aladdin-dashboard/src/app/OnchainProviders.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = OnchainProviders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OnchainProviders);\nvar _c;\n$RefreshReg$(_c, \"OnchainProviders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvT25jaGFpblByb3ZpZGVycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEQ7QUFDZTtBQUN0QztBQUNHO0FBQ0E7QUFHdEMsTUFBTU0sY0FBYyxJQUFJTCw4REFBV0E7QUFFbkMsU0FBU00saUJBQWlCLEtBQW1CO1FBQW5CLEVBQUVDLFFBQVEsRUFBUyxHQUFuQjtJQUN4QixxQkFDRSw4REFBQ0osZ0RBQWFBO1FBQUNLLFFBQVFKLCtDQUFXQTtrQkFDaEMsNEVBQUNILHNFQUFtQkE7WUFBQ1EsUUFBUUo7c0JBQzNCLDRFQUFDTixvRUFBa0JBO2dCQUNqQlcsUUFBUUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyx5QkFBeUI7Z0JBQzdDQyxPQUFPWiw2Q0FBSUE7MEJBRVZLOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7S0FiU0Q7QUFlVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvT25jaGFpblByb3ZpZGVycy50c3g/Y2JkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPbmNoYWluS2l0UHJvdmlkZXIgfSBmcm9tICdAY29pbmJhc2Uvb25jaGFpbmtpdCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7IFxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ3ZpZW0vY2hhaW5zJztcbmltcG9ydCB7IFdhZ21pUHJvdmlkZXIgfSBmcm9tICd3YWdtaSc7IFxuaW1wb3J0IHsgd2FnbWlDb25maWcgfSBmcm9tICcuL3dhZ21pJzsgIFxudHlwZSBQcm9wcyA9IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9O1xuIFxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTsgXG4gXG5mdW5jdGlvbiBPbmNoYWluUHJvdmlkZXJzKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlQcm92aWRlciBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8T25jaGFpbktpdFByb3ZpZGVyXG4gICAgICAgICAgYXBpS2V5PXtwcm9jZXNzLmVudi5QVUJMSUNfT05DSEFJTktJVF9BUElfS0VZfVxuICAgICAgICAgIGNoYWluPXtiYXNlfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L09uY2hhaW5LaXRQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+IFxuICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgT25jaGFpblByb3ZpZGVyczsiXSwibmFtZXMiOlsiT25jaGFpbktpdFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiYmFzZSIsIldhZ21pUHJvdmlkZXIiLCJ3YWdtaUNvbmZpZyIsInF1ZXJ5Q2xpZW50IiwiT25jaGFpblByb3ZpZGVycyIsImNoaWxkcmVuIiwiY29uZmlnIiwiY2xpZW50IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19PTkNIQUlOS0lUX0FQSV9LRVkiLCJjaGFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/OnchainProviders.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/wagmi.ts":
/*!**************************!*\
  !*** ./src/app/wagmi.ts ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});