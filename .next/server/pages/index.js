(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/resourceCard/resourceCard.js":
/*!*************************************************!*\
  !*** ./components/resourceCard/resourceCard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "@coreui/react");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_coreui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/css/coreui.min.css */ "./node_modules/@coreui/coreui/dist/css/coreui.min.css");
/* harmony import */ var _coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_css_coreui_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inrupt/solid-client */ "@inrupt/solid-client");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Ricardo\\Desktop\\UNIVERSIDAD\\MASTER UPM\\TFM\\frontend-next\\components\\resourceCard\\resourceCard.js";








const saveFile = async uri => {
  const fileURL = uri.toString();
  const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
  const file = await (0,_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_3__.getFile)(fileURL, // File in Pod to Read
  {
    fetch: fetch
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
};

const Card = ({
  name,
  url,
  categories,
  policies,
  recipients,
  duration
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
    color: "loght",
    className: `mb-3 border-dark`,
    style: ({
      maxWidth: '300px'
    }, {
      padding: 30
    }),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardTitle, {
        children: ["The category of the file is: ", categories]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardText, {
        children: ["The recipients are: ", recipients]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardText, {
        children: ["The duration is: ", duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardText, {
        children: "The purposes are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined), policies.map(({
      polName,
      purpose,
      action
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardSubtitle, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
            children: ["Name: ", polName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 30
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CListGroup, {
        flush: true,
        children: purpose.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CListGroupItem, {
            children: [item.toString(), " - ", action.toString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, undefined)
        }, void 0, false))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
        children: url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

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
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inrupt/solid-client */ "@inrupt/solid-client");
/* harmony import */ var _inrupt_solid_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inrupt/solid-client-authn-browser */ "@inrupt/solid-client-authn-browser");
/* harmony import */ var _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resources/personaldata.json */ "./resources/personaldata.json");
/* harmony import */ var _resources_purposes_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resources/purposes.json */ "./resources/purposes.json");
/* harmony import */ var _components_resourceCard_resourceCard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/resourceCard/resourceCard.js */ "./components/resourceCard/resourceCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Ricardo\\Desktop\\UNIVERSIDAD\\MASTER UPM\\TFM\\frontend-next\\pages\\index.jsx";

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
















async function saveFile() {
  const fileURL = "https://pod.inrupt.com/ricardomld/private/Holamundo.txt";
  const filename = fileURL.substring(fileURL.lastIndexOf("/") + 1);
  const file = await (0,_inrupt_solid_client__WEBPACK_IMPORTED_MODULE_6__.getFile)(fileURL, // File in Pod to Read
  {
    fetch: _inrupt_solid_client_authn_browser__WEBPACK_IMPORTED_MODULE_7__.fetch
  } // fetch from authenticated session
  );

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
}

const CardList = ({
  resourceCards
}) => {
  const cardsArray = resourceCards.map(resourceCard => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    style: {
      minWidth: "200px"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
      onClick: saveFile,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_resourceCard_resourceCard_js__WEBPACK_IMPORTED_MODULE_12__.default, {
        name: resourceCard.name,
        url: resourceCard.uri,
        categories: resourceCard.categories,
        policies: resourceCard.policies,
        recipients: resourceCard.recipients,
        duration: resourceCard.duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
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
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

function Home() {
  const {
    session
  } = (0,_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient();
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: value1,
    1: setValue1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: value2,
    1: setValue2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
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
  let selectedPUR = [];
  let selectedPD = [];

  const callAPI = () => {
    setQuery(true);
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
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)("getQueryAll", async () => {
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
      setGetResult(res.data);
    },
    onError: err => {
      var _err$response;

      setGetResult(fortmatResponse(((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data) || err));
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLoadingAll) setGetResult("loading...");
  }, [isLoadingAll]);

  const getQueryAll = async () => {
    try {
      await setWebId(session.info.webId);
      var uri = "http://localhost:8080/api?";

      if (selectedPD.length == 0) {
        uri += "catPData=0&";
      } else {
        for (var i = 0; i < selectedPD.length; i++) {
          uri += "catPData=" + selectedPD[i] + "&";
        }
      }

      if (selectedPUR.length == 0) {
        uri += "purPData=0";
      } else {
        for (var j = 0; j < selectedPUR.length; j++) {
          if (j == selectedPUR.length) {
            uri += "purPData=" + selectedPUR[j];
          }

          uri += "purPData=" + selectedPUR[j] + "&";
        }
      }

      await setUrl(uri);
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getAll(); // This will always use latest value of uri
  }, [url]);
  const {
    isLoading: isLoadingFile,
    refetch: getOneFile
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)("getQueryFile", async () => {
    return await axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'get',
      url: 'http://localhost:8080/api/https%3A%2F%2Fpod.inrupt.com%2Fricardomld%2Fpublic%2Ffotosasus001.jpg ',
      responseType: 'blob',
      headers: {
        webID: 'https://pod.inrupt.com/ricardomld/profile/card#me'
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
      result = fortmatResponse(res); //  const blob = new Blob([res.data]);
      //const text = await (blob).text();
      //const url= window.URL.createObjectURL(blob);
      //const downloadLink = React.createElement('a', { download: 'filename.csv', href: url}, 'download')
      //saveFile(blob,"hello.png");

      setGetResult(fortmatResponse(res.data)); //setGetResultContent(blob);
    },
    onError: err => {
      var _err$response2;

      setGetResult(fortmatResponse(((_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data) || err));
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLoadingFile) setGetResult("loading...");
  }, [isLoadingFile]);

  const getQueryFile = async () => {
    try {
      getOneFile();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  };

  const assignObjectPaths = (obj, stack) => {
    Object.keys(obj).forEach(k => {
      const node = obj[k];

      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        assignObjectPaths(node, node.path);
      }
    });
  };

  assignObjectPaths(_resources_personaldata_json__WEBPACK_IMPORTED_MODULE_10__);
  assignObjectPaths(_resources_purposes_json__WEBPACK_IMPORTED_MODULE_11__);

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    children: [!session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "contain",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
        children: "You are not logged in yet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_10__,
            onChange: handlePersonalData,
            className: "tree-select"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
          lineNumber: 281,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_10__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_11__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: getQueryAll,
          children: "Make new GDPR petition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          style: {
            "margin-top": "10px",
            "margin-right": "0"
          },
          variant: "small",
          onClick: goBack,
          children: "Go Back."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
        className: "form2",
        children: getResult && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 256,
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
module.exports = JSON.parse('[{"value":"https://w3id.org/dpv#AccountManagement","label":"Account Management"},{"value":"https://w3id.org/dpv#HumanResourceManagement","label":"Human Resources Management"},{"value":"https://w3id.org/dpv#LegalCompliance","label":"Legal Compliance"},{"value":"https://w3id.org/dpv#RecordManagement","label":"Record Management"},{"value":"https://w3id.org/dpv#CommunicationManagement","label":"Communication Management","children":[{"value":"https://w3id.org/dpv#CommunicationForCustomerCare","parents":["Communication Management"],"label":"CommunicationForCustomerCare"}]},{"value":"https://w3id.org/dpv#Personalisation","label":"Personalisation","children":[{"value":"https://w3id.org/dpv#PersonalisedAdvertising","parents":["Personalisation"],"label":"PersonalisedAdvertising"},{"value":"https://w3id.org/dpv#ServicePersonalization","parents":["Personalisation"],"label":"ServicePersonalization"}]},{"value":"https://w3id.org/dpv#EnforceSecurity","label":"Enforce Security","children":[{"value":"https://w3id.org/dpv#EnforceAccessControl","parents":["Enforce Security"],"label":"EnforceAccessControl"},{"value":"https://w3id.org/dpv#FraudPreventionAndDetection","parents":["Enforce Security"],"label":"FraudPreventionAndDetection"},{"value":"https://w3id.org/dpv#IdentityVerification","parents":["Enforce Security"],"label":"IdentityVerification"}]},{"value":"https://w3id.org/dpv#ResearchAndDevelopment","label":"Research and Development","children":[{"value":"https://w3id.org/dpv#AcademicResearch","parents":["Research and Development"],"label":"AcademicResearch"},{"value":"https://w3id.org/dpv#CommercialResearch","parents":["Research and Development"],"label":"CommercialResearch"},{"value":"https://w3id.org/dpv#NonCommercialResearch","parents":["Research and Development"],"label":"NonCommercialResearch"}]},{"value":"https://w3id.org/dpv#VendorManagement","label":"Vendor Management","children":[{"value":"https://w3id.org/dpv#VendorPayment","parents":["Vendor Management"],"label":"VendorPayment"},{"value":"https://w3id.org/dpv#VendorRecordsManagement","parents":["Vendor Management"],"label":"VendorRecordsManagement"},{"value":"https://w3id.org/dpv#VendorSelectionAssessment","parents":["Vendor Management"],"label":"VendorSelectionAssessment"}]},{"value":"https://w3id.org/dpv#Marketing","label":"Marketing","children":[{"value":"https://w3id.org/dpv#DirectMarketing","parents":["Marketing"],"label":"DirectMarketing"},{"value":"https://w3id.org/dpv#PublicRelations","parents":["Marketing"],"label":"PublicRelations"},{"value":"https://w3id.org/dpv#SocialMediaMarketing","parents":["Marketing"],"label":"SocialMediaMarketing"},{"value":"https://w3id.org/dpv#Advertising","parents":["Marketing"],"label":"Advertising"}]},{"value":"https://w3id.org/dpv#OrganisationGovernance","label":"Organisation Governance","children":[{"value":"https://w3id.org/dpv#DisputeManagement","parents":["Organisation Governance"],"label":"DisputeManagement"},{"value":"https://w3id.org/dpv#MemberPartnerManagement","parents":["Organisation Governance"],"label":"MemberPartnerManagement"},{"value":"https://w3id.org/dpv#OrganisationComplianceManagement","parents":["Organisation Governance"],"label":"OrganisationComplianceManagement"},{"value":"https://w3id.org/dpv#OrganisationRiskManagement","parents":["Organisation Governance"],"label":"OrganisationRiskManagement"}]},{"value":"https://w3id.org/dpv#CustomerManagement","label":"Customer Management","children":[{"value":"https://w3id.org/dpv#CustomerClaimsManagement","parents":["Customer Management"],"label":"CustomerClaimsManagement"},{"value":"https://w3id.org/dpv#CustomerOrderManagement","parents":["Customer Management"],"label":"CustomerOrderManagement"},{"value":"https://w3id.org/dpv#CustomerSolvencyMonitoring","parents":["Customer Management"],"label":"CustomerSolvencyMonitoring"},{"value":"https://w3id.org/dpv#CustomerCare","parents":["Customer Management"],"label":"CustomerCare"},{"value":"https://w3id.org/dpv#CustomerRelationshipManagement","parents":["Customer Management"],"label":"CustomerRelationshipManagement"}]},{"value":"https://w3id.org/dpv#ServiceProvision","label":"Service Provision","children":[{"value":"https://w3id.org/dpv#Payment","parents":["Service Provision"],"label":"Payment"},{"value":"https://w3id.org/dpv#RegistrationAuthentication","parents":["Service Provision"],"label":"RegistrationAuthentication"},{"value":"https://w3id.org/dpv#ServiceRecordManagement","parents":["Service Provision"],"label":"ServiceRecordManagement"},{"value":"https://w3id.org/dpv#ServiceUsageAnalytics","parents":["Service Provision"],"label":"ServiceUsageAnalytics"},{"value":"https://w3id.org/dpv#TechnicalServiceProvision","parents":["Service Provision"],"label":"TechnicalServiceProvision"},{"value":"https://w3id.org/dpv#RequestedServiceProvision","parents":["Service Provision"],"label":"RequestedServiceProvision"},{"value":"https://w3id.org/dpv#ServiceOptimization","parents":["Service Provision"],"label":"ServiceOptimization"},{"value":"https://w3id.org/dpv#SellProducts","parents":["Service Provision"],"label":"SellProducts"},{"value":"https://w3id.org/dpv#ServicePersonalization","parents":["Service Provision"],"label":"ServicePersonalization"}]}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVYsQ0FBaUJFLFVBQWhDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSwrREFBQyxRQUFEO0FBQVUsMkJBQWEsRUFBR3pELFNBQVMsQ0FBQ3VELE1BQVYsQ0FBaUJHO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQSwwQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHcFVEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC8uL2NvbXBvbmVudHMvcmVzb3VyY2VDYXJkL3Jlc291cmNlQ2FyZC5qcyIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBjb3JldWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvc29saWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC1kcm9wZG93bi10cmVlLXNlbGVjdFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDQ2FyZCxDQ2FyZEJvZHksQ0NhcmRHcm91cCxDQ2FyZEhlYWRlcixDQ2FyZExpbmssQ0NhcmRUZXh0LENDYXJkVGl0bGUsQ0NhcmRTdWJ0aXRsZSxDTGlzdEdyb3VwLENMaXN0R3JvdXBJdGVtLENCdXR0b24gICAgIH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XHJcbmltcG9ydCAnQGNvcmV1aS9jb3JldWkvZGlzdC9jc3MvY29yZXVpLm1pbi5jc3MnXHJcbmltcG9ydCB7Z2V0RmlsZX0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQnO1xyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcblxyXG5jb25zdCBzYXZlRmlsZSA9IGFzeW5jICh1cmkpID0+IHtcclxuICBjb25zdCBmaWxlVVJMID0gdXJpLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKFxyXG4gICAgICAgICAgZmlsZVVSTCwgICAgICAgICAgICAgICAvLyBGaWxlIGluIFBvZCB0byBSZWFkXHJcbiAgICAgICAgICB7IGZldGNoOiBmZXRjaCB9ICAgICAgIC8vIGZldGNoIGZyb20gYXV0aGVudGljYXRlZCBzZXNzaW9uXHJcbiAgKTtcclxuICB0cnkge1xyXG5cclxuXHJcbiBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihmaWxlLCBmaWxlbmFtZSk7XHJcbiB9IGVsc2Uge1xyXG4gICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgYS5ocmVmID0gdXJsO1xyXG4gICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgIGEuY2xpY2soKTtcclxuICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICB9LCAwKVxyXG4gfVxyXG59IGNhdGNoIChlcnIpIHtcclxuY29uc29sZS5sb2coZXJyKTtcclxufVxyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHtuYW1lLCB1cmwsIGNhdGVnb3JpZXMsIHBvbGljaWVzLHJlY2lwaWVudHMsIGR1cmF0aW9ufSkgPT57XHJcblxyXG5cclxuICByZXR1cm4oXHJcbiAgICAgIDxDQ2FyZFxyXG4gICAgICBjb2xvcj1cImxvZ2h0XCJcclxuXHJcbiAgICAgIGNsYXNzTmFtZT17YG1iLTMgYm9yZGVyLWRhcmtgfVxyXG5cclxuICAgICAgc3R5bGU9e3ttYXhXaWR0aDogJzMwMHB4J30seyBwYWRkaW5nOiAzMCB9fVxyXG5cclxuXHJcbiAgICAgID5cclxuXHJcbiAgICAgICAgPENDYXJkSGVhZGVyPntuYW1lfTwvQ0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgIDxDQ2FyZEJvZHk+XHJcblxyXG4gICAgICAgICAgPENDYXJkVGl0bGU+VGhlIGNhdGVnb3J5IG9mIHRoZSBmaWxlIGlzOiB7Y2F0ZWdvcmllc308L0NDYXJkVGl0bGU+XHJcblxyXG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcmVjaXBpZW50cyBhcmU6IHtyZWNpcGllbnRzfTwvQ0NhcmRUZXh0PlxyXG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgZHVyYXRpb24gaXM6IHtkdXJhdGlvbn08L0NDYXJkVGV4dD5cclxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHB1cnBvc2VzIGFyZTogPC9DQ2FyZFRleHQ+XHJcbiAgICAgICAgICA8L0NDYXJkQm9keT5cclxuXHJcbiAgICAgICAgICB7cG9saWNpZXMubWFwKCh7IHBvbE5hbWUsIHB1cnBvc2UsIGFjdGlvbiB9KSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENDYXJkU3VidGl0bGU+PGI+TmFtZToge3BvbE5hbWV9PC9iPjwvQ0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDxDTGlzdEdyb3VwIGZsdXNoPlxyXG4gICAgICAgICAgICB7cHVycG9zZS5tYXAoKGl0ZW0sIGkpID0+XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Q0xpc3RHcm91cEl0ZW0+e2l0ZW0udG9TdHJpbmcoKX0gLSB7YWN0aW9uLnRvU3RyaW5nKCl9PC9DTGlzdEdyb3VwSXRlbT5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9DTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8Q0NhcmRCb2R5PlxyXG4gICAgICAgICAgPENCdXR0b24gID57dXJsfTwvQ0J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9DQ2FyZEJvZHk+XHJcblxyXG4gICAgICA8L0NDYXJkPlxyXG5cclxuICApO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgSW5ydXB0IEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4gKiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGVcbiAqIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuICogc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCxcbiAqIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBXG4gKiBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgRHJvcGRvd25UcmVlU2VsZWN0IGZyb20gJ3JlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0JztcbmltcG9ydCB7Q1JvdywgQ0NvbH0gZnJvbSAnQGNvcmV1aS9yZWFjdCc7XG5pbXBvcnQge2dldEZpbGV9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50JztcbmltcG9ydCB7ZmV0Y2h9IGZyb20gJ0BpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcbmltcG9ydCBwZXJzb25hbERhdGEgIGZyb20gJy4uL3Jlc291cmNlcy9wZXJzb25hbGRhdGEuanNvbic7XG5pbXBvcnQgcHVycG9zZXNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9wdXJwb3Nlcy5qc29uJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzb3VyY2VDYXJkL3Jlc291cmNlQ2FyZC5qcydcblxuYXN5bmMgZnVuY3Rpb24gc2F2ZUZpbGUgKCkge1xuICBjb25zdCBmaWxlVVJMID0gICBcImh0dHBzOi8vcG9kLmlucnVwdC5jb20vcmljYXJkb21sZC9wcml2YXRlL0hvbGFtdW5kby50eHRcIjtcbiBjb25zdCBmaWxlbmFtZSA9IGZpbGVVUkwuc3Vic3RyaW5nKGZpbGVVUkwubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG4gY29uc3QgZmlsZSA9IGF3YWl0IGdldEZpbGUoXG4gICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgIHsgZmV0Y2g6IGZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiApO1xuIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihmaWxlLCBmaWxlbmFtZSk7XG4gfSBlbHNlIHtcbiAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICBhLmhyZWYgPSB1cmw7XG4gICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICBhLmNsaWNrKCk7XG4gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgIH0sIDApXG4gfVxufVxuXG5jb25zdCBDYXJkTGlzdCA9ICh7IHJlc291cmNlQ2FyZHMgfSkgPT4ge1xuICBjb25zdCBjYXJkc0FycmF5ID0gcmVzb3VyY2VDYXJkcy5tYXAocmVzb3VyY2VDYXJkID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6XCIyMDBweFwifX0+XG4gICAgPGEgb25DbGljaz17c2F2ZUZpbGV9PlxuICAgIDxDYXJkXG4gICAgICBuYW1lPXtyZXNvdXJjZUNhcmQubmFtZX1cbiAgICAgIHVybD17cmVzb3VyY2VDYXJkLnVyaX1cbiAgICAgIGNhdGVnb3JpZXM9e3Jlc291cmNlQ2FyZC5jYXRlZ29yaWVzfVxuICAgICAgcG9saWNpZXM9e3Jlc291cmNlQ2FyZC5wb2xpY2llc31cbiAgICAgIHJlY2lwaWVudHM9e3Jlc291cmNlQ2FyZC5yZWNpcGllbnRzfVxuICAgICAgZHVyYXRpb249e3Jlc291cmNlQ2FyZC5kdXJhdGlvbn1cbiAgICAvPlxuICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRsaXN0XCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4R3JvdzonMScsZmxleFNocmluazpcIjFcIixmbGV4QmFzaXM6XCIxMDAlXCIgLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwiLCBmbGV4RGlyZWN0aW9uOlwicm93XCIsIGZsZXhHcm93OiBcIjFcIiwgYWxpZ25Db250ZW50Olwic3RyZXRjaFwifX0+XG4gICAgICB7Y2FyZHNBcnJheX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbHVlMSwgc2V0VmFsdWUxXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ZhbHVlMiwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IHNlbGVjdGVkUFVSID0gW107XG4gIGxldCBzZWxlY3RlZFBEID0gW107XG5cblxuXG4gIGNvbnN0IGNhbGxBUEkgPSAoKSA9PiB7XG4gICAgICAgIHNldFF1ZXJ5KHRydWUpO1xuICB9XG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IHtcbiAgICAgICAgc2V0UXVlcnkoZmFsc2UpO1xuICAgICAgICBzZXRHZXRSZXN1bHQobnVsbCk7XG5cbiAgfVxuXG4gIGNvbnN0IGZvcnRtYXRSZXNwb25zZSA9IChyZXMpID0+IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzLCBudWxsLCAyKTtcbiAgfTtcblxuICBjb25zdCB7aXNMb2FkaW5nOiBpc0xvYWRpbmdBbGwsIHJlZmV0Y2g6IGdldEFsbCB9ID0gdXNlUXVlcnkoXG4gICAgXCJnZXRRdWVyeUFsbFwiLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBoZWFkZXJzIDoge3dlYklEOiB3ZWJJZH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIG9uU3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzICsgXCItXCIgKyByZXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcnRtYXRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KHJlcy5kYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyLnJlc3BvbnNlPy5kYXRhIHx8IGVycikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQWxsKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0FsbF0pO1xuXG4gIGNvbnN0IGdldFF1ZXJ5QWxsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXRXZWJJZChzZXNzaW9uLmluZm8ud2ViSWQpXG4gICAgICB2YXIgIHVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaT9cIjtcbiAgICAgIGlmKHNlbGVjdGVkUEQubGVuZ3RoID09IDApe1xuICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YT0wJlwiO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRQRC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YT1cIitzZWxlY3RlZFBEW2ldK1wiJlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihzZWxlY3RlZFBVUi5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcInB1clBEYXRhPTBcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdGVkUFVSLmxlbmd0aDtqKyspe1xuICAgICAgICAgIGlmKGogPT0gc2VsZWN0ZWRQVVIubGVuZ3RoKXtcbiAgICAgICAgICAgIHVyaSArPSBcInB1clBEYXRhPVwiK3NlbGVjdGVkUFVSW2pdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YT1cIitzZWxlY3RlZFBVUltqXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBhd2FpdCBzZXRVcmwodXJpKTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIpKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgZ2V0QWxsKCk7IC8vIFRoaXMgd2lsbCBhbHdheXMgdXNlIGxhdGVzdCB2YWx1ZSBvZiB1cmlcbiAgfSwgW3VybF0pO1xuXG4gIGNvbnN0IHtpc0xvYWRpbmc6IGlzTG9hZGluZ0ZpbGUsIHJlZmV0Y2g6IGdldE9uZUZpbGUgfSA9IHVzZVF1ZXJ5KFxuICAgIFwiZ2V0UXVlcnlGaWxlXCIsXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9odHRwcyUzQSUyRiUyRnBvZC5pbnJ1cHQuY29tJTJGcmljYXJkb21sZCUyRnB1YmxpYyUyRmZvdG9zYXN1czAwMS5qcGcgJyxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgIGhlYWRlcnMgOiB7d2ViSUQ6ICdodHRwczovL3BvZC5pbnJ1cHQuY29tL3JpY2FyZG9tbGQvcHJvZmlsZS9jYXJkI21lJ31cbiAgICAgIH0pO1xuICAgIH0sXG4gICAge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIG9uU3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzICsgXCItXCIgKyByZXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcnRtYXRSZXNwb25zZShyZXMpO1xuICAgICAgICAgIC8vICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlcy5kYXRhXSk7XG4gICAgICAgICAgICAvL2NvbnN0IHRleHQgPSBhd2FpdCAoYmxvYikudGV4dCgpO1xuICAgICAgICAgICAgLy9jb25zdCB1cmw9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgLy9jb25zdCBkb3dubG9hZExpbmsgPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyBkb3dubG9hZDogJ2ZpbGVuYW1lLmNzdicsIGhyZWY6IHVybH0sICdkb3dubG9hZCcpXG4gICAgICAgICAgICAvL3NhdmVGaWxlKGJsb2IsXCJoZWxsby5wbmdcIik7XG5cbiAgICAgICAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UocmVzLmRhdGEpKTtcbiAgICAgICAgICAgIC8vc2V0R2V0UmVzdWx0Q29udGVudChibG9iKTtcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIucmVzcG9uc2U/LmRhdGEgfHwgZXJyKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdGaWxlKSBzZXRHZXRSZXN1bHQoXCJsb2FkaW5nLi4uXCIpO1xuICAgICAgfSwgW2lzTG9hZGluZ0ZpbGVdKTtcblxuICBjb25zdCBnZXRRdWVyeUZpbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGdldE9uZUZpbGUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEdldFJlc3VsdChmb3J0bWF0UmVzcG9uc2UoZXJyKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXNzaWduT2JqZWN0UGF0aHMgPSAob2JqLCBzdGFjaykgPT4ge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBvYmpba107XG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbm9kZS5wYXRoID0gc3RhY2sgPyBgJHtzdGFja30uJHtrfWAgOiBrO1xuICAgICAgICBhc3NpZ25PYmplY3RQYXRocyhub2RlLCBub2RlLnBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGFzc2lnbk9iamVjdFBhdGhzKHBlcnNvbmFsRGF0YSk7XG4gIGFzc2lnbk9iamVjdFBhdGhzKHB1cnBvc2VzRGF0YSk7XG5cbiAgY29uc3QgaGFuZGxlUGVyc29uYWxEYXRhID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQRCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUEQucHVzaChsYWJlbCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUEQpO1xuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlUHVycG9zZXMgPSAoY3VycmVudE5vZGUsIHNlbGVjdGVkTm9kZXMpID0+IHtcbiAgICBzZWxlY3RlZFBVUiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy92YXIgdmFsdWUgPSBzZWxlY3RlZE5vZGVzW2ldLnZhbHVlO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWROb2Rlc1tpXS5sYWJlbDtcbiAgICAgIHNlbGVjdGVkUFVSLnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgeyAhc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluXCI+XG4gICAgICAgICAgICA8cD5Zb3UgYXJlIG5vdCBsb2dnZWQgaW4geWV0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgKX1cbiAgICB7IHNlc3Npb24uaW5mby5pc0xvZ2dlZEluICAmJiAhcXVlcnkgJiYgKFxuXG4gICAgICA8ZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBjYXRlZ29yaWVzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgPGRpdj5cbiAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3BlcnNvbmFsRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUGVyc29uYWxEYXRhfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNOYW1lID0gXCJcIj5cblxuICAgIDwvZGl2PlxuICAgIDxwPkhlcmUgeW91IG11c3Qgc2VsZWN0IHRoZSBwdXJwb3NlcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cHVycG9zZXNEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQdXJwb3Nlc30gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgdmFsdWU9XCJwZXJtaXNzaW9uXCIgb25DbGljaz17Y2FsbEFQSX0gPk1ha2UgbmV3IEdEUFIgcGV0aXRpb24uPC9CdXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgeyBzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiBxdWVyeSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIGNhdGVnb3JpZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cGVyc29uYWxEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbERhdGF9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuICAgICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIHB1cnBvc2VzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgICA8RHJvcGRvd25UcmVlU2VsZWN0IGRhdGE9e3B1cnBvc2VzRGF0YX0gICBvbkNoYW5nZT17aGFuZGxlUHVycG9zZXN9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnZXRRdWVyeUFsbH0gPk1ha2UgbmV3IEdEUFIgcGV0aXRpb24uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnb0JhY2t9ID5HbyBCYWNrLjwvQnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybTJcIj5cblxuICAgICAge2dldFJlc3VsdCAmJiAoXG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwcmU+e3VybH08L3ByZT5cbiAgICAgICAgICAgIDxwcmU+e3dlYklkfTwvcHJlPlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwiZmFsc2VcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBub3QgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJ0cnVlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7Z2V0UmVzdWx0LmZvcm1hdCAmJihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YVN1YmplY3RSaWdodHMgaXM6IFwiICtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LmRhdGFTdWJqZWN0UmlnaHRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBzYWZlZ3VhcmRzIGluIGNhc2Ugb2YgdHJhbnNmZXIgdG8gYSB0aGlyZCBjb3VudHJ5IGFyZTogXCIgKyBKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LnNhZmVndWFyZHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxDYXJkTGlzdCByZXNvdXJjZUNhcmRzID17Z2V0UmVzdWx0LmZvcm1hdC5yZXNvdXJjZX0+PC9DYXJkTGlzdD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvcmV1aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDQ2FyZCIsIkNDYXJkQm9keSIsIkNDYXJkR3JvdXAiLCJDQ2FyZEhlYWRlciIsIkNDYXJkTGluayIsIkNDYXJkVGV4dCIsIkNDYXJkVGl0bGUiLCJDQ2FyZFN1YnRpdGxlIiwiQ0xpc3RHcm91cCIsIkNMaXN0R3JvdXBJdGVtIiwiQ0J1dHRvbiIsImdldEZpbGUiLCJzYXZlRmlsZSIsInVyaSIsImZpbGVVUkwiLCJ0b1N0cmluZyIsImZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJmaWxlIiwiZmV0Y2giLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkNhcmQiLCJuYW1lIiwiY2F0ZWdvcmllcyIsInBvbGljaWVzIiwicmVjaXBpZW50cyIsImR1cmF0aW9uIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwibWFwIiwicG9sTmFtZSIsInB1cnBvc2UiLCJhY3Rpb24iLCJpdGVtIiwiaSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsIkJ1dHRvbiIsImF4aW9zIiwiRHJvcGRvd25UcmVlU2VsZWN0IiwiQ1JvdyIsIkNDb2wiLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwicGVyc29uYWxEYXRhIiwicHVycG9zZXNEYXRhIiwiQ2FyZExpc3QiLCJyZXNvdXJjZUNhcmRzIiwiY2FyZHNBcnJheSIsInJlc291cmNlQ2FyZCIsIm1pbldpZHRoIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25Db250ZW50IiwiSG9tZSIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ2YWx1ZTEiLCJzZXRWYWx1ZTEiLCJ2YWx1ZTIiLCJzZXRWYWx1ZTIiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJzZXRVcmwiLCJzZWxlY3RlZFBVUiIsInNlbGVjdGVkUEQiLCJjYWxsQVBJIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0FsbCIsInJlZmV0Y2giLCJnZXRBbGwiLCJtZXRob2QiLCJoZWFkZXJzIiwid2ViSUQiLCJlbmFibGVkIiwib25TdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImRhdGEiLCJvbkVycm9yIiwicmVzcG9uc2UiLCJnZXRRdWVyeUFsbCIsImluZm8iLCJsZW5ndGgiLCJqIiwiaXNMb2FkaW5nRmlsZSIsImdldE9uZUZpbGUiLCJyZXNwb25zZVR5cGUiLCJnZXRRdWVyeUZpbGUiLCJhc3NpZ25PYmplY3RQYXRocyIsIm9iaiIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibm9kZSIsInBhdGgiLCJoYW5kbGVQZXJzb25hbERhdGEiLCJjdXJyZW50Tm9kZSIsInNlbGVjdGVkTm9kZXMiLCJsYWJlbCIsInB1c2giLCJoYW5kbGVQdXJwb3NlcyIsImlzTG9nZ2VkSW4iLCJwcm9jZXNzZWQiLCJmb3JtYXQiLCJkYXRhU3ViamVjdFJpZ2h0cyIsInNhZmVndWFyZHMiLCJyZXNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=