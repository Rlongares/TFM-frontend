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
                setGetResult(res.data);

              case 3:
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
                uri += "catPData=0&";
              } else {
                for (i = 0; i < selectedPD.length; i++) {
                  uri += "catPData=" + selectedPD[i] + "&";
                }
              }

              if (selectedPUR.length == 0) {
                uri += "purPData=0";
              } else {
                for (j = 0; j < selectedPUR.length; j++) {
                  if (j == selectedPUR.length) {
                    uri += "purPData=" + selectedPUR[j];
                  }

                  uri += "purPData=" + selectedPUR[j] + "&";
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
        lineNumber: 286,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
            onChange: handlePersonalData,
            className: "tree-select"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
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
          lineNumber: 308,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_7___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_12__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
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
          lineNumber: 323,
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
          lineNumber: 324,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "form2",
        children: getResult && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 283,
    columnNumber: 5
  }, this);
}

_s(Home, "8EoP3iZbVNwVXwyZtO2pAA6NQnc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzNlZjJmYzA5NGIwNjdlMzczODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJOEIsUUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErRDtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsUUFBYSxRQUFiQSxRQUFhO0FBRzFFLHNCQUNJLCtEQUFDLGdEQUFEO0FBQ0EsU0FBSyxFQUFDLE9BRE47QUFJQSxTQUFLLEdBQUU7QUFBQyxrQkFBWTtBQUFiLE9BQXNCO0FBQUUsaUJBQVc7QUFBYixLQUF0QixFQUF3QztBQUFDLHVCQUFpQjtBQUFsQixLQUExQyxDQUpMO0FBQUEsNEJBU0UsK0RBQUMsc0RBQUQ7QUFBQSxnQkFBY0w7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFXRSwrREFBQyxvREFBRDtBQUFBLDhCQUVFLCtEQUFDLHFEQUFEO0FBQUEsb0RBQTBDRSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFLCtEQUFDLG9EQUFEO0FBQUEsMkNBQWdDRSxVQUFoQztBQUFBO0FBQUE7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QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzRUQ7O0dBek91QnhGO1VBQ0Z0RCxnRUEyRGdDTTs7O01BNUQ5QmdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDIxIElucnVwdCBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuICogdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlXG4gKiBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbiAqIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsXG4gKiBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQVxuICogUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gKiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcbiAqIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgRHJvcGRvd25UcmVlU2VsZWN0IGZyb20gJ3JlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0JztcbmltcG9ydCB7Q1JvdywgQ0NvbH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIHVzZVF1ZXJ5LFxuICB1c2VRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXG59IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnXG5pbXBvcnQgcGVyc29uYWxEYXRhICBmcm9tICcuLi9yZXNvdXJjZXMvcGVyc29uYWxkYXRhLmpzb24nO1xuaW1wb3J0IHB1cnBvc2VzRGF0YSBmcm9tICcuLi9yZXNvdXJjZXMvcHVycG9zZXMuanNvbic7XG5pbXBvcnQgeyBDQ2FyZCxDQ2FyZEJvZHksQ0NhcmRHcm91cCxDQ2FyZEhlYWRlcixDQ2FyZExpbmssQ0NhcmRUZXh0LENDYXJkVGl0bGUsQ0NhcmRTdWJ0aXRsZSxDTGlzdEdyb3VwLENMaXN0R3JvdXBJdGVtLENCdXR0b24gICAgIH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5pbXBvcnQgJ0Bjb3JldWkvY29yZXVpL2Rpc3QvY3NzL2NvcmV1aS5taW4uY3NzJ1xuaW1wb3J0IHtnZXRGaWxlfSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudCc7XG5pbXBvcnQge2ZldGNofSBmcm9tICdAaW5ydXB0L3NvbGlkLWNsaWVudC1hdXRobi1icm93c2VyJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuXG5cblxudmFyIHNhdmVGaWxlO1xuXG5jb25zdCBDYXJkID0gKHtuYW1lLCB1cmxMaXN0LCBjYXRlZ29yaWVzLCBwb2xpY2llcyxyZWNpcGllbnRzLCBkdXJhdGlvbn0pID0+e1xuXG5cbiAgcmV0dXJuKFxuICAgICAgPENDYXJkXG4gICAgICBjb2xvcj1cImxpZ2h0XCJcblxuXG4gICAgICBzdHlsZT17e1wibWF4V2lkdGhcIjogJzMwMHB4J30seyBcInBhZGRpbmdcIjogMzAgfSx7XCJtYXJnaW4tYm90dG9tXCI6IDIwfX1cblxuXG4gICAgICA+XG5cbiAgICAgICAgPENDYXJkSGVhZGVyPntuYW1lfTwvQ0NhcmRIZWFkZXI+XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICAgIDxDQ2FyZFRpdGxlPlRoZSBjYXRlZ29yeSBvZiB0aGUgZmlsZSBpczoge2NhdGVnb3JpZXN9PC9DQ2FyZFRpdGxlPlxuXG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcmVjaXBpZW50cyBhcmU6IHtyZWNpcGllbnRzfTwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIGR1cmF0aW9uIGlzOiB7ZHVyYXRpb259PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcG9saWNpZXMgYXJlOiA8L0NDYXJkVGV4dD5cbiAgICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgICAgIHtwb2xpY2llcy5tYXAoKHsgcG9sTmFtZSwgcHVycG9zZSwgYWN0aW9uIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q0NhcmRTdWJ0aXRsZT48Yj5OYW1lOiB7cG9sTmFtZX08L2I+PC9DQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgICA8Q0xpc3RHcm91cCBmbHVzaD5cbiAgICAgICAgICAgIHtwdXJwb3NlLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENMaXN0R3JvdXBJdGVtPntpdGVtLnRvU3RyaW5nKCl9IC0ge2FjdGlvbi50b1N0cmluZygpfTwvQ0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgPENCdXR0b24gb25DbGljaz17KCk9PnNhdmVGaWxlKHVybExpc3QpfT5Eb3dubG9hZCB0aGUgZm9sZGVyIGNvbnRlbnRzLjwvQ0J1dHRvbj5cblxuICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgPC9DQ2FyZD5cblxuICApO1xuXG59XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgcmVzb3VyY2VDYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzQXJyYXkgPSByZXNvdXJjZUNhcmRzLm1hcChyZXNvdXJjZUNhcmQgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDpcIjIwMHB4XCJ9fT5cbiAgICA8Q2FyZFxuICAgICAgbmFtZT17cmVzb3VyY2VDYXJkLm5hbWV9XG4gICAgICB1cmxMaXN0PXtyZXNvdXJjZUNhcmQudXJpfVxuICAgICAgY2F0ZWdvcmllcz17cmVzb3VyY2VDYXJkLmNhdGVnb3JpZXN9XG4gICAgICBwb2xpY2llcz17cmVzb3VyY2VDYXJkLnBvbGljaWVzfVxuICAgICAgcmVjaXBpZW50cz17cmVzb3VyY2VDYXJkLnJlY2lwaWVudHN9XG4gICAgICBkdXJhdGlvbj17cmVzb3VyY2VDYXJkLmR1cmF0aW9ufVxuICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleEdyb3c6JzEnLGZsZXhTaHJpbms6XCIxXCIsZmxleEJhc2lzOlwiMTAwJVwiICxqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBmbGV4V3JhcDpcIndyYXBcIiwgZmxleERpcmVjdGlvbjpcInJvd1wiLCBmbGV4R3JvdzogXCIxXCIsIGFsaWduQ29udGVudDpcInN0cmV0Y2hcIn19PlxuICAgICAge2NhcmRzQXJyYXl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZTEsIHNldFZhbHVlMV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtnZXRSZXN1bHQsIHNldEdldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2dldFJlc3VsdENvbnRlbnQsIHNldEdldFJlc3VsdENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3ZWJJZCwgc2V0V2ViSWRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3VybCxzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cbiAgY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVyeShmYWxzZSk7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzdWx0ID0gZm9ydG1hdFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICBzZXRHZXRSZXN1bHQocmVzLmRhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIucmVzcG9uc2U/LmRhdGEgfHwgZXJyKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdBbGwpIHNldEdldFJlc3VsdChcImxvYWRpbmcuLi5cIik7XG4gICAgICB9LCBbaXNMb2FkaW5nQWxsXSk7XG5cbiAgdmFyICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXRGaWxlcz9cIjtcblxuICBjb25zdCBnZXRRdWVyeUFsbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0V2ViSWQoc2Vzc2lvbi5pbmZvLndlYklkKVxuICAgICAgaWYoc2VsZWN0ZWRQRC5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcImNhdFBEYXRhPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhPVwiK3NlbGVjdGVkUERbaV0rXCImXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHNlbGVjdGVkUFVSLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgdXJpICs9IFwicHVyUERhdGE9MFwiO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0ZWRQVVIubGVuZ3RoO2orKyl7XG4gICAgICAgICAgaWYoaiA9PSBzZWxlY3RlZFBVUi5sZW5ndGgpe1xuICAgICAgICAgICAgdXJpICs9IFwicHVyUERhdGE9XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfVxuICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9dXJpKXtcbiAgICAgIGdldEFsbCgpOyAvLyBUaGlzIHdpbGwgYWx3YXlzIHVzZSBsYXRlc3QgdmFsdWUgb2YgdXJpXG5cbiAgICB9XG4gIH0sIFt1cmxdKTtcblxuXG5cbiAgY29uc3QgYXNzaWduT2JqZWN0UGF0aHMgPSAob2JqLCBzdGFjaykgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBvYmpba107XG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbm9kZS5wYXRoID0gc3RhY2sgPyBgJHtzdGFja30uJHtrfWAgOiBrO1xuICAgICAgICBhc3NpZ25PYmplY3RQYXRocyhub2RlLCBub2RlLnBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGFzc2lnbk9iamVjdFBhdGhzKHBlcnNvbmFsRGF0YSk7XG4gIGFzc2lnbk9iamVjdFBhdGhzKHB1cnBvc2VzRGF0YSk7XG5cbiAgY29uc3QgaGFuZGxlUGVyc29uYWxEYXRhID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQRCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUEQucHVzaChsYWJlbCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUEQpO1xuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlUHVycG9zZXMgPSAoY3VycmVudE5vZGUsIHNlbGVjdGVkTm9kZXMpID0+IHtcbiAgICBzZWxlY3RlZFBVUiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUFVSLnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgeyAhc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICAgICAgICA8cD5Zb3UgYXJlIG5vdCBsb2dnZWQgaW4geWV0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgKX1cbiAgICB7IHNlc3Npb24uaW5mby5pc0xvZ2dlZEluICAmJiAhcXVlcnkgJiYgKFxuXG4gICAgICA8ZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgPGRpdj5cbiAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNOYW1lID0gXCJcIj5cblxuICAgIDwvZGl2PlxuICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cHVycG9zZXNEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQdXJwb3Nlc30gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgdmFsdWU9XCJwZXJtaXNzaW9uXCIgb25DbGljaz17Y2FsbEFQSX0gPk1ha2UgbmV3IEdEUFIgcGV0aXRpb24uPC9CdXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiBxdWVyeSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIGNhdGVnb3JpZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cGVyc29uYWxEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbERhdGF9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIHB1cnBvc2VzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnZXRRdWVyeUFsbH0gPk1ha2UgbmV3IEdEUFIgcGV0aXRpb24uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnb0JhY2t9ID5HbyBCYWNrLjwvQnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybTJcIj5cblxuICAgICAge2dldFJlc3VsdCAmJiAoXG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwcmU+e3VybH08L3ByZT5cbiAgICAgICAgICAgIDxwcmU+e3dlYklkfTwvcHJlPlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwiZmFsc2VcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBub3QgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJ0cnVlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7Z2V0UmVzdWx0LmZvcm1hdCAmJihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YVN1YmplY3RSaWdodHMgaXM6IFwiICtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LmRhdGFTdWJqZWN0UmlnaHRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBzYWZlZ3VhcmRzIGluIGNhc2Ugb2YgdHJhbnNmZXIgdG8gYSB0aGlyZCBjb3VudHJ5IGFyZTogXCIgKyBKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LnNhZmVndWFyZHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxDYXJkTGlzdCByZXNvdXJjZUNhcmRzID17Z2V0UmVzdWx0LmZvcm1hdC5yZXNvdXJjZX0+PC9DYXJkTGlzdD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiYXhpb3MiLCJEcm9wZG93blRyZWVTZWxlY3QiLCJDUm93IiwiQ0NvbCIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJwZXJzb25hbERhdGEiLCJwdXJwb3Nlc0RhdGEiLCJDQ2FyZCIsIkNDYXJkQm9keSIsIkNDYXJkR3JvdXAiLCJDQ2FyZEhlYWRlciIsIkNDYXJkTGluayIsIkNDYXJkVGV4dCIsIkNDYXJkVGl0bGUiLCJDQ2FyZFN1YnRpdGxlIiwiQ0xpc3RHcm91cCIsIkNMaXN0R3JvdXBJdGVtIiwiQ0J1dHRvbiIsImdldEZpbGUiLCJmZXRjaCIsInNhdmVGaWxlIiwiQ2FyZCIsIm5hbWUiLCJ1cmxMaXN0IiwiY2F0ZWdvcmllcyIsInBvbGljaWVzIiwicmVjaXBpZW50cyIsImR1cmF0aW9uIiwibWFwIiwicG9sTmFtZSIsInB1cnBvc2UiLCJhY3Rpb24iLCJpdGVtIiwiaSIsInRvU3RyaW5nIiwiQ2FyZExpc3QiLCJyZXNvdXJjZUNhcmRzIiwiY2FyZHNBcnJheSIsInJlc291cmNlQ2FyZCIsIm1pbldpZHRoIiwidXJpIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiSG9tZSIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ2YWx1ZTEiLCJzZXRWYWx1ZTEiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJ1cmwiLCJzZXRVcmwiLCJzZWxlY3RlZFBVUiIsInNlbGVjdGVkUEQiLCJsZW5ndGgiLCJmaWxlVVJMIiwiZmlsZW5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImZpbGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhbGxBUEkiLCJnb0JhY2siLCJmb3J0bWF0UmVzcG9uc2UiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiaGVhZGVycyIsIndlYklEIiwiZW5hYmxlZCIsIm9uU3VjY2VzcyIsInJlc3VsdCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwib25FcnJvciIsInJlc3BvbnNlIiwiaXNMb2FkaW5nQWxsIiwiaXNMb2FkaW5nIiwiZ2V0QWxsIiwicmVmZXRjaCIsImdldFF1ZXJ5QWxsIiwiaW5mbyIsImoiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=