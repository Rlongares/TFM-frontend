"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/loginForm/index.jsx":
/*!****************************************!*\
  !*** ./components/loginForm/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inrupt/solid-ui-react */ "./node_modules/@inrupt/solid-ui-react/dist/index.js");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inrupt/solid-client-authn-browser */ "./node_modules/@inrupt/solid-client-authn-browser/dist/index.js");
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inrupt/prism-react-components */ "./node_modules/@inrupt/prism-react-components/dist/index.es.js");
/* harmony import */ var _solid_lit_prism_patterns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solid/lit-prism-patterns */ "./node_modules/@solid/lit-prism-patterns/dist/index.js");
/* harmony import */ var _solid_lit_prism_patterns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solid_lit_prism_patterns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/loginForm/styles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ricardo\\Desktop\\UNIVERSIDAD\\MASTER UPM\\TFM\\TFM-frontend\\components\\loginForm\\index.jsx",
    _s = $RefreshSig$();

/**
 * Copyright 2021 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */









var useStyles = (0,_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return (0,_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_4__.createStyles)((0,_styles__WEBPACK_IMPORTED_MODULE_6__.default)(theme));
});
var CONFIG = (0,_config__WEBPACK_IMPORTED_MODULE_7__.default)();
function LoginForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("https://login.inrupt.com"),
      idp = _useState[0],
      setIdp = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("https://localhost:3000"),
      currentUrl = _useState2[0],
      setCurrentUrl = _useState2[1];

  var bem = (0,_solid_lit_prism_patterns__WEBPACK_IMPORTED_MODULE_5__.useBem)(useStyles());
  var classes = useStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // 1. Register the callback to restore the user's page after refresh and
  //    redirection from the Solid Identity Provider.

  (0,_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_2__.onSessionRestore)(function (url) {
    router.push(url);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 2. When loading the component, call `handleIncomingRedirect` to authenticate
    //    the user if appropriate, or to restore a previous session.
    (0,_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_2__.handleIncomingRedirect)({
      restorePreviousSession: true
    }).then(function (info) {
      console.log("Logged in with WebID [".concat(info.webId, "]"));
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentUrl(window.location.href);
  }, [setCurrentUrl]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: classes.loginFormContainer,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_4__.Input, {
      id: "idp",
      label: "IDP",
      placeholder: "Identity Provider",
      defaultValue: idp,
      onChange: function onChange(e) {
        return setIdp(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__.LoginButton, {
      authOptions: {
        clientName: CONFIG.demoTitle
      },
      oidcIssuer: idp,
      redirectUrl: currentUrl,
      onError: console.error,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        variant: "small",
        className: bem("user-menu__list-item-trigger"),
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(LoginForm, "rkkrfcIkrO99BZti5L/hVwJvxAM=", false, function () {
  return [_solid_lit_prism_patterns__WEBPACK_IMPORTED_MODULE_5__.useBem, useStyles, useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = LoginForm;

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZWNmZWJiMWZlNDQ4MGVjNDU0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWEsU0FBUyxHQUFHTCwwRUFBVSxDQUFDLFVBQUNNLEtBQUQ7QUFBQSxTQUFXTCw0RUFBWSxDQUFDRSxnREFBTSxDQUFDRyxLQUFELENBQVAsQ0FBdkI7QUFBQSxDQUFELENBQTVCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSCxnREFBTSxFQUFyQjtBQUVlLFNBQVNJLFNBQVQsR0FBcUI7QUFBQTs7QUFDbEMsa0JBQXNCaEIsK0NBQVEsQ0FBQywwQkFBRCxDQUE5QjtBQUFBLE1BQU9pQixHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLHdCQUFELENBQTVDO0FBQUEsTUFBT21CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHWCxpRUFBTSxDQUFDRyxTQUFTLEVBQVYsQ0FBbEI7QUFDQSxNQUFNUyxPQUFPLEdBQUdULFNBQVMsRUFBekI7QUFDQSxNQUFNVSxNQUFNLEdBQUdsQixzREFBUyxFQUF4QixDQUxrQyxDQU9sQztBQUNBOztBQUVBRCxFQUFBQSxvRkFBZ0IsQ0FBQyxVQUFDb0IsR0FBRCxFQUFTO0FBQ3hCRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUQsR0FBWjtBQUNELEdBRmUsQ0FBaEI7QUFJQXZCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFDQUUsSUFBQUEsMEZBQXNCLENBQUM7QUFDckJ1QixNQUFBQSxzQkFBc0IsRUFBRTtBQURILEtBQUQsQ0FBdEIsQ0FFR0MsSUFGSCxDQUVRLFVBQUNDLElBQUQsRUFBVTtBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLGlDQUFxQ0YsSUFBSSxDQUFDRyxLQUExQztBQUNELEtBSkQ7QUFLRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUE5QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZG1CLElBQUFBLGFBQWEsQ0FBQ1ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFqQixDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNkLGFBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ2Esa0JBQXhCO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFDRSxRQUFFLEVBQUMsS0FETDtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsaUJBQVcsRUFBQyxtQkFIZDtBQUlFLGtCQUFZLEVBQUVsQixHQUpoQjtBQUtFLGNBQVEsRUFBRSxrQkFBQ21CLENBQUQ7QUFBQSxlQUFPbEIsTUFBTSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUsOERBQUMsK0RBQUQ7QUFDRSxpQkFBVyxFQUFFO0FBQUVDLFFBQUFBLFVBQVUsRUFBRXhCLE1BQU0sQ0FBQ3lCO0FBQXJCLE9BRGY7QUFFRSxnQkFBVSxFQUFFdkIsR0FGZDtBQUdFLGlCQUFXLEVBQUVFLFVBSGY7QUFJRSxhQUFPLEVBQUVVLE9BQU8sQ0FBQ1ksS0FKbkI7QUFBQSw2QkFNRSw4REFBQyxzRUFBRDtBQUNFLGVBQU8sRUFBQyxPQURWO0FBRUUsaUJBQVMsRUFBRXBCLEdBQUcsQ0FBQyw4QkFBRCxDQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0FwRHVCTDtVQUdWTiwrREFBT0csV0FDSEEsV0FDRFI7OztLQUxPVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luRm9ybS9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBJbnJ1cHQgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbiAqIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9naW5CdXR0b24gfSBmcm9tIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlSW5jb21pbmdSZWRpcmVjdCxcbiAgb25TZXNzaW9uUmVzdG9yZVxufSBmcm9tIFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBMaW5rQnV0dG9uLFxuICBJbnB1dCxcbiAgbWFrZVN0eWxlcyxcbiAgY3JlYXRlU3R5bGVzLFxufSBmcm9tIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VCZW0gfSBmcm9tIFwiQHNvbGlkL2xpdC1wcmlzbS1wYXR0ZXJuc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gY3JlYXRlU3R5bGVzKHN0eWxlcyh0aGVtZSkpKTtcbmNvbnN0IENPTkZJRyA9IGNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gIGNvbnN0IFtpZHAsIHNldElkcF0gPSB1c2VTdGF0ZShcImh0dHBzOi8vbG9naW4uaW5ydXB0LmNvbVwiKTtcbiAgY29uc3QgW2N1cnJlbnRVcmwsIHNldEN1cnJlbnRVcmxdID0gdXNlU3RhdGUoXCJodHRwczovL2xvY2FsaG9zdDozMDAwXCIpO1xuICBjb25zdCBiZW0gPSB1c2VCZW0odXNlU3R5bGVzKCkpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIDEuIFJlZ2lzdGVyIHRoZSBjYWxsYmFjayB0byByZXN0b3JlIHRoZSB1c2VyJ3MgcGFnZSBhZnRlciByZWZyZXNoIGFuZFxuICAvLyAgICByZWRpcmVjdGlvbiBmcm9tIHRoZSBTb2xpZCBJZGVudGl0eSBQcm92aWRlci5cblxuICBvblNlc3Npb25SZXN0b3JlKCh1cmwpID0+IHtcbiAgICByb3V0ZXIucHVzaCh1cmwpXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gMi4gV2hlbiBsb2FkaW5nIHRoZSBjb21wb25lbnQsIGNhbGwgYGhhbmRsZUluY29taW5nUmVkaXJlY3RgIHRvIGF1dGhlbnRpY2F0ZVxuICAgIC8vICAgIHRoZSB1c2VyIGlmIGFwcHJvcHJpYXRlLCBvciB0byByZXN0b3JlIGEgcHJldmlvdXMgc2Vzc2lvbi5cbiAgICBoYW5kbGVJbmNvbWluZ1JlZGlyZWN0KHtcbiAgICAgIHJlc3RvcmVQcmV2aW91c1Nlc3Npb246IHRydWVcbiAgICB9KS50aGVuKChpbmZvKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9nZ2VkIGluIHdpdGggV2ViSUQgWyR7aW5mby53ZWJJZH1dYClcbiAgICB9KVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50VXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgfSwgW3NldEN1cnJlbnRVcmxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luRm9ybUNvbnRhaW5lcn0+XG4gICAgICA8SW5wdXRcbiAgICAgICAgaWQ9XCJpZHBcIlxuICAgICAgICBsYWJlbD1cIklEUFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSWRlbnRpdHkgUHJvdmlkZXJcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e2lkcH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZHAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxMb2dpbkJ1dHRvblxuICAgICAgICBhdXRoT3B0aW9ucz17eyBjbGllbnROYW1lOiBDT05GSUcuZGVtb1RpdGxlIH19XG4gICAgICAgIG9pZGNJc3N1ZXI9e2lkcH1cbiAgICAgICAgcmVkaXJlY3RVcmw9e2N1cnJlbnRVcmx9XG4gICAgICAgIG9uRXJyb3I9e2NvbnNvbGUuZXJyb3J9XG4gICAgICA+XG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNtYWxsXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2JlbShcInVzZXItbWVudV9fbGlzdC1pdGVtLXRyaWdnZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICBMb2cgSW5cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvZ2luQnV0dG9uIiwiaGFuZGxlSW5jb21pbmdSZWRpcmVjdCIsIm9uU2Vzc2lvblJlc3RvcmUiLCJ1c2VSb3V0ZXIiLCJMaW5rQnV0dG9uIiwiSW5wdXQiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwidXNlQmVtIiwic3R5bGVzIiwiY29uZmlnIiwidXNlU3R5bGVzIiwidGhlbWUiLCJDT05GSUciLCJMb2dpbkZvcm0iLCJpZHAiLCJzZXRJZHAiLCJjdXJyZW50VXJsIiwic2V0Q3VycmVudFVybCIsImJlbSIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1cmwiLCJwdXNoIiwicmVzdG9yZVByZXZpb3VzU2Vzc2lvbiIsInRoZW4iLCJpbmZvIiwiY29uc29sZSIsImxvZyIsIndlYklkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibG9naW5Gb3JtQ29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50TmFtZSIsImRlbW9UaXRsZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==