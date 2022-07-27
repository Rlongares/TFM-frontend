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
        children: "The recipients are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined), recipients.map(recipient => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardSubtitle, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("b", {
              children: ["WebID:  ", recipient]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 30
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined)
      }, void 0, false))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardText, {
        children: ["The duration is: ", duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardText, {
        children: "The policies are: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
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
            lineNumber: 83,
            columnNumber: 30
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CListGroup, {
        flush: true,
        children: purpose.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CListGroupItem, {
            children: [item.toString(), " - ", action.toString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined)
        }, void 0, false))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CButton, {
        onClick: () => saveFile(urlList),
        children: "Download the folder contents."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 110,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
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
    lineNumber: 122,
    columnNumber: 5
  }, undefined);
};

function Home() {
  const {
    session
  } = (0,_inrupt_solid_ui_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();
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

  const goBack = () => {
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
      setGetResult(null);
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

    uri = "http://localhost:8000/getFiles?";
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
      className: "initialtext",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: ["This frontend serves as a gateway for users to send requests to the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: "It also allows for the download of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: "To get started, log in into this application and into the API."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: "Next, select the personal data categories or/and the purposes that you want to request. The default value is all categories and purposes."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: "Finally, you can make a query  by clicking the \"Make a GDPR petition.\" button and save the contents by pressing \"Download the folder contents.\" on each of the returned resources."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
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
    }, this), session.info.isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "contain",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the categories of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_personaldata_json__WEBPACK_IMPORTED_MODULE_8__,
          onChange: handlePersonalData,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
          children: "Here you must select the purposes of data you want to request:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react_dropdown_tree_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          data: _resources_purposes_json__WEBPACK_IMPORTED_MODULE_9__,
          onChange: handlePurposes,
          className: "tree-select"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_inrupt_prism_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "form2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
          children: url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
          children: webId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 7
        }, this), getResult && !error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: [JSON.stringify(getResult.processed) == "false" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is not currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 65
          }, this), JSON.stringify(getResult.processed) == "true" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
            children: "The data is currently being processed."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 64
          }, this), getResult.format && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The detailed description of the dataSubjectRights is: " + JSON.stringify(getResult.format.dataSubjectRights)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
              children: "The safeguards in case of transfer to a third country are: " + JSON.stringify(getResult.format.safeguards)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(CardList, {
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
        }, this), getResult && error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("pre", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3RUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6V0Q7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAY29yZXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvcHJpc20tcmVhY3QtY29tcG9uZW50c1wiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3NvbGlkLWNsaWVudFwiIiwid2VicGFjazovL3Rlc3QtcmVhY3Qtc2RrLXByb2plY3QvZXh0ZXJuYWwgXCJAaW5ydXB0L3NvbGlkLWNsaWVudC1hdXRobi1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vdGVzdC1yZWFjdC1zZGstcHJvamVjdC9leHRlcm5hbCBcIkBpbnJ1cHQvc29saWQtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtZHJvcGRvd24tdHJlZS1zZWxlY3RcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIiIsIndlYnBhY2s6Ly90ZXN0LXJlYWN0LXNkay1wcm9qZWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBJbnJ1cHQgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbiAqIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZVxuICogU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4gKiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQGlucnVwdC9zb2xpZC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBpbnJ1cHQvcHJpc20tcmVhY3QtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IERyb3Bkb3duVHJlZVNlbGVjdCBmcm9tICdyZWFjdC1kcm9wZG93bi10cmVlLXNlbGVjdCc7XG5pbXBvcnQge0NSb3csIENDb2x9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuXG5pbXBvcnQge1xuICB1c2VRdWVyeSxcbiAgdXNlUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50LFxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxufSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJ1xuaW1wb3J0IHBlcnNvbmFsRGF0YSAgZnJvbSAnLi4vcmVzb3VyY2VzL3BlcnNvbmFsZGF0YS5qc29uJztcbmltcG9ydCBwdXJwb3Nlc0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL3B1cnBvc2VzLmpzb24nO1xuaW1wb3J0IHsgQ0NhcmQsQ0NhcmRCb2R5LENDYXJkR3JvdXAsQ0NhcmRIZWFkZXIsQ0NhcmRMaW5rLENDYXJkVGV4dCxDQ2FyZFRpdGxlLENDYXJkU3VidGl0bGUsQ0xpc3RHcm91cCxDTGlzdEdyb3VwSXRlbSxDQnV0dG9uICAgICB9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xuaW1wb3J0ICdAY29yZXVpL2NvcmV1aS9kaXN0L2Nzcy9jb3JldWkubWluLmNzcydcbmltcG9ydCB7Z2V0RmlsZX0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQnO1xuaW1wb3J0IHtmZXRjaH0gZnJvbSAnQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3Nlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcblxuXG5cbnZhciBzYXZlRmlsZTtcblxuY29uc3QgQ2FyZCA9ICh7bmFtZSwgdXJsTGlzdCwgY2F0ZWdvcmllcywgcG9saWNpZXMscmVjaXBpZW50cywgZHVyYXRpb259KSA9PntcblxuXG4gIHJldHVybihcbiAgICAgIDxDQ2FyZFxuICAgICAgY29sb3I9XCJsaWdodFwiXG5cblxuICAgICAgc3R5bGU9e3tcIm1heFdpZHRoXCI6ICczMDBweCd9LHsgXCJwYWRkaW5nXCI6IDMwIH0se1wibWFyZ2luLWJvdHRvbVwiOiAyMH19XG5cblxuICAgICAgPlxuXG4gICAgICAgIDxDQ2FyZEhlYWRlcj57bmFtZX08L0NDYXJkSGVhZGVyPlxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgICA8Q0NhcmRUaXRsZT5UaGUgY2F0ZWdvcnkgb2YgdGhlIGZpbGUgaXM6IHtjYXRlZ29yaWVzfTwvQ0NhcmRUaXRsZT5cblxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIHJlY2lwaWVudHMgYXJlOiA8L0NDYXJkVGV4dD5cbiAgICAgICAgICB7cmVjaXBpZW50cy5tYXAoKHJlY2lwaWVudCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxDQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxDQ2FyZFN1YnRpdGxlPjxiPldlYklEOiAge3JlY2lwaWVudH08L2I+PC9DQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NDYXJkQm9keT5cbiAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgIDxDQ2FyZFRleHQ+VGhlIGR1cmF0aW9uIGlzOiB7ZHVyYXRpb259PC9DQ2FyZFRleHQ+XG4gICAgICAgICAgPENDYXJkVGV4dD5UaGUgcG9saWNpZXMgYXJlOiA8L0NDYXJkVGV4dD5cbiAgICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgICAgIHtwb2xpY2llcy5tYXAoKHsgcG9sTmFtZSwgcHVycG9zZSwgYWN0aW9uIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q0NhcmRTdWJ0aXRsZT48Yj5OYW1lOiB7cG9sTmFtZX08L2I+PC9DQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgPC9DQ2FyZEJvZHk+XG4gICAgICAgICAgICA8Q0xpc3RHcm91cCBmbHVzaD5cbiAgICAgICAgICAgIHtwdXJwb3NlLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENMaXN0R3JvdXBJdGVtPntpdGVtLnRvU3RyaW5nKCl9IC0ge2FjdGlvbi50b1N0cmluZygpfTwvQ0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIDxDQ2FyZEJvZHk+XG5cbiAgICAgICAgPENCdXR0b24gb25DbGljaz17KCk9PnNhdmVGaWxlKHVybExpc3QpfT5Eb3dubG9hZCB0aGUgZm9sZGVyIGNvbnRlbnRzLjwvQ0J1dHRvbj5cblxuICAgICAgICA8L0NDYXJkQm9keT5cblxuICAgICAgPC9DQ2FyZD5cblxuICApO1xuXG59XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgcmVzb3VyY2VDYXJkcyB9KSA9PiB7XG4gIGNvbnN0IGNhcmRzQXJyYXkgPSByZXNvdXJjZUNhcmRzLm1hcChyZXNvdXJjZUNhcmQgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDpcIjIwMHB4XCJ9fT5cbiAgICA8Q2FyZFxuICAgICAgbmFtZT17cmVzb3VyY2VDYXJkLm5hbWV9XG4gICAgICB1cmxMaXN0PXtyZXNvdXJjZUNhcmQudXJpfVxuICAgICAgY2F0ZWdvcmllcz17cmVzb3VyY2VDYXJkLmNhdGVnb3JpZXN9XG4gICAgICBwb2xpY2llcz17cmVzb3VyY2VDYXJkLnBvbGljaWVzfVxuICAgICAgcmVjaXBpZW50cz17cmVzb3VyY2VDYXJkLnJlY2lwaWVudHN9XG4gICAgICBkdXJhdGlvbj17cmVzb3VyY2VDYXJkLmR1cmF0aW9ufVxuICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkbGlzdFwiIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleEdyb3c6JzEnLGZsZXhTaHJpbms6XCIxXCIsZmxleEJhc2lzOlwiMTAwJVwiICxqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBmbGV4V3JhcDpcIndyYXBcIiwgZmxleERpcmVjdGlvbjpcInJvd1wiLCBmbGV4R3JvdzogXCIxXCIsIGFsaWduQ29udGVudDpcInN0cmV0Y2hcIn19PlxuICAgICAge2NhcmRzQXJyYXl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW2dldFJlc3VsdCwgc2V0R2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZ2V0UmVzdWx0Q29udGVudCwgc2V0R2V0UmVzdWx0Q29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3dlYklkLCBzZXRXZWJJZF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBzZWxlY3RlZFBVUiA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQRCA9IFtdO1xuXG5cbiAgIHNhdmVGaWxlID0gYXN5bmMgKHVybExpc3QpID0+IHtcbiAgIGZvcih2YXIgaSA9IDA7IGk8dXJsTGlzdC5sZW5ndGg7aSsrKXtcbiAgICAgY29uc3QgZmlsZVVSTCA9IHVybExpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlVVJMLnN1YnN0cmluZyhmaWxlVVJMLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xuICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShcbiAgICAgICAgICAgICBmaWxlVVJMLCAgICAgICAgICAgICAgIC8vIEZpbGUgaW4gUG9kIHRvIFJlYWRcbiAgICAgICAgICAgICB7IGZldGNoOiBzZXNzaW9uLmZldGNoIH0gICAgICAgLy8gZmV0Y2ggZnJvbSBhdXRoZW50aWNhdGVkIHNlc3Npb25cbiAgICAgKTtcbiAgICAgdHJ5IHtcblxuXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGZpbGUsIGZpbGVuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgIGEuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgfSwgMClcbiAgICB9XG4gICB9IGNhdGNoIChlcnIpIHtcbiAgIGNvbnNvbGUubG9nKGVycik7XG4gICB9XG4gICB9XG5cbiB9XG5cblxuICBjb25zdCBnb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEdldFJlc3VsdChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGZvcnRtYXRSZXNwb25zZSA9IChyZXMpID0+IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzLCBudWxsLCAyKTtcbiAgfTtcblxuICBjb25zdCB7aXNMb2FkaW5nOiBpc0xvYWRpbmdBbGwsIHJlZmV0Y2g6IGdldEFsbCB9ID0gdXNlUXVlcnkoXG4gICAgXCJnZXRRdWVyeUFsbFwiLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBoZWFkZXJzIDoge3dlYklEOiB3ZWJJZH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIG9uU3VjY2VzczogYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzICsgXCItXCIgKyByZXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gZm9ydG1hdFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICBzZXRHZXRSZXN1bHQocmVzLmRhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICBzZXRHZXRSZXN1bHQoZm9ydG1hdFJlc3BvbnNlKGVyci5yZXNwb25zZT8uZGF0YSB8fCBlcnIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTG9hZGluZ0FsbCkgc2V0R2V0UmVzdWx0KFwibG9hZGluZy4uLlwiKTtcbiAgICAgIH0sIFtpc0xvYWRpbmdBbGxdKTtcblxuICB2YXIgIHVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldEZpbGVzP1wiO1xuXG4gIGNvbnN0IGdldFF1ZXJ5QWxsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRHZXRSZXN1bHQobnVsbCk7XG4gICAgICBhd2FpdCBzZXRXZWJJZChzZXNzaW9uLmluZm8ud2ViSWQpXG4gICAgICBpZihzZWxlY3RlZFBELmxlbmd0aCA9PSAwKXtcbiAgICAgICAgdXJpICs9IFwiY2F0UERhdGFbXT0wJlwiO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRQRC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICB1cmkgKz0gXCJjYXRQRGF0YVtdPVwiK3NlbGVjdGVkUERbaV0rXCImXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHNlbGVjdGVkUFVSLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgdXJpICs9IFwicHVyUERhdGFbXT0wXCI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWxlY3RlZFBVUi5sZW5ndGg7aisrKXtcbiAgICAgICAgICBpZihqID09IHNlbGVjdGVkUFVSLmxlbmd0aCAtMSl7XG4gICAgICAgICAgICB1cmkgKz0gXCJwdXJQRGF0YVtdPVwiK3NlbGVjdGVkUFVSW2pdO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdXJpICs9IFwicHVyUERhdGFbXT1cIitzZWxlY3RlZFBVUltqXStcIiZcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgICBhd2FpdCBzZXRVcmwodXJpKTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0R2V0UmVzdWx0KGZvcnRtYXRSZXNwb25zZShlcnIpKTtcbiAgICB9XG4gICAgdXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2V0RmlsZXM/XCI7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXJsICE9IHVyaSl7XG4gICAgICBnZXRBbGwoKTsgLy8gVGhpcyB3aWxsIGFsd2F5cyB1c2UgbGF0ZXN0IHZhbHVlIG9mIHVyaVxuXG4gICAgfVxuICB9LCBbdXJsXSk7XG5cblxuXG4gIGNvbnN0IGFzc2lnbk9iamVjdFBhdGhzID0gKG9iaiwgc3RhY2spID0+IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCBub2RlID0gb2JqW2tdO1xuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG5vZGUucGF0aCA9IHN0YWNrID8gYCR7c3RhY2t9LiR7a31gIDogaztcbiAgICAgICAgYXNzaWduT2JqZWN0UGF0aHMobm9kZSwgbm9kZS5wYXRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBhc3NpZ25PYmplY3RQYXRocyhwZXJzb25hbERhdGEpO1xuICBhc3NpZ25PYmplY3RQYXRocyhwdXJwb3Nlc0RhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZVBlcnNvbmFsRGF0YSA9IChjdXJyZW50Tm9kZSwgc2VsZWN0ZWROb2RlcykgPT4ge1xuICAgIHNlbGVjdGVkUEQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBELnB1c2gobGFiZWwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBEKTtcbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZVB1cnBvc2VzID0gKGN1cnJlbnROb2RlLCBzZWxlY3RlZE5vZGVzKSA9PiB7XG4gICAgc2VsZWN0ZWRQVVIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vdmFyIHZhbHVlID0gc2VsZWN0ZWROb2Rlc1tpXS52YWx1ZTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkTm9kZXNbaV0ubGFiZWw7XG4gICAgICBzZWxlY3RlZFBVUi5wdXNoKGxhYmVsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQRCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHsgIXNlc3Npb24uaW5mby5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWFsdGV4dFwiPlxuICAgIDxwPlxuICAgICAgVGhpcyBmcm9udGVuZCBzZXJ2ZXMgYXMgYSBnYXRld2F5IGZvciB1c2VycyB0byBzZW5kIHJlcXVlc3RzIHRvIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Jsb25nYXJlcy9URk0tQVBJLWV4cHJlc3NcIj5BUEk8L2E+LlxuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgSXQgYWxzbyBhbGxvd3MgZm9yIHRoZSBkb3dubG9hZCBvZiB0aGUgcmV0dXJuZWQgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRvIGdldCBzdGFydGVkLCBsb2cgaW4gaW50byB0aGlzIGFwcGxpY2F0aW9uIGFuZCBpbnRvIHRoZSBBUEkuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgIE5leHQsIHNlbGVjdCB0aGUgcGVyc29uYWwgZGF0YSBjYXRlZ29yaWVzIG9yL2FuZCB0aGUgcHVycG9zZXMgdGhhdCB5b3Ugd2FudCB0byByZXF1ZXN0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBhbGwgY2F0ZWdvcmllcyBhbmQgcHVycG9zZXMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgRmluYWxseSwgeW91IGNhbiBtYWtlIGEgcXVlcnkgIGJ5IGNsaWNraW5nIHRoZVxuICAgICAgXCJNYWtlIGEgR0RQUiBwZXRpdGlvbi5cIiBidXR0b24gYW5kIHNhdmUgdGhlIGNvbnRlbnRzIGJ5IHByZXNzaW5nIFwiRG93bmxvYWQgdGhlIGZvbGRlciBjb250ZW50cy5cIiBvbiBlYWNoIG9mIHRoZSByZXR1cm5lZCByZXNvdXJjZXMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cIm1haWx0bzpybS5sb25nYXJlcy5kaWV6QGFsdW1ub3MudXBtLmVzXCI+Q29udGFjdCBNZTwvYT5cbiAgICA8L3A+XG4gIDwvZGl2PlxuXG4gICAgKX1cblxuICAgIHsgc2Vzc2lvbi5pbmZvLmlzTG9nZ2VkSW4gJiYgIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgY2F0ZWdvcmllcyBvZiBkYXRhIHlvdSB3YW50IHRvIHJlcXVlc3Q6PC9wPlxuICAgICAgPERyb3Bkb3duVHJlZVNlbGVjdCBkYXRhPXtwZXJzb25hbERhdGF9ICAgb25DaGFuZ2U9e2hhbmRsZVBlcnNvbmFsRGF0YX0gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG4gICAgICA8cD5IZXJlIHlvdSBtdXN0IHNlbGVjdCB0aGUgcHVycG9zZXMgb2YgZGF0YSB5b3Ugd2FudCB0byByZXF1ZXN0OjwvcD5cbiAgICAgIDxEcm9wZG93blRyZWVTZWxlY3QgZGF0YT17cHVycG9zZXNEYXRhfSAgIG9uQ2hhbmdlPXtoYW5kbGVQdXJwb3Nlc30gY2xhc3NOYW1lPVwidHJlZS1zZWxlY3RcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPSB7e1wibWFyZ2luLXRvcFwiOlwiMTBweFwiLFwibWFyZ2luLXJpZ2h0XCI6IFwiMFwifX0gdmFyaWFudD1cInNtYWxsXCIgIG9uQ2xpY2s9e2dldFF1ZXJ5QWxsfSA+TWFrZSBhIEdEUFIgcGV0aXRpb24uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT0ge3tcIm1hcmdpbi10b3BcIjpcIjEwcHhcIixcIm1hcmdpbi1yaWdodFwiOiBcIjBcIn19IHZhcmlhbnQ9XCJzbWFsbFwiICBvbkNsaWNrPXtnb0JhY2t9ID5DbGVhciBxdWVyeS48L0J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0yXCI+XG4gICAgICA8cHJlPnt1cmx9PC9wcmU+XG4gICAgICA8cHJlPnt3ZWJJZH08L3ByZT5cbiAgICAgIHtnZXRSZXN1bHQgJiYgIWVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgPlxuXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZ2V0UmVzdWx0LnByb2Nlc3NlZCkgPT0gXCJmYWxzZVwiICYmICg8cHJlPntcIlRoZSBkYXRhIGlzIG5vdCBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShnZXRSZXN1bHQucHJvY2Vzc2VkKSA9PSBcInRydWVcIiAmJiAoPHByZT57XCJUaGUgZGF0YSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlwifTwvcHJlPikgIH1cbiAgICAgICAgICAgIHtnZXRSZXN1bHQuZm9ybWF0ICYmKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBkYXRhU3ViamVjdFJpZ2h0cyBpczogXCIgK0pTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuZGF0YVN1YmplY3RSaWdodHMpfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxwcmU+e1wiVGhlIHNhZmVndWFyZHMgaW4gY2FzZSBvZiB0cmFuc2ZlciB0byBhIHRoaXJkIGNvdW50cnkgYXJlOiBcIiArIEpTT04uc3RyaW5naWZ5KGdldFJlc3VsdC5mb3JtYXQuc2FmZWd1YXJkcyl9PC9wcmU+XG4gICAgICAgICAgICAgICAgPENhcmRMaXN0IHJlc291cmNlQ2FyZHMgPXtnZXRSZXN1bHQuZm9ybWF0LnJlc291cmNlfT48L0NhcmRMaXN0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIHtnZXRSZXN1bHQgJiYgZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgPHByZT57Z2V0UmVzdWx0fTwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvcmV1aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3ByaXNtLXJlYWN0LWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlucnVwdC9zb2xpZC1jbGllbnQtYXV0aG4tYnJvd3NlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5ydXB0L3NvbGlkLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyb3Bkb3duLXRyZWUtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJCdXR0b24iLCJheGlvcyIsIkRyb3Bkb3duVHJlZVNlbGVjdCIsIkNSb3ciLCJDQ29sIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsInBlcnNvbmFsRGF0YSIsInB1cnBvc2VzRGF0YSIsIkNDYXJkIiwiQ0NhcmRCb2R5IiwiQ0NhcmRHcm91cCIsIkNDYXJkSGVhZGVyIiwiQ0NhcmRMaW5rIiwiQ0NhcmRUZXh0IiwiQ0NhcmRUaXRsZSIsIkNDYXJkU3VidGl0bGUiLCJDTGlzdEdyb3VwIiwiQ0xpc3RHcm91cEl0ZW0iLCJDQnV0dG9uIiwiZ2V0RmlsZSIsImZldGNoIiwic2F2ZUZpbGUiLCJDYXJkIiwibmFtZSIsInVybExpc3QiLCJjYXRlZ29yaWVzIiwicG9saWNpZXMiLCJyZWNpcGllbnRzIiwiZHVyYXRpb24iLCJtYXAiLCJyZWNpcGllbnQiLCJwb2xOYW1lIiwicHVycG9zZSIsImFjdGlvbiIsIml0ZW0iLCJpIiwidG9TdHJpbmciLCJDYXJkTGlzdCIsInJlc291cmNlQ2FyZHMiLCJjYXJkc0FycmF5IiwicmVzb3VyY2VDYXJkIiwibWluV2lkdGgiLCJ1cmkiLCJkaXNwbGF5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiZmxleEJhc2lzIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkNvbnRlbnQiLCJIb21lIiwic2Vzc2lvbiIsInF1ZXJ5Q2xpZW50IiwiZ2V0UmVzdWx0Iiwic2V0R2V0UmVzdWx0IiwiZ2V0UmVzdWx0Q29udGVudCIsInNldEdldFJlc3VsdENvbnRlbnQiLCJ3ZWJJZCIsInNldFdlYklkIiwidXJsIiwic2V0VXJsIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbGVjdGVkUFVSIiwic2VsZWN0ZWRQRCIsImxlbmd0aCIsImZpbGVVUkwiLCJmaWxlbmFtZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiZmlsZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVtb3ZlQ2hpbGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ29CYWNrIiwiZm9ydG1hdFJlc3BvbnNlIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0FsbCIsInJlZmV0Y2giLCJnZXRBbGwiLCJtZXRob2QiLCJoZWFkZXJzIiwid2ViSUQiLCJlbmFibGVkIiwib25TdWNjZXNzIiwicmVzdWx0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImRhdGEiLCJvbkVycm9yIiwicmVzcG9uc2UiLCJnZXRRdWVyeUFsbCIsImluZm8iLCJqIiwiYXNzaWduT2JqZWN0UGF0aHMiLCJvYmoiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiayIsIm5vZGUiLCJwYXRoIiwiaGFuZGxlUGVyc29uYWxEYXRhIiwiY3VycmVudE5vZGUiLCJzZWxlY3RlZE5vZGVzIiwibGFiZWwiLCJwdXNoIiwiaGFuZGxlUHVycG9zZXMiLCJpc0xvZ2dlZEluIiwicHJvY2Vzc2VkIiwiZm9ybWF0IiwiZGF0YVN1YmplY3RSaWdodHMiLCJzYWZlZ3VhcmRzIiwicmVzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9