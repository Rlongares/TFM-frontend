(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inrupt/solid-ui-react */ "@inrupt/solid-ui-react");
/* harmony import */ var _inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inrupt/prism-react-components */ "@inrupt/prism-react-components");
/* harmony import */ var _inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropdown-tree-select */ "react-dropdown-tree-select");
/* harmony import */ var react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "@coreui/react");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/personaldata.json */ "./resources/personaldata.json");
/* harmony import */ var _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resources/purposes.json */ "./resources/purposes.json");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/coreui/dist/css/coreui.min.css */ "./node_modules/@coreui/coreui/dist/css/coreui.min.css");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @inrupt/solid-client */ "@inrupt/solid-client");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @inrupt/solid-client-authn-browser */ "@inrupt/solid-client-authn-browser");
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\Ricardo\\Desktop\\UNIVERSIDAD\\MASTER UPM\\TFM\\TFM-frontend\\pages\\index.jsx";

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

const Card = ({
  name,
  urlList,
  categories,
  policies,
  recipients,
  duration
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCard, {
    color: "light",
    style: ({
      "maxWidth": '300px'
    }, {
      "padding": 30
    }, {
      "margin-bottom": 20
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardHeader, {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardTitle, {
        children: ["The category of the file is: ", categories]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardText, {
        children: ["The recipients are: ", recipients]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardText, {
        children: ["The duration is: ", duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardText, {
        children: "The policies are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined), policies.map(({
      polName,
      purpose,
      action
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardSubtitle, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("b", {
            children: ["Name: ", polName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 30
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CListGroup, {
        flush: true,
        children: purpose.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CListGroupItem, {
            children: [item.toString(), " - ", action.toString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, undefined)
        }, void 0, false))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CButton, {
        onClick: () => saveFile(urlList),
        children: "Download the folder contents."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }, undefined);
};

const CardList = ({
  resourceCards
}) => {
  const cardsArray = resourceCards.map(resourceCard => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    style: {
      minWidth: "200px"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Card, {
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
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: "cardlist",
    style: {
      display: 'flex',
      flexGrow: '1',
      flexShrink: "1",
      flexBasis: "100%",
      justifyContent: "space-around",
      flexWrap: "wrap",
      flexDirection: "row",
      flexGrow: "1",
      alignContent: "stretch"
    },
    children: cardsArray
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined);
};

function Home() {
  const {
    session
  } = (0,_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: getResult,
    1: setGetResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: getResultContent,
    1: setGetResultContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: webId,
    1: setWebId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let selectedPUR = [];
  let selectedPD = [];

  saveFile = async urlList => {
    for (var i = 0; i < urlList.length; i++) {
      const fileURL = urlList[i].toString();
      const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
      const file = await (0,_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_11__.getFile)(fileURL, // File in Pod to Read
      {
        fetch: session.fetch
      } // fetch from authenticated session
      );

      try {
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(file, filename);
        } else {
          const a = document.createElement('a');
          document.body.appendChild(a);
          const url = window.URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          a.click();
          setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }, 0);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const callAPI = () => {
    setQuery(true);
    setUrl("");
  };

  const goBack = () => {
    setQuery(false);
    setGetResult(null);
  };

  const fortmatResponse = res => {
    return JSON.stringify(res, null, 2);
  };

  const {
    isLoading: isLoadingAll,
    refetch: getAll
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)("getQueryAll", async () => {
    return await axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'get',
      url: url,
      headers: {
        webID: webId
      }
    });
  }, {
    enabled: false,
    onSuccess: async res => {
      let result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data
      };
      result = fortmatResponse(res);
      setError(false);
      setGetResult(res.data);
    },
    onError: err => {
      var _err$response;

      setError(true);
      setGetResult(fortmatResponse(((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) || err));
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLoadingAll) setGetResult("loading...");
  }, [isLoadingAll]);
  var uri = "http://localhost:8000/getFiles?";

  const getQueryAll = async () => {
    try {
      await setWebId(session.info.webId);

      if (selectedPD.length == 0) {
        uri += "catPData[]=0&";
      } else {
        for (var i = 0; i < selectedPD.length; i++) {
          uri += "catPData[]=" + selectedPD[i] + "&";
        }
      }

      if (selectedPUR.length == 0) {
        uri += "purPData[]=0";
      } else {
        for (var j = 0; j < selectedPUR.length; j++) {
          if (j == selectedPUR.length - 1) {
            uri += "purPData[]=" + selectedPUR[j];
          } else {
            uri += "purPData[]=" + selectedPUR[j] + "&";
          }
        }
      }

      await setUrl(uri);
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }

    uri = "http://localhost:8000/api?";
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url != uri) {
      getAll(); // This will always use latest value of uri
    }
  }, [url]);

  const assignObjectPaths = (obj, stack) => {
    Object.keys(obj).forEach(k => {
      const node = obj[k];

      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        assignObjectPaths(node, node.path);
      }
    });
  };

  assignObjectPaths(_resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__);
  assignObjectPaths(_resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__);

  const handlePersonalData = (currentNode, selectedNodes) => {
    selectedPD = [];

    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPD.push(label);
    }

    console.log(selectedPD);
  };

  const handlePurposes = (currentNode, selectedNodes) => {
    selectedPUR = [];

    for (var i = 0; i < selectedNodes.length; i++) {
      //var value = selectedNodes[i].value;
      var label = selectedNodes[i].label;
      selectedPUR.push(label);
    }

    console.log(selectedPD);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    children: [!session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "contain",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
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
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__,
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form2",
        children: [getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(CardList, {
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
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
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

/***/ }),

/***/ "./node_modules/@coreui/coreui/dist/css/coreui.min.css":
/*!*************************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/css/coreui.min.css ***!
  \*************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "@coreui/react":
/*!********************************!*\
  !*** external "@coreui/react" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@coreui/react");

/***/ }),

/***/ "@inrupt/prism-react-components":
/*!*************************************************!*\
  !*** external "@inrupt/prism-react-components" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inrupt/prism-react-components");

/***/ }),

/***/ "@inrupt/solid-client":
/*!***************************************!*\
  !*** external "@inrupt/solid-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inrupt/solid-client");

/***/ }),

/***/ "@inrupt/solid-client-authn-browser":
/*!*****************************************************!*\
  !*** external "@inrupt/solid-client-authn-browser" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inrupt/solid-client-authn-browser");

/***/ }),

/***/ "@inrupt/solid-ui-react":
/*!*****************************************!*\
  !*** external "@inrupt/solid-ui-react" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inrupt/solid-ui-react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dropdown-tree-select":
/*!*********************************************!*\
  !*** external "react-dropdown-tree-select" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dropdown-tree-select");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./resources/personaldata.json":
/*!*************************************!*\
  !*** ./resources/personaldata.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"value":"https://w3id.org/dpv/pd#Historical","parents":[],"label":"Historical","children":[{"value":"https://w3id.org/dpv/pd#LifeHistory","parents":["Historical"],"label":"LifeHistory"}]},{"value":"https://w3id.org/dpv/pd#Financial","parents":[],"label":"Financial","children":[{"value":"https://w3id.org/dpv/pd#FinancialAccount","parents":["Financial"],"label":"FinancialAccount"},{"value":"https://w3id.org/dpv/pd#Ownership","parents":["Financial"],"label":"Ownership"},{"value":"https://w3id.org/dpv/pd#Transactional","parents":["Financial"],"label":"Transactional"}]},{"value":"https://w3id.org/dpv/pd#Internal","parents":[],"label":"Internal","children":[{"value":"https://w3id.org/dpv/pd#Authenticating","parents":["Internal"],"label":"Authenticating"},{"value":"https://w3id.org/dpv/pd#KnowledgeBelief","parents":["Internal"],"label":"KnowledgeBelief"},{"value":"https://w3id.org/dpv/pd#Preference","parents":["Internal"],"label":"Preference"}]},{"value":"https://w3id.org/dpv/pd#Tracking","parents":[],"label":"Tracking","children":[{"value":"https://w3id.org/dpv/pd#Contact","parents":["Tracking"],"label":"Contact"},{"value":"https://w3id.org/dpv/pd#Location","parents":["Tracking"],"label":"Location"},{"value":"https://w3id.org/dpv/pd#DeviceBased","parents":["Tracking"],"label":"DeviceBased"}]},{"value":"https://w3id.org/dpv/pd#Social","parents":[],"label":"Social","children":[{"value":"https://w3id.org/dpv/pd#Family","parents":["Social"],"label":"Family"},{"value":"https://w3id.org/dpv/pd#Criminal","parents":["Social"],"label":"Criminal"},{"value":"https://w3id.org/dpv/pd#Communication","parents":["Social"],"label":"Communication"},{"value":"https://w3id.org/dpv/pd#SocialNetwork","parents":["Social"],"label":"SocialNetwork"},{"value":"https://w3id.org/dpv/pd#PublicLife","parents":["Social"],"label":"PublicLife"},{"value":"https://w3id.org/dpv/pd#Professional","parents":["Social"],"label":"Professional"}]},{"value":"https://w3id.org/dpv/pd#External","parents":[],"label":"External","children":[{"value":"https://w3id.org/dpv/pd#Demographic","parents":["External"],"label":"Demographic"},{"value":"https://w3id.org/dpv/pd#Ethnicity","parents":["External"],"label":"Ethnicity"},{"value":"https://w3id.org/dpv/pd#Sexual","parents":["External"],"label":"Sexual"},{"value":"https://w3id.org/dpv/pd#Identifying","parents":["External"],"label":"Identifying"},{"value":"https://w3id.org/dpv/pd#Behavioral","parents":["External"],"label":"Behavioral"},{"value":"https://w3id.org/dpv/pd#MedicalHealth","parents":["External"],"label":"MedicalHealth"},{"value":"https://w3id.org/dpv/pd#PhysicalCharacteristic","parents":["External"],"label":"PhysicalCharacteristic"}]}]');

/***/ }),

/***/ "./resources/purposes.json":
/*!*********************************!*\
  !*** ./resources/purposes.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"value":"https://w3id.org/dpv#AccountManagement","label":"AccountManagement"},{"value":"https://w3id.org/dpv#HumanResourceManagement","label":"HumanResourcesManagement"},{"value":"https://w3id.org/dpv#LegalCompliance","label":"LegalCompliance"},{"value":"https://w3id.org/dpv#RecordManagement","label":"RecordManagement"},{"value":"https://w3id.org/dpv#CommunicationManagement","label":"CommunicationManagement","children":[{"value":"https://w3id.org/dpv#CommunicationForCustomerCare","parents":["Communication Management"],"label":"CommunicationForCustomerCare"}]},{"value":"https://w3id.org/dpv#Personalisation","label":"Personalisation","children":[{"value":"https://w3id.org/dpv#PersonalisedAdvertising","parents":["Personalisation"],"label":"PersonalisedAdvertising"},{"value":"https://w3id.org/dpv#ServicePersonalization","parents":["Personalisation"],"label":"ServicePersonalization"}]},{"value":"https://w3id.org/dpv#EnforceSecurity","label":"EnforceSecurity","children":[{"value":"https://w3id.org/dpv#EnforceAccessControl","parents":["Enforce Security"],"label":"EnforceAccessControl"},{"value":"https://w3id.org/dpv#FraudPreventionAndDetection","parents":["Enforce Security"],"label":"FraudPreventionAndDetection"},{"value":"https://w3id.org/dpv#IdentityVerification","parents":["Enforce Security"],"label":"IdentityVerification"}]},{"value":"https://w3id.org/dpv#ResearchAndDevelopment","label":"ResearchandsDevelopment","children":[{"value":"https://w3id.org/dpv#AcademicResearch","parents":["Research and Development"],"label":"AcademicResearch"},{"value":"https://w3id.org/dpv#CommercialResearch","parents":["Research and Development"],"label":"CommercialResearch"},{"value":"https://w3id.org/dpv#NonCommercialResearch","parents":["Research and Development"],"label":"NonCommercialResearch"}]},{"value":"https://w3id.org/dpv#VendorManagement","label":"Vendor Management","children":[{"value":"https://w3id.org/dpv#VendorPayment","parents":["Vendor Management"],"label":"VendorPayment"},{"value":"https://w3id.org/dpv#VendorRecordsManagement","parents":["Vendor Management"],"label":"VendorRecordsManagement"},{"value":"https://w3id.org/dpv#VendorSelectionAssessment","parents":["Vendor Management"],"label":"VendorSelectionAssessment"}]},{"value":"https://w3id.org/dpv#Marketing","label":"Marketing","children":[{"value":"https://w3id.org/dpv#DirectMarketing","parents":["Marketing"],"label":"DirectMarketing"},{"value":"https://w3id.org/dpv#PublicRelations","parents":["Marketing"],"label":"PublicRelations"},{"value":"https://w3id.org/dpv#SocialMediaMarketing","parents":["Marketing"],"label":"SocialMediaMarketing"},{"value":"https://w3id.org/dpv#Advertising","parents":["Marketing"],"label":"Advertising"}]},{"value":"https://w3id.org/dpv#OrganisationGovernance","label":"Organisation Governance","children":[{"value":"https://w3id.org/dpv#DisputeManagement","parents":["Organisation Governance"],"label":"DisputeManagement"},{"value":"https://w3id.org/dpv#MemberPartnerManagement","parents":["Organisation Governance"],"label":"MemberPartnerManagement"},{"value":"https://w3id.org/dpv#OrganisationComplianceManagement","parents":["Organisation Governance"],"label":"OrganisationComplianceManagement"},{"value":"https://w3id.org/dpv#OrganisationRiskManagement","parents":["Organisation Governance"],"label":"OrganisationRiskManagement"}]},{"value":"https://w3id.org/dpv#CustomerManagement","label":"Customer Management","children":[{"value":"https://w3id.org/dpv#CustomerClaimsManagement","parents":["Customer Management"],"label":"CustomerClaimsManagement"},{"value":"https://w3id.org/dpv#CustomerOrderManagement","parents":["Customer Management"],"label":"CustomerOrderManagement"},{"value":"https://w3id.org/dpv#CustomerSolvencyMonitoring","parents":["Customer Management"],"label":"CustomerSolvencyMonitoring"},{"value":"https://w3id.org/dpv#CustomerCare","parents":["Customer Management"],"label":"CustomerCare"},{"value":"https://w3id.org/dpv#CustomerRelationshipManagement","parents":["Customer Management"],"label":"CustomerRelationshipManagement"}]},{"value":"https://w3id.org/dpv#ServiceProvision","label":"Service Provision","children":[{"value":"https://w3id.org/dpv#Payment","parents":["Service Provision"],"label":"Payment"},{"value":"https://w3id.org/dpv#RegistrationAuthentication","parents":["Service Provision"],"label":"RegistrationAuthentication"},{"value":"https://w3id.org/dpv#ServiceRecordManagement","parents":["Service Provision"],"label":"ServiceRecordManagement"},{"value":"https://w3id.org/dpv#ServiceUsageAnalytics","parents":["Service Provision"],"label":"ServiceUsageAnalytics"},{"value":"https://w3id.org/dpv#TechnicalServiceProvision","parents":["Service Provision"],"label":"TechnicalServiceProvision"},{"value":"https://w3id.org/dpv#RequestedServiceProvision","parents":["Service Provision"],"label":"RequestedServiceProvision"},{"value":"https://w3id.org/dpv#ServiceOptimization","parents":["ServiceProvision"],"label":"ServiceOptimization"},{"value":"https://w3id.org/dpv#SellProducts","parents":["Service Provision"],"label":"SellProducts"},{"value":"https://w3id.org/dpv#ServicePersonalization","parents":["Service Provision"],"label":"ServicePersonalization"}]}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM4RSxNQUFWLENBQWlCRSxVQUFoQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UsK0RBQUMsUUFBRDtBQUFVLDJCQUFhLEVBQUdoRixTQUFTLENBQUM4RSxNQUFWLENBQWlCRztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUEsMEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhOLEVBb0JHakYsU0FBUyxJQUFJUSxLQUFiLGlCQUNPO0FBQUEsaUNBQ0U7QUFBQSxzQkFBTVI7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFdEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiQGNvcmV1aS9yZWFjdFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcInJlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgSW5ydXB0IEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBEcm9wZG93blRyZWVTZWxlY3QgZnJvbSAncmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3QnO1xuaW1wb3J0IHtDUm93LCBDQ29sfSBmcm9tICdAY29yZXVpL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcbmltcG9ydCBwZXJzb25hbERhdGEgIGZyb20gJy4uL3Jlc291cmNlcy9wZXJzb25hbGRhdGEuanNvbic7XG5pbXBvcnQgcHVycG9zZXNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9wdXJwb3Nlcy5qc29uJztcbmltcG9ydCB7IENDYXJkLENDYXJkQm9keSxDQ2FyZEdyb3VwLENDYXJkSGVhZGVyLENDYXJkTGluayxDQ2FyZFRleHQsQ0NhcmRUaXRsZSxDQ2FyZFN1YnRpdGxlLENMaXN0R3JvdXAsQ0xpc3RHcm91cEl0ZW0sQ0J1dHRvbiAgICAgfSBmcm9tICdAY29yZXVpL3JlYWN0JztcbmltcG9ydCAnQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MnXG5pbXBvcnQge2dldEZpbGV9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50JztcbmltcG9ydCB7ZmV0Y2h9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXInO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5cblxuXG52YXIgc2F2ZUZpbGU7XG5cbmNvbnN0IENhcmQgPSAoe25hbWUsIHVybExpc3QsIGNhdGVnb3JpZXMsIHBvbGljaWVzLHJlY2lwaWVudHMsIGR1cmF0aW9ufSkgPT57XG5cblxuICByZXR1cm4oXG4gICAgICA8Q0NhcmRcbiAgICAgIGNvbG9yPVwibGlnaHRcIlxuXG5cbiAgICAgIHN0eWxlPXt7XCJtYXhXaWR0aFwiOiAnMzAwcHgnfSx7IFwicGFkZGluZ1wiOiAzMCB9LHtcIm1hcmdpbi1ib3R0b21cIjogMjB9fVxuXG5cbiAgICAgID5cblxuICAgICAgICA8Q0NhcmRIZWFkZXI+e25hbWV9PC9DQ2FyZEhlYWRlcj5cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgICAgPENDYXJkVGl0bGU+VGhlIGNhdGVnb3J5IG9mIHRoZSBmaWxlIGlzOiB7Y2F0ZWdvcmllc308L0NDYXJkVGl0bGU+XG5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSByZWNpcGllbnRzIGFyZToge3JlY2lwaWVudHN9PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBwb2xpY2llcyBhcmU6IDwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICAgICAge3BvbGljaWVzLm1hcCgoeyBwb2xOYW1lLCBwdXJwb3NlLCBhY3Rpb24gfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPk5hbWU6IHtwb2xOYW1lfTwvYj48L0NDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxuICAgICAgICAgICAge3B1cnBvc2UubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgPENDYXJkQm9keT5cblxuICAgICAgICA8Q0J1dHRvbiBvbkNsaWNrPXsoKT0+c2F2ZUZpbGUodXJsTGlzdCl9PkRvd25sb2FkIHRoZSBmb2xkZXIgY29udGVudHMuPC9DQnV0dG9uPlxuXG4gICAgICAgIDwvQ0NhcmRCb2R5PlxuXG4gICAgICA8L0NDYXJkPlxuXG4gICk7XG5cbn1cblxuY29uc3QgQ2FyZExpc3QgPSAoeyByZXNvdXJjZUNhcmRzIH0pID0+IHtcbiAgY29uc3QgY2FyZHNBcnJheSA9IHJlc291cmNlQ2FyZHMubWFwKHJlc291cmNlQ2FyZCA9PiAoXG4gICAgPGRpdiBzdHlsZT17e21pbldpZHRoOlwiMjAwcHhcIn19PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybExpc3Q9e3Jlc291cmNlQ2FyZC51cml9XG4gICAgICBjYXRlZ29yaWVzPXtyZXNvdXJjZUNhcmQuY2F0ZWdvcmllc31cbiAgICAgIHBvbGljaWVzPXtyZXNvdXJjZUNhcmQucG9saWNpZXN9XG4gICAgICByZWNpcGllbnRzPXtyZXNvdXJjZUNhcmQucmVjaXBpZW50c31cbiAgICAgIGR1cmF0aW9uPXtyZXNvdXJjZUNhcmQuZHVyYXRpb259XG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cbiAgY29uc3QgY2FsbEFQSSA9ICgpID0+IHtcbiAgICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICAgICAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVyeShmYWxzZSk7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcblxuICB9XG5cbiAgY29uc3QgZm9ydG1hdFJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXMsIG51bGwsIDIpO1xuICB9O1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0FsbCwgcmVmZXRjaDogZ2V0QWxsIH0gPSB1c2VRdWVyeShcbiAgICBcImdldFF1ZXJ5QWxsXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6IHdlYklkfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgb25TdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMgKyBcIi1cIiArIHJlcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXN1bHQgPSBmb3J0bWF0UmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChyZXMuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIHZhciAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgY29uc3QgZ2V0UXVlcnlBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNldFdlYklkKHNlc3Npb24uaW5mby53ZWJJZClcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPTAmXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFBELmxlbmd0aDtpKyspe1xuICAgICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109XCIrc2VsZWN0ZWRQRFtpXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoc2VsZWN0ZWRQVVIubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhW109XCIrc2VsZWN0ZWRQVVJbal07XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdK1wiJlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgIGF3YWl0IHNldFVybCh1cmkpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVycikpO1xuICAgIH1cbiAgICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGk/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgICAgICAgPHA+WW91IGFyZSBub3QgbG9nZ2VkIGluIHlldDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICl9XG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAgJiYgIXF1ZXJ5ICYmIChcblxuICAgICAgPGRpdj5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgIDxkaXY+XG4gICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzTmFtZSA9IFwiXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiIHZhbHVlPVwicGVybWlzc2lvblwiIG9uQ2xpY2s9e2NhbGxBUEl9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgcXVlcnkgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z2V0UXVlcnlBbGx9ID5NYWtlIG5ldyBHRFBSIHBldGl0aW9uLjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiAgb25DbGljaz17Z29CYWNrfSA+R28gQmFjay48L0J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0yXCI+XG5cbiAgICAgIHtnZXRSZXN1bHQgJiYgIWVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPHByZT57dXJsfTwvcHJlPlxuICAgICAgICAgICAgPHByZT57d2ViSWR9PC9wcmU+XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJmYWxzZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIG5vdCBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcInRydWVcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtnZXRSZXN1bHQuZm9ybWF0ICYmKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhU3ViamVjdFJpZ2h0cyBpczogXCIgK0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuZGF0YVN1YmplY3RSaWdodHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIHNhZmVndWFyZHMgaW4gY2FzZSBvZiB0cmFuc2ZlciB0byBhIHRoaXJkIGNvdW50cnkgYXJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuc2FmZWd1YXJkcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPENhcmRMaXN0IHJlc291cmNlQ2FyZHMgPXtnZXRSZXN1bHQuZm9ybWF0LnJlc291cmNlfT48L0NhcmRMaXN0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIHtnZXRSZXN1bHQgJiYgZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgPHByZT57Z2V0UmVzdWx0fTwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvcmV1aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJheGlvcyIsIkRyb3Bkb3duVHJlZVNlbGVjdCIsIkNSb3ciLCJDQ29sIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInBlcnNvbmFsRGF0YSIsInB1cnBvc2VzRGF0YSIsIkNDYXJkIiwiQ0NhcmRCb2R5IiwiQ0NhcmRHcm91cCIsIkNDYXJkSGVhZGVyIiwiQ0NhcmRMaW5rIiwiQ0NhcmRUZXh0IiwiQ0NhcmRUaXRsZSIsIkNDYXJkU3VidGl0bGUiLCJDTGlzdEdyb3VwIiwiQ0xpc3RHcm91cEl0ZW0iLCJDQnV0dG9uIiwiZ2V0RmlsZSIsImZldGNoIiwic2F2ZUZpbGUiLCJDYXJkIiwibmFtZSIsInVybExpc3QiLCJjYXRlZ29yaWVzIiwicG9saWNpZXMiLCJyZWNpcGllbnRzIiwiZHVyYXRpb24iLCJtYXAiLCJwb2xOYW1lIiwicHVycG9zZSIsImFjdGlvbiIsIml0ZW0iLCJpIiwidG9TdHJpbmciLCJDYXJkTGlzdCIsInJlc291cmNlQ2FyZHMiLCJjYXJkc0FycmF5IiwicmVzb3VyY2VDYXJkIiwibWluV2lkdGgiLCJ1cmkiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkNvbnRlbnQiLCJIb21lIiwic2Vzc2lvbiIsInF1ZXJ5Q2xpZW50IiwicXVlcnkiLCJzZXRRdWVyeSIsImdldFJlc3VsdCIsInNldEdldFJlc3VsdCIsImdldFJlc3VsdENvbnRlbnQiLCJzZXRHZXRSZXN1bHRDb250ZW50Iiwid2ViSWQiLCJzZXRXZWJJZCIsInVybCIsInNldFVybCIsImVycm9yIiwic2V0RXJyb3IiLCJzZWxlY3RlZFBVUiIsInNlbGVjdGVkUEQiLCJsZW5ndGgiLCJmaWxlVVJMIiwiZmlsZW5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImZpbGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhbGxBUEkiLCJnb0JhY2siLCJmb3J0bWF0UmVzcG9uc2UiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nQWxsIiwicmVmZXRjaCIsImdldEFsbCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ3ZWJJRCIsImVuYWJsZWQiLCJvblN1Y2Nlc3MiLCJyZXN1bHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImdldFF1ZXJ5QWxsIiwiaW5mbyIsImoiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=