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
              setQuery(true);
              setUrl("");
              _context4.next = 5;
              return setWebId(session.info.webId);

            case 5:
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

              _context4.next = 9;
              return setUrl(uri);

            case 9:
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              setGetResult(fortmatResponse(_context4.t0));

            case 14:
              uri = "http://localhost:8000/api?";

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
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
          lineNumber: 297,
          columnNumber: 75
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "It also allows for the download of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "To get started, log in into this application and into the API."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "Finally, you can generate the ODRL policy's RDF by clicking the \"Generate\" button and save it in your Pod."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("a", {
          href: "mailto:rm.longares.diez@alumnos.upm.es",
          children: "Contact Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 9
    }, this), session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
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
          lineNumber: 330,
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
          lineNumber: 331,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form2",
        children: [getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: getResult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 293,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzIyOTI4YzRmNWE5ZTQ4ZmMwYTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLR0UsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsU0FBRDtBQUFBLDRCQUNkO0FBQUEsaUNBQ0EsK0RBQUMsb0RBQUQ7QUFBQSxtQ0FDRSwrREFBQyx3REFBRDtBQUFBLHFDQUFlO0FBQUEsdUNBQVlBLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFEYztBQUFBLE9BQWYsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQXdCSSwrREFBQyxvREFBRDtBQUFBLDhCQUNBLCtEQUFDLG9EQUFEO0FBQUEsd0NBQTZCRixRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJKLEVBNkJLRixRQUFRLENBQUNHLEdBQVQsQ0FBYTtBQUFBLFVBQUdFLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVlDLE9BQVosU0FBWUEsT0FBWjtBQUFBLFVBQXFCQyxNQUFyQixTQUFxQkEsTUFBckI7QUFBQSwwQkFDWjtBQUFBLGdDQUNBLCtEQUFDLG9EQUFEO0FBQUEsaUNBQ0UsK0RBQUMsd0RBQUQ7QUFBQSxtQ0FBZTtBQUFBLG1DQUFVRixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBSUEsK0RBQUMscURBQUQ7QUFBWSxlQUFLLE1BQWpCO0FBQUEsb0JBQ0NDLE9BQU8sQ0FBQ0gsR0FBUixDQUFZLFVBQUNLLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUNYO0FBQUEscUNBQ0EsK0RBQUMseURBQUQ7QUFBQSwyQkFBaUJELElBQUksQ0FBQ0UsUUFBTCxFQUFqQixTQUFxQ0gsTUFBTSxDQUFDRyxRQUFQLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLDZCQURXO0FBQUEsV0FBWjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQSxzQkFEWTtBQUFBLEtBQWIsQ0E3QkwsZUE0Q0UsK0RBQUMsb0RBQUQ7QUFBQSw2QkFFQSwrREFBQyxrREFBRDtBQUFTLGVBQU8sRUFBRTtBQUFBLGlCQUFJZixRQUFRLENBQUNHLE9BQUQsQ0FBWjtBQUFBLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVERCxDQTFERDs7S0FBTUY7O0FBNEROLElBQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFNBQXBCQSxhQUFvQjtBQUN0QyxNQUFNQyxVQUFVLEdBQUdELGFBQWEsQ0FBQ1QsR0FBZCxDQUFrQixVQUFBVyxZQUFZO0FBQUEsd0JBQy9DO0FBQUssV0FBSyxFQUFFO0FBQUNDLFFBQUFBLFFBQVEsRUFBQztBQUFWLE9BQVo7QUFBQSw2QkFDQSwrREFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFFRCxZQUFZLENBQUNqQixJQURyQjtBQUVFLGVBQU8sRUFBRWlCLFlBQVksQ0FBQ0UsR0FGeEI7QUFHRSxrQkFBVSxFQUFFRixZQUFZLENBQUNmLFVBSDNCO0FBSUUsZ0JBQVEsRUFBRWUsWUFBWSxDQUFDZCxRQUp6QjtBQUtFLGtCQUFVLEVBQUVjLFlBQVksQ0FBQ2IsVUFMM0I7QUFNRSxnQkFBUSxFQUFFYSxZQUFZLENBQUNaO0FBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRCtDO0FBQUEsR0FBOUIsQ0FBbkI7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUs7QUFBR2UsTUFBQUEsT0FBTyxFQUFDLE1BQVg7QUFBa0JDLE1BQUFBLFFBQVEsRUFBQyxHQUEzQjtBQUErQkMsTUFBQUEsVUFBVSxFQUFDLEdBQTFDO0FBQThDQyxNQUFBQSxTQUFTLEVBQUMsTUFBeEQ7QUFBZ0VDLE1BQUFBLGNBQWMsRUFBQyxjQUEvRTtBQUErRkMsTUFBQUEsUUFBUSxFQUFDLE1BQXhHO0FBQWdIQyxNQUFBQSxhQUFhLEVBQUM7QUFBOUgsMk1BQStJLEdBQS9JLDJNQUFpSyxTQUFqSyxTQUEvQjtBQUFBLGNBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FuQkQ7O01BQU1GO0FBcUJTLFNBQVNhLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isb0JBQW9CdkQsa0VBQVUsRUFBOUI7QUFBQSxNQUFRd0QsT0FBUixlQUFRQSxPQUFSOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJakQsb0RBQUosRUFBcEI7O0FBQ0Esa0JBQWtDViwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPNEQsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBZ0Q3RCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEQ7QUFBQSxNQUFPOEQsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLG1CQUEwQi9ELCtDQUFRLEVBQWxDO0FBQUEsTUFBT2dFLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFxQmpFLCtDQUFRLENBQUMsRUFBRCxDQUE3QjtBQUFBLE1BQU9rRSxHQUFQO0FBQUEsTUFBV0MsTUFBWDs7QUFDQSxtQkFBMEJuRSwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPb0UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUdDM0MsRUFBQUEsUUFBUTtBQUFBLHNYQUFHLGlCQUFPRyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIVyxjQUFBQSxDQURHLEdBQ0MsQ0FERDs7QUFBQTtBQUFBLG9CQUNJQSxDQUFDLEdBQUNYLE9BQU8sQ0FBQ3lDLE1BRGQ7QUFBQTtBQUFBO0FBQUE7O0FBRUhDLGNBQUFBLE9BRkcsR0FFTzFDLE9BQU8sQ0FBQ1csQ0FBRCxDQUFQLENBQVdDLFFBQVgsRUFGUDtBQUdIK0IsY0FBQUEsUUFIRyxHQUdRRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JGLE9BQU8sQ0FBQ0csV0FBUixDQUFvQixHQUFwQixJQUEyQixDQUE3QyxDQUhSO0FBQUE7QUFBQSxxQkFJVWxELDhEQUFPLENBQ2xCK0MsT0FEa0IsRUFDSztBQUN2QjtBQUFFOUMsZ0JBQUFBLEtBQUssRUFBRStCLE9BQU8sQ0FBQy9CO0FBQWpCLGVBRmtCLENBRWE7QUFGYixlQUpqQjs7QUFBQTtBQUlIa0QsY0FBQUEsSUFKRzs7QUFRVCxrQkFBSTtBQUdMLG9CQUFJQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGdCQUFyQixFQUF1QztBQUNyQ0Ysa0JBQUFBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsZ0JBQWpCLENBQWtDSCxJQUFsQyxFQUF3Q0gsUUFBeEM7QUFDRCxpQkFGRCxNQUVPO0FBQUE7QUFDTCx3QkFBTU8sQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBRCxvQkFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLENBQTFCO0FBQ0Esd0JBQU1mLEdBQUcsR0FBR1ksTUFBTSxDQUFDUSxHQUFQLENBQVdDLGVBQVgsQ0FBMkJWLElBQTNCLENBQVo7QUFDQUksb0JBQUFBLENBQUMsQ0FBQ08sSUFBRixHQUFTdEIsR0FBVDtBQUNBZSxvQkFBQUEsQ0FBQyxDQUFDUSxRQUFGLEdBQWFmLFFBQWI7QUFDQU8sb0JBQUFBLENBQUMsQ0FBQ1MsS0FBRjtBQUNBQyxvQkFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmIsc0JBQUFBLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXTSxlQUFYLENBQTJCMUIsR0FBM0I7QUFDQWdCLHNCQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY1MsV0FBZCxDQUEwQlosQ0FBMUI7QUFDRCxxQkFIUyxFQUdQLENBSE8sQ0FBVjtBQVBLO0FBV047QUFDRCxlQWpCQyxDQWlCQSxPQUFPYSxHQUFQLEVBQVk7QUFDZEMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0M7O0FBM0JVO0FBQ3FCcEQsY0FBQUEsQ0FBQyxFQUR0QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQWlDRCxNQUFNdUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNmcEMsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUVMLEdBSEQ7O0FBS0EsTUFBTXFDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQy9CLFdBQU9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixHQUFmLEVBQW9CLElBQXBCLEVBQTBCLENBQTFCLENBQVA7QUFDRCxHQUZEOztBQUlBLGtCQUFvRDNGLHFEQUFRLENBQzFELGFBRDBELHFYQUUxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUosNENBQUssQ0FBQztBQUNqQmtHLGNBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCcEMsY0FBQUEsR0FBRyxFQUFFQSxHQUZZO0FBR2pCcUMsY0FBQUEsT0FBTyxFQUFHO0FBQUNDLGdCQUFBQSxLQUFLLEVBQUV4QztBQUFSO0FBSE8sYUFBRCxDQURwQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRjBELElBUzFEO0FBQ015QyxJQUFBQSxPQUFPLEVBQUUsS0FEZjtBQUVNQyxJQUFBQSxTQUFTO0FBQUEsNlhBQUUsa0JBQU9QLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xRLGdCQUFBQSxNQURLLEdBQ0k7QUFDWEMsa0JBQUFBLE1BQU0sRUFBRVQsR0FBRyxDQUFDUyxNQUFKLEdBQWEsR0FBYixHQUFtQlQsR0FBRyxDQUFDVSxVQURwQjtBQUVYTixrQkFBQUEsT0FBTyxFQUFFSixHQUFHLENBQUNJLE9BRkY7QUFHWE8sa0JBQUFBLElBQUksRUFBRVgsR0FBRyxDQUFDVztBQUhDLGlCQURKO0FBT1RILGdCQUFBQSxNQUFNLEdBQUdULGVBQWUsQ0FBQ0MsR0FBRCxDQUF4QjtBQUNBOUIsZ0JBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDQVIsZ0JBQUFBLFlBQVksQ0FBQ3NDLEdBQUcsQ0FBQ1csSUFBTCxDQUFaOztBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FGZjtBQWFNQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUNqQixHQUFELEVBQVM7QUFBQTs7QUFDaEJ6QixNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FSLE1BQUFBLFlBQVksQ0FBQ3FDLGVBQWUsQ0FBQyxrQkFBQUosR0FBRyxDQUFDa0IsUUFBSixnRUFBY0YsSUFBZCxLQUFzQmhCLEdBQXZCLENBQWhCLENBQVo7QUFDRDtBQWhCUCxHQVQwRCxDQUE1RDtBQUFBLE1BQWtCbUIsWUFBbEIsYUFBT0MsU0FBUDtBQUFBLE1BQXlDQyxNQUF6QyxhQUFnQ0MsT0FBaEM7O0FBNEJJbkgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWdILFlBQUosRUFBa0JwRCxZQUFZLENBQUMsWUFBRCxDQUFaO0FBQ25CLEdBRlEsRUFFTixDQUFDb0QsWUFBRCxDQUZNLENBQVQ7QUFJSixNQUFLaEUsR0FBRyxHQUFHLGlDQUFYOztBQUVBLE1BQU1vRSxXQUFXO0FBQUEsc1hBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJDLGNBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQ25ELGNBQUFBLE1BQU0sQ0FBQyxFQUFELENBQU47QUFIZTtBQUFBLHFCQUlWRixRQUFRLENBQUNQLE9BQU8sQ0FBQzZELElBQVIsQ0FBYXZELEtBQWQsQ0FKRTs7QUFBQTtBQUtoQixrQkFBR08sVUFBVSxDQUFDQyxNQUFYLElBQXFCLENBQXhCLEVBQTBCO0FBQ3hCdkIsZ0JBQUFBLEdBQUcsSUFBSSxlQUFQO0FBQ0QsZUFGRCxNQUVLO0FBQ0gscUJBQVNQLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2QixVQUFVLENBQUNDLE1BQS9CLEVBQXNDOUIsQ0FBQyxFQUF2QyxFQUEwQztBQUN4Q08sa0JBQUFBLEdBQUcsSUFBSSxnQkFBY3NCLFVBQVUsQ0FBQzdCLENBQUQsQ0FBeEIsR0FBNEIsR0FBbkM7QUFDRDtBQUNGOztBQUNELGtCQUFHNEIsV0FBVyxDQUFDRSxNQUFaLElBQXNCLENBQXpCLEVBQTJCO0FBQ3pCdkIsZ0JBQUFBLEdBQUcsSUFBSSxjQUFQO0FBQ0QsZUFGRCxNQUVLO0FBQ0gscUJBQVN1RSxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbEQsV0FBVyxDQUFDRSxNQUFoQyxFQUF1Q2dELENBQUMsRUFBeEMsRUFBMkM7QUFDekMsc0JBQUdBLENBQUMsSUFBSWxELFdBQVcsQ0FBQ0UsTUFBWixHQUFvQixDQUE1QixFQUE4QjtBQUM1QnZCLG9CQUFBQSxHQUFHLElBQUksZ0JBQWNxQixXQUFXLENBQUNrRCxDQUFELENBQWhDO0FBQ0QsbUJBRkQsTUFFSztBQUNIdkUsb0JBQUFBLEdBQUcsSUFBSSxnQkFBY3FCLFdBQVcsQ0FBQ2tELENBQUQsQ0FBekIsR0FBNkIsR0FBcEM7QUFDRDtBQUVGO0FBQ0Y7O0FBdkJlO0FBQUEscUJBd0JSckQsTUFBTSxDQUFDbEIsR0FBRCxDQXhCRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMkJoQlksY0FBQUEsWUFBWSxDQUFDcUMsZUFBZSxjQUFoQixDQUFaOztBQTNCZ0I7QUE2QmxCakQsY0FBQUEsR0FBRyxHQUFHLDRCQUFOOztBQTdCa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWG9FLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBaUNBcEgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR2lFLEdBQUcsSUFBSWpCLEdBQVYsRUFBYztBQUNaa0UsTUFBQUEsTUFBTSxHQURNLENBQ0Y7QUFFWDtBQUNGLEdBTFEsRUFLTixDQUFDakQsR0FBRCxDQUxNLENBQVQ7O0FBU0EsTUFBTXVELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3hDQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzVCLFVBQU1DLElBQUksR0FBR04sR0FBRyxDQUFDSyxDQUFELENBQWhCOztBQUNBLFVBQUksT0FBT0MsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QkEsUUFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVlOLEtBQUssYUFBTUEsS0FBTixjQUFlSSxDQUFmLElBQXFCQSxDQUF0QztBQUNBTixRQUFBQSxpQkFBaUIsQ0FBQ08sSUFBRCxFQUFPQSxJQUFJLENBQUNDLElBQVosQ0FBakI7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJEOztBQVVBUixFQUFBQSxpQkFBaUIsQ0FBQzVHLDBEQUFELENBQWpCO0FBQ0E0RyxFQUFBQSxpQkFBaUIsQ0FBQzNHLHNEQUFELENBQWpCOztBQUVBLE1BQU1vSCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFdBQUQsRUFBY0MsYUFBZCxFQUFnQztBQUN6RDdELElBQUFBLFVBQVUsR0FBRyxFQUFiOztBQUNBLFNBQUssSUFBSTdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwRixhQUFhLENBQUM1RCxNQUFsQyxFQUEwQzlCLENBQUMsRUFBM0MsRUFBK0M7QUFDN0M7QUFDQSxVQUFJMkYsS0FBSyxHQUFHRCxhQUFhLENBQUMxRixDQUFELENBQWIsQ0FBaUIyRixLQUE3QjtBQUNBOUQsTUFBQUEsVUFBVSxDQUFDK0QsSUFBWCxDQUFnQkQsS0FBaEI7QUFDRDs7QUFDRHRDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZekIsVUFBWjtBQUNELEdBUkQ7O0FBV0EsTUFBTWdFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osV0FBRCxFQUFjQyxhQUFkLEVBQWdDO0FBQ3JEOUQsSUFBQUEsV0FBVyxHQUFHLEVBQWQ7O0FBQ0EsU0FBSyxJQUFJNUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBGLGFBQWEsQ0FBQzVELE1BQWxDLEVBQTBDOUIsQ0FBQyxFQUEzQyxFQUErQztBQUM3QztBQUNBLFVBQUkyRixLQUFLLEdBQUdELGFBQWEsQ0FBQzFGLENBQUQsQ0FBYixDQUFpQjJGLEtBQTdCO0FBQ0EvRCxNQUFBQSxXQUFXLENBQUNnRSxJQUFaLENBQWlCRCxLQUFqQjtBQUNEOztBQUNEdEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl6QixVQUFaO0FBQ0QsR0FSRDs7QUFVQSxzQkFDRTtBQUFBLGVBQ0UsQ0FBQ2IsT0FBTyxDQUFDNkQsSUFBUixDQUFhaUIsVUFBZCxpQkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0o7QUFBQSx3R0FDc0U7QUFBRyxjQUFJLEVBQUMsOENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGVBS0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSSxlQVFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkksZUFXSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEksZUFjSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRJLGVBa0JKO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsd0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBMkJFOUUsT0FBTyxDQUFDNkQsSUFBUixDQUFhaUIsVUFBYixpQkFDQTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBLCtEQUFDLG1FQUFEO0FBQW9CLGNBQUksRUFBRTNILDBEQUExQjtBQUEwQyxrQkFBUSxFQUFFcUgsa0JBQXBEO0FBQXdFLG1CQUFTLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxlQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBLGVBS0EsK0RBQUMsbUVBQUQ7QUFBb0IsY0FBSSxFQUFFcEgsc0RBQTFCO0FBQTBDLGtCQUFRLEVBQUV5SCxjQUFwRDtBQUFvRSxtQkFBUyxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEEsZUFRVSwrREFBQyxrRUFBRDtBQUFRLGVBQUssRUFBRztBQUFDLDBCQUFhLE1BQWQ7QUFBcUIsNEJBQWdCO0FBQXJDLFdBQWhCO0FBQTJELGlCQUFPLEVBQUMsT0FBbkU7QUFBNEUsaUJBQU8sRUFBRWxCLFdBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJWLGVBU1UsK0RBQUMsa0VBQUQ7QUFBUSxlQUFLLEVBQUc7QUFBQywwQkFBYSxNQUFkO0FBQXFCLDRCQUFnQjtBQUFyQyxXQUFoQjtBQUEyRCxpQkFBTyxFQUFDLE9BQW5FO0FBQTRFLGlCQUFPLEVBQUVwQixNQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQWFBO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsbUJBRUNyQyxTQUFTLElBQUksQ0FBQ1EsS0FBZCxpQkFDSztBQUFBLGtDQUNBO0FBQUEsc0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQUEsc0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxFQUdDb0MsSUFBSSxDQUFDQyxTQUFMLENBQWV6QyxTQUFTLENBQUM2RSxTQUF6QixLQUF1QyxPQUF2QyxpQkFBbUQ7QUFBQSxzQkFBTTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSHBELEVBSUNyQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXpDLFNBQVMsQ0FBQzZFLFNBQXpCLEtBQXVDLE1BQXZDLGlCQUFrRDtBQUFBLHNCQUFNO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKbkQsRUFLQzdFLFNBQVMsQ0FBQzhFLE1BQVYsaUJBQ0M7QUFBQSxvQ0FDRTtBQUFBLHdCQUFNLDJEQUEwRHRDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekMsU0FBUyxDQUFDOEUsTUFBVixDQUFpQkMsaUJBQWhDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBLHdCQUFNLGdFQUFnRXZDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekMsU0FBUyxDQUFDOEUsTUFBVixDQUFpQkUsVUFBaEM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLCtEQUFDLFFBQUQ7QUFBVSwyQkFBYSxFQUFHaEYsU0FBUyxDQUFDOEUsTUFBVixDQUFpQkc7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBLDBCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFITixFQW9CR2pGLFNBQVMsSUFBSVEsS0FBYixpQkFDTztBQUFBLGlDQUNFO0FBQUEsc0JBQU1SO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdFRDs7R0E1T3VCSDtVQUNGdkQsZ0VBcURnQ007OztNQXREOUJpRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBJbnJ1cHQgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbiAqIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBpbnJ1cHQvcHJpc20tcmVhY3QtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IERyb3Bkb3duVHJlZVNlbGVjdCBmcm9tICdyZWFjdC1kcm9wZG93bi10cmVlLXNlbGVjdCc7XG5pbXBvcnQge0NSb3csIENDb2x9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuXG5pbXBvcnQge1xuICB1c2VRdWVyeSxcbiAgdXNlUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxufSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJ1xuaW1wb3J0IHBlcnNvbmFsRGF0YSAgZnJvbSAnLi4vcmVzb3VyY2VzL3BlcnNvbmFsZGF0YS5qc29uJztcbmltcG9ydCBwdXJwb3Nlc0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL3B1cnBvc2VzLmpzb24nO1xuaW1wb3J0IHsgQ0NhcmQsQ0NhcmRCb2R5LENDYXJkR3JvdXAsQ0NhcmRIZWFkZXIsQ0NhcmRMaW5rLENDYXJkVGV4dCxDQ2FyZFRpdGxlLENDYXJkU3VidGl0bGUsQ0xpc3RHcm91cCxDTGlzdEdyb3VwSXRlbSxDQnV0dG9uICAgICB9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuaW1wb3J0ICdAY29yZXVpL2NvcmV1aS9kaXN0L2Nzcy9jb3JldWkubWluLmNzcydcbmltcG9ydCB7Z2V0RmlsZX0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQnO1xuaW1wb3J0IHtmZXRjaH0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3Nlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcblxuXG5cbnZhciBzYXZlRmlsZTtcblxuY29uc3QgQ2FyZCA9ICh7bmFtZSwgdXJsTGlzdCwgY2F0ZWdvcmllcywgcG9saWNpZXMscmVjaXBpZW50cywgZHVyYXRpb259KSA9PntcblxuXG4gIHJldHVybihcbiAgICAgIDxDQ2FyZFxuICAgICAgY29sb3I9XCJsaWdodFwiXG5cblxuICAgICAgc3R5bGU9e3tcIm1heFdpZHRoXCI6ICczMDBweCd9LHsgXCJwYWRkaW5nXCI6IDMwIH0se1wibWFyZ2luLWJvdHRvbVwiOiAyMH19XG5cblxuICAgICAgPlxuXG4gICAgICAgIDxDQ2FyZEhlYWRlcj57bmFtZX08L0NDYXJkSGVhZGVyPlxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgICA8Q0NhcmRUaXRsZT5UaGUgY2F0ZWdvcnkgb2YgdGhlIGZpbGUgaXM6IHtjYXRlZ29yaWVzfTwvQ0NhcmRUaXRsZT5cblxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHJlY2lwaWVudHMgYXJlOiA8L0NDYXJkVGV4dD5cbiAgICAgICAgICB7cmVjaXBpZW50cy5tYXAoKHJlY2lwaWVudCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPldlYklEOiAge3JlY2lwaWVudH08L2I+PC9DQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIGR1cmF0aW9uIGlzOiB7ZHVyYXRpb259PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcG9saWNpZXMgYXJlOiA8L0NDYXJkVGV4dD5cbiAgICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgICAgIHtwb2xpY2llcy5tYXAoKHsgcG9sTmFtZSwgcHVycG9zZSwgYWN0aW9uIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q0NhcmRTdWJ0aXRsZT48Yj5OYW1lOiB7cG9sTmFtZX08L2I+PC9DQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgICA8Q0xpc3RHcm91cCBmbHVzaD5cbiAgICAgICAgICAgIHtwdXJwb3NlLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENMaXN0R3JvdXBJdGVtPntpdGVtLnRvU3RyaW5nKCl9IC0ge2FjdGlvbi50b1N0cmluZygpfTwvQ0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgPENCdXR0b24gb25DbGljaz17KCk9PnNhdmVGaWxlKHVybExpc3QpfT5Eb3dubG9hZCB0aGUgZm9sZGVyIGNvbnRlbnRzLjwvQ0J1dHRvbj5cblxuICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgPC9DQ2FyZD5cblxuICApO1xuXG59XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgcmVzb3VyY2VDYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzQXJyYXkgPSByZXNvdXJjZUNhcmRzLm1hcChyZXNvdXJjZUNhcmQgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDpcIjIwMHB4XCJ9fT5cbiAgICA8Q2FyZFxuICAgICAgbmFtZT17cmVzb3VyY2VDYXJkLm5hbWV9XG4gICAgICB1cmxMaXN0PXtyZXNvdXJjZUNhcmQudXJpfVxuICAgICAgY2F0ZWdvcmllcz17cmVzb3VyY2VDYXJkLmNhdGVnb3JpZXN9XG4gICAgICBwb2xpY2llcz17cmVzb3VyY2VDYXJkLnBvbGljaWVzfVxuICAgICAgcmVjaXBpZW50cz17cmVzb3VyY2VDYXJkLnJlY2lwaWVudHN9XG4gICAgICBkdXJhdGlvbj17cmVzb3VyY2VDYXJkLmR1cmF0aW9ufVxuICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleEdyb3c6JzEnLGZsZXhTaHJpbms6XCIxXCIsZmxleEJhc2lzOlwiMTAwJVwiICxqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBmbGV4V3JhcDpcIndyYXBcIiwgZmxleERpcmVjdGlvbjpcInJvd1wiLCBmbGV4R3JvdzogXCIxXCIsIGFsaWduQ29udGVudDpcInN0cmV0Y2hcIn19PlxuICAgICAge2NhcmRzQXJyYXl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cblxuICBjb25zdCBnb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgIHNldFVybChcIlwiKTtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWFsdGV4dFwiPlxuICAgIDxwPlxuICAgICAgVGhpcyBmcm9udGVuZCBzZXJ2ZXMgYXMgYSBnYXRld2F5IGZvciB1c2VycyB0byBzZW5kIHJlcXVlc3RzIHRvIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Jsb25nYXJlcy9URk0tQVBJLWV4cHJlc3NcIj5BUEk8L2E+LlxuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgSXQgYWxzbyBhbGxvd3MgZm9yIHRoZSBkb3dubG9hZCBvZiB0aGUgcmV0dXJuZWQgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRvIGdldCBzdGFydGVkLCBsb2cgaW4gaW50byB0aGlzIGFwcGxpY2F0aW9uIGFuZCBpbnRvIHRoZSBBUEkuXG4gICAgPC9wPlxuICAgIDxwPlxuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgRmluYWxseSwgeW91IGNhbiBnZW5lcmF0ZSB0aGUgT0RSTCBwb2xpY3kmYXBvcztzIFJERiBieSBjbGlja2luZyB0aGVcbiAgICAgICZxdW90O0dlbmVyYXRlJnF1b3Q7IGJ1dHRvbiBhbmQgc2F2ZSBpdCBpbiB5b3VyIFBvZC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnJtLmxvbmdhcmVzLmRpZXpAYWx1bW5vcy51cG0uZXNcIj5Db250YWN0IE1lPC9hPlxuICAgIDwvcD5cbiAgPC9kaXY+XG5cbiAgICApfVxuXG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z2V0UXVlcnlBbGx9ID5NYWtlIGEgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dvQmFja30gPkNsZWFyIHF1ZXJ5LjwvQnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybTJcIj5cblxuICAgICAge2dldFJlc3VsdCAmJiAhZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8cHJlPnt1cmx9PC9wcmU+XG4gICAgICAgICAgICA8cHJlPnt3ZWJJZH08L3ByZT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcImZhbHNlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgbm90IGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXCJ9PC9wcmU+KSAgfVxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwidHJ1ZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXCJ9PC9wcmU+KSAgfVxuICAgICAgICAgICAge2dldFJlc3VsdC5mb3JtYXQgJiYoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHByZT57XCJUaGUgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIGRhdGFTdWJqZWN0UmlnaHRzIGlzOiBcIiArSlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LmZvcm1hdC5kYXRhU3ViamVjdFJpZ2h0cyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPHByZT57XCJUaGUgc2FmZWd1YXJkcyBpbiBjYXNlIG9mIHRyYW5zZmVyIHRvIGEgdGhpcmQgY291bnRyeSBhcmU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LmZvcm1hdC5zYWZlZ3VhcmRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8Q2FyZExpc3QgcmVzb3VyY2VDYXJkcyA9e2dldFJlc3VsdC5mb3JtYXQucmVzb3VyY2V9PjwvQ2FyZExpc3Q+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAge2dldFJlc3VsdCAmJiBlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICA8cHJlPntnZXRSZXN1bHR9PC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJheGlvcyIsIkRyb3Bkb3duVHJlZVNlbGVjdCIsIkNSb3ciLCJDQ29sIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInBlcnNvbmFsRGF0YSIsInB1cnBvc2VzRGF0YSIsIkNDYXJkIiwiQ0NhcmRCb2R5IiwiQ0NhcmRHcm91cCIsIkNDYXJkSGVhZGVyIiwiQ0NhcmRMaW5rIiwiQ0NhcmRUZXh0IiwiQ0NhcmRUaXRsZSIsIkNDYXJkU3VidGl0bGUiLCJDTGlzdEdyb3VwIiwiQ0xpc3RHcm91cEl0ZW0iLCJDQnV0dG9uIiwiZ2V0RmlsZSIsImZldGNoIiwic2F2ZUZpbGUiLCJDYXJkIiwibmFtZSIsInVybExpc3QiLCJjYXRlZ29yaWVzIiwicG9saWNpZXMiLCJyZWNpcGllbnRzIiwiZHVyYXRpb24iLCJtYXAiLCJyZWNpcGllbnQiLCJwb2xOYW1lIiwicHVycG9zZSIsImFjdGlvbiIsIml0ZW0iLCJpIiwidG9TdHJpbmciLCJDYXJkTGlzdCIsInJlc291cmNlQ2FyZHMiLCJjYXJkc0FycmF5IiwicmVzb3VyY2VDYXJkIiwibWluV2lkdGgiLCJ1cmkiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJIb21lIiwic2Vzc2lvbiIsInF1ZXJ5Q2xpZW50IiwiZ2V0UmVzdWx0Iiwic2V0R2V0UmVzdWx0IiwiZ2V0UmVzdWx0Q29udGVudCIsInNldEdldFJlc3VsdENvbnRlbnQiLCJ3ZWJJZCIsInNldFdlYklkIiwidXJsIiwic2V0VXJsIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkUFVSIiwic2VsZWN0ZWRQRCIsImxlbmd0aCIsImZpbGVVUkwiLCJmaWxlbmFtZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiZmlsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVtb3ZlQ2hpbGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3ZWJJRCIsImVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImlzTG9hZGluZ0FsbCIsImlzTG9hZGluZyIsImdldEFsbCIsInJlZmV0Y2giLCJnZXRRdWVyeUFsbCIsInNldFF1ZXJ5IiwiaW5mbyIsImoiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=