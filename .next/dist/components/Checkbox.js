"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

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