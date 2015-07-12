(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["MaterialDesignReact"] = factory(require("React"));
	else
		root["MaterialDesignReact"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _button = __webpack_require__(/*! ./button */ 1);
	
	var _button2 = _interopRequireDefault(_button);
	
	exports['default'] = {
	  Button: _button2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./src/lib/button.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _decoratorsMdlHooked = __webpack_require__(/*! ./decorators/mdlHooked */ 3);
	
	var _decoratorsMdlHooked2 = _interopRequireDefault(_decoratorsMdlHooked);
	
	var Button = (function (_React$Component) {
	  _inherits(Button, _React$Component);
	
	  function Button() {
	    _classCallCheck(this, _Button);
	
	    _get(Object.getPrototypeOf(_Button.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'button',
	        this.props,
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      // floating action button
	      fab: _react2['default'].PropTypes.bool,
	      // add color
	      colored: _react2['default'].PropTypes.bool,
	      // add accent color
	      accent: _react2['default'].PropTypes.bool,
	      // raised button
	      raised: _react2['default'].PropTypes.bool,
	      // ripple effect
	      ripple: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      fab: false,
	      colored: false,
	      accent: false,
	      raised: false,
	      ripple: false
	    },
	    enumerable: true
	  }]);
	
	  var _Button = Button;
	  Button = (0, _decoratorsMdlHooked2['default'])({
	    block: 'button',
	    modifiers: ['fab', 'colored', 'accent', 'raised'],
	    ripple: true
	  })(Button) || Button;
	  return Button;
	})(_react2['default'].Component);
	
	exports['default'] = Button;
	module.exports = exports['default'];
	// jsExtras: ['ripple-effect']
	// ugradable: true - default

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!******************************************!*\
  !*** ./src/lib/decorators/mdlHooked.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = mdlHooked;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _omit = __webpack_require__(/*! omit */ 4);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	// import isString from 'is-string';
	
	function mdlHooked(config) {
	  return function decorator(Target) {
	
	    var MDRComponent = (function (_React$Component) {
	      _inherits(MDRComponent, _React$Component);
	
	      function MDRComponent(props) {
	        _classCallCheck(this, MDRComponent);
	
	        _get(Object.getPrototypeOf(MDRComponent.prototype), 'constructor', this).call(this, props);
	        this.state = {
	          childProps: prepareChildProps(this.props, config)
	        };
	      }
	
	      _createClass(MDRComponent, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	          var childProps = prepareChildProps(props, config);
	          this.setState({ childProps: childProps });
	        }
	      }, {
	        key: 'componentDidUpdate',
	
	        // credit: http://quaintous.com/2015/07/09/react-components-with-mdl/
	        value: function componentDidUpdate() {
	          if (config.upgradable && window.componentHandler) {
	            window.componentHandler.upgradeDom();
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(Target, this.state.childProps);
	        }
	      }]);
	
	      return MDRComponent;
	    })(_react2['default'].Component);
	
	    return MDRComponent;
	  };
	}
	
	/*
	 * returns props for wrapped element
	 * 1) creates mdl css classes from processed config
	 * 2) removes configured props
	 * 3) merges and returns filtered props with mdl className
	 */
	function prepareChildProps(props, config) {
	  var block = config.block;
	  var _config$modifiers = config.modifiers;
	  var modifiers = _config$modifiers === undefined ? [] : _config$modifiers;
	  var _config$ripple = config.ripple;
	  var ripple = _config$ripple === undefined ? false : _config$ripple;
	  var _config$jsExtras = config.jsExtras;
	  var jsExtras = _config$jsExtras === undefined ? [] : _config$jsExtras;
	  var _config$upgradable = config.upgradable;
	  var upgradable = _config$upgradable === undefined ? true : _config$upgradable;
	
	  var omitModifiers = (0, _omit2['default'])(modifiers);
	
	  // 1)
	  var blockClassName = 'mdl-' + block;
	  var blockJSClassName = upgradable ? 'mdl-js-' + block : '';
	  var rippleClassName = upgradable && props['ripple'] ? 'mdl-js-ripple-effect' : '';
	  var jsExtrasClassName = jsExtras.filter(function (e) {
	    return upgradable && props[m] === true;
	  }).map(function (e) {
	    return 'mdl-js-' + block;
	  }).join('  ');
	  var modifierClassName = modifiers.filter(function (m) {
	    return props[m] === true;
	  }).map(function (m) {
	    return 'mdl-' + block + '--' + m;
	  }).join('  ');
	  var propsClassName = props.className || '';
	
	  var className = [blockClassName, blockJSClassName, rippleClassName, jsExtrasClassName, modifierClassName, propsClassName].join('  ');
	
	  // 2)
	  var filteredProps = omitModifiers(props);
	
	  // 3)
	  Object.assign(filteredProps, { className: className });
	  return filteredProps;
	}
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!*************************!*\
  !*** ./~/omit/index.js ***!
  \*************************/
/***/ function(module, exports) {

	/**
	  # omit
	
	  Remove values from an object (or an array of objects) based on key, value or
	  an evaluator function.
	
	  ## Example Usage
	
	  <<< examples/object.js
	
	**/
	module.exports = function(rule) {
	
	  function omit(target) {
	    var acceptVal;
	    var copy = {};
	    var key;
	    var val;
	
	    // in the case that we have been passed a falsey value, just return that
	    if (! target) {
	      return target;
	    }
	
	    if (Array.isArray(target)) {
	      return target.map(omit);
	    }
	
	    for (var key in target) {
	      if (target.hasOwnProperty(key)) {
	        // if we don't have a valid rule, just accept the value
	        acceptVal = typeof rule != 'function';
	
	        // if we only have a key check, then do a very simple test
	        if (rule.length === 1) {
	          acceptVal = !rule(key);
	        }
	        else {
	          val = target[key];
	          acceptVal = !rule(key, val = target[key], target);
	        }
	
	        if (acceptVal) {
	          copy[key] = val || target[key];
	        }
	      }
	    }
	
	    return copy;
	  }
	
	  function omitWhenEqual(value) {
	    return function(key) {
	      return key === value;
	    };
	  }
	
	  function omitWhenIn(target) {
	    return function(key) {
	      return target.indexOf(key) >= 0;
	    };
	  }
	
	  if (typeof rule == 'string' || (rule instanceof String)) {
	    rule = omitWhenEqual(rule);
	  }
	
	  if (Array.isArray(rule)) {
	    rule = omitWhenIn(rule);
	  }
	
	  return arguments[1] !== undefined ? omit(arguments[1]) : omit;
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=debug/index.js.map