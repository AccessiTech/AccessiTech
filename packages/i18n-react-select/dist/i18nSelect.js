"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namespace = exports.default = exports.I18nSelect = exports.EN = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("react-bootstrap/Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EN = 'en';
exports.EN = EN;
var namespace = '@accessitech/i18n-react-select/';
exports.namespace = namespace;

var I18nSelect = function I18nSelect(props) {
  var _ref = props || {},
      lang = _ref.lang,
      languageKeys = _ref.languageKeys,
      displayStrings = _ref.displayStrings,
      translationFlags = _ref.translationFlags,
      currentLang = _ref.currentLang,
      onChange = _ref.onChange;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selector-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-hidden": "true",
    className: "language-flag"
  }, translationFlags[lang || EN]), /*#__PURE__*/_react.default.createElement(_Form.default.Select, {
    "aria-label": "Language Selection",
    className: "language-select",
    defaultValue: currentLang,
    onChange: onChange
  }, languageKeys.map(function (lang, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      className: "language-select-option",
      key: "".concat(namespace, "/").concat(i),
      value: lang
    }, displayStrings[lang]);
  })));
};

exports.I18nSelect = I18nSelect;
var _default = I18nSelect;
exports.default = _default;