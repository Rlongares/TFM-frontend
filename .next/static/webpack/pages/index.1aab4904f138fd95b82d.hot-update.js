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
              _context4.next = 3;
              return setWebId(session.info.webId);

            case 3:
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

              _context4.next = 7;
              return setUrl(uri);

            case 7:
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              setGetResult(fortmatResponse(_context4.t0));

            case 12:
              uri = "http://localhost:8000/api?";

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
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
          lineNumber: 294,
          columnNumber: 75
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "It also allows for the download of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "To get started, log in into this application and into the API."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "Finally, you can generate the ODRL policy's RDF by clicking the \"Generate\" button and save it in your Pod."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("a", {
          href: "mailto:rm.longares.diez@alumnos.upm.es",
          children: "Contact Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }, this), session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
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
          lineNumber: 327,
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
          lineNumber: 328,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form2",
        children: [getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 13
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: getResult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 290,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFhYjQ5MDRmMTM4ZmQ5NWI4MmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUhwRCxFQUlDcEMsSUFBSSxDQUFDQyxTQUFMLENBQWV6QyxTQUFTLENBQUM0RSxTQUF6QixLQUF1QyxNQUF2QyxpQkFBa0Q7QUFBQSxzQkFBTTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSm5ELEVBS0M1RSxTQUFTLENBQUM2RSxNQUFWLGlCQUNDO0FBQUEsb0NBQ0U7QUFBQSx3QkFBTSwyREFBMERyQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXpDLFNBQVMsQ0FBQzZFLE1BQVYsQ0FBaUJDLGlCQUFoQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSx3QkFBTSxnRUFBZ0V0QyxJQUFJLENBQUNDLFNBQUwsQ0FBZXpDLFNBQVMsQ0FBQzZFLE1BQVYsQ0FBaUJFLFVBQWhDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSwrREFBQyxRQUFEO0FBQVUsMkJBQWEsRUFBRy9FLFNBQVMsQ0FBQzZFLE1BQVYsQ0FBaUJHO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQSwwQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSE4sRUFvQkdoRixTQUFTLElBQUlRLEtBQWIsaUJBQ087QUFBQSxpQ0FDRTtBQUFBLHNCQUFNUjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3RUQ7O0dBek91Qkg7VUFDRnZELGdFQW9EZ0NNOzs7TUFyRDlCaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgSW5ydXB0IEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBEcm9wZG93blRyZWVTZWxlY3QgZnJvbSAncmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3QnO1xuaW1wb3J0IHtDUm93LCBDQ29sfSBmcm9tICdAY29yZXVpL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcbmltcG9ydCBwZXJzb25hbERhdGEgIGZyb20gJy4uL3Jlc291cmNlcy9wZXJzb25hbGRhdGEuanNvbic7XG5pbXBvcnQgcHVycG9zZXNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9wdXJwb3Nlcy5qc29uJztcbmltcG9ydCB7IENDYXJkLENDYXJkQm9keSxDQ2FyZEdyb3VwLENDYXJkSGVhZGVyLENDYXJkTGluayxDQ2FyZFRleHQsQ0NhcmRUaXRsZSxDQ2FyZFN1YnRpdGxlLENMaXN0R3JvdXAsQ0xpc3RHcm91cEl0ZW0sQ0J1dHRvbiAgICAgfSBmcm9tICdAY29yZXVpL3JlYWN0JztcbmltcG9ydCAnQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MnXG5pbXBvcnQge2dldEZpbGV9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50JztcbmltcG9ydCB7ZmV0Y2h9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXInO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5cblxuXG52YXIgc2F2ZUZpbGU7XG5cbmNvbnN0IENhcmQgPSAoe25hbWUsIHVybExpc3QsIGNhdGVnb3JpZXMsIHBvbGljaWVzLHJlY2lwaWVudHMsIGR1cmF0aW9ufSkgPT57XG5cblxuICByZXR1cm4oXG4gICAgICA8Q0NhcmRcbiAgICAgIGNvbG9yPVwibGlnaHRcIlxuXG5cbiAgICAgIHN0eWxlPXt7XCJtYXhXaWR0aFwiOiAnMzAwcHgnfSx7IFwicGFkZGluZ1wiOiAzMCB9LHtcIm1hcmdpbi1ib3R0b21cIjogMjB9fVxuXG5cbiAgICAgID5cblxuICAgICAgICA8Q0NhcmRIZWFkZXI+e25hbWV9PC9DQ2FyZEhlYWRlcj5cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgICAgPENDYXJkVGl0bGU+VGhlIGNhdGVnb3J5IG9mIHRoZSBmaWxlIGlzOiB7Y2F0ZWdvcmllc308L0NDYXJkVGl0bGU+XG5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSByZWNpcGllbnRzIGFyZTogPC9DQ2FyZFRleHQ+XG4gICAgICAgICAge3JlY2lwaWVudHMubWFwKChyZWNpcGllbnQpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q0NhcmRTdWJ0aXRsZT48Yj5XZWJJRDogIHtyZWNpcGllbnR9PC9iPjwvQ0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgPENDYXJkQm9keT5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBkdXJhdGlvbiBpczoge2R1cmF0aW9ufTwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHBvbGljaWVzIGFyZTogPC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPC9DQ2FyZEJvZHk+XG5cbiAgICAgICAgICB7cG9saWNpZXMubWFwKCh7IHBvbE5hbWUsIHB1cnBvc2UsIGFjdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPENDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENDYXJkU3VidGl0bGU+PGI+TmFtZToge3BvbE5hbWV9PC9iPjwvQ0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuICAgICAgICAgICAgPENMaXN0R3JvdXAgZmx1c2g+XG4gICAgICAgICAgICB7cHVycG9zZS5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDTGlzdEdyb3VwSXRlbT57aXRlbS50b1N0cmluZygpfSAtIHthY3Rpb24udG9TdHJpbmcoKX08L0NMaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NMaXN0R3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgIDxDQnV0dG9uIG9uQ2xpY2s9eygpPT5zYXZlRmlsZSh1cmxMaXN0KX0+RG93bmxvYWQgdGhlIGZvbGRlciBjb250ZW50cy48L0NCdXR0b24+XG5cbiAgICAgICAgPC9DQ2FyZEJvZHk+XG5cbiAgICAgIDwvQ0NhcmQ+XG5cbiAgKTtcblxufVxuXG5jb25zdCBDYXJkTGlzdCA9ICh7IHJlc291cmNlQ2FyZHMgfSkgPT4ge1xuICBjb25zdCBjYXJkc0FycmF5ID0gcmVzb3VyY2VDYXJkcy5tYXAocmVzb3VyY2VDYXJkID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6XCIyMDBweFwifX0+XG4gICAgPENhcmRcbiAgICAgIG5hbWU9e3Jlc291cmNlQ2FyZC5uYW1lfVxuICAgICAgdXJsTGlzdD17cmVzb3VyY2VDYXJkLnVyaX1cbiAgICAgIGNhdGVnb3JpZXM9e3Jlc291cmNlQ2FyZC5jYXRlZ29yaWVzfVxuICAgICAgcG9saWNpZXM9e3Jlc291cmNlQ2FyZC5wb2xpY2llc31cbiAgICAgIHJlY2lwaWVudHM9e3Jlc291cmNlQ2FyZC5yZWNpcGllbnRzfVxuICAgICAgZHVyYXRpb249e3Jlc291cmNlQ2FyZC5kdXJhdGlvbn1cbiAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhHcm93OicxJyxmbGV4U2hyaW5rOlwiMVwiLGZsZXhCYXNpczpcIjEwMCVcIiAsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIiwgZmxleFdyYXA6XCJ3cmFwXCIsIGZsZXhEaXJlY3Rpb246XCJyb3dcIiwgZmxleEdyb3c6IFwiMVwiLCBhbGlnbkNvbnRlbnQ6XCJzdHJldGNoXCJ9fT5cbiAgICAgIHtjYXJkc0FycmF5fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IFtnZXRSZXN1bHQsIHNldEdldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2dldFJlc3VsdENvbnRlbnQsIHNldEdldFJlc3VsdENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3ZWJJZCwgc2V0V2ViSWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3VybCxzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgbGV0IHNlbGVjdGVkUEQgPSBbXTtcblxuXG4gICBzYXZlRmlsZSA9IGFzeW5jICh1cmxMaXN0KSA9PiB7XG4gICBmb3IodmFyIGkgPSAwOyBpPHVybExpc3QubGVuZ3RoO2krKyl7XG4gICAgIGNvbnN0IGZpbGVVUkwgPSB1cmxMaXN0W2ldLnRvU3RyaW5nKCk7XG4gICAgIGNvbnN0IGZpbGVuYW1lID0gZmlsZVVSTC5zdWJzdHJpbmcoZmlsZVVSTC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcbiAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGdldEZpbGUoXG4gICAgICAgICAgICAgZmlsZVVSTCwgICAgICAgICAgICAgICAvLyBGaWxlIGluIFBvZCB0byBSZWFkXG4gICAgICAgICAgICAgeyBmZXRjaDogc2Vzc2lvbi5mZXRjaCB9ICAgICAgIC8vIGZldGNoIGZyb20gYXV0aGVudGljYXRlZCBzZXNzaW9uXG4gICAgICk7XG4gICAgIHRyeSB7XG5cblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihmaWxlLCBmaWxlbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICBhLmNsaWNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIH0sIDApXG4gICAgfVxuICAgfSBjYXRjaCAoZXJyKSB7XG4gICBjb25zb2xlLmxvZyhlcnIpO1xuICAgfVxuICAgfVxuXG4gfVxuXG5cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRHZXRSZXN1bHQobnVsbCk7XG4gIH1cblxuICBjb25zdCBmb3J0bWF0UmVzcG9uc2UgPSAocmVzKSA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcywgbnVsbCwgMik7XG4gIH07XG5cbiAgY29uc3Qge2lzTG9hZGluZzogaXNMb2FkaW5nQWxsLCByZWZldGNoOiBnZXRBbGwgfSA9IHVzZVF1ZXJ5KFxuICAgIFwiZ2V0UXVlcnlBbGxcIixcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgaGVhZGVycyA6IHt3ZWJJRDogd2ViSWR9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyArIFwiLVwiICsgcmVzLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcy5oZWFkZXJzLFxuICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcnRtYXRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KHJlcy5kYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIucmVzcG9uc2U/LmRhdGEgfHwgZXJyKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdBbGwpIHNldEdldFJlc3VsdChcImxvYWRpbmcuLi5cIik7XG4gICAgICB9LCBbaXNMb2FkaW5nQWxsXSk7XG5cbiAgdmFyICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXRGaWxlcz9cIjtcblxuICBjb25zdCBnZXRRdWVyeUFsbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0V2ViSWQoc2Vzc2lvbi5pbmZvLndlYklkKVxuICAgICAgaWYoc2VsZWN0ZWRQRC5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109MCZcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkUEQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgdXJpICs9IFwiY2F0UERhdGFbXT1cIitzZWxlY3RlZFBEW2ldK1wiJlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihzZWxlY3RlZFBVUi5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcInB1clBEYXRhW109MFwiO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0ZWRQVVIubGVuZ3RoO2orKyl7XG4gICAgICAgICAgaWYoaiA9PSBzZWxlY3RlZFBVUi5sZW5ndGggLTEpe1xuICAgICAgICAgICAgdXJpICs9IFwicHVyUERhdGFbXT1cIitzZWxlY3RlZFBVUltqXTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal0rXCImXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgYXdhaXQgc2V0VXJsKHVyaSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyKSk7XG4gICAgfVxuICAgIHVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaT9cIjtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1cmwgIT0gdXJpKXtcbiAgICAgIGdldEFsbCgpOyAvLyBUaGlzIHdpbGwgYWx3YXlzIHVzZSBsYXRlc3QgdmFsdWUgb2YgdXJpXG5cbiAgICB9XG4gIH0sIFt1cmxdKTtcblxuXG5cbiAgY29uc3QgYXNzaWduT2JqZWN0UGF0aHMgPSAob2JqLCBzdGFjaykgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBvYmpba107XG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbm9kZS5wYXRoID0gc3RhY2sgPyBgJHtzdGFja30uJHtrfWAgOiBrO1xuICAgICAgICBhc3NpZ25PYmplY3RQYXRocyhub2RlLCBub2RlLnBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGFzc2lnbk9iamVjdFBhdGhzKHBlcnNvbmFsRGF0YSk7XG4gIGFzc2lnbk9iamVjdFBhdGhzKHB1cnBvc2VzRGF0YSk7XG5cbiAgY29uc3QgaGFuZGxlUGVyc29uYWxEYXRhID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQRCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUEQucHVzaChsYWJlbCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUEQpO1xuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlUHVycG9zZXMgPSAoY3VycmVudE5vZGUsIHNlbGVjdGVkTm9kZXMpID0+IHtcbiAgICBzZWxlY3RlZFBVUiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUFVSLnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgeyAhc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRpYWx0ZXh0XCI+XG4gICAgPHA+XG4gICAgICBUaGlzIGZyb250ZW5kIHNlcnZlcyBhcyBhIGdhdGV3YXkgZm9yIHVzZXJzIHRvIHNlbmQgcmVxdWVzdHMgdG8gdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmxvbmdhcmVzL1RGTS1BUEktZXhwcmVzc1wiPkFQSTwvYT4uXG5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBJdCBhbHNvIGFsbG93cyBmb3IgdGhlIGRvd25sb2FkIG9mIHRoZSByZXR1cm5lZCByZXNvdXJjZXMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgVG8gZ2V0IHN0YXJ0ZWQsIGxvZyBpbiBpbnRvIHRoaXMgYXBwbGljYXRpb24gYW5kIGludG8gdGhlIEFQSS5cbiAgICA8L3A+XG4gICAgPHA+XG5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBGaW5hbGx5LCB5b3UgY2FuIGdlbmVyYXRlIHRoZSBPRFJMIHBvbGljeSZhcG9zO3MgUkRGIGJ5IGNsaWNraW5nIHRoZVxuICAgICAgJnF1b3Q7R2VuZXJhdGUmcXVvdDsgYnV0dG9uIGFuZCBzYXZlIGl0IGluIHlvdXIgUG9kLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86cm0ubG9uZ2FyZXMuZGllekBhbHVtbm9zLnVwbS5lc1wiPkNvbnRhY3QgTWU8L2E+XG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICAgICl9XG5cbiAgICB7IHNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmICAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIGNhdGVnb3JpZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cGVyc29uYWxEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbERhdGF9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIHB1cnBvc2VzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnZXRRdWVyeUFsbH0gPk1ha2UgYSBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z29CYWNrfSA+Q2xlYXIgcXVlcnkuPC9CdXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtMlwiPlxuXG4gICAgICB7Z2V0UmVzdWx0ICYmICFlcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwcmU+e3VybH08L3ByZT5cbiAgICAgICAgICAgIDxwcmU+e3dlYklkfTwvcHJlPlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwiZmFsc2VcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBub3QgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJ0cnVlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7Z2V0UmVzdWx0LmZvcm1hdCAmJihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YVN1YmplY3RSaWdodHMgaXM6IFwiICtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LmRhdGFTdWJqZWN0UmlnaHRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBzYWZlZ3VhcmRzIGluIGNhc2Ugb2YgdHJhbnNmZXIgdG8gYSB0aGlyZCBjb3VudHJ5IGFyZTogXCIgKyBKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LnNhZmVndWFyZHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxDYXJkTGlzdCByZXNvdXJjZUNhcmRzID17Z2V0UmVzdWx0LmZvcm1hdC5yZXNvdXJjZX0+PC9DYXJkTGlzdD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICB7Z2V0UmVzdWx0ICYmIGVycm9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgIDxwcmU+e2dldFJlc3VsdH08L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsIkJ1dHRvbiIsImF4aW9zIiwiRHJvcGRvd25UcmVlU2VsZWN0IiwiQ1JvdyIsIkNDb2wiLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwicGVyc29uYWxEYXRhIiwicHVycG9zZXNEYXRhIiwiQ0NhcmQiLCJDQ2FyZEJvZHkiLCJDQ2FyZEdyb3VwIiwiQ0NhcmRIZWFkZXIiLCJDQ2FyZExpbmsiLCJDQ2FyZFRleHQiLCJDQ2FyZFRpdGxlIiwiQ0NhcmRTdWJ0aXRsZSIsIkNMaXN0R3JvdXAiLCJDTGlzdEdyb3VwSXRlbSIsIkNCdXR0b24iLCJnZXRGaWxlIiwiZmV0Y2giLCJzYXZlRmlsZSIsIkNhcmQiLCJuYW1lIiwidXJsTGlzdCIsImNhdGVnb3JpZXMiLCJwb2xpY2llcyIsInJlY2lwaWVudHMiLCJkdXJhdGlvbiIsIm1hcCIsInJlY2lwaWVudCIsInBvbE5hbWUiLCJwdXJwb3NlIiwiYWN0aW9uIiwiaXRlbSIsImkiLCJ0b1N0cmluZyIsIkNhcmRMaXN0IiwicmVzb3VyY2VDYXJkcyIsImNhcmRzQXJyYXkiLCJyZXNvdXJjZUNhcmQiLCJtaW5XaWR0aCIsInVyaSIsImRpc3BsYXkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJmbGV4QmFzaXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsIkhvbWUiLCJzZXNzaW9uIiwicXVlcnlDbGllbnQiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJ1cmwiLCJzZXRVcmwiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRQVVIiLCJzZWxlY3RlZFBEIiwibGVuZ3RoIiwiZmlsZVVSTCIsImZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJmaWxlIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnb0JhY2siLCJmb3J0bWF0UmVzcG9uc2UiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiaGVhZGVycyIsIndlYklEIiwiZW5hYmxlZCIsIm9uU3VjY2VzcyIsInJlc3VsdCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwib25FcnJvciIsInJlc3BvbnNlIiwiaXNMb2FkaW5nQWxsIiwiaXNMb2FkaW5nIiwiZ2V0QWxsIiwicmVmZXRjaCIsImdldFF1ZXJ5QWxsIiwiaW5mbyIsImoiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=