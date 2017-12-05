'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFinalForm = require('react-final-form');

var _Checkbox = require('../components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _categories = require('../json/categories.json');

var _categories2 = _interopRequireDefault(_categories);

var _verticals = require('../json/verticals.json');

var _verticals2 = _interopRequireDefault(_verticals);

var _courses = require('../json/courses.json');

var _courses2 = _interopRequireDefault(_courses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/noah/Projects/passion4coding/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'submitHandler',
    value: function submitHandler(values) {
      return values;
    }
  }, {
    key: 'render',
    value: function render() {
      var verts = _verticals2.default.map(function (vert, index) {
        return _react2.default.createElement(_reactFinalForm.Field, {
          key: index,
          component: _Checkbox2.default,
          name: 'verticals[' + index + ']',
          value: vert.Id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, vert.Name);
      });

      return _react2.default.createElement(_reactFinalForm.Form, {
        onSubmit: this.submitHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, function (_ref) {
        var handleSubmit = _ref.handleSubmit,
            values = _ref.values;

        var selectedVerticals = values.verticals && values.verticals.map(function (vert, index) {
          if (vert) {
            return _verticals2.default[index].Id;
          }

          return null;
        });

        var selectedCategories = values.categories && values.categories.map(function (cat, index) {
          if (cat) {
            return _categories2.default[index].Id;
          }

          return null;
        });

        var showCatgeories = values.verticals && values.verticals.filter(function (v) {
          return v !== null;
        });
        var showCourses = values.categories && values.categories.filter(function (v) {
          return v !== null;
        });

        var cats = _categories2.default.map(function (cat, index) {
          if (values.verticals && selectedVerticals.includes(+cat.Verticals)) {
            return _react2.default.createElement(_reactFinalForm.Field, {
              key: cat.Id,
              component: _Checkbox2.default,
              name: 'categories[' + index + ']',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            }, cat.Name);
          }

          return null;
        });

        var courseList = _courses2.default.map(function (course, index) {
          if (values.categories && selectedCategories.includes(+course.Categories)) {
            return _react2.default.createElement(_reactFinalForm.Field, {
              key: course.Id,
              component: _Checkbox2.default,
              name: 'courses[' + index + ']',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            }, course.Name);
          }

          return null;
        });

        return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _react2.default.createElement('h1', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, 'Pick some verticals'), verts, showCatgeories && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react2.default.createElement('h1', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, 'Pick some categories'), cats), showCourses && showCatgeories && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react2.default.createElement('h1', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, 'Now choose some courses'), courseList));
      });
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkZpZWxkIiwiQ2hlY2tib3giLCJjYXRlZ29yaWVzIiwidmVydGljYWxzIiwiY291cnNlcyIsIkluZGV4IiwidmFsdWVzIiwidmVydHMiLCJtYXAiLCJ2ZXJ0IiwiaW5kZXgiLCJJZCIsIk5hbWUiLCJzdWJtaXRIYW5kbGVyIiwiaGFuZGxlU3VibWl0Iiwic2VsZWN0ZWRWZXJ0aWNhbHMiLCJzZWxlY3RlZENhdGVnb3JpZXMiLCJjYXQiLCJzaG93Q2F0Z2VvcmllcyIsImZpbHRlciIsInYiLCJzaG93Q291cnNlcyIsImNhdHMiLCJpbmNsdWRlcyIsIlZlcnRpY2FscyIsImNvdXJzZUxpc3QiLCJjb3Vyc2UiLCJDYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFJQzs7Ozs7Ozs7Ozs7a0NBQ0osQSxRQUFpQixBQUM5QjthQUFBLEFBQU8sQUFDUjs7Ozs2QkFFUyxBQUNSO1VBQU0sNEJBQVEsQUFBVSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBUDsrQkFDMUIsQUFBQztlQUFELEFBQ08sQUFDTDtBQUZGLEFBRWEsQUFDWDsrQkFBQSxBQUFtQixRQUhyQixBQUlFO2lCQUFPLEtBSlQsQUFJYzs7c0JBSmQ7d0JBQUEsQUFNRztBQU5IO0FBQ0UsU0FERixPQUQwQixBQUMxQixBQU1RO0FBUFYsQUFBYyxBQVdkLE9BWGM7OzZCQVlaLEFBQUM7a0JBQ1csS0FEWixBQUNpQjs7b0JBRGpCO3NCQUFBLEFBR0c7QUFISDtBQUNFLE9BREYsa0JBRytCO1lBQTFCLEFBQTBCLG9CQUExQixBQUEwQjtZQUFaLEFBQVksY0FBWixBQUFZLEFBQzNCOztZQUFNLG9CQUFvQixPQUFBLEFBQU8sb0JBQWEsQUFBTyxVQUFQLEFBQWlCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ2xGO2NBQUEsQUFBSSxNQUFNLEFBQ1I7bUJBQU8sb0JBQUEsQUFBVSxPQUFqQixBQUF3QixBQUN6QjtBQUVEOztpQkFBQSxBQUFPLEFBQ1I7QUFORCxBQUE4QyxBQVE5QyxTQVI4Qzs7WUFReEMscUJBQXFCLE9BQUEsQUFBTyxxQkFBYyxBQUFPLFdBQVAsQUFBa0IsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLE9BQVUsQUFDcEY7Y0FBQSxBQUFJLEtBQUssQUFDUDttQkFBTyxxQkFBQSxBQUFXLE9BQWxCLEFBQXlCLEFBQzFCO0FBRUQ7O2lCQUFBLEFBQU8sQUFDUjtBQU5ELEFBQWdELEFBUWhELFNBUmdEOztZQVExQyxpQkFBaUIsT0FBQSxBQUFPLG9CQUFhLEFBQU8sVUFBUCxBQUFpQixPQUFPLGFBQUE7aUJBQUssTUFBTCxBQUFXO0FBQTlFLEFBQTJDLEFBQzNDLFNBRDJDO1lBQ3JDLGNBQWMsT0FBQSxBQUFPLHFCQUFjLEFBQU8sV0FBUCxBQUFrQixPQUFPLGFBQUE7aUJBQUssTUFBTCxBQUFXO0FBQTdFLEFBQXlDLEFBRXpDLFNBRnlDOztZQUVuQyw0QkFBTyxBQUFXLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxPQUFVLEFBQzFDO2NBQUksT0FBQSxBQUFPLGFBQWEsa0JBQUEsQUFBa0IsU0FBUyxDQUFDLElBQXBELEFBQXdCLEFBQWdDLFlBQVksQUFDbEU7bUNBQ0UsQUFBQzttQkFDTSxJQURQLEFBQ1csQUFDVDtBQUZGLEFBRWEsQUFDWDtvQ0FBQSxBQUFvQixRQUh0Qjs7MEJBQUE7NEJBQUEsQUFLRztBQUxIO0FBQ0UsYUFERixNQURGLEFBQ0UsQUFLTyxBQUdWO0FBRUQ7O2lCQUFBLEFBQU8sQUFDUjtBQWRELEFBQWEsQUFnQmIsU0FoQmE7O1lBZ0JQLCtCQUFhLEFBQVEsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLE9BQVUsQUFDaEQ7Y0FBSSxPQUFBLEFBQU8sY0FBYyxtQkFBQSxBQUFtQixTQUFTLENBQUMsT0FBdEQsQUFBeUIsQUFBb0MsYUFBYSxBQUN4RTttQ0FDRSxBQUFDO21CQUNNLE9BRFAsQUFDYyxBQUNaO0FBRkYsQUFFYSxBQUNYO2lDQUFBLEFBQWlCLFFBSG5COzswQkFBQTs0QkFBQSxBQUtHO0FBTEg7QUFDRSxhQURGLFNBREYsQUFDRSxBQUtVLEFBR2I7QUFFRDs7aUJBQUEsQUFBTyxBQUNSO0FBZEQsQUFBbUIsQUFnQm5CLFNBaEJtQjs7K0JBaUJqQixjQUFBLFVBQU0sVUFBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREYsQUFDRSxBQUNDLHdCQUZILEFBR0cseUNBQ0MsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FERixBQUNFLEFBQ0MseUJBTlAsQUFJSSxBQUtELHNCQUFBLEFBQWUsa0NBQ2QsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FERixBQUNFLEFBQ0MsNEJBYlQsQUFDRSxBQVVJLEFBT1A7QUExRUwsQUFDRSxBQTRFSDs7Ozs7QUE5RmdDLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL25vYWgvUHJvamVjdHMvcGFzc2lvbjRjb2RpbmcifQ==