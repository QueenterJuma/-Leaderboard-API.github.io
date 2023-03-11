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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 25px;\r\n  background-color: rgba(147, 14, 187, 0.623);\r\n}\r\n\r\nh1,\r\nh3 {\r\n  color: #fffbeb;\r\n}\r\n\r\nh1 {\r\n  font-weight: bolder;\r\n  font-size: 70px;\r\n  margin: 3rem;\r\n}\r\n\r\nh3 {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  gap: 150px;\r\n  justify-content: center;\r\n  margin: 100px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .bouncing-heading {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 3rem;\r\n  }\r\n}\r\n\r\n.add-score,\r\n.score-board {\r\n  width: 100%;\r\n}\r\n\r\n.board {\r\n  border: 5px solid #ccc;\r\n  background-color: #495579;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 8px 5px 8px 8px #888;\r\n  overflow-y: scroll;\r\n  max-height: 560px;\r\n  width: 100%;\r\n}\r\n\r\n.board li {\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\n.board li:nth-child(even) {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.score-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.board-item {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.refresh-btn {\r\n  width: 150px;\r\n  font-size: 25px;\r\n  height: 50px;\r\n}\r\n\r\n#results {\r\n  min-width: 300px;\r\n  background-color: #92b4ec;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 70%;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  top: 100px;\r\n}\r\n\r\n.view {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    top: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    left: 60%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  color: #fffbeb;\r\n  font-weight: bolder;\r\n  margin: 50px;\r\n}\r\n\r\n.bouncing-heading {\r\n  display: flex;\r\n\r\n  /* align-items: center; */\r\n}\r\n\r\n.l,\r\n.e,\r\n.a,\r\n.d,\r\n.r,\r\n.b,\r\n.o {\r\n  color: #fffbeb;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n  margin: 3px;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 0;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  25% {\r\n    transform: scaleX(0.4);\r\n  }\r\n\r\n  50% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  75% {\r\n    transform: scaleX(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 57px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 116px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 175px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 232px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 285px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 25px;\r\n  background-color: rgba(147, 14, 187, 0.623);\r\n}\r\n\r\nh1,\r\nh3 {\r\n  color: #fffbeb;\r\n}\r\n\r\nh1 {\r\n  font-weight: bolder;\r\n  font-size: 70px;\r\n  margin: 3rem;\r\n}\r\n\r\nh3 {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  gap: 150px;\r\n  justify-content: center;\r\n  margin: 100px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .bouncing-heading {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .score-header {\r\n    gap: 3rem;\r\n  }\r\n}\r\n\r\n.add-score,\r\n.score-board {\r\n  width: 100%;\r\n}\r\n\r\n.board {\r\n  border: 5px solid #ccc;\r\n  background-color: #495579;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  box-shadow: 8px 5px 8px 8px #888;\r\n  overflow-y: scroll;\r\n  max-height: 560px;\r\n  width: 100%;\r\n}\r\n\r\n.board li {\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\n.board li:nth-child(even) {\r\n  background-color: aquamarine;\r\n}\r\n\r\n.score-board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  padding-top: 15px;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.score-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.board-item {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n}\r\n\r\ninput {\r\n  display: flex;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.submit {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.refresh-btn {\r\n  width: 150px;\r\n  font-size: 25px;\r\n  height: 50px;\r\n}\r\n\r\n#results {\r\n  min-width: 300px;\r\n  background-color: #92b4ec;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  padding: 16px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 70%;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  top: 100px;\r\n}\r\n\r\n.view {\r\n  visibility: visible;\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n  from {\r\n    top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    top: 30px;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    left: 60%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {\r\n    right: 30px;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    right: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  color: #fffbeb;\r\n  font-weight: bolder;\r\n  margin: 50px;\r\n}\r\n\r\n.bouncing-heading {\r\n  display: flex;\r\n\r\n  /* align-items: center; */\r\n}\r\n\r\n.l,\r\n.e,\r\n.a,\r\n.d,\r\n.r,\r\n.b,\r\n.o {\r\n  color: #fffbeb;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n  margin: 3px;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 0;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  25% {\r\n    transform: scaleX(0.4);\r\n  }\r\n\r\n  50% {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  75% {\r\n    transform: scaleX(0.9);\r\n  }\r\n\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 57px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 116px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 175px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 232px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 285px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVhZGVyYm9hcmQtYXBpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8tbGVhZGVyYm9hcmQtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy1sZWFkZXJib2FyZC1hcGkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLWxlYWRlcmJvYXJkLWFwaS8uL3NyYy9tb2R1bGVzL3ZhcmlhYmxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NywgMTQsIDE4NywgMC42MjMpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlLWhlYWRlciB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1zY29yZSxcXHJcXG4uc2NvcmUtYm9hcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTU3OTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogOHB4IDVweCA4cHggOHB4ICM4ODg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdWx0cyB7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYjRlYztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA3MCU7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IDYwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubCxcXHJcXG4uZSxcXHJcXG4uYSxcXHJcXG4uZCxcXHJcXG4ucixcXHJcXG4uYixcXHJcXG4ubyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDMwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAxLjEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTglIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC03cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmwge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmUge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYSB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5kIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnIge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYiB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5vIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSxcXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3csXFxyXFxuLnNoYWRvdy10d28ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlcixcXHJcXG4uc2hhZG93LXR3bzo6YmVmb3JlLFxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyNSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogNTdweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMTZweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDE3NXB4O1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAyMzJweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBsZWZ0OiAyODVweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztBQUM3Qzs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Us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Q3pDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NywgMTQsIDE4NywgMC42MjMpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlLWhlYWRlciB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1zY29yZSxcXHJcXG4uc2NvcmUtYm9hcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTU3OTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogOHB4IDVweCA4cHggOHB4ICM4ODg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBtYXgtaGVpZ2h0OiA1NjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtc2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzdWx0cyB7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyYjRlYztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBsZWZ0OiA3MCU7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi52aWV3IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IDYwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy1oZWFkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubCxcXHJcXG4uZSxcXHJcXG4uYSxcXHJcXG4uZCxcXHJcXG4ucixcXHJcXG4uYixcXHJcXG4ubyB7XFxyXFxuICBjb2xvcjogI2ZmZmJlYjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDMwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAxLjEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTglIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC03cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmwge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmUge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYSB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5kIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnIge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYiB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5vIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSxcXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3csXFxyXFxuLnNoYWRvdy10d28ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlcixcXHJcXG4uc2hhZG93LXR3bzo6YmVmb3JlLFxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyNSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogNTdweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMTZweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDE3NXB4O1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAyMzJweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBsZWZ0OiAyODVweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgYXBpVXJsLFxuICBib2FyZCxcbiAgcmVmcmVzaEJ0bixcbiAgZm9ybSxcbiAgbmFtZUlucHV0LFxuICBzY29yZUlucHV0LFxuICByZXN1bHRzLFxufSBmcm9tICcuL21vZHVsZXMvdmFyaWFibGVzLmpzJztcblxuY29uc3QgcmVuZGVyTGlzdCA9IChzY29yZXMpID0+IHtcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIHNjb3Jlcy5mb3JFYWNoKChzY29yZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGAke3Njb3JlLnVzZXJ9OiAke3Njb3JlLnNjb3JlfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCByZW5kZXJTY29yZXMgPSAoKSA9PiB7XG4gIGdldFNjb3JlcygpLnRoZW4oKGRhdGEpID0+IHJlbmRlckxpc3QoZGF0YS5yZXN1bHQpKTtcbn07XG5cbmdldFNjb3JlcygpO1xuXG5jb25zdCBhZGRTY29yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3Qgc2NvcmUgPSBzY29yZUlucHV0LnZhbHVlO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IG5hbWUsIHNjb3JlIH0pLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZm9ybS5yZXNldChkYXRhKTtcbn07XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRTY29yZSgpLnRoZW4oKCkgPT4ge1xuICAgIHJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICByZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ3ZpZXcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgcmVzdWx0cy5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3Jyk7XG4gICAgfSwgMjUwMCk7XG4gIH0pO1xufSk7XG5cbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJTY29yZXMpO1xucmVuZGVyU2NvcmVzKCk7XG4iLCJjb25zdCBnYW1lSUQgPSAnVXp5d3pmZGdWM2dZdU5WR1hJd1gnO1xuY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7Z2FtZUlEfS9zY29yZXMvYDtcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtYnRuJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCBzY29yZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG5jb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMnKTtcblxucmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbmV4cG9ydCB7XG4gIGdhbWVJRCwgYXBpVXJsLCBib2FyZCwgcmVmcmVzaEJ0biwgZm9ybSwgbmFtZUlucHV0LCBzY29yZUlucHV0LCByZXN1bHRzLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==