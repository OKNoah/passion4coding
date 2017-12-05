webpackHotUpdate(5,{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/noah/Projects/passion4coding/components/Checkbox.js";


var styles = {};

exports.default = function (_ref) {
  var children = _ref.children,
      input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var showError = touched && error;

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("label", {
    style: input.value ? styles.labelChecked : styles.label,
    htmlFor: "Checkbox_" + input.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("input", (0, _extends3.default)({}, input, {
    id: "Checkbox_" + input.name,
    style: input.value ? styles.checkboxChecked : styles.checkbox,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement("span", { style: styles.text, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, children)), showError && _react2.default.createElement("span", { style: styles.error, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, error));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjaGlsZHJlbiIsImlucHV0IiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsInNob3dFcnJvciIsInZhbHVlIiwibGFiZWxDaGVja2VkIiwibGFiZWwiLCJuYW1lIiwiY2hlY2tib3hDaGVja2VkIiwiY2hlY2tib3giLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFOLEFBQWUsQUFFZjs7a0JBQWUsZ0JBQW1EO01BQWhELEFBQWdELGdCQUFoRCxBQUFnRDtNQUF0QyxBQUFzQyxhQUF0QyxBQUFzQzt1QkFBL0IsQUFBK0I7TUFBdkIsQUFBdUIsb0JBQXZCLEFBQXVCO01BQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ2hFOztNQUFNLFlBQVksV0FBbEIsQUFBNkIsQUFFN0I7O3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTtXQUNTLE1BQUEsQUFBTSxRQUFRLE9BQWQsQUFBcUIsZUFBZSxPQUQ3QyxBQUNvRCxBQUNsRDsyQkFBcUIsTUFGdkIsQUFFNkI7O2dCQUY3QjtrQkFBQSxBQUlFO0FBSkY7QUFDRSx1RUFHQSxBQUNNO3NCQUNZLE1BRmxCLEFBRXdCLEFBQ3RCO1dBQU8sTUFBQSxBQUFNLFFBQVEsT0FBZCxBQUFxQixrQkFBa0IsT0FIaEQsQUFHdUQsQUFDckQ7VUFKRixBQUlPOztnQkFKUDtrQkFKRixBQUlFLEFBTUE7QUFOQTtBQUVFLHVCQUlGLGNBQUEsVUFBTSxPQUFPLE9BQWIsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQTJCO0FBQTNCO0tBWEosQUFDRSxBQVVFLEFBRUQseUNBQ0MsY0FBQSxVQUFNLE9BQU8sT0FBYixBQUFvQjtnQkFBcEI7a0JBQUEsQUFBNEI7QUFBNUI7R0FBQSxFQWZOLEFBQ0UsQUFjSSxBQUlQO0FBdEJEIiwiZmlsZSI6IkNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoL1Byb2plY3RzL3Bhc3Npb240Y29kaW5nIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/noah/Projects/passion4coding/components/Checkbox.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/noah/Projects/passion4coding/components/Checkbox.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wMmMxMDY4YzBiZTg3YjdlODhlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja2JveC5qcz9mYzllYWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3Qgc3R5bGVzID0ge31cblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4ge1xuICBjb25zdCBzaG93RXJyb3IgPSB0b3VjaGVkICYmIGVycm9yO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBzdHlsZT17aW5wdXQudmFsdWUgPyBzdHlsZXMubGFiZWxDaGVja2VkIDogc3R5bGVzLmxhYmVsfVxuICAgICAgICBodG1sRm9yPXtgQ2hlY2tib3hfJHtpbnB1dC5uYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICBpZD17YENoZWNrYm94XyR7aW5wdXQubmFtZX1gfVxuICAgICAgICAgIHN0eWxlPXtpbnB1dC52YWx1ZSA/IHN0eWxlcy5jaGVja2JveENoZWNrZWQgOiBzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50ZXh0fT57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtzaG93RXJyb3IgJiZcbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DaGVja2JveC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFsQkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==