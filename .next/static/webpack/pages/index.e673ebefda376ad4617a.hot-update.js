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
        children: ["The recipients are: ", recipients]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardText, {
        children: ["The duration is: ", duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CCardText, {
        children: "The policies are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
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
              lineNumber: 74,
              columnNumber: 30
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CListGroup, {
          flush: true,
          children: purpose.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_8__.CListGroupItem, {
                children: [item.toString(), " - ", action.toString()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, _this)
            }, void 0, false);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
        lineNumber: 101,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
    lineNumber: 113,
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
      className: "contain",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
        children: "You are not logged in yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
            onChange: handlePersonalData,
            className: "tree-select"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
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
          lineNumber: 312,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
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
          children: "Make new GDPR petition."
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
          children: "Go Back."
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
    lineNumber: 287,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTY3M2ViZWZkYTM3NmFkNDYxN2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUEsMkNBQWdDRSxVQUFoQztBQUFBO0FBQUE7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LElBQUlRLEtBQWIsaUJBQ087QUFBQSxpQ0FDRTtBQUFBLHNCQUFNUjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQ7O0dBbFB1Qkw7VUFDRnRELGdFQTBEZ0NNOzs7TUEzRDlCZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgSW5ydXB0IEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBEcm9wZG93blRyZWVTZWxlY3QgZnJvbSAncmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3QnO1xuaW1wb3J0IHtDUm93LCBDQ29sfSBmcm9tICdAY29yZXVpL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcbmltcG9ydCBwZXJzb25hbERhdGEgIGZyb20gJy4uL3Jlc291cmNlcy9wZXJzb25hbGRhdGEuanNvbic7XG5pbXBvcnQgcHVycG9zZXNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9wdXJwb3Nlcy5qc29uJztcbmltcG9ydCB7IENDYXJkLENDYXJkQm9keSxDQ2FyZEdyb3VwLENDYXJkSGVhZGVyLENDYXJkTGluayxDQ2FyZFRleHQsQ0NhcmRUaXRsZSxDQ2FyZFN1YnRpdGxlLENMaXN0R3JvdXAsQ0xpc3RHcm91cEl0ZW0sQ0J1dHRvbiAgICAgfSBmcm9tICdAY29yZXVpL3JlYWN0JztcbmltcG9ydCAnQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MnXG5pbXBvcnQge2dldEZpbGV9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50JztcbmltcG9ydCB7ZmV0Y2h9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXInO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5cblxuXG52YXIgc2F2ZUZpbGU7XG5cbmNvbnN0IENhcmQgPSAoe25hbWUsIHVybExpc3QsIGNhdGVnb3JpZXMsIHBvbGljaWVzLHJlY2lwaWVudHMsIGR1cmF0aW9ufSkgPT57XG5cblxuICByZXR1cm4oXG4gICAgICA8Q0NhcmRcbiAgICAgIGNvbG9yPVwibGlnaHRcIlxuXG5cbiAgICAgIHN0eWxlPXt7XCJtYXhXaWR0aFwiOiAnMzAwcHgnfSx7IFwicGFkZGluZ1wiOiAzMCB9LHtcIm1hcmdpbi1ib3R0b21cIjogMjB9fVxuXG5cbiAgICAgID5cblxuICAgICAgICA8Q0NhcmRIZWFkZXI+e25hbWV9PC9DQ2FyZEhlYWRlcj5cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgICAgPENDYXJkVGl0bGU+VGhlIGNhdGVnb3J5IG9mIHRoZSBmaWxlIGlzOiB7Y2F0ZWdvcmllc308L0NDYXJkVGl0bGU+XG5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSByZWNpcGllbnRzIGFyZToge3JlY2lwaWVudHN9PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBwb2xpY2llcyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICAgICAge3BvbGljaWVzLm1hcCgoeyBwb2xOYW1lLCBwdXJwb3NlLCBhY3Rpb24gfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPk5hbWU6IHtwb2xOYW1lfTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxuICAgICAgICAgICAge3B1cnBvc2UubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICA8Q0J1dHRvbiBvbkNsaWNrPXsoKT0+c2F2ZUZpbGUodXJsTGlzdCl9PkRvd25sb2FkIHRoZSBmb2xkZXIgY29udGVudHMuPC9DQnV0dG9uPlxuXG4gICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICA8L0NDYXJkPlxuXG4gICk7XG5cbn1cblxuY29uc3QgQ2FyZExpc3QgPSAoeyByZXNvdXJjZUNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNBcnJheSA9IHJlc291cmNlQ2FyZHMubWFwKHJlc291cmNlQ2FyZCA9PiAoXG4gICAgPGRpdiBzdHlsZT17e21pbldpZHRoOlwiMjAwcHhcIn19PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybExpc3Q9e3Jlc291cmNlQ2FyZC51cml9XG4gICAgICBjYXRlZ29yaWVzPXtyZXNvdXJjZUNhcmQuY2F0ZWdvcmllc31cbiAgICAgIHBvbGljaWVzPXtyZXNvdXJjZUNhcmQucG9saWNpZXN9XG4gICAgICByZWNpcGllbnRzPXtyZXNvdXJjZUNhcmQucmVjaXBpZW50c31cbiAgICAgIGR1cmF0aW9uPXtyZXNvdXJjZUNhcmQuZHVyYXRpb259XG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cbiAgY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVyeShmYWxzZSk7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgICAgICAgPHA+WW91IGFyZSBub3QgbG9nZ2VkIGluIHlldDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICl9XG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAgJiYgIXF1ZXJ5ICYmIChcblxuICAgICAgPGRpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgIDxkaXY+XG4gICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzTmFtZSA9IFwiXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiIHZhbHVlPVwicGVybWlzc2lvblwiIG9uQ2xpY2s9e2NhbGxBUEl9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgcXVlcnkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z2V0UXVlcnlBbGx9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z29CYWNrfSA+R28gQmFjay48L0J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0yXCI+XG5cbiAgICAgIHtnZXRSZXN1bHQgJiYgIWVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPHByZT57dXJsfTwvcHJlPlxuICAgICAgICAgICAgPHByZT57d2ViSWR9PC9wcmU+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJmYWxzZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIG5vdCBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcInRydWVcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtnZXRSZXN1bHQuZm9ybWF0ICYmKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhU3ViamVjdFJpZ2h0cyBpczogXCIgK0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuZGF0YVN1YmplY3RSaWdodHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIHNhZmVndWFyZHMgaW4gY2FzZSBvZiB0cmFuc2ZlciB0byBhIHRoaXJkIGNvdW50cnkgYXJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuc2FmZWd1YXJkcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPENhcmRMaXN0IHJlc291cmNlQ2FyZHMgPXtnZXRSZXN1bHQuZm9ybWF0LnJlc291cmNlfT48L0NhcmRMaXN0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIHtnZXRSZXN1bHQgJiYgZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgPHByZT57Z2V0UmVzdWx0fTwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiYXhpb3MiLCJEcm9wZG93blRyZWVTZWxlY3QiLCJDUm93IiwiQ0NvbCIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJwZXJzb25hbERhdGEiLCJwdXJwb3Nlc0RhdGEiLCJDQ2FyZCIsIkNDYXJkQm9keSIsIkNDYXJkR3JvdXAiLCJDQ2FyZEhlYWRlciIsIkNDYXJkTGluayIsIkNDYXJkVGV4dCIsIkNDYXJkVGl0bGUiLCJDQ2FyZFN1YnRpdGxlIiwiQ0xpc3RHcm91cCIsIkNMaXN0R3JvdXBJdGVtIiwiQ0J1dHRvbiIsImdldEZpbGUiLCJmZXRjaCIsInNhdmVGaWxlIiwiQ2FyZCIsIm5hbWUiLCJ1cmxMaXN0IiwiY2F0ZWdvcmllcyIsInBvbGljaWVzIiwicmVjaXBpZW50cyIsImR1cmF0aW9uIiwibWFwIiwicG9sTmFtZSIsInB1cnBvc2UiLCJhY3Rpb24iLCJpdGVtIiwiaSIsInRvU3RyaW5nIiwiQ2FyZExpc3QiLCJyZXNvdXJjZUNhcmRzIiwiY2FyZHNBcnJheSIsInJlc291cmNlQ2FyZCIsIm1pbldpZHRoIiwidXJpIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiSG9tZSIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJ1cmwiLCJzZXRVcmwiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRQVVIiLCJzZWxlY3RlZFBEIiwibGVuZ3RoIiwiZmlsZVVSTCIsImZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJmaWxlIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYWxsQVBJIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3ZWJJRCIsImVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImlzTG9hZGluZ0FsbCIsImlzTG9hZGluZyIsImdldEFsbCIsInJlZmV0Y2giLCJnZXRRdWVyeUFsbCIsImluZm8iLCJqIiwiYXNzaWduT2JqZWN0UGF0aHMiLCJvYmoiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsIm5vZGUiLCJwYXRoIiwiaGFuZGxlUGVyc29uYWxEYXRhIiwiY3VycmVudE5vZGUiLCJzZWxlY3RlZE5vZGVzIiwibGFiZWwiLCJwdXNoIiwiaGFuZGxlUHVycG9zZXMiLCJpc0xvZ2dlZEluIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZGF0YVN1YmplY3RSaWdodHMiLCJzYWZlZ3VhcmRzIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9