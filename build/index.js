/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/_commons/tw-media.js":
/*!**********************************!*\
  !*** ./src/_commons/tw-media.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






var MediaUpload = wp.editor.MediaUpload;

var TwMedia =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TwMedia, _React$Component);

  // Get this.props
  function TwMedia(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TwMedia);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TwMedia).call(this, props));
  } // When the image is selected then send the content to parent (onChange)


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TwMedia, [{
    key: "handleSelect",
    value: function handleSelect(media) {
      var _this$props = this.props,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'full' : _this$props$size,
          _this$props$field = _this$props.field,
          field = _this$props$field === void 0 ? 'image' : _this$props$field;
      var obj = {};
      obj[field] = media.sizes[size] ? media.sizes[size].url : media.url;
      this.props.onChange(obj);
    } // Simple: handleSelect that return null

  }, {
    key: "handleRemove",
    value: function handleRemove() {
      var _this$props$field2 = this.props.field,
          field = _this$props$field2 === void 0 ? 'image' : _this$props$field2;
      var obj = {};
      obj[field] = null;
      this.props.onChange(obj);
    } // Render handler Function

  }, {
    key: "handleRender",
    value: function handleRender(_ref) {
      var _this = this;

      var open = _ref.open;
      var _this$props2 = this.props,
          _this$props2$label = _this$props2.label,
          label = _this$props2$label === void 0 ? 'Aggiungi Media' : _this$props2$label,
          _this$props2$current = _this$props2.current,
          current = _this$props2$current === void 0 ? null : _this$props2$current;

      if (!!current) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "tw-image-field"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "preview",
          onClick: open,
          style: {
            backgroundImage: "url(".concat(this.props.current, ")")
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "actions"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: "#",
          onClick: function onClick() {
            return _this.handleRemove();
          }
        }, " \xD7 Remove ")));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        href: "#",
        className: "tw-add-image",
        onClick: open
      }, label);
    } // Return JSX

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$type = _this$props3.type,
          type = _this$props3$type === void 0 ? 'images/*' : _this$props3$type,
          _this$props3$value = _this$props3.value,
          value = _this$props3$value === void 0 ? '' : _this$props3$value;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
        type: type,
        value: value,
        onSelect: function onSelect(media) {
          return _this2.handleSelect(media);
        },
        render: function render(_ref2) {
          var open = _ref2.open;
          return _this2.handleRender({
            open: open
          });
        }
      });
    }
  }]);

  return TwMedia;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (TwMedia);

/***/ }),

/***/ "./src/_commons/tw-text.js":
/*!*********************************!*\
  !*** ./src/_commons/tw-text.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






var PlainText = wp.editor.PlainText;

var TwText =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TwText, _React$Component);

  // Get this.props
  function TwText(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TwText);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TwText).call(this, props));
  } // When the text is selected then send the content to parent (onTextChange)


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TwText, [{
    key: "handleChange",
    value: function handleChange(content) {
      var _this$props$field = this.props.field,
          field = _this$props$field === void 0 ? 'content' : _this$props$field;
      var obj = {};
      obj[field] = content || '';
      this.props.onChange(obj);
    } // Return JSX

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$current = _this$props.current,
          current = _this$props$current === void 0 ? '' : _this$props$current,
          _this$props$placehold = _this$props.placeholder,
          placeholder = _this$props$placehold === void 0 ? 'Text' : _this$props$placehold,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? 'content-plain-text' : _this$props$classes,
          _this$props$label = _this$props.label,
          label = _this$props$label === void 0 ? '' : _this$props$label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "label"
      }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
        className: classes,
        style: {
          height: 58
        },
        placeholder: placeholder,
        value: current,
        onChange: function onChange(content) {
          return _this.handleChange(content);
        }
      }));
    }
  }]);

  return TwText;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (TwText);

/***/ }),

/***/ "./src/components/addable-fields.js":
/*!******************************************!*\
  !*** ./src/components/addable-fields.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_tw_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_commons/tw-text */ "./src/_commons/tw-text.js");
/* harmony import */ var _commons_tw_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_commons/tw-media */ "./src/_commons/tw-media.js");





var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('tw/addable-gutenberg-block', {
  title: 'TW Addable Text Field',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: "text",
      selector: ".title",
      default: ''
    },
    items: {
      source: "query",
      selector: '.tw-item',
      default: [{
        index: 0
      }],
      query: {
        text: {
          type: 'string',
          source: "text",
          selector: ".tw-item-text",
          default: ''
        },
        image: {
          source: "attribute",
          selector: ".tw-item-image",
          attribute: "src",
          default: ''
        },
        index: {
          source: "attribute",
          selector: ".tw-item-text",
          attribute: "data-index",
          default: 0
        }
      }
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes;
    var items = attributes.items;

    var handleFieldUpdate = function handleFieldUpdate(update) {
      var newObject = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, attributes, update);

      props.setAttributes(newObject);
    }; // Function for adding a new empty item


    var addItemToItems = function addItemToItems() {
      var newItem = {
        index: props.attributes.items.length || 0,
        image: "",
        text: ""
      };
      props.setAttributes({
        items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes.items), [newItem])
      });
    };

    var editableAddableItems = items.sort(function (a, b) {
      return a.index - b.index;
    }).map(function (item) {
      // handle update fields
      var handleItemFieldUpdate = function handleItemFieldUpdate(update) {
        var newObject = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, item, update);

        props.setAttributes({
          items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items.filter(function (el) {
            return el.index !== item.index;
          })), [newObject])
        });
      }; // Remove an item of list (looped)


      var handleRemoveItem = function handleRemoveItem() {
        var newItems = items.filter(function (el) {
          return el.index !== item.index;
        }).map(function (t) {
          t.index = t.index > item.index ? t.index - 1 : t.index;
          return t;
        });
        props.setAttributes({
          items: newItems
        });
      }; // JSX for single ite in slider


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "tw-list-item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h5", {
        className: "head"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Elemento ", Number(item.index) + 1, ":"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
        className: "remove-item",
        onClick: handleRemoveItem
      }, __("Rimuovi"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_commons_tw_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Testo dell'elemento",
        field: "text",
        current: item.text,
        onChange: handleItemFieldUpdate
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_commons_tw_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
        field: 'image',
        current: item.image,
        onChange: handleItemFieldUpdate
      }));
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", {
      className: "tw-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h4", null, "TW Addable Text Sample"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_commons_tw_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Titolo della section",
      field: "title",
      current: attributes.title,
      onChange: handleFieldUpdate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "tw-list"
    }, editableAddableItems), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "tw-actions"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
      type: "button",
      className: "add-more components-button editor-post-publish-button is-button is-default is-primary is-large",
      onClick: addItemToItems
    }, __('Aggiungi elemento'))));
  },
  save: function save(props) {
    var attributes = props.attributes;
    var title = attributes.title,
        items = attributes.items;
    console.log(items);
    var listItemsHTML = items.map(function (item, index) {
      var text = item.text,
          image = item.image;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
        className: "tw-item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h4", {
        className: "tw-item-text",
        "data-index": index
      }, text), image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
        className: "tw-item-image",
        src: image,
        alt: ""
      }));
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
      className: "title"
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
      className: "tw-list"
    }, listItemsHTML));
  }
});

/***/ }),

/***/ "./src/components/dynamic-block.js":
/*!*****************************************!*\
  !*** ./src/components/dynamic-block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var ServerSideRender = wp.components.ServerSideRender;
registerBlockType('tw/dynamic-gutenberg-block', {
  title: 'TW Dynamic Block',
  icon: 'smiley',
  category: 'layout',
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "tw/dynamic-gutenberg-block",
      attributes: props.attributes
    });
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/components/hello-world.js":
/*!***************************************!*\
  !*** ./src/components/hello-world.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('tw/sample-gutenberg-block', {
  title: 'TW Hello World',
  icon: 'smiley',
  category: 'layout',
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hello wp, i'm a static block!");
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hello, wp!");
  }
});

/***/ }),

/***/ "./src/components/media-fields.js":
/*!****************************************!*\
  !*** ./src/components/media-fields.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_tw_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_commons/tw-text */ "./src/_commons/tw-text.js");
/* harmony import */ var _commons_tw_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_commons/tw-media */ "./src/_commons/tw-media.js");




var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('tw/media-gutenberg-block', {
  title: 'TW Media Field',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: "text",
      selector: ".title",
      default: ''
    },
    image: {
      source: "attribute",
      selector: "img.image",
      attribute: "src",
      default: ''
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes;

    var handleFieldUpdate = function handleFieldUpdate(update) {
      var newObject = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, update);

      props.setAttributes(newObject);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: "tw-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "TW Media Sample"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_commons_tw_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Titolo per l'immagine",
      field: "title",
      current: attributes.title,
      onChange: handleFieldUpdate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_commons_tw_media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      field: "image",
      current: attributes.image,
      onChange: handleFieldUpdate
    }));
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "title"
    }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      className: "image",
      src: attributes.image,
      alt: attributes.title
    }));
  }
});

/***/ }),

/***/ "./src/components/text-fields.js":
/*!***************************************!*\
  !*** ./src/components/text-fields.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_tw_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_commons/tw-text */ "./src/_commons/tw-text.js");



var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('tw/text-gutenberg-block', {
  title: 'TW Text Field',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: "text",
      selector: ".title",
      default: ''
    },
    text: {
      type: 'string',
      source: "text",
      selector: ".text",
      default: ''
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes;

    var handleFieldUpdate = function handleFieldUpdate(update) {
      var newObject = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, update);

      props.setAttributes(newObject);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: "tw-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "TW Text Sample"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_commons_tw_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Titolo della section",
      field: "title",
      current: attributes.title,
      onChange: handleFieldUpdate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_commons_tw_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Contenuto testuale",
      field: "text",
      current: attributes.text,
      onChange: handleFieldUpdate
    }));
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "title"
    }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "text"
    }, attributes.text));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_addable_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addable-fields */ "./src/components/addable-fields.js");
/* harmony import */ var _components_dynamic_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic-block */ "./src/components/dynamic-block.js");
/* harmony import */ var _components_hello_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hello-world */ "./src/components/hello-world.js");
/* harmony import */ var _components_text_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/text-fields */ "./src/components/text-fields.js");
/* harmony import */ var _components_media_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/media-fields */ "./src/components/media-fields.js");
// Components






/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map