webpackHotUpdate(0,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(125);\n\nvar _reactYoutubePlayer = __webpack_require__(421);\n\nvar _reactYoutubePlayer2 = _interopRequireDefault(_reactYoutubePlayer);\n\nvar _player = __webpack_require__(172);\n\nvar _player2 = _interopRequireDefault(_player);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = exports.App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'app' },\n        _react2.default.createElement('div', { id: 'player' }),\n        _react2.default.createElement(_reactYoutubePlayer2.default, { videoId: 'XxVg_s8xAms', playbackState: 'unstarted', configuration: { showinfo: 0, controls: 0 } }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          'index working'\n        ),\n        _react2.default.createElement(_player2.default, null)\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\n;\n\nApp.PropTypes = {};\n\nfunction mapStateToProps(state) {\n  return {};\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {};\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9hcHAvaW5kZXguanM/NGM0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFlvdXR1YmVQbGF5ZXIgZnJvbSAncmVhY3QteW91dHViZS1wbGF5ZXInO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL3BsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cbiAgICAgICAgPGRpdiBpZD0ncGxheWVyJz48L2Rpdj5cbiAgICAgICAgPFlvdXR1YmVQbGF5ZXIgdmlkZW9JZD0nWHhWZ19zOHhBbXMnIHBsYXliYWNrU3RhdGU9J3Vuc3RhcnRlZCcgY29uZmlndXJhdGlvbj17eyBzaG93aW5mbzogMCwgY29udHJvbHM6IDAgfX0gLz5cbiAgICAgICAgPGgxPmluZGV4IHdvcmtpbmc8L2gxPlxuICAgICAgICA8UGxheWVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5BcHAuUHJvcFR5cGVzID0ge1xuXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2NvbnRhaW5lcnMvYXBwL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU9BOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})