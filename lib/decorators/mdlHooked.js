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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('omit');

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