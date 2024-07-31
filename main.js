/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n\tmargin: 0;\n}\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n\tline-height: 1.5;\n\t-webkit-font-smoothing: antialiased;\n}\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\toverflow-wrap: break-word;\n}\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n\tisolation: isolate;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/** HEADER **/\nheader {\n\tdisplay: fixed;\n\theight: 10vh;\n\tbackground-color: #1d2125;\n\tcolor: white;\n}\n\nnav {\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 50px;\n}\n\n#home,\n#menu,\n#about {\n\twidth: 100px;\n\tfont-weight: bold;\n\tpadding: 10px 5px;\n\tborder: solid 1px;\n\ttext-align: center;\n\tborder-radius: 8px;\n}\n\n#home:hover,\n#menu:hover,\n#about:hover {\n\tbackground-color: #6e5dc6;\n}\n\n/** Home **/\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.title {\n\tdisplay: flex;\n\tfont-size: 38px;\n\tfont-weight: bold;\n\twidth: 100%;\n\theight: 7vh;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 20px 0;\n}\n\n.review-container {\n\tdisplay: flex;\n\tflex-flow: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 30px 0px;\n}\n\n.review-inner {\n\twidth: 500px;\n}\n\n.review-content {\n\tmargin-bottom: 10px;\n}\n\n.customer {\n\ttext-align: right;\n\tfont-style: italic;\n\tfont-weight: 700;\n}\n\n.hours-container,\n.about-container {\n\tpadding: 50px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 24px;\n}\n\n.days {\n\twhite-space: pre;\n}\n\n.selected {\n\tbackground-color: #5e4db2;\n}\n\n.menu-container {\n\tdisplay: flex;\n\tflex-flow: column wrap;\n\tjustify-content: space-evenly;\n\talign-items: center;\n}\n\n.price {\n\ttext-align: right;\n\tfont-weight: 600;\n}\n\n.dish-container,\n.drink-container,\n.contact-container {\n\tdisplay: grid;\n\twidth: 100%;\n\tgrid-template-columns: repeat(3, minmax(400px, 1fr));\n\tgap: 25px;\n\tmargin-bottom: 50px;\n}\n\n.contact-container {\n\tgrid-template-columns: repeat(2, minmax(400px, 1fr));\n}\n\n.dish-card,\n.drink-card,\n.contact-card {\n\twidth: 400px;\n\tborder: solid 2px;\n\tborder-radius: 8px;\n\tpadding: 24px;\n\tbox-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n}\n\n.contact-name {\n\tfont-size: 22px;\n\tfont-weight: 700;\n\tpadding: 0 10px;\n}\n\n.contact-position,\n.contact-phone,\n.contact-mail {\n\tfont-size: 18px;\n\tfont-weight: 600;\n\tpadding: 0 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n\tconst content = document.getElementById(\"content\");\n\tcontent.innerHTML = \"\";\n\n\tfunction createAbout() {\n\t\tconst aboutDiv = document.createElement(\"div\");\n\t\taboutDiv.classList.add(\"about-container\");\n\t\tcontent.append(aboutDiv);\n\t\taboutDiv.appendChild(createContactCard());\n\t}\n\n\tfunction createTitle() {\n\t\tconst title = document.createElement(\"div\");\n\t\ttitle.classList.add(\"title\");\n\t\ttitle.innerHTML = \"Contact Us\";\n\t\tcontent.append(title);\n\t}\n\n\tfunction createContactCard() {\n\t\tconst contactContainer = document.createElement(\"div\");\n\t\tcontactContainer.classList.add(\"contact-container\");\n\t\tconst contacts = [\n\t\t\t{\n\t\t\t\tname: \"René B.\",\n\t\t\t\ttel: \"123-456-1337\",\n\t\t\t\tmail: \"RealMail@totallyreal.com\",\n\t\t\t\tposition: \"Owner\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"Zlyx\",\n\t\t\t\ttel: \"133-765-4321\",\n\t\t\t\tmail: \"RealMail2@totallyreal.com\",\n\t\t\t\tposition: \"Chef\",\n\t\t\t},\n\t\t];\n\n\t\tcontacts.forEach((element) => {\n\t\t\tconst _contactCard = document.createElement(\"div\");\n\t\t\tconst _contactPhone = document.createElement(\"p\");\n\t\t\tconst _contactMail = document.createElement(\"p\");\n\t\t\tconst _contactPosition = document.createElement(\"p\");\n\t\t\tconst _contactName = document.createElement(\"p\");\n\t\t\t_contactCard.classList.add(\"contact-card\");\n\t\t\t_contactPhone.classList.add(\"contact-phone\");\n\t\t\t_contactPhone.textContent = element.tel;\n\t\t\t_contactMail.classList.add(\"contact-mail\");\n\t\t\t_contactMail.textContent = element.mail;\n\t\t\t_contactPosition.classList.add(\"contact-position\");\n\t\t\t_contactPosition.textContent = element.position;\n\t\t\t_contactName.classList.add(\"contact-name\");\n\t\t\t_contactName.textContent = element.name;\n\t\t\tcontactContainer.appendChild(_contactCard);\n\t\t\t_contactCard.appendChild(_contactName);\n\t\t\t_contactCard.appendChild(_contactPosition);\n\t\t\t_contactCard.appendChild(_contactPhone);\n\t\t\t_contactCard.appendChild(_contactMail);\n\t\t});\n\t\treturn contactContainer;\n\t}\n\tcreateTitle();\n\tcreateAbout();\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nconst home = () => {\n\tconst content = document.getElementById(\"content\");\n\tcontent.innerHTML = \"\";\n\n\tfunction createTitle() {\n\t\tconst title = document.createElement(\"div\");\n\t\ttitle.classList.add(\"title\");\n\t\ttitle.textContent = \"Taki's Bar\";\n\t\tcontent.appendChild(title);\n\t}\n\tfunction createReview() {\n\t\tconst reviewContainer = document.createElement(\"div\");\n\t\tconst review_inner = document.createElement(\"div\");\n\t\tconst review = document.createElement(\"p\");\n\t\tconst customer = document.createElement(\"p\");\n\t\treviewContainer.classList.add(\"review-container\");\n\t\treview_inner.classList.add(\"review-inner\");\n\t\treviewContainer.appendChild(review_inner);\n\t\treview.classList.add(\"review-content\");\n\t\tcustomer.classList.add(\"customer\");\n\t\treview.innerHTML =\n\t\t\t\"Taki's Bar has one of the beast Takoyaki in Japan! The atmosphere is amazing and you have a stunning view over the entire skyline of Tokyo!\";\n\t\treview.innerHTML +=\n\t\t\t\" The customer service clearly makes you feel special! This is this kind of place where you wanna return to over and over again.\";\n\t\tcustomer.innerHTML = \"René B.\";\n\t\treview_inner.appendChild(review);\n\t\treview_inner.appendChild(customer);\n\t\tcontent.appendChild(reviewContainer);\n\t}\n\n\tfunction createOpeningHours() {\n\t\tconst hoursContainer = document.createElement(\"div\");\n\t\tconst hoursTitle = document.createElement(\"h1\");\n\t\thoursTitle.textContent = \"Opening hours\";\n\t\thoursContainer.classList.add(\"hours-container\");\n\t\thoursContainer.appendChild(hoursTitle);\n\t\tconst days = [\n\t\t\t\"Monday\",\n\t\t\t\"Tuesday\",\n\t\t\t\"Wednesday\",\n\t\t\t\"Thursday\",\n\t\t\t\"Friday\",\n\t\t\t\"Saturday\",\n\t\t\t\"Sunday\",\n\t\t];\n\t\tdays.forEach((element) => {\n\t\t\tconst p = document.createElement(\"p\");\n\t\t\tp.classList.add(element);\n\t\t\tp.classList.add(\"days\");\n\t\t\tif (element === \"Wednesday\" || element === \"Thursday\") {\n\t\t\t\tp.textContent = `${element}:\\t05:00 pm - 02:00 am`;\n\t\t\t} else {\n\t\t\t\tp.textContent = `${element}:\\t\\t05:00 pm - 02:00 am`;\n\t\t\t}\n\t\t\thoursContainer.appendChild(p);\n\t\t});\n\t\tcontent.appendChild(hoursContainer);\n\t}\n\n\tcreateTitle();\n\tcreateReview();\n\tcreateOpeningHours();\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst DOMElements = (function () {\n\tconst homeDiv = document.getElementById(\"home\");\n\tconst menuDiv = document.getElementById(\"menu\");\n\tconst aboutDiv = document.getElementById(\"about\");\n\n\thomeDiv.addEventListener(\"click\", () => {\n\t\thomeDiv.classList.add(\"selected\");\n\t\tmenuDiv.classList.remove(\"selected\");\n\t\taboutDiv.classList.remove(\"selected\");\n\t\t(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n\t});\n\n\tmenuDiv.addEventListener(\"click\", () => {\n\t\tmenuDiv.classList.add(\"selected\");\n\t\thomeDiv.classList.remove(\"selected\");\n\t\taboutDiv.classList.remove(\"selected\");\n\t\t(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n\t});\n\n\taboutDiv.addEventListener(\"click\", () => {\n\t\taboutDiv.classList.add(\"selected\");\n\t\tmenuDiv.classList.remove(\"selected\");\n\t\thomeDiv.classList.remove(\"selected\");\n\t\t(0,_about_js__WEBPACK_IMPORTED_MODULE_0__.about)();\n\t});\n\n\tdocument.addEventListener(\"DOMContentLoaded\", () => {\n\t\t(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n\t\thomeDiv.classList.add(\"selected\");\n\t});\n})();\n\nDOMElements;\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n\tconst content = document.getElementById(\"content\");\n\tcontent.innerHTML = \"\";\n\n\tfunction createTitle() {\n\t\tconst title = document.createElement(\"div\");\n\t\ttitle.classList.add(\"title\");\n\t\ttitle.innerHTML = \"Menu\";\n\t\tcontent.appendChild(title);\n\t}\n\n\tfunction createMenu() {\n\t\tconst menuDiv = document.createElement(\"div\");\n\t\tmenuDiv.classList.add(\"menu-container\");\n\t\tcontent.append(menuDiv);\n\t\tmenuDiv.appendChild(createDrinks());\n\t\tmenuDiv.appendChild(createMainDishes());\n\t}\n\n\tfunction createDrinks() {\n\t\tconst drinkContainer = document.createElement(\"div\");\n\t\tconst drinks = [\n\t\t\t{\n\t\t\t\tdrink: \"Beer\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"The best beer you'll ever had! It's imported from a german brewery!\",\n\t\t\t\tprice: \"¥ 600\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdrink: \"Cola\",\n\t\t\t\tcontent: \"Ice cold Cola! Served with slice of lemon.\",\n\t\t\t\tprice: \"¥ 450\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdrink: \"Fanta\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Ice cold Fanta! Server with ice cubes to keep it longer cool.\",\n\t\t\t\tprice: \"¥ 450\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdrink: \"Iced Tea\",\n\t\t\t\tcontent: \"Peach flavored ice tea! Available sparkling and still.\",\n\t\t\t\tprice: \"¥ 400\",\n\t\t\t},\n\t\t];\n\t\tdrinkContainer.classList.add(\"drink-container\");\n\t\tdrinks.forEach((element) => {\n\t\t\tconst _drinkCard = document.createElement(\"div\");\n\t\t\tconst _drink = document.createElement(\"p\");\n\t\t\tconst _drinkTitle = document.createElement(\"h3\");\n\t\t\tconst _drinkPrice = document.createElement(\"p\");\n\t\t\t_drinkCard.classList.add(\"drink-card\");\n\t\t\t_drinkTitle.classList.add(\"drink-title\");\n\t\t\t_drinkTitle.innerHTML = element.drink;\n\t\t\t_drink.textContent = element.content;\n\t\t\t_drinkPrice.textContent = element.price;\n\t\t\t_drink.classList.add(\"drink\");\n\t\t\t_drinkPrice.classList.add(\"price\");\n\t\t\tdrinkContainer.appendChild(_drinkCard);\n\t\t\t_drinkCard.appendChild(_drinkTitle);\n\t\t\t_drinkCard.appendChild(_drink);\n\t\t\t_drinkCard.appendChild(_drinkPrice);\n\t\t});\n\t\treturn drinkContainer;\n\t}\n\n\tfunction createMainDishes() {\n\t\tconst dishContainer = document.createElement(\"div\");\n\t\tdishContainer.classList.add(\"dish-container\");\n\t\tconst dishes = [\n\t\t\t{\n\t\t\t\tdish: \"Sushi\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Sushi consists of vinegared rice accompanied by various ingredients such as raw fish, seafood, vegetables, or eggs. Common types include Nigiri (slices of fish on rice), Maki (rolls), and Sashimi (slices of raw fish without rice).\",\n\t\t\t\tprice: \"¥ 5.000\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdish: \"Ramen\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Ramen is a Japanese noodle soup typically made with wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso. It is topped with ingredients like sliced pork, nori (seaweed), menma (bamboo shoots), and green onions.\",\n\t\t\t\tprice: \"¥ 1.000\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdish: \"Tempura\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Tempura consists of seafood or vegetables that are coated in a light batter and deep-fried to achieve a crispy texture. It is commonly served with a dipping sauce made from soy sauce, mirin, and dashi.\",\n\t\t\t\tprice: \"¥ 1.200\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdish: \"Takoyaki\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Takoyaki are round, fried dough balls filled with diced octopus, tempura scraps, pickled ginger, and green onions. They are cooked in a special molded pan and topped with takoyaki sauce, mayonnaise, aonori (seaweed powder), and bonito flakes.\",\n\t\t\t\tprice: \"¥ 500\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdish: \"Okonomiyaki\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Okonomiyaki is a savory Japanese pancake made with a batter of flour, egg, and water, mixed with shredded cabbage and various fillings like meat, seafood, or cheese. It is often topped with a special sauce, mayonnaise, and bonito flakes.\",\n\t\t\t\tprice: \"¥ 850\",\n\t\t\t},\n\t\t\t{\n\t\t\t\tdish: \"Katsu\",\n\t\t\t\tcontent:\n\t\t\t\t\t\"Katsu is a Japanese dish consisting of a breaded and deep-fried cutlet, typically made with pork (tonkatsu) or chicken (chicken katsu). The cutlet is coated in panko breadcrumbs before frying, resulting in a crispy exterior. It is often served with shredded cabbage, rice, and a thick, sweet-savory sauce called tonkatsu sauce.\",\n\t\t\t\tprice: \"¥ 1.250\",\n\t\t\t},\n\t\t];\n\n\t\tdishes.forEach((element) => {\n\t\t\tconst _dishCard = document.createElement(\"div\");\n\t\t\tconst _dishTitle = document.createElement(\"h3\");\n\t\t\tconst _dish = document.createElement(\"p\");\n\t\t\tconst _dishPrice = document.createElement(\"p\");\n\t\t\t_dishCard.classList.add(\"dish-card\");\n\t\t\t_dishTitle.classList.add(\"dish-title\");\n\t\t\t_dishTitle.innerHTML = element.dish;\n\t\t\t_dish.classList.add(\"dish\");\n\t\t\t_dish.textContent = element.content;\n\t\t\t_dishPrice.classList.add(\"price\");\n\t\t\t_dishPrice.textContent = element.price;\n\t\t\tdishContainer.appendChild(_dishCard);\n\t\t\t_dishCard.appendChild(_dishTitle);\n\t\t\t_dishCard.appendChild(_dish);\n\t\t\t_dishCard.appendChild(_dishPrice);\n\t\t});\n\t\treturn dishContainer;\n\t}\n\n\tcreateTitle();\n\tcreateMenu();\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;