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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResult = _useState2[0],
      setGetResult = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResultContent = _useState3[0],
      setGetResultContent = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      webId = _useState4[0],
      setWebId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      url = _useState5[0],
      setUrl = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState6[0],
      setError = _useState6[1];

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

  var callAPI = function callAPI() {
    setQuery(true);
    setUrl("");
  };

  var goBack = function goBack() {
    setQuery(false);
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
          lineNumber: 300,
          columnNumber: 75
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "It also allows for the download of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "To get started, log in into this application and into the API."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "Finally, you can generate the ODRL policy's RDF by clicking the \"Generate\" button and save it in your Pod."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("a", {
          href: "mailto:beatriz.gesteves@upm.es",
          children: "Contact Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
            onChange: handlePersonalData,
            className: "tree-select"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          value: "permission",
          onClick: callAPI,
          children: "Make new GDPR petition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: getQueryAll,
          children: "Make new GDPR petition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: goBack,
          children: "Go Back."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form2",
        children: [getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 13
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: getResult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 5
  }, this);
}

_s(Home, "qyekeDIloTl6Rkg9jF1QMeEQcYQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2FlYjYxZDE2ZWM0NzJkZjliYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLR0UsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsU0FBRDtBQUFBLDRCQUNkO0FBQUEsaUNBQ0EsK0RBQUMsb0RBQUQ7QUFBQSxtQ0FDRSwrREFBQyx3REFBRDtBQUFBLHFDQUFlO0FBQUEsdUNBQVlBLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFEYztBQUFBLE9BQWYsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQXdCSSwrREFBQyxvREFBRDtBQUFBLDhCQUNBLCtEQUFDLG9EQUFEO0FBQUEsd0NBQTZCRixRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBLCtEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJKLEVBNkJLRixRQUFRLENBQUNHLEdBQVQsQ0FBYTtBQUFBLFVBQUdFLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVlDLE9BQVosU0FBWUEsT0FBWjtBQUFBLFVBQXFCQyxNQUFyQixTQUFxQkEsTUFBckI7QUFBQSwwQkFDWjtBQUFBLGdDQUNBLCtEQUFDLG9EQUFEO0FBQUEsaUNBQ0UsK0RBQUMsd0RBQUQ7QUFBQSxtQ0FBZTtBQUFBLG1DQUFVRixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBSUEsK0RBQUMscURBQUQ7QUFBWSxlQUFLLE1BQWpCO0FBQUEsb0JBQ0NDLE9BQU8sQ0FBQ0gsR0FBUixDQUFZLFVBQUNLLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUNYO0FBQUEscUNBQ0EsK0RBQUMseURBQUQ7QUFBQSwyQkFBaUJELElBQUksQ0FBQ0UsUUFBTCxFQUFqQixTQUFxQ0gsTUFBTSxDQUFDRyxRQUFQLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLDZCQURXO0FBQUEsV0FBWjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQSxzQkFEWTtBQUFBLEtBQWIsQ0E3QkwsZUE0Q0UsK0RBQUMsb0RBQUQ7QUFBQSw2QkFFQSwrREFBQyxrREFBRDtBQUFTLGVBQU8sRUFBRTtBQUFBLGlCQUFJZixRQUFRLENBQUNHLE9BQUQsQ0FBWjtBQUFBLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVERCxDQTFERDs7S0FBTUY7O0FBNEROLElBQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFNBQXBCQSxhQUFvQjtBQUN0QyxNQUFNQyxVQUFVLEdBQUdELGFBQWEsQ0FBQ1QsR0FBZCxDQUFrQixVQUFBVyxZQUFZO0FBQUEsd0JBQy9DO0FBQUssV0FBSyxFQUFFO0FBQUNDLFFBQUFBLFFBQVEsRUFBQztBQUFWLE9BQVo7QUFBQSw2QkFDQSwrREFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFFRCxZQUFZLENBQUNqQixJQURyQjtBQUVFLGVBQU8sRUFBRWlCLFlBQVksQ0FBQ0UsR0FGeEI7QUFHRSxrQkFBVSxFQUFFRixZQUFZLENBQUNmLFVBSDNCO0FBSUUsZ0JBQVEsRUFBRWUsWUFBWSxDQUFDZCxRQUp6QjtBQUtFLGtCQUFVLEVBQUVjLFlBQVksQ0FBQ2IsVUFMM0I7QUFNRSxnQkFBUSxFQUFFYSxZQUFZLENBQUNaO0FBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRCtDO0FBQUEsR0FBOUIsQ0FBbkI7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUs7QUFBR2UsTUFBQUEsT0FBTyxFQUFDLE1BQVg7QUFBa0JDLE1BQUFBLFFBQVEsRUFBQyxHQUEzQjtBQUErQkMsTUFBQUEsVUFBVSxFQUFDLEdBQTFDO0FBQThDQyxNQUFBQSxTQUFTLEVBQUMsTUFBeEQ7QUFBZ0VDLE1BQUFBLGNBQWMsRUFBQyxjQUEvRTtBQUErRkMsTUFBQUEsUUFBUSxFQUFDLE1BQXhHO0FBQWdIQyxNQUFBQSxhQUFhLEVBQUM7QUFBOUgsMk1BQStJLEdBQS9JLDJNQUFpSyxTQUFqSyxTQUEvQjtBQUFBLGNBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FuQkQ7O01BQU1GO0FBcUJTLFNBQVNhLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isb0JBQW9CdkQsa0VBQVUsRUFBOUI7QUFBQSxNQUFRd0QsT0FBUixlQUFRQSxPQUFSOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJakQsb0RBQUosRUFBcEI7O0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPNEQsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDN0QsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBTzhELFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQWdEL0QsK0NBQVEsQ0FBQyxJQUFELENBQXhEO0FBQUEsTUFBT2dFLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFDQSxtQkFBMEJqRSwrQ0FBUSxFQUFsQztBQUFBLE1BQU9rRSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBcUJuRSwrQ0FBUSxDQUFDLEVBQUQsQ0FBN0I7QUFBQSxNQUFPb0UsR0FBUDtBQUFBLE1BQVdDLE1BQVg7O0FBQ0EsbUJBQTBCckUsK0NBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT3NFLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjs7QUFHQzdDLEVBQUFBLFFBQVE7QUFBQSxzWEFBRyxpQkFBT0csT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSFcsY0FBQUEsQ0FERyxHQUNDLENBREQ7O0FBQUE7QUFBQSxvQkFDSUEsQ0FBQyxHQUFDWCxPQUFPLENBQUMyQyxNQURkO0FBQUE7QUFBQTtBQUFBOztBQUVIQyxjQUFBQSxPQUZHLEdBRU81QyxPQUFPLENBQUNXLENBQUQsQ0FBUCxDQUFXQyxRQUFYLEVBRlA7QUFHSGlDLGNBQUFBLFFBSEcsR0FHUUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCRixPQUFPLENBQUNHLFdBQVIsQ0FBb0IsR0FBcEIsSUFBMkIsQ0FBN0MsQ0FIUjtBQUFBO0FBQUEscUJBSVVwRCw4REFBTyxDQUNsQmlELE9BRGtCLEVBQ0s7QUFDdkI7QUFBRWhELGdCQUFBQSxLQUFLLEVBQUUrQixPQUFPLENBQUMvQjtBQUFqQixlQUZrQixDQUVhO0FBRmIsZUFKakI7O0FBQUE7QUFJSG9ELGNBQUFBLElBSkc7O0FBUVQsa0JBQUk7QUFHTCxvQkFBSUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxnQkFBckIsRUFBdUM7QUFDckNGLGtCQUFBQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGdCQUFqQixDQUFrQ0gsSUFBbEMsRUFBd0NILFFBQXhDO0FBQ0QsaUJBRkQsTUFFTztBQUFBO0FBQ0wsd0JBQU1PLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQUQsb0JBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixDQUExQjtBQUNBLHdCQUFNZixHQUFHLEdBQUdZLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXQyxlQUFYLENBQTJCVixJQUEzQixDQUFaO0FBQ0FJLG9CQUFBQSxDQUFDLENBQUNPLElBQUYsR0FBU3RCLEdBQVQ7QUFDQWUsb0JBQUFBLENBQUMsQ0FBQ1EsUUFBRixHQUFhZixRQUFiO0FBQ0FPLG9CQUFBQSxDQUFDLENBQUNTLEtBQUY7QUFDQUMsb0JBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZiLHNCQUFBQSxNQUFNLENBQUNRLEdBQVAsQ0FBV00sZUFBWCxDQUEyQjFCLEdBQTNCO0FBQ0FnQixzQkFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNTLFdBQWQsQ0FBMEJaLENBQTFCO0FBQ0QscUJBSFMsRUFHUCxDQUhPLENBQVY7QUFQSztBQVdOO0FBQ0QsZUFqQkMsQ0FpQkEsT0FBT2EsR0FBUCxFQUFZO0FBQ2RDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNDOztBQTNCVTtBQUNxQnRELGNBQUFBLENBQUMsRUFEdEI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUjs7QUFnQ0QsTUFBTXlELE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDZnRDLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDRFEsSUFBQUEsTUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNMLEdBSEQ7O0FBSUEsTUFBTStCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDZnZDLElBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUVMLEdBSkQ7O0FBTUEsTUFBTXNDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQy9CLFdBQU9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixHQUFmLEVBQW9CLElBQXBCLEVBQTBCLENBQTFCLENBQVA7QUFDRCxHQUZEOztBQUlBLGtCQUFvRDlGLHFEQUFRLENBQzFELGFBRDBELHFYQUUxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUosNENBQUssQ0FBQztBQUNqQnFHLGNBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCckMsY0FBQUEsR0FBRyxFQUFFQSxHQUZZO0FBR2pCc0MsY0FBQUEsT0FBTyxFQUFHO0FBQUNDLGdCQUFBQSxLQUFLLEVBQUV6QztBQUFSO0FBSE8sYUFBRCxDQURwQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRjBELElBUzFEO0FBQ00wQyxJQUFBQSxPQUFPLEVBQUUsS0FEZjtBQUVNQyxJQUFBQSxTQUFTO0FBQUEsNlhBQUUsa0JBQU9QLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xRLGdCQUFBQSxNQURLLEdBQ0k7QUFDWEMsa0JBQUFBLE1BQU0sRUFBRVQsR0FBRyxDQUFDUyxNQUFKLEdBQWEsR0FBYixHQUFtQlQsR0FBRyxDQUFDVSxVQURwQjtBQUVYTixrQkFBQUEsT0FBTyxFQUFFSixHQUFHLENBQUNJLE9BRkY7QUFHWE8sa0JBQUFBLElBQUksRUFBRVgsR0FBRyxDQUFDVztBQUhDLGlCQURKO0FBT1RILGdCQUFBQSxNQUFNLEdBQUdULGVBQWUsQ0FBQ0MsR0FBRCxDQUF4QjtBQUNBL0IsZ0JBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDQVIsZ0JBQUFBLFlBQVksQ0FBQ3VDLEdBQUcsQ0FBQ1csSUFBTCxDQUFaOztBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FGZjtBQWFNQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUNsQixHQUFELEVBQVM7QUFBQTs7QUFDaEJ6QixNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FSLE1BQUFBLFlBQVksQ0FBQ3NDLGVBQWUsQ0FBQyxrQkFBQUwsR0FBRyxDQUFDbUIsUUFBSixnRUFBY0YsSUFBZCxLQUFzQmpCLEdBQXZCLENBQWhCLENBQVo7QUFDRDtBQWhCUCxHQVQwRCxDQUE1RDtBQUFBLE1BQWtCb0IsWUFBbEIsYUFBT0MsU0FBUDtBQUFBLE1BQXlDQyxNQUF6QyxhQUFnQ0MsT0FBaEM7O0FBNEJJdEgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSW1ILFlBQUosRUFBa0JyRCxZQUFZLENBQUMsWUFBRCxDQUFaO0FBQ25CLEdBRlEsRUFFTixDQUFDcUQsWUFBRCxDQUZNLENBQVQ7QUFJSixNQUFLbkUsR0FBRyxHQUFHLGlDQUFYOztBQUVBLE1BQU11RSxXQUFXO0FBQUEsc1hBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVWckQsUUFBUSxDQUFDVCxPQUFPLENBQUMrRCxJQUFSLENBQWF2RCxLQUFkLENBRkU7O0FBQUE7QUFHaEIsa0JBQUdPLFVBQVUsQ0FBQ0MsTUFBWCxJQUFxQixDQUF4QixFQUEwQjtBQUN4QnpCLGdCQUFBQSxHQUFHLElBQUksZUFBUDtBQUNELGVBRkQsTUFFSztBQUNILHFCQUFTUCxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHK0IsVUFBVSxDQUFDQyxNQUEvQixFQUFzQ2hDLENBQUMsRUFBdkMsRUFBMEM7QUFDeENPLGtCQUFBQSxHQUFHLElBQUksZ0JBQWN3QixVQUFVLENBQUMvQixDQUFELENBQXhCLEdBQTRCLEdBQW5DO0FBQ0Q7QUFDRjs7QUFDRCxrQkFBRzhCLFdBQVcsQ0FBQ0UsTUFBWixJQUFzQixDQUF6QixFQUEyQjtBQUN6QnpCLGdCQUFBQSxHQUFHLElBQUksY0FBUDtBQUNELGVBRkQsTUFFSztBQUNILHFCQUFTeUUsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xELFdBQVcsQ0FBQ0UsTUFBaEMsRUFBdUNnRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3pDLHNCQUFHQSxDQUFDLElBQUlsRCxXQUFXLENBQUNFLE1BQVosR0FBb0IsQ0FBNUIsRUFBOEI7QUFDNUJ6QixvQkFBQUEsR0FBRyxJQUFJLGdCQUFjdUIsV0FBVyxDQUFDa0QsQ0FBRCxDQUFoQztBQUNELG1CQUZELE1BRUs7QUFDSHpFLG9CQUFBQSxHQUFHLElBQUksZ0JBQWN1QixXQUFXLENBQUNrRCxDQUFELENBQXpCLEdBQTZCLEdBQXBDO0FBQ0Q7QUFFRjtBQUNGOztBQXJCZTtBQUFBLHFCQXNCUnJELE1BQU0sQ0FBQ3BCLEdBQUQsQ0F0QkU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlCaEJjLGNBQUFBLFlBQVksQ0FBQ3NDLGVBQWUsY0FBaEIsQ0FBWjs7QUF6QmdCO0FBMkJsQnBELGNBQUFBLEdBQUcsR0FBRyw0QkFBTjs7QUEzQmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVh1RSxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQStCQXZILEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdtRSxHQUFHLElBQUluQixHQUFWLEVBQWM7QUFDWnFFLE1BQUFBLE1BQU0sR0FETSxDQUNGO0FBRVg7QUFDRixHQUxRLEVBS04sQ0FBQ2xELEdBQUQsQ0FMTSxDQUFUOztBQVNBLE1BQU11RCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN4Q0MsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUFDLENBQUMsRUFBSTtBQUM1QixVQUFNQyxJQUFJLEdBQUdOLEdBQUcsQ0FBQ0ssQ0FBRCxDQUFoQjs7QUFDQSxVQUFJLE9BQU9DLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJBLFFBQUFBLElBQUksQ0FBQ0MsSUFBTCxHQUFZTixLQUFLLGFBQU1BLEtBQU4sY0FBZUksQ0FBZixJQUFxQkEsQ0FBdEM7QUFDQU4sUUFBQUEsaUJBQWlCLENBQUNPLElBQUQsRUFBT0EsSUFBSSxDQUFDQyxJQUFaLENBQWpCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRDs7QUFVQVIsRUFBQUEsaUJBQWlCLENBQUM5RywwREFBRCxDQUFqQjtBQUNBOEcsRUFBQUEsaUJBQWlCLENBQUM3RyxzREFBRCxDQUFqQjs7QUFFQSxNQUFNc0gsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQWNDLGFBQWQsRUFBZ0M7QUFDekQ3RCxJQUFBQSxVQUFVLEdBQUcsRUFBYjs7QUFDQSxTQUFLLElBQUkvQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEYsYUFBYSxDQUFDNUQsTUFBbEMsRUFBMENoQyxDQUFDLEVBQTNDLEVBQStDO0FBQzdDO0FBQ0EsVUFBSTZGLEtBQUssR0FBR0QsYUFBYSxDQUFDNUYsQ0FBRCxDQUFiLENBQWlCNkYsS0FBN0I7QUFDQTlELE1BQUFBLFVBQVUsQ0FBQytELElBQVgsQ0FBZ0JELEtBQWhCO0FBQ0Q7O0FBQ0R0QyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXpCLFVBQVo7QUFDRCxHQVJEOztBQVdBLE1BQU1nRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNKLFdBQUQsRUFBY0MsYUFBZCxFQUFnQztBQUNyRDlELElBQUFBLFdBQVcsR0FBRyxFQUFkOztBQUNBLFNBQUssSUFBSTlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0RixhQUFhLENBQUM1RCxNQUFsQyxFQUEwQ2hDLENBQUMsRUFBM0MsRUFBK0M7QUFDN0M7QUFDQSxVQUFJNkYsS0FBSyxHQUFHRCxhQUFhLENBQUM1RixDQUFELENBQWIsQ0FBaUI2RixLQUE3QjtBQUNBL0QsTUFBQUEsV0FBVyxDQUFDZ0UsSUFBWixDQUFpQkQsS0FBakI7QUFDRDs7QUFDRHRDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZekIsVUFBWjtBQUNELEdBUkQ7O0FBVUEsc0JBQ0U7QUFBQSxlQUNFLENBQUNmLE9BQU8sQ0FBQytELElBQVIsQ0FBYWlCLFVBQWQsaUJBQ0E7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNGO0FBQUEsd0dBQ3NFO0FBQUcsY0FBSSxFQUFDLDhDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUR0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxlQUtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEUsZUFRRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJFLGVBV0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhFLGVBY0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRSxlQWtCRjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQTBCRWhGLE9BQU8sQ0FBQytELElBQVIsQ0FBYWlCLFVBQWIsSUFBNEIsQ0FBQzlFLEtBQTdCLGlCQUVBO0FBQUEsNkJBR0Y7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBO0FBQUEsaUNBQ0EsK0RBQUMsbUVBQUQ7QUFBb0IsZ0JBQUksRUFBRS9DLDBEQUExQjtBQUEwQyxvQkFBUSxFQUFFdUgsa0JBQXBEO0FBQXdFLHFCQUFTLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFNQTtBQUFLLGtCQUFRLEVBQUc7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOQSxlQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRBLGVBVUEsK0RBQUMsbUVBQUQ7QUFBb0IsY0FBSSxFQUFFdEgsc0RBQTFCO0FBQTBDLGtCQUFRLEVBQUUySCxjQUFwRDtBQUFvRSxtQkFBUyxFQUFDO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkEsZUFhTSwrREFBQyxrRUFBRDtBQUFRLGVBQUssRUFBRztBQUFDLDBCQUFhLE1BQWQ7QUFBcUIsNEJBQWdCO0FBQXJDLFdBQWhCO0FBQTJELGlCQUFPLEVBQUMsT0FBbkU7QUFBMkUsZUFBSyxFQUFDLFlBQWpGO0FBQThGLGlCQUFPLEVBQUV0QyxPQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGLEVBaURFekMsT0FBTyxDQUFDK0QsSUFBUixDQUFhaUIsVUFBYixJQUEyQjlFLEtBQTNCLGlCQUNBO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUEsK0RBQUMsbUVBQUQ7QUFBb0IsY0FBSSxFQUFFL0MsMERBQTFCO0FBQTBDLGtCQUFRLEVBQUV1SCxrQkFBcEQ7QUFBd0UsbUJBQVMsRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsZUFLQSwrREFBQyxtRUFBRDtBQUFvQixjQUFJLEVBQUV0SCxzREFBMUI7QUFBMEMsa0JBQVEsRUFBRTJILGNBQXBEO0FBQW9FLG1CQUFTLEVBQUM7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMQSxlQVFVLCtEQUFDLGtFQUFEO0FBQVEsZUFBSyxFQUFHO0FBQUMsMEJBQWEsTUFBZDtBQUFxQiw0QkFBZ0I7QUFBckMsV0FBaEI7QUFBMkQsaUJBQU8sRUFBQyxPQUFuRTtBQUE0RSxpQkFBTyxFQUFFakIsV0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUlYsZUFTVSwrREFBQyxrRUFBRDtBQUFRLGVBQUssRUFBRztBQUFDLDBCQUFhLE1BQWQ7QUFBcUIsNEJBQWdCO0FBQXJDLFdBQWhCO0FBQTJELGlCQUFPLEVBQUMsT0FBbkU7QUFBNEUsaUJBQU8sRUFBRXBCLE1BQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBYUE7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxtQkFFQ3RDLFNBQVMsSUFBSSxDQUFDUSxLQUFkLGlCQUNLO0FBQUEsa0NBQ0E7QUFBQSxzQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBQSxzQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZBLEVBR0NxQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTFDLFNBQVMsQ0FBQzZFLFNBQXpCLEtBQXVDLE9BQXZDLGlCQUFtRDtBQUFBLHNCQUFNO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIcEQsRUFJQ3BDLElBQUksQ0FBQ0MsU0FBTCxDQUFlMUMsU0FBUyxDQUFDNkUsU0FBekIsS0FBdUMsTUFBdkMsaUJBQWtEO0FBQUEsc0JBQU07QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpuRCxFQUtDN0UsU0FBUyxDQUFDOEUsTUFBVixpQkFDQztBQUFBLG9DQUNFO0FBQUEsd0JBQU0sMkRBQTBEckMsSUFBSSxDQUFDQyxTQUFMLENBQWUxQyxTQUFTLENBQUM4RSxNQUFWLENBQWlCQyxpQkFBaEM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsd0JBQU0sZ0VBQWdFdEMsSUFBSSxDQUFDQyxTQUFMLENBQWUxQyxTQUFTLENBQUM4RSxNQUFWLENBQWlCRSxVQUFoQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UsK0RBQUMsUUFBRDtBQUFVLDJCQUFhLEVBQUdoRixTQUFTLENBQUM4RSxNQUFWLENBQWlCRztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUEsMEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhOLEVBb0JHakYsU0FBUyxJQUFJUSxLQUFiLGlCQUNPO0FBQUEsaUNBQ0U7QUFBQSxzQkFBTVI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEZEOztHQXJRdUJMO1VBQ0Z2RCxnRUEwRGdDTTs7O01BM0Q5QmlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIxIElucnVwdCBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuICogdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsXG4gKiBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gKiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcbiAqIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgRHJvcGRvd25UcmVlU2VsZWN0IGZyb20gJ3JlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0JztcbmltcG9ydCB7Q1JvdywgQ0NvbH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIHVzZVF1ZXJ5LFxuICB1c2VRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXG59IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnXG5pbXBvcnQgcGVyc29uYWxEYXRhICBmcm9tICcuLi9yZXNvdXJjZXMvcGVyc29uYWxkYXRhLmpzb24nO1xuaW1wb3J0IHB1cnBvc2VzRGF0YSBmcm9tICcuLi9yZXNvdXJjZXMvcHVycG9zZXMuanNvbic7XG5pbXBvcnQgeyBDQ2FyZCxDQ2FyZEJvZHksQ0NhcmRHcm91cCxDQ2FyZEhlYWRlcixDQ2FyZExpbmssQ0NhcmRUZXh0LENDYXJkVGl0bGUsQ0NhcmRTdWJ0aXRsZSxDTGlzdEdyb3VwLENMaXN0R3JvdXBJdGVtLENCdXR0b24gICAgIH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5pbXBvcnQgJ0Bjb3JldWkvY29yZXVpL2Rpc3QvY3NzL2NvcmV1aS5taW4uY3NzJ1xuaW1wb3J0IHtnZXRGaWxlfSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudCc7XG5pbXBvcnQge2ZldGNofSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudC1hdXRobi1icm93c2VyJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuXG5cblxudmFyIHNhdmVGaWxlO1xuXG5jb25zdCBDYXJkID0gKHtuYW1lLCB1cmxMaXN0LCBjYXRlZ29yaWVzLCBwb2xpY2llcyxyZWNpcGllbnRzLCBkdXJhdGlvbn0pID0+e1xuXG5cbiAgcmV0dXJuKFxuICAgICAgPENDYXJkXG4gICAgICBjb2xvcj1cImxpZ2h0XCJcblxuXG4gICAgICBzdHlsZT17e1wibWF4V2lkdGhcIjogJzMwMHB4J30seyBcInBhZGRpbmdcIjogMzAgfSx7XCJtYXJnaW4tYm90dG9tXCI6IDIwfX1cblxuXG4gICAgICA+XG5cbiAgICAgICAgPENDYXJkSGVhZGVyPntuYW1lfTwvQ0NhcmRIZWFkZXI+XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICAgIDxDQ2FyZFRpdGxlPlRoZSBjYXRlZ29yeSBvZiB0aGUgZmlsZSBpczoge2NhdGVnb3JpZXN9PC9DQ2FyZFRpdGxlPlxuXG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcmVjaXBpZW50cyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIHtyZWNpcGllbnRzLm1hcCgocmVjaXBpZW50KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPENDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENDYXJkU3VidGl0bGU+PGI+V2ViSUQ6ICB7cmVjaXBpZW50fTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBwb2xpY2llcyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICAgICAge3BvbGljaWVzLm1hcCgoeyBwb2xOYW1lLCBwdXJwb3NlLCBhY3Rpb24gfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPk5hbWU6IHtwb2xOYW1lfTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxuICAgICAgICAgICAge3B1cnBvc2UubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICA8Q0J1dHRvbiBvbkNsaWNrPXsoKT0+c2F2ZUZpbGUodXJsTGlzdCl9PkRvd25sb2FkIHRoZSBmb2xkZXIgY29udGVudHMuPC9DQnV0dG9uPlxuXG4gICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICA8L0NDYXJkPlxuXG4gICk7XG5cbn1cblxuY29uc3QgQ2FyZExpc3QgPSAoeyByZXNvdXJjZUNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNBcnJheSA9IHJlc291cmNlQ2FyZHMubWFwKHJlc291cmNlQ2FyZCA9PiAoXG4gICAgPGRpdiBzdHlsZT17e21pbldpZHRoOlwiMjAwcHhcIn19PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybExpc3Q9e3Jlc291cmNlQ2FyZC51cml9XG4gICAgICBjYXRlZ29yaWVzPXtyZXNvdXJjZUNhcmQuY2F0ZWdvcmllc31cbiAgICAgIHBvbGljaWVzPXtyZXNvdXJjZUNhcmQucG9saWNpZXN9XG4gICAgICByZWNpcGllbnRzPXtyZXNvdXJjZUNhcmQucmVjaXBpZW50c31cbiAgICAgIGR1cmF0aW9uPXtyZXNvdXJjZUNhcmQuZHVyYXRpb259XG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cbiAgY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVyeShmYWxzZSk7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhbHRleHRcIj5cbiAgICA8cD5cbiAgICAgIFRoaXMgZnJvbnRlbmQgc2VydmVzIGFzIGEgZ2F0ZXdheSBmb3IgdXNlcnMgdG8gc2VuZCByZXF1ZXN0cyB0byB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SbG9uZ2FyZXMvVEZNLUFQSS1leHByZXNzXCI+QVBJPC9hPi5cblxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIEl0IGFsc28gYWxsb3dzIGZvciB0aGUgZG93bmxvYWQgb2YgdGhlIHJldHVybmVkIHJlc291cmNlcy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBUbyBnZXQgc3RhcnRlZCwgbG9nIGluIGludG8gdGhpcyBhcHBsaWNhdGlvbiBhbmQgaW50byB0aGUgQVBJLlxuICAgIDwvcD5cbiAgICA8cD5cblxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIEZpbmFsbHksIHlvdSBjYW4gZ2VuZXJhdGUgdGhlIE9EUkwgcG9saWN5JmFwb3M7cyBSREYgYnkgY2xpY2tpbmcgdGhlXG4gICAgICAmcXVvdDtHZW5lcmF0ZSZxdW90OyBidXR0b24gYW5kIHNhdmUgaXQgaW4geW91ciBQb2QuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cIm1haWx0bzpiZWF0cml6Lmdlc3RldmVzQHVwbS5lc1wiPkNvbnRhY3QgTWU8L2E+XG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICAgICl9XG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAgJiYgIXF1ZXJ5ICYmIChcblxuICAgICAgPGRpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgIDxkaXY+XG4gICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzTmFtZSA9IFwiXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiIHZhbHVlPVwicGVybWlzc2lvblwiIG9uQ2xpY2s9e2NhbGxBUEl9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgcXVlcnkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z2V0UXVlcnlBbGx9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z29CYWNrfSA+R28gQmFjay48L0J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0yXCI+XG5cbiAgICAgIHtnZXRSZXN1bHQgJiYgIWVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPHByZT57dXJsfTwvcHJlPlxuICAgICAgICAgICAgPHByZT57d2ViSWR9PC9wcmU+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJmYWxzZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIG5vdCBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcInRydWVcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtnZXRSZXN1bHQuZm9ybWF0ICYmKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhU3ViamVjdFJpZ2h0cyBpczogXCIgK0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuZGF0YVN1YmplY3RSaWdodHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIHNhZmVndWFyZHMgaW4gY2FzZSBvZiB0cmFuc2ZlciB0byBhIHRoaXJkIGNvdW50cnkgYXJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuc2FmZWd1YXJkcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPENhcmRMaXN0IHJlc291cmNlQ2FyZHMgPXtnZXRSZXN1bHQuZm9ybWF0LnJlc291cmNlfT48L0NhcmRMaXN0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIHtnZXRSZXN1bHQgJiYgZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgPHByZT57Z2V0UmVzdWx0fTwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiYXhpb3MiLCJEcm9wZG93blRyZWVTZWxlY3QiLCJDUm93IiwiQ0NvbCIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJwZXJzb25hbERhdGEiLCJwdXJwb3Nlc0RhdGEiLCJDQ2FyZCIsIkNDYXJkQm9keSIsIkNDYXJkR3JvdXAiLCJDQ2FyZEhlYWRlciIsIkNDYXJkTGluayIsIkNDYXJkVGV4dCIsIkNDYXJkVGl0bGUiLCJDQ2FyZFN1YnRpdGxlIiwiQ0xpc3RHcm91cCIsIkNMaXN0R3JvdXBJdGVtIiwiQ0J1dHRvbiIsImdldEZpbGUiLCJmZXRjaCIsInNhdmVGaWxlIiwiQ2FyZCIsIm5hbWUiLCJ1cmxMaXN0IiwiY2F0ZWdvcmllcyIsInBvbGljaWVzIiwicmVjaXBpZW50cyIsImR1cmF0aW9uIiwibWFwIiwicmVjaXBpZW50IiwicG9sTmFtZSIsInB1cnBvc2UiLCJhY3Rpb24iLCJpdGVtIiwiaSIsInRvU3RyaW5nIiwiQ2FyZExpc3QiLCJyZXNvdXJjZUNhcmRzIiwiY2FyZHNBcnJheSIsInJlc291cmNlQ2FyZCIsIm1pbldpZHRoIiwidXJpIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiSG9tZSIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJ1cmwiLCJzZXRVcmwiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRQVVIiLCJzZWxlY3RlZFBEIiwibGVuZ3RoIiwiZmlsZVVSTCIsImZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJmaWxlIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYWxsQVBJIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3ZWJJRCIsImVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImlzTG9hZGluZ0FsbCIsImlzTG9hZGluZyIsImdldEFsbCIsInJlZmV0Y2giLCJnZXRRdWVyeUFsbCIsImluZm8iLCJqIiwiYXNzaWduT2JqZWN0UGF0aHMiLCJvYmoiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsIm5vZGUiLCJwYXRoIiwiaGFuZGxlUGVyc29uYWxEYXRhIiwiY3VycmVudE5vZGUiLCJzZWxlY3RlZE5vZGVzIiwibGFiZWwiLCJwdXNoIiwiaGFuZGxlUHVycG9zZXMiLCJpc0xvZ2dlZEluIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZGF0YVN1YmplY3RSaWdodHMiLCJzYWZlZ3VhcmRzIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9