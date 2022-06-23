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
          if (j == selectedPUR.length) {
            uri += "purPData[]=" + selectedPUR[j];
          }

          uri += "purPData[]=" + selectedPUR[j] + "&";
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
        lineNumber: 288,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, this), session.info.isLoggedIn && !query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
            data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__,
            onChange: handlePersonalData,
            className: "tree-select"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          clasName: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
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
          lineNumber: 310,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, this), session.info.isLoggedIn && query && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
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
          lineNumber: 325,
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
          lineNumber: 326,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form2",
        children: [getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: webId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 13
          }, this), JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(CardList, {
              resourceCards: getResult.format.resource
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 17
            }, this)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 13
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: getResult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 285,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSwrREFBQyxRQUFEO0FBQVUsMkJBQWEsRUFBR2hGLFNBQVMsQ0FBQzhFLE1BQVYsQ0FBaUJHO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQSwwQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSE4sRUFvQkdqRixTQUFTLElBQUlRLEtBQWIsaUJBQ087QUFBQSxpQ0FDRTtBQUFBLHNCQUFNUjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0V0Q7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAY29yZXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvcHJpc20tcmVhY3QtY29tcG9uZW50c1wiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3NvbGlkLWNsaWVudFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3NvbGlkLWNsaWVudC1hdXRobi1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBJbnJ1cHQgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbiAqIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBpbnJ1cHQvcHJpc20tcmVhY3QtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IERyb3Bkb3duVHJlZVNlbGVjdCBmcm9tICdyZWFjdC1kcm9wZG93bi10cmVlLXNlbGVjdCc7XG5pbXBvcnQge0NSb3csIENDb2x9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuXG5pbXBvcnQge1xuICB1c2VRdWVyeSxcbiAgdXNlUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxufSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJ1xuaW1wb3J0IHBlcnNvbmFsRGF0YSAgZnJvbSAnLi4vcmVzb3VyY2VzL3BlcnNvbmFsZGF0YS5qc29uJztcbmltcG9ydCBwdXJwb3Nlc0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL3B1cnBvc2VzLmpzb24nO1xuaW1wb3J0IHsgQ0NhcmQsQ0NhcmRCb2R5LENDYXJkR3JvdXAsQ0NhcmRIZWFkZXIsQ0NhcmRMaW5rLENDYXJkVGV4dCxDQ2FyZFRpdGxlLENDYXJkU3VidGl0bGUsQ0xpc3RHcm91cCxDTGlzdEdyb3VwSXRlbSxDQnV0dG9uICAgICB9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuaW1wb3J0ICdAY29yZXVpL2NvcmV1aS9kaXN0L2Nzcy9jb3JldWkubWluLmNzcydcbmltcG9ydCB7Z2V0RmlsZX0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQnO1xuaW1wb3J0IHtmZXRjaH0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3Nlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcblxuXG5cbnZhciBzYXZlRmlsZTtcblxuY29uc3QgQ2FyZCA9ICh7bmFtZSwgdXJsTGlzdCwgY2F0ZWdvcmllcywgcG9saWNpZXMscmVjaXBpZW50cywgZHVyYXRpb259KSA9PntcblxuXG4gIHJldHVybihcbiAgICAgIDxDQ2FyZFxuICAgICAgY29sb3I9XCJsaWdodFwiXG5cblxuICAgICAgc3R5bGU9e3tcIm1heFdpZHRoXCI6ICczMDBweCd9LHsgXCJwYWRkaW5nXCI6IDMwIH0se1wibWFyZ2luLWJvdHRvbVwiOiAyMH19XG5cblxuICAgICAgPlxuXG4gICAgICAgIDxDQ2FyZEhlYWRlcj57bmFtZX08L0NDYXJkSGVhZGVyPlxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgICA8Q0NhcmRUaXRsZT5UaGUgY2F0ZWdvcnkgb2YgdGhlIGZpbGUgaXM6IHtjYXRlZ29yaWVzfTwvQ0NhcmRUaXRsZT5cblxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHJlY2lwaWVudHMgYXJlOiB7cmVjaXBpZW50c308L0NDYXJkVGV4dD5cbiAgICAgICAgICA8Q0NhcmRUZXh0PlRoZSBkdXJhdGlvbiBpczoge2R1cmF0aW9ufTwvQ0NhcmRUZXh0PlxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHBvbGljaWVzIGFyZTogPC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPC9DQ2FyZEJvZHk+XG5cbiAgICAgICAgICB7cG9saWNpZXMubWFwKCh7IHBvbE5hbWUsIHB1cnBvc2UsIGFjdGlvbiB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPENDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENDYXJkU3VidGl0bGU+PGI+TmFtZToge3BvbE5hbWV9PC9iPjwvQ0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgIDwvQ0NhcmRCb2R5PlxuICAgICAgICAgICAgPENMaXN0R3JvdXAgZmx1c2g+XG4gICAgICAgICAgICB7cHVycG9zZS5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDTGlzdEdyb3VwSXRlbT57aXRlbS50b1N0cmluZygpfSAtIHthY3Rpb24udG9TdHJpbmcoKX08L0NMaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NMaXN0R3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cblxuICAgICAgICA8Q0NhcmRCb2R5PlxuXG4gICAgICAgIDxDQnV0dG9uIG9uQ2xpY2s9eygpPT5zYXZlRmlsZSh1cmxMaXN0KX0+RG93bmxvYWQgdGhlIGZvbGRlciBjb250ZW50cy48L0NCdXR0b24+XG5cbiAgICAgICAgPC9DQ2FyZEJvZHk+XG5cbiAgICAgIDwvQ0NhcmQ+XG5cbiAgKTtcblxufVxuXG5jb25zdCBDYXJkTGlzdCA9ICh7IHJlc291cmNlQ2FyZHMgfSkgPT4ge1xuICBjb25zdCBjYXJkc0FycmF5ID0gcmVzb3VyY2VDYXJkcy5tYXAocmVzb3VyY2VDYXJkID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6XCIyMDBweFwifX0+XG4gICAgPENhcmRcbiAgICAgIG5hbWU9e3Jlc291cmNlQ2FyZC5uYW1lfVxuICAgICAgdXJsTGlzdD17cmVzb3VyY2VDYXJkLnVyaX1cbiAgICAgIGNhdGVnb3JpZXM9e3Jlc291cmNlQ2FyZC5jYXRlZ29yaWVzfVxuICAgICAgcG9saWNpZXM9e3Jlc291cmNlQ2FyZC5wb2xpY2llc31cbiAgICAgIHJlY2lwaWVudHM9e3Jlc291cmNlQ2FyZC5yZWNpcGllbnRzfVxuICAgICAgZHVyYXRpb249e3Jlc291cmNlQ2FyZC5kdXJhdGlvbn1cbiAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGxpc3RcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhHcm93OicxJyxmbGV4U2hyaW5rOlwiMVwiLGZsZXhCYXNpczpcIjEwMCVcIiAsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIiwgZmxleFdyYXA6XCJ3cmFwXCIsIGZsZXhEaXJlY3Rpb246XCJyb3dcIiwgZmxleEdyb3c6IFwiMVwiLCBhbGlnbkNvbnRlbnQ6XCJzdHJldGNoXCJ9fT5cbiAgICAgIHtjYXJkc0FycmF5fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ2V0UmVzdWx0LCBzZXRHZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtnZXRSZXN1bHRDb250ZW50LCBzZXRHZXRSZXN1bHRDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbd2ViSWQsIHNldFdlYklkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1cmwsc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IHNlbGVjdGVkUFVSID0gW107XG4gIGxldCBzZWxlY3RlZFBEID0gW107XG5cblxuICAgc2F2ZUZpbGUgPSBhc3luYyAodXJsTGlzdCkgPT4ge1xuICAgZm9yKHZhciBpID0gMDsgaTx1cmxMaXN0Lmxlbmd0aDtpKyspe1xuICAgICBjb25zdCBmaWxlVVJMID0gdXJsTGlzdFtpXS50b1N0cmluZygpO1xuICAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGVVUkwuc3Vic3RyaW5nKGZpbGVVUkwubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG4gICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKFxuICAgICAgICAgICAgIGZpbGVVUkwsICAgICAgICAgICAgICAgLy8gRmlsZSBpbiBQb2QgdG8gUmVhZFxuICAgICAgICAgICAgIHsgZmV0Y2g6IHNlc3Npb24uZmV0Y2ggfSAgICAgICAvLyBmZXRjaCBmcm9tIGF1dGhlbnRpY2F0ZWQgc2Vzc2lvblxuICAgICApO1xuICAgICB0cnkge1xuXG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZW5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICB9LCAwKVxuICAgIH1cbiAgIH0gY2F0Y2ggKGVycikge1xuICAgY29uc29sZS5sb2coZXJyKTtcbiAgIH1cbiAgIH1cblxuIH1cblxuICBjb25zdCBjYWxsQVBJID0gKCkgPT4ge1xuICAgICAgICAgc2V0UXVlcnkodHJ1ZSk7XG4gICAgICAgIHNldFVybChcIlwiKTtcbiAgfVxuICBjb25zdCBnb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFF1ZXJ5KGZhbHNlKTtcbiAgICAgICAgc2V0R2V0UmVzdWx0KG51bGwpO1xuXG4gIH1cblxuICBjb25zdCBmb3J0bWF0UmVzcG9uc2UgPSAocmVzKSA9PiB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlcywgbnVsbCwgMik7XG4gIH07XG5cbiAgY29uc3Qge2lzTG9hZGluZzogaXNMb2FkaW5nQWxsLCByZWZldGNoOiBnZXRBbGwgfSA9IHVzZVF1ZXJ5KFxuICAgIFwiZ2V0UXVlcnlBbGxcIixcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgaGVhZGVycyA6IHt3ZWJJRDogd2ViSWR9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBvblN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyArIFwiLVwiICsgcmVzLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlcy5oZWFkZXJzLFxuICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IGZvcnRtYXRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KHJlcy5kYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIucmVzcG9uc2U/LmRhdGEgfHwgZXJyKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdBbGwpIHNldEdldFJlc3VsdChcImxvYWRpbmcuLi5cIik7XG4gICAgICB9LCBbaXNMb2FkaW5nQWxsXSk7XG5cbiAgdmFyICB1cmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXRGaWxlcz9cIjtcblxuICBjb25zdCBnZXRRdWVyeUFsbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2V0V2ViSWQoc2Vzc2lvbi5pbmZvLndlYklkKVxuICAgICAgaWYoc2VsZWN0ZWRQRC5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcImNhdFBEYXRhW109MCZcIjtcbiAgICAgIH1lbHNle1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkUEQubGVuZ3RoO2krKyl7XG4gICAgICAgICAgdXJpICs9IFwiY2F0UERhdGFbXT1cIitzZWxlY3RlZFBEW2ldK1wiJlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihzZWxlY3RlZFBVUi5sZW5ndGggPT0gMCl7XG4gICAgICAgIHVyaSArPSBcInB1clBEYXRhW109MFwiO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0ZWRQVVIubGVuZ3RoO2orKyl7XG4gICAgICAgICAgaWYoaiA9PSBzZWxlY3RlZFBVUi5sZW5ndGgpe1xuICAgICAgICAgICAgdXJpICs9IFwicHVyUERhdGFbXT1cIitzZWxlY3RlZFBVUltqXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJpICs9IFwicHVyUERhdGFbXT1cIitzZWxlY3RlZFBVUltqXStcIiZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBhd2FpdCBzZXRVcmwodXJpKTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIpKTtcbiAgICB9XG4gICAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpP1wiO1xuXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHVybCAhPSB1cmkpe1xuICAgICAgZ2V0QWxsKCk7IC8vIFRoaXMgd2lsbCBhbHdheXMgdXNlIGxhdGVzdCB2YWx1ZSBvZiB1cmlcblxuICAgIH1cbiAgfSwgW3VybF0pO1xuXG5cblxuICBjb25zdCBhc3NpZ25PYmplY3RQYXRocyA9IChvYmosIHN0YWNrKSA9PiB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IG9ialtrXTtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBub2RlLnBhdGggPSBzdGFjayA/IGAke3N0YWNrfS4ke2t9YCA6IGs7XG4gICAgICAgIGFzc2lnbk9iamVjdFBhdGhzKG5vZGUsIG5vZGUucGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgYXNzaWduT2JqZWN0UGF0aHMocGVyc29uYWxEYXRhKTtcbiAgYXNzaWduT2JqZWN0UGF0aHMocHVycG9zZXNEYXRhKTtcblxuICBjb25zdCBoYW5kbGVQZXJzb25hbERhdGEgPSAoY3VycmVudE5vZGUsIHNlbGVjdGVkTm9kZXMpID0+IHtcbiAgICBzZWxlY3RlZFBEID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3ZhciB2YWx1ZSA9IHNlbGVjdGVkTm9kZXNbaV0udmFsdWU7XG4gICAgICB2YXIgbGFiZWwgPSBzZWxlY3RlZE5vZGVzW2ldLmxhYmVsO1xuICAgICAgc2VsZWN0ZWRQRC5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVQdXJwb3NlcyA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUFVSID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3ZhciB2YWx1ZSA9IHNlbGVjdGVkTm9kZXNbaV0udmFsdWU7XG4gICAgICB2YXIgbGFiZWwgPSBzZWxlY3RlZE5vZGVzW2ldLmxhYmVsO1xuICAgICAgc2VsZWN0ZWRQVVIucHVzaChsYWJlbCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUEQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7ICFzZXNzaW9uLmluZm8uaXNMb2dnZWRJbiAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5cIj5cbiAgICAgICAgICAgIDxwPllvdSBhcmUgbm90IGxvZ2dlZCBpbiB5ZXQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICApfVxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gICYmICFxdWVyeSAmJiAoXG5cbiAgICAgIDxkaXY+XG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIGNhdGVnb3JpZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICA8ZGl2PlxuICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cGVyc29uYWxEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJzb25hbERhdGF9IGNsYXNzTmFtZT1cInRyZWUtc2VsZWN0XCIgLz5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc05hbWUgPSBcIlwiPlxuXG4gICAgPC9kaXY+XG4gICAgPHA+SGVyZSB5b3UgbXVzdCBzZWxlY3QgdGhlIHB1cnBvc2VzIG9mIGRhdGEgeW91IHdhbnQgdG8gcmVxdWVzdDo8L3A+XG4gICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwdXJwb3Nlc0RhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVB1cnBvc2VzfSBjbGFzc05hbWU9XCJ0cmVlLXNlbGVjdFwiIC8+XG5cblxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9IHt7XCJtYXJnaW4tdG9wXCI6XCIxMHB4XCIsXCJtYXJnaW4tcmlnaHRcIjogXCIwXCJ9fSB2YXJpYW50PVwic21hbGxcIiB2YWx1ZT1cInBlcm1pc3Npb25cIiBvbkNsaWNrPXtjYWxsQVBJfSA+TWFrZSBuZXcgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cblxuICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICB7IHNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIHF1ZXJ5ICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cHVycG9zZXNEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQdXJwb3Nlc30gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dldFF1ZXJ5QWxsfSA+TWFrZSBuZXcgR0RQUiBwZXRpdGlvbi48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dvQmFja30gPkdvIEJhY2suPC9CdXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtMlwiPlxuXG4gICAgICB7Z2V0UmVzdWx0ICYmICFlcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwcmU+e3VybH08L3ByZT5cbiAgICAgICAgICAgIDxwcmU+e3dlYklkfTwvcHJlPlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5wcm9jZXNzZWQpID09IFwiZmFsc2VcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBub3QgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJ0cnVlXCIgJiYgKDxwcmU+e1wiVGhlIGRhdGEgaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC5cIn08L3ByZT4pICB9XG4gICAgICAgICAgICB7Z2V0UmVzdWx0LmZvcm1hdCAmJihcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBkZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YVN1YmplY3RSaWdodHMgaXM6IFwiICtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LmRhdGFTdWJqZWN0UmlnaHRzKX08L3ByZT5cbiAgICAgICAgICAgICAgICA8cHJlPntcIlRoZSBzYWZlZ3VhcmRzIGluIGNhc2Ugb2YgdHJhbnNmZXIgdG8gYSB0aGlyZCBjb3VudHJ5IGFyZTogXCIgKyBKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQuZm9ybWF0LnNhZmVndWFyZHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxDYXJkTGlzdCByZXNvdXJjZUNhcmRzID17Z2V0UmVzdWx0LmZvcm1hdC5yZXNvdXJjZX0+PC9DYXJkTGlzdD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICB7Z2V0UmVzdWx0ICYmIGVycm9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgIDxwcmU+e2dldFJlc3VsdH08L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb3JldWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9wcmlzbS1yZWFjdC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpbnJ1cHQvc29saWQtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpbnJ1cHQvc29saWQtY2xpZW50LWF1dGhuLWJyb3dzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcm9wZG93bi10cmVlLXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiYXhpb3MiLCJEcm9wZG93blRyZWVTZWxlY3QiLCJDUm93IiwiQ0NvbCIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJwZXJzb25hbERhdGEiLCJwdXJwb3Nlc0RhdGEiLCJDQ2FyZCIsIkNDYXJkQm9keSIsIkNDYXJkR3JvdXAiLCJDQ2FyZEhlYWRlciIsIkNDYXJkTGluayIsIkNDYXJkVGV4dCIsIkNDYXJkVGl0bGUiLCJDQ2FyZFN1YnRpdGxlIiwiQ0xpc3RHcm91cCIsIkNMaXN0R3JvdXBJdGVtIiwiQ0J1dHRvbiIsImdldEZpbGUiLCJmZXRjaCIsInNhdmVGaWxlIiwiQ2FyZCIsIm5hbWUiLCJ1cmxMaXN0IiwiY2F0ZWdvcmllcyIsInBvbGljaWVzIiwicmVjaXBpZW50cyIsImR1cmF0aW9uIiwibWFwIiwicG9sTmFtZSIsInB1cnBvc2UiLCJhY3Rpb24iLCJpdGVtIiwiaSIsInRvU3RyaW5nIiwiQ2FyZExpc3QiLCJyZXNvdXJjZUNhcmRzIiwiY2FyZHNBcnJheSIsInJlc291cmNlQ2FyZCIsIm1pbldpZHRoIiwidXJpIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImZsZXhCYXNpcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25Db250ZW50IiwiSG9tZSIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZXRSZXN1bHQiLCJzZXRHZXRSZXN1bHQiLCJnZXRSZXN1bHRDb250ZW50Iiwic2V0R2V0UmVzdWx0Q29udGVudCIsIndlYklkIiwic2V0V2ViSWQiLCJ1cmwiLCJzZXRVcmwiLCJlcnJvciIsInNldEVycm9yIiwic2VsZWN0ZWRQVVIiLCJzZWxlY3RlZFBEIiwibGVuZ3RoIiwiZmlsZVVSTCIsImZpbGVuYW1lIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJmaWxlIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYWxsQVBJIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0FsbCIsInJlZmV0Y2giLCJnZXRBbGwiLCJtZXRob2QiLCJoZWFkZXJzIiwid2ViSUQiLCJlbmFibGVkIiwib25TdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImRhdGEiLCJvbkVycm9yIiwicmVzcG9uc2UiLCJnZXRRdWVyeUFsbCIsImluZm8iLCJqIiwiYXNzaWduT2JqZWN0UGF0aHMiLCJvYmoiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsIm5vZGUiLCJwYXRoIiwiaGFuZGxlUGVyc29uYWxEYXRhIiwiY3VycmVudE5vZGUiLCJzZWxlY3RlZE5vZGVzIiwibGFiZWwiLCJwdXNoIiwiaGFuZGxlUHVycG9zZXMiLCJpc0xvZ2dlZEluIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZGF0YVN1YmplY3RSaWdodHMiLCJzYWZlZ3VhcmRzIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9