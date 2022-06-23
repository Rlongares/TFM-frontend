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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      value1 = _useState2[0],
      setValue1 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      value2 = _useState3[0],
      setValue2 = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResult = _useState4[0],
      setGetResult = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      getResultContent = _useState5[0],
      setGetResultContent = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      webId = _useState6[0],
      setWebId = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      url = _useState7[0],
      setUrl = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState8[0],
      setError = _useState8[1];

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
                  if (j == selectedPUR.length) {
                    uri += "purPData[]=" + selectedPUR[j];
                  }

                  uri += "purPData[]=" + selectedPUR[j] + "&";
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
        children: getResult && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
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
        }, this)
      }, void 0, false, {
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

_s(Home, "H2hqliy9tgDa55GMjRyLwdsWGwA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQxOTNhYjU5NzEzMjI3Yjc4ODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUEsMkNBQWdDRSxVQUFoQztBQUFBO0FBQUE7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RSxNQUFWLENBQWlCRztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUEsMEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFRDs7R0E3T3VCMUY7VUFDRnRELGdFQTREZ0NNOzs7TUE3RDlCZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgSW5ydXB0IEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBEcm9wZG93blRyZWVTZWxlY3QgZnJvbSAncmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3QnO1xuaW1wb3J0IHtDUm93LCBDQ29sfSBmcm9tICdAY29yZXVpL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcbmltcG9ydCBwZXJzb25hbERhdGEgIGZyb20gJy4uL3Jlc291cmNlcy9wZXJzb25hbGRhdGEuanNvbic7XG5pbXBvcnQgcHVycG9zZXNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9wdXJwb3Nlcy5qc29uJztcbmltcG9ydCB7IENDYXJkLENDYXJkQm9keSxDQ2FyZEdyb3VwLENDYXJkSGVhZGVyLENDYXJkTGluayxDQ2FyZFRleHQsQ0NhcmRUaXRsZSxDQ2FyZFN1YnRpdGxlLENMaXN0R3JvdXAsQ0xpc3RHcm91cEl0ZW0sQ0J1dHRvbiAgICAgfSBmcm9tICdAY29yZXVpL3JlYWN0JztcbmltcG9ydCAnQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MnXG5pbXBvcnQge2dldEZpbGV9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50JztcbmltcG9ydCB7ZmV0Y2h9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXInO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5cblxuXG52YXIgc2F2ZUZpbGU7XG5cbmNvbnN0IENhcmQgPSAoe25hbWUsIHVybExpc3QsIGNhdGVnb3JpZXMsIHBvbGljaWVzLHJlY2lwaWVudHMsIGR1cmF0aW9ufSkgPT57XG5cblxuICByZXR1cm4oXG4gICAgICA8Q0NhcmRcbiAgICAgIGNvbG9yPVwibGlnaHRcIlxuXG5cbiAgICAgIHN0eWxlPXt7XCJtYXhXaWR0aFwiOiAnMzAwcHgnfSx7IFwicGFkZGluZ1wiOiAzMCB9LHtcIm1hcmdpbi1ib3R0b21cIjogMjB9fVxuXG5cbiAgICAgID5cblxuICAgICAgICA8Q0NhcmRIZWFkZXI+e25hbWV9PC9DQ2FyZEhlYWRlcj5cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgICAgPENDYXJkVGl0bGU+VGhlIGNhdGVnb3J5IG9mIHRoZSBmaWxlIGlzOiB7Y2F0ZWdvcmllc308L0NDYXJkVGl0bGU+XG5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSByZWNpcGllbnRzIGFyZToge3JlY2lwaWVudHN9PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBwb2xpY2llcyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICAgICAge3BvbGljaWVzLm1hcCgoeyBwb2xOYW1lLCBwdXJwb3NlLCBhY3Rpb24gfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPk5hbWU6IHtwb2xOYW1lfTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxuICAgICAgICAgICAge3B1cnBvc2UubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICA8Q0J1dHRvbiBvbkNsaWNrPXsoKT0+c2F2ZUZpbGUodXJsTGlzdCl9PkRvd25sb2FkIHRoZSBmb2xkZXIgY29udGVudHMuPC9DQnV0dG9uPlxuXG4gICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICA8L0NDYXJkPlxuXG4gICk7XG5cbn1cblxuY29uc3QgQ2FyZExpc3QgPSAoeyByZXNvdXJjZUNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNBcnJheSA9IHJlc291cmNlQ2FyZHMubWFwKHJlc291cmNlQ2FyZCA9PiAoXG4gICAgPGRpdiBzdHlsZT17e21pbldpZHRoOlwiMjAwcHhcIn19PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybExpc3Q9e3Jlc291cmNlQ2FyZC51cml9XG4gICAgICBjYXRlZ29yaWVzPXtyZXNvdXJjZUNhcmQuY2F0ZWdvcmllc31cbiAgICAgIHBvbGljaWVzPXtyZXNvdXJjZUNhcmQucG9saWNpZXN9XG4gICAgICByZWNpcGllbnRzPXtyZXNvdXJjZUNhcmQucmVjaXBpZW50c31cbiAgICAgIGR1cmF0aW9uPXtyZXNvdXJjZUNhcmQuZHVyYXRpb259XG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbHVlMSwgc2V0VmFsdWUxXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cbiAgY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVyeShmYWxzZSk7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfVxuICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal0rXCImXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgYXdhaXQgc2V0VXJsKHVyaSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyKSk7XG4gICAgfVxuICAgIHVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaT9cIjtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1cmwgIT11cmkpe1xuICAgICAgZ2V0QWxsKCk7IC8vIFRoaXMgd2lsbCBhbHdheXMgdXNlIGxhdGVzdCB2YWx1ZSBvZiB1cmlcblxuICAgIH1cbiAgfSwgW3VybF0pO1xuXG5cblxuICBjb25zdCBhc3NpZ25PYmplY3RQYXRocyA9IChvYmosIHN0YWNrKSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IG9ialtrXTtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBub2RlLnBhdGggPSBzdGFjayA/IGAke3N0YWNrfS4ke2t9YCA6IGs7XG4gICAgICAgIGFzc2lnbk9iamVjdFBhdGhzKG5vZGUsIG5vZGUucGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgYXNzaWduT2JqZWN0UGF0aHMocGVyc29uYWxEYXRhKTtcbiAgYXNzaWduT2JqZWN0UGF0aHMocHVycG9zZXNEYXRhKTtcblxuICBjb25zdCBoYW5kbGVQZXJzb25hbERhdGEgPSAoY3VycmVudE5vZGUsIHNlbGVjdGVkTm9kZXMpID0+IHtcbiAgICBzZWxlY3RlZFBEID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3ZhciB2YWx1ZSA9IHNlbGVjdGVkTm9kZXNbaV0udmFsdWU7XG4gICAgICB2YXIgbGFiZWwgPSBzZWxlY3RlZE5vZGVzW2ldLmxhYmVsO1xuICAgICAgc2VsZWN0ZWRQRC5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVQdXJwb3NlcyA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUFVSID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3ZhciB2YWx1ZSA9IHNlbGVjdGVkTm9kZXNbaV0udmFsdWU7XG4gICAgICB2YXIgbGFiZWwgPSBzZWxlY3RlZE5vZGVzW2ldLmxhYmVsO1xuICAgICAgc2VsZWN0ZWRQVVIucHVzaChsYWJlbCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUEQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7ICFzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgICAgICAgIDxwPllvdSBhcmUgbm90IGxvZ2dlZCBpbiB5ZXQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICApfVxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gICYmICFxdWVyeSAmJiAoXG5cbiAgICAgIDxkaXY+XG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIGNhdGVnb3JpZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICA8ZGl2PlxuICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cGVyc29uYWxEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbERhdGF9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc05hbWUgPSBcIlwiPlxuXG4gICAgPC9kaXY+XG4gICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIHB1cnBvc2VzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiB2YWx1ZT1cInBlcm1pc3Npb25cIiBvbkNsaWNrPXtjYWxsQVBJfSA+TWFrZSBuZXcgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cblxuICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICB7IHNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIHF1ZXJ5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cHVycG9zZXNEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQdXJwb3Nlc30gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dldFF1ZXJ5QWxsfSA+TWFrZSBuZXcgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dvQmFja30gPkdvIEJhY2suPC9CdXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtMlwiPlxuXG4gICAgICB7Z2V0UmVzdWx0ICYmIChcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPHByZT57dXJsfTwvcHJlPlxuICAgICAgICAgICAgPHByZT57d2ViSWR9PC9wcmU+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJmYWxzZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIG5vdCBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcInRydWVcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtnZXRSZXN1bHQuZm9ybWF0ICYmKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhU3ViamVjdFJpZ2h0cyBpczogXCIgK0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuZGF0YVN1YmplY3RSaWdodHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIHNhZmVndWFyZHMgaW4gY2FzZSBvZiB0cmFuc2ZlciB0byBhIHRoaXJkIGNvdW50cnkgYXJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuc2FmZWd1YXJkcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPENhcmRMaXN0IHJlc291cmNlQ2FyZHMgPXtnZXRSZXN1bHQuZm9ybWF0LnJlc291cmNlfT48L0NhcmRMaXN0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJheGlvcyIsIkRyb3Bkb3duVHJlZVNlbGVjdCIsIkNSb3ciLCJDQ29sIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInBlcnNvbmFsRGF0YSIsInB1cnBvc2VzRGF0YSIsIkNDYXJkIiwiQ0NhcmRCb2R5IiwiQ0NhcmRHcm91cCIsIkNDYXJkSGVhZGVyIiwiQ0NhcmRMaW5rIiwiQ0NhcmRUZXh0IiwiQ0NhcmRUaXRsZSIsIkNDYXJkU3VidGl0bGUiLCJDTGlzdEdyb3VwIiwiQ0xpc3RHcm91cEl0ZW0iLCJDQnV0dG9uIiwiZ2V0RmlsZSIsImZldGNoIiwic2F2ZUZpbGUiLCJDYXJkIiwibmFtZSIsInVybExpc3QiLCJjYXRlZ29yaWVzIiwicG9saWNpZXMiLCJyZWNpcGllbnRzIiwiZHVyYXRpb24iLCJtYXAiLCJwb2xOYW1lIiwicHVycG9zZSIsImFjdGlvbiIsIml0ZW0iLCJpIiwidG9TdHJpbmciLCJDYXJkTGlzdCIsInJlc291cmNlQ2FyZHMiLCJjYXJkc0FycmF5IiwicmVzb3VyY2VDYXJkIiwibWluV2lkdGgiLCJ1cmkiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJIb21lIiwic2Vzc2lvbiIsInF1ZXJ5Q2xpZW50IiwicXVlcnkiLCJzZXRRdWVyeSIsInZhbHVlMSIsInNldFZhbHVlMSIsInZhbHVlMiIsInNldFZhbHVlMiIsImdldFJlc3VsdCIsInNldEdldFJlc3VsdCIsImdldFJlc3VsdENvbnRlbnQiLCJzZXRHZXRSZXN1bHRDb250ZW50Iiwid2ViSWQiLCJzZXRXZWJJZCIsInVybCIsInNldFVybCIsImVycm9yIiwic2V0RXJyb3IiLCJzZWxlY3RlZFBVUiIsInNlbGVjdGVkUEQiLCJsZW5ndGgiLCJmaWxlVVJMIiwiZmlsZW5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImZpbGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhbGxBUEkiLCJnb0JhY2siLCJmb3J0bWF0UmVzcG9uc2UiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiaGVhZGVycyIsIndlYklEIiwiZW5hYmxlZCIsIm9uU3VjY2VzcyIsInJlc3VsdCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwib25FcnJvciIsInJlc3BvbnNlIiwiaXNMb2FkaW5nQWxsIiwiaXNMb2FkaW5nIiwiZ2V0QWxsIiwicmVmZXRjaCIsImdldFF1ZXJ5QWxsIiwiaW5mbyIsImoiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=