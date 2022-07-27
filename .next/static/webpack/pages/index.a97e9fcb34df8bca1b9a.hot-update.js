"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inrupt/solid-ui-react */ "./node_modules/@inrupt/solid-ui-react/dist/index.js");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inrupt/prism-react-components */ "./node_modules/@inrupt/prism-react-components/dist/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropdown-tree-select */ "./node_modules/react-dropdown-tree-select/dist/react-dropdown-tree-select.js");
/* harmony import */ var react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-query/devtools */ "./node_modules/react-query/devtools/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resources/personaldata.json */ "./resources/personaldata.json");
/* harmony import */ var _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources/purposes.json */ "./resources/purposes.json");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/coreui/dist/css/coreui.min.css */ "./node_modules/@coreui/coreui/dist/css/coreui.min.css");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @inrupt/solid-client */ "./node_modules/@inrupt/solid-client/dist/index.mjs");
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @inrupt/solid-client-authn-browser */ "./node_modules/@inrupt/solid-client-authn-browser/dist/index.js");
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ricardo\\Desktop\\UNIVERSIDAD\\MASTER UPM\\TFM\\TFM-frontend\\pages\\index.jsx",
    _this = undefined,
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

















var saveFile;

var Card = function Card(_ref) {
  var name = _ref.name,
      urlList = _ref.urlList,
      categories = _ref.categories,
      policies = _ref.policies,
      recipients = _ref.recipients,
      duration = _ref.duration;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCard, {
    color: "light",
    style: ({
      "maxWidth": '300px'
    }, {
      "padding": 30
    }, {
      "margin-bottom": 20
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardHeader, {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardTitle, {
        children: ["The category of the file is: ", categories]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardText, {
        children: "The recipients are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this), recipients.map(function (recipient) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardBody, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardSubtitle, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("b", {
                children: ["WebID:  ", recipient]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 30
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardText, {
        children: ["The duration is: ", duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardText, {
        children: "The policies are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }, _this), policies.map(function (_ref2) {
      var polName = _ref2.polName,
          purpose = _ref2.purpose,
          action = _ref2.action;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardBody, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardSubtitle, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("b", {
              children: ["Name: ", polName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 30
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CListGroup, {
          flush: true,
          children: purpose.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CListGroupItem, {
                children: [item.toString(), " - ", action.toString()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 15
              }, _this)
            }, void 0, false);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this)]
      }, void 0, true);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CButton, {
        onClick: function onClick() {
          return saveFile(urlList);
        },
        children: "Download the folder contents."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }, _this);
};

_c = Card;

var CardList = function CardList(_ref3) {
  var _ref4;

  var resourceCards = _ref3.resourceCards;
  var cardsArray = resourceCards.map(function (resourceCard) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      style: {
        minWidth: "200px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(Card, {
        name: resourceCard.name,
        urlList: resourceCard.uri,
        categories: resourceCard.categories,
        policies: resourceCard.policies,
        recipients: resourceCard.recipients,
        duration: resourceCard.duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: "cardlist",
    style: (_ref4 = {
      display: 'flex',
      flexGrow: '1',
      flexShrink: "1",
      flexBasis: "100%",
      justifyContent: "space-around",
      flexWrap: "wrap",
      flexDirection: "row"
    }, (0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "flexGrow", "1"), (0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, "alignContent", "stretch"), _ref4),
    children: cardsArray
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, _this);
};

_c2 = CardList;
function Home() {
  _s();

  var _useSession = (0,_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(),
      session = _useSession.session;

  var queryClient = new react_query__WEBPACK_IMPORTED_MODULE_9__.QueryClient();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResult = _useState[0],
      setGetResult = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResultContent = _useState2[0],
      setGetResultContent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      webId = _useState3[0],
      setWebId = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      url = _useState4[0],
      setUrl = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState5[0],
      setError = _useState5[1];

  var selectedPUR = [];
  var selectedPD = [];

  saveFile = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(urlList) {
      var i, fileURL, filename, file;
      return C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < urlList.length)) {
                _context.next = 11;
                break;
              }

              fileURL = urlList[i].toString();
              filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
              _context.next = 6;
              return (0,_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_17__.getFile)(fileURL, // File in Pod to Read
              {
                fetch: session.fetch
              } // fetch from authenticated session
              );

            case 6:
              file = _context.sent;

              try {
                if (window.navigator.msSaveOrOpenBlob) {
                  window.navigator.msSaveOrOpenBlob(file, filename);
                } else {
                  (function () {
                    var a = document.createElement('a');
                    document.body.appendChild(a);
                    var url = window.URL.createObjectURL(file);
                    a.href = url;
                    a.download = filename;
                    a.click();
                    setTimeout(function () {
                      window.URL.revokeObjectURL(url);
                      document.body.removeChild(a);
                    }, 0);
                  })();
                }
              } catch (err) {
                console.log(err);
              }

            case 8:
              i++;
              _context.next = 1;
              break;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveFile(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var goBack = function goBack() {
    setGetResult(null);
  };

  var fortmatResponse = function fortmatResponse(res) {
    return JSON.stringify(res, null, 2);
  };

  var _useQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)("getQueryAll", /*#__PURE__*/(0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    return C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default()({
              method: 'get',
              url: url,
              headers: {
                webID: webId
              }
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), {
    enabled: false,
    onSuccess: function () {
      var _onSuccess = (0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(res) {
        var result;
        return C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = {
                  status: res.status + "-" + res.statusText,
                  headers: res.headers,
                  data: res.data
                };
                result = fortmatResponse(res);
                setError(false);
                setGetResult(res.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function onSuccess(_x2) {
        return _onSuccess.apply(this, arguments);
      }

      return onSuccess;
    }(),
    onError: function onError(err) {
      var _err$response;

      setError(true);
      setGetResult(fortmatResponse(((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) || err));
    }
  }),
      isLoadingAll = _useQuery.isLoading,
      getAll = _useQuery.refetch;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (isLoadingAll) setGetResult("loading...");
  }, [isLoadingAll]);
  var uri = "http://localhost:8000/getFiles?";

  var getQueryAll = /*#__PURE__*/function () {
    var _ref7 = (0,C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var i, j;
      return C_Users_Ricardo_Desktop_UNIVERSIDAD_MASTER_UPM_TFM_TFM_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setGetResult(null);
              _context4.next = 4;
              return setWebId(session.info.webId);

            case 4:
              if (selectedPD.length == 0) {
                uri += "catPData[]=0&";
              } else {
                for (i = 0; i < selectedPD.length; i++) {
                  uri += "catPData[]=" + selectedPD[i] + "&";
                }
              }

              if (selectedPUR.length == 0) {
                uri += "purPData[]=0";
              } else {
                for (j = 0; j < selectedPUR.length; j++) {
                  if (j == selectedPUR.length - 1) {
                    uri += "purPData[]=" + selectedPUR[j];
                  } else {
                    uri += "purPData[]=" + selectedPUR[j] + "&";
                  }
                }
              }

              _context4.next = 8;
              return setUrl(uri);

            case 8:
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              setGetResult(fortmatResponse(_context4.t0));

            case 13:
              uri = "http://localhost:8000/api?";

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function getQueryAll() {
      return _ref7.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (url != uri) {
      getAll(); // This will always use latest value of uri
    }
  }, [url]);

  var assignObjectPaths = function assignObjectPaths(obj, stack) {
    Object.keys(obj).forEach(function (k) {
      var node = obj[k];

      if (typeof node === "object") {
        node.path = stack ? "".concat(stack, ".").concat(k) : k;
        assignObjectPaths(node, node.path);
      }
    });
  };

  assignObjectPaths(_resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__);
  assignObjectPaths(_resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__);

  var handlePersonalData = function handlePersonalData(currentNode, selectedNodes) {
    selectedPD = [];

    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPD.push(label);
    }

    console.log(selectedPD);
  };

  var handlePurposes = function handlePurposes(currentNode, selectedNodes) {
    selectedPUR = [];

    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPUR.push(label);
    }

    console.log(selectedPD);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    children: [!session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "initialtext",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: ["This frontend serves as a gateway for users to send requests to the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("a", {
          href: "https://github.com/Rlongares/TFM-API-express",
          children: "API"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 75
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "It also allows for the download of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "To get started, log in into this application and into the API."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "Finally, you can generate the ODRL policy's RDF by clicking the \"Generate\" button and save it in your Pod."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("a", {
          href: "mailto:rm.longares.diez@alumnos.upm.es",
          children: "Contact Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }, this), session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: getQueryAll,
          children: "Make a GDPR petition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: goBack,
          children: "Clear query."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
          children: url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
          children: webId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 7
        }, this), getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: [JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 13
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: getResult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 291,
    columnNumber: 5
  }, this);
}

_s(Home, "AGVaEr9f7sM2/U9mS7XC7B5Et+s=", false, function () {
  return [_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_4__.useSession, react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "CardList");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk3ZTlmY2IzNGRmOGJjYTFiOWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LHNCQUFNO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGcEQsRUFHQ3BDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekMsU0FBUyxDQUFDNEUsU0FBekIsS0FBdUMsTUFBdkMsaUJBQWtEO0FBQUEsc0JBQU07QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhuRCxFQUlDNUUsU0FBUyxDQUFDNkUsTUFBVixpQkFDQztBQUFBLG9DQUNFO0FBQUEsd0JBQU0sMkRBQTBEckMsSUFBSSxDQUFDQyxTQUFMLENBQWV6QyxTQUFTLENBQUM2RSxNQUFWLENBQWlCQyxpQkFBaEM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsd0JBQU0sZ0VBQWdFdEMsSUFBSSxDQUFDQyxTQUFMLENBQWV6QyxTQUFTLENBQUM2RSxNQUFWLENBQWlCRSxVQUFoQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UsK0RBQUMsUUFBRDtBQUFVLDJCQUFhLEVBQUcvRSxTQUFTLENBQUM2RSxNQUFWLENBQWlCRztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUEsMEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpOLEVBb0JHaEYsU0FBUyxJQUFJUSxLQUFiLGlCQUNPO0FBQUEsaUNBQ0U7QUFBQSxzQkFBTVI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQTFPdUJIO1VBQ0Z2RCxnRUFvRGdDTTs7O01BckQ5QmlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIxIElucnVwdCBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuICogdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsXG4gKiBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gKiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcbiAqIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgRHJvcGRvd25UcmVlU2VsZWN0IGZyb20gJ3JlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0JztcbmltcG9ydCB7Q1JvdywgQ0NvbH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIHVzZVF1ZXJ5LFxuICB1c2VRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXG59IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnXG5pbXBvcnQgcGVyc29uYWxEYXRhICBmcm9tICcuLi9yZXNvdXJjZXMvcGVyc29uYWxkYXRhLmpzb24nO1xuaW1wb3J0IHB1cnBvc2VzRGF0YSBmcm9tICcuLi9yZXNvdXJjZXMvcHVycG9zZXMuanNvbic7XG5pbXBvcnQgeyBDQ2FyZCxDQ2FyZEJvZHksQ0NhcmRHcm91cCxDQ2FyZEhlYWRlcixDQ2FyZExpbmssQ0NhcmRUZXh0LENDYXJkVGl0bGUsQ0NhcmRTdWJ0aXRsZSxDTGlzdEdyb3VwLENMaXN0R3JvdXBJdGVtLENCdXR0b24gICAgIH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5pbXBvcnQgJ0Bjb3JldWkvY29yZXVpL2Rpc3QvY3NzL2NvcmV1aS5taW4uY3NzJ1xuaW1wb3J0IHtnZXRGaWxlfSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudCc7XG5pbXBvcnQge2ZldGNofSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudC1hdXRobi1icm93c2VyJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuXG5cblxudmFyIHNhdmVGaWxlO1xuXG5jb25zdCBDYXJkID0gKHtuYW1lLCB1cmxMaXN0LCBjYXRlZ29yaWVzLCBwb2xpY2llcyxyZWNpcGllbnRzLCBkdXJhdGlvbn0pID0+e1xuXG5cbiAgcmV0dXJuKFxuICAgICAgPENDYXJkXG4gICAgICBjb2xvcj1cImxpZ2h0XCJcblxuXG4gICAgICBzdHlsZT17e1wibWF4V2lkdGhcIjogJzMwMHB4J30seyBcInBhZGRpbmdcIjogMzAgfSx7XCJtYXJnaW4tYm90dG9tXCI6IDIwfX1cblxuXG4gICAgICA+XG5cbiAgICAgICAgPENDYXJkSGVhZGVyPntuYW1lfTwvQ0NhcmRIZWFkZXI+XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICAgIDxDQ2FyZFRpdGxlPlRoZSBjYXRlZ29yeSBvZiB0aGUgZmlsZSBpczoge2NhdGVnb3JpZXN9PC9DQ2FyZFRpdGxlPlxuXG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcmVjaXBpZW50cyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIHtyZWNpcGllbnRzLm1hcCgocmVjaXBpZW50KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPENDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENDYXJkU3VidGl0bGU+PGI+V2ViSUQ6ICB7cmVjaXBpZW50fTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBwb2xpY2llcyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICAgICAge3BvbGljaWVzLm1hcCgoeyBwb2xOYW1lLCBwdXJwb3NlLCBhY3Rpb24gfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPk5hbWU6IHtwb2xOYW1lfTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxuICAgICAgICAgICAge3B1cnBvc2UubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICA8Q0J1dHRvbiBvbkNsaWNrPXsoKT0+c2F2ZUZpbGUodXJsTGlzdCl9PkRvd25sb2FkIHRoZSBmb2xkZXIgY29udGVudHMuPC9DQnV0dG9uPlxuXG4gICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICA8L0NDYXJkPlxuXG4gICk7XG5cbn1cblxuY29uc3QgQ2FyZExpc3QgPSAoeyByZXNvdXJjZUNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNBcnJheSA9IHJlc291cmNlQ2FyZHMubWFwKHJlc291cmNlQ2FyZCA9PiAoXG4gICAgPGRpdiBzdHlsZT17e21pbldpZHRoOlwiMjAwcHhcIn19PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybExpc3Q9e3Jlc291cmNlQ2FyZC51cml9XG4gICAgICBjYXRlZ29yaWVzPXtyZXNvdXJjZUNhcmQuY2F0ZWdvcmllc31cbiAgICAgIHBvbGljaWVzPXtyZXNvdXJjZUNhcmQucG9saWNpZXN9XG4gICAgICByZWNpcGllbnRzPXtyZXNvdXJjZUNhcmQucmVjaXBpZW50c31cbiAgICAgIGR1cmF0aW9uPXtyZXNvdXJjZUNhcmQuZHVyYXRpb259XG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbZ2V0UmVzdWx0LCBzZXRHZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtnZXRSZXN1bHRDb250ZW50LCBzZXRHZXRSZXN1bHRDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2ViSWQsIHNldFdlYklkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1cmwsc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IHNlbGVjdGVkUFVSID0gW107XG4gIGxldCBzZWxlY3RlZFBEID0gW107XG5cblxuICAgc2F2ZUZpbGUgPSBhc3luYyAodXJsTGlzdCkgPT4ge1xuICAgZm9yKHZhciBpID0gMDsgaTx1cmxMaXN0Lmxlbmd0aDtpKyspe1xuICAgICBjb25zdCBmaWxlVVJMID0gdXJsTGlzdFtpXS50b1N0cmluZygpO1xuICAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGVVUkwuc3Vic3RyaW5nKGZpbGVVUkwubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG4gICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKFxuICAgICAgICAgICAgIGZpbGVVUkwsICAgICAgICAgICAgICAgLy8gRmlsZSBpbiBQb2QgdG8gUmVhZFxuICAgICAgICAgICAgIHsgZmV0Y2g6IHNlc3Npb24uZmV0Y2ggfSAgICAgICAvLyBmZXRjaCBmcm9tIGF1dGhlbnRpY2F0ZWQgc2Vzc2lvblxuICAgICApO1xuICAgICB0cnkge1xuXG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZW5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICB9LCAwKVxuICAgIH1cbiAgIH0gY2F0Y2ggKGVycikge1xuICAgY29uc29sZS5sb2coZXJyKTtcbiAgIH1cbiAgIH1cblxuIH1cblxuXG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgc2V0R2V0UmVzdWx0KG51bGwpO1xuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEdldFJlc3VsdChudWxsKTtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWFsdGV4dFwiPlxuICAgIDxwPlxuICAgICAgVGhpcyBmcm9udGVuZCBzZXJ2ZXMgYXMgYSBnYXRld2F5IGZvciB1c2VycyB0byBzZW5kIHJlcXVlc3RzIHRvIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Jsb25nYXJlcy9URk0tQVBJLWV4cHJlc3NcIj5BUEk8L2E+LlxuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgSXQgYWxzbyBhbGxvd3MgZm9yIHRoZSBkb3dubG9hZCBvZiB0aGUgcmV0dXJuZWQgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRvIGdldCBzdGFydGVkLCBsb2cgaW4gaW50byB0aGlzIGFwcGxpY2F0aW9uIGFuZCBpbnRvIHRoZSBBUEkuXG4gICAgPC9wPlxuICAgIDxwPlxuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgRmluYWxseSwgeW91IGNhbiBnZW5lcmF0ZSB0aGUgT0RSTCBwb2xpY3kmYXBvcztzIFJERiBieSBjbGlja2luZyB0aGVcbiAgICAgICZxdW90O0dlbmVyYXRlJnF1b3Q7IGJ1dHRvbiBhbmQgc2F2ZSBpdCBpbiB5b3VyIFBvZC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnJtLmxvbmdhcmVzLmRpZXpAYWx1bW5vcy51cG0uZXNcIj5Db250YWN0IE1lPC9hPlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgICApfVxuXG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z2V0UXVlcnlBbGx9ID5NYWtlIGEgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dvQmFja30gPkNsZWFyIHF1ZXJ5LjwvQnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybTJcIj5cbiAgICAgIDxwcmU+e3VybH08L3ByZT5cbiAgICAgIDxwcmU+e3dlYklkfTwvcHJlPlxuICAgICAge2dldFJlc3VsdCAmJiAhZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiA+XG5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcImZhbHNlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgbm90IGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXCJ9PC9wcmU+KSAgfVxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwidHJ1ZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXCJ9PC9wcmU+KSAgfVxuICAgICAgICAgICAge2dldFJlc3VsdC5mb3JtYXQgJiYoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHByZT57XCJUaGUgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIGRhdGFTdWJqZWN0UmlnaHRzIGlzOiBcIiArSlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LmZvcm1hdC5kYXRhU3ViamVjdFJpZ2h0cyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPHByZT57XCJUaGUgc2FmZWd1YXJkcyBpbiBjYXNlIG9mIHRyYW5zZmVyIHRvIGEgdGhpcmQgY291bnRyeSBhcmU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LmZvcm1hdC5zYWZlZ3VhcmRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8Q2FyZExpc3QgcmVzb3VyY2VDYXJkcyA9e2dldFJlc3VsdC5mb3JtYXQucmVzb3VyY2V9PjwvQ2FyZExpc3Q+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAge2dldFJlc3VsdCAmJiBlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICA8cHJlPntnZXRSZXN1bHR9PC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJheGlvcyIsIkRyb3Bkb3duVHJlZVNlbGVjdCIsIkNSb3ciLCJDQ29sIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInBlcnNvbmFsRGF0YSIsInB1cnBvc2VzRGF0YSIsIkNDYXJkIiwiQ0NhcmRCb2R5IiwiQ0NhcmRHcm91cCIsIkNDYXJkSGVhZGVyIiwiQ0NhcmRMaW5rIiwiQ0NhcmRUZXh0IiwiQ0NhcmRUaXRsZSIsIkNDYXJkU3VidGl0bGUiLCJDTGlzdEdyb3VwIiwiQ0xpc3RHcm91cEl0ZW0iLCJDQnV0dG9uIiwiZ2V0RmlsZSIsImZldGNoIiwic2F2ZUZpbGUiLCJDYXJkIiwibmFtZSIsInVybExpc3QiLCJjYXRlZ29yaWVzIiwicG9saWNpZXMiLCJyZWNpcGllbnRzIiwiZHVyYXRpb24iLCJtYXAiLCJyZWNpcGllbnQiLCJwb2xOYW1lIiwicHVycG9zZSIsImFjdGlvbiIsIml0ZW0iLCJpIiwidG9TdHJpbmciLCJDYXJkTGlzdCIsInJlc291cmNlQ2FyZHMiLCJjYXJkc0FycmF5IiwicmVzb3VyY2VDYXJkIiwibWluV2lkdGgiLCJ1cmkiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJIb21lIiwic2Vzc2lvbiIsInF1ZXJ5Q2xpZW50IiwiZ2V0UmVzdWx0Iiwic2V0R2V0UmVzdWx0IiwiZ2V0UmVzdWx0Q29udGVudCIsInNldEdldFJlc3VsdENvbnRlbnQiLCJ3ZWJJZCIsInNldFdlYklkIiwidXJsIiwic2V0VXJsIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkUFVSIiwic2VsZWN0ZWRQRCIsImxlbmd0aCIsImZpbGVVUkwiLCJmaWxlbmFtZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiZmlsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVtb3ZlQ2hpbGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3ZWJJRCIsImVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImlzTG9hZGluZ0FsbCIsImlzTG9hZGluZyIsImdldEFsbCIsInJlZmV0Y2giLCJnZXRRdWVyeUFsbCIsImluZm8iLCJqIiwiYXNzaWduT2JqZWN0UGF0aHMiLCJvYmoiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsIm5vZGUiLCJwYXRoIiwiaGFuZGxlUGVyc29uYWxEYXRhIiwiY3VycmVudE5vZGUiLCJzZWxlY3RlZE5vZGVzIiwibGFiZWwiLCJwdXNoIiwiaGFuZGxlUHVycG9zZXMiLCJpc0xvZ2dlZEluIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZGF0YVN1YmplY3RSaWdodHMiLCJzYWZlZ3VhcmRzIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9