"use strict";
(self["webpackChunk_leaderboard_api"] = self["webpackChunk_leaderboard_api"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 25px;\r\n}\r\n\r\nh1,\r\nh3 {\r\n  color: #fffbeb;\r\n}\r\n\r\nh1 {\r\n  font-weight: bolder;\r\n  font-size: 70px;\r\n  margin: 3rem;\r\n}\r\n\r\nh3 {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  gap: 150px;\r\n  justify-content: center;\r\n  margin: 100px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .bouncing-heading {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 3rem;\r\n  }\r\n}\r\n\r\n.add-score,\r\n.score-board {\r\n  width: 100%;\r\n}\r\n\r\n.board {\r\n  border: 5px solid #ccc;\r\n  background-color: #495579;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 8px 5px 8px 8px #888;\r\n  overflow-y: scroll;\r\n  max-height: 560px;\r\n  width: 100%;\r\n}\r\n\r\n.board li {\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\n.board li:nth-child(even) {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.score-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.board-item {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.refresh-btn {\r\n  width: 150px;\r\n  font-size: 25px;\r\n  height: 50px;\r\n}\r\n\r\n#results {\r\n  min-width: 300px;\r\n  background-color: #92b4ec;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 70%;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  top: 100px;\r\n}\r\n\r\n.view {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    top: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    left: 60%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  color: #fffbeb;\r\n  font-weight: bolder;\r\n  margin: 50px;\r\n}\r\n\r\n.bouncing-heading {\r\n  display: flex;\r\n\r\n  /* align-items: center; */\r\n}\r\n\r\n.l,\r\n.e,\r\n.a,\r\n.d,\r\n.r,\r\n.b,\r\n.o {\r\n  color: #fffbeb;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n  margin: 3px;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 0;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  25% {\r\n    transform: scaleX(0.4);\r\n  }\r\n\r\n  50% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  75% {\r\n    transform: scaleX(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 57px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 116px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 175px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 232px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 285px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 25px;\r\n}\r\n\r\nh1,\r\nh3 {\r\n  color: #fffbeb;\r\n}\r\n\r\nh1 {\r\n  font-weight: bolder;\r\n  font-size: 70px;\r\n  margin: 3rem;\r\n}\r\n\r\nh3 {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  gap: 150px;\r\n  justify-content: center;\r\n  margin: 100px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .bouncing-heading {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 3rem;\r\n  }\r\n}\r\n\r\n.add-score,\r\n.score-board {\r\n  width: 100%;\r\n}\r\n\r\n.board {\r\n  border: 5px solid #ccc;\r\n  background-color: #495579;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 8px 5px 8px 8px #888;\r\n  overflow-y: scroll;\r\n  max-height: 560px;\r\n  width: 100%;\r\n}\r\n\r\n.board li {\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\n.board li:nth-child(even) {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.score-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.board-item {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.refresh-btn {\r\n  width: 150px;\r\n  font-size: 25px;\r\n  height: 50px;\r\n}\r\n\r\n#results {\r\n  min-width: 300px;\r\n  background-color: #92b4ec;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 70%;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  top: 100px;\r\n}\r\n\r\n.view {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    top: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    left: 60%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  color: #fffbeb;\r\n  font-weight: bolder;\r\n  margin: 50px;\r\n}\r\n\r\n.bouncing-heading {\r\n  display: flex;\r\n\r\n  /* align-items: center; */\r\n}\r\n\r\n.l,\r\n.e,\r\n.a,\r\n.d,\r\n.r,\r\n.b,\r\n.o {\r\n  color: #fffbeb;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n  margin: 3px;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 0;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  25% {\r\n    transform: scaleX(0.4);\r\n  }\r\n\r\n  50% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  75% {\r\n    transform: scaleX(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 57px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 116px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 175px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 232px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 285px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/variables.js */ "./src/modules/variables.js");



const renderList = (scores) => {
  _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.board.innerHTML = '';
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.board.appendChild(listItem);
  });
};

const getScores = async () => {
  const response = await fetch(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.apiUrl);
  const data = await response.json();
  return data;
};
const renderScores = () => {
  getScores().then((data) => renderList(data.result));
};

getScores();

const addScore = async () => {
  const name = _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value;
  const score = _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.scoreInput.value;
  const response = await fetch(_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.form.reset(data);
};

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore().then(() => {
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.results.style.visibility = 'visible';
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.results.classList.add('view');
    setTimeout(() => {
      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.results.style.visibility = 'hidden';
      _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.results.classList.remove('view');
    }, 2500);
  });
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.refreshBtn.addEventListener('click', renderScores);
renderScores();


/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "board": () => (/* binding */ board),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "gameID": () => (/* binding */ gameID),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "refreshBtn": () => (/* binding */ refreshBtn),
/* harmony export */   "results": () => (/* binding */ results),
/* harmony export */   "scoreInput": () => (/* binding */ scoreInput)
/* harmony export */ });
const gameID = 'UzywzfdgV3gYuNVGXIwX';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const board = document.querySelector('#board');
const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const results = document.querySelector('#results');

results.style.visibility = 'hidden';




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvc3R5bGUuY3NzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vc3JjL21vZHVsZXMvdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDMge1xcclxcbiAgY29sb3I6ICNmZmZiZWI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBtYXJnaW46IDNyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm91bmNpbmctaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zY29yZS1oZWFkZXIge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUsXFxyXFxuLnNjb3JlLWJvYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgI2NjYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTU1Nzk7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDhweCA1cHggOHB4IDhweCAjODg4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgbWF4LWhlaWdodDogNTYwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXNjb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtYnRuIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc3VsdHMge1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmI0ZWM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogNzAlO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlldyB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRvcDogMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBsZWZ0OiA2MCU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZW91dCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgY29sb3I6ICNmZmZiZWI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgbWFyZ2luOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmwsXFxyXFxuLmUsXFxyXFxuLmEsXFxyXFxuLmQsXFxyXFxuLnIsXFxyXFxuLmIsXFxyXFxuLm8ge1xcclxcbiAgY29sb3I6ICNmZmZiZWI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAwLjkpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAzMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMS4xKSB0cmFuc2xhdGVZKC01NXB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDU4JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtN3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDY1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5lIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmEge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZCB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5yIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLmIge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubyB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNnM7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUsXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRvcDogODJweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93LFxcclxcbi5zaGFkb3ctdHdvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogODJweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjpiZWZvcmUsXFxyXFxuLnNoYWRvdzo6YWZ0ZXIsXFxyXFxuLnNoYWRvdy10d286OmJlZm9yZSxcXHJcXG4uc2hhZG93LXR3bzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzY2FsZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC45KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDU3cHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMTE2cHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxNzVweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjpiZWZvcmUge1xcclxcbiAgbGVmdDogMjMycHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93LXR3bzo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMjg1cHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjVzO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFh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Q1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlLWhlYWRlciB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1zY29yZSxcXHJcXG4uc2NvcmUtYm9hcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTU3OTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogOHB4IDVweCA4cHggOHB4ICM4ODg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdWx0cyB7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYjRlYztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA3MCU7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IDYwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubCxcXHJcXG4uZSxcXHJcXG4uYSxcXHJcXG4uZCxcXHJcXG4ucixcXHJcXG4uYixcXHJcXG4ubyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDMwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAxLjEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTglIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC03cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmwge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmUge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYSB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5kIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnIge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYiB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5vIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSxcXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3csXFxyXFxuLnNoYWRvdy10d28ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlcixcXHJcXG4uc2hhZG93LXR3bzo6YmVmb3JlLFxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyNSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogNTdweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMTZweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDE3NXB4O1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAyMzJweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBsZWZ0OiAyODVweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgYXBpVXJsLFxuICBib2FyZCxcbiAgcmVmcmVzaEJ0bixcbiAgZm9ybSxcbiAgbmFtZUlucHV0LFxuICBzY29yZUlucHV0LFxuICByZXN1bHRzLFxufSBmcm9tICcuL21vZHVsZXMvdmFyaWFibGVzLmpzJztcblxuY29uc3QgcmVuZGVyTGlzdCA9IChzY29yZXMpID0+IHtcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke3Njb3JlLnVzZXJ9OiAke3Njb3JlLnNjb3JlfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCByZW5kZXJTY29yZXMgPSAoKSA9PiB7XG4gIGdldFNjb3JlcygpLnRoZW4oKGRhdGEpID0+IHJlbmRlckxpc3QoZGF0YS5yZXN1bHQpKTtcbn07XG5cbmdldFNjb3JlcygpO1xuXG5jb25zdCBhZGRTY29yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgc2NvcmUgPSBzY29yZUlucHV0LnZhbHVlO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IG5hbWUsIHNjb3JlIH0pLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZm9ybS5yZXNldChkYXRhKTtcbn07XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRTY29yZSgpLnRoZW4oKCkgPT4ge1xuICAgIHJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICByZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcmVzdWx0cy5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3Jyk7XG4gICAgfSwgMjUwMCk7XG4gIH0pO1xufSk7XG5cbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJTY29yZXMpO1xucmVuZGVyU2NvcmVzKCk7XG4iLCJjb25zdCBnYW1lSUQgPSAnVXp5d3pmZGdWM2dZdU5WR1hJd1gnO1xuY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7Z2FtZUlEfS9zY29yZXMvYDtcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtYnRuJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCBzY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG5jb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKTtcblxucmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbmV4cG9ydCB7XG4gIGdhbWVJRCwgYXBpVXJsLCBib2FyZCwgcmVmcmVzaEJ0biwgZm9ybSwgbmFtZUlucHV0LCBzY29yZUlucHV0LCByZXN1bHRzLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==