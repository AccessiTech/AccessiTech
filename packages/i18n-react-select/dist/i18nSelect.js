"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namespace = exports.default = exports.I18nSelect = exports.ESCAPE = exports.EN = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EN = 'en';
exports.EN = EN;
var namespace = '@accessitech/i18n-react-select/';
exports.namespace = namespace;
var ESCAPE = 'Escape';
exports.ESCAPE = ESCAPE;
var I18nSelect = function I18nSelect(props) {
  var _ref = props || {},
    languageKeys = _ref.languageKeys,
    displayStrings = _ref.displayStrings,
    translationFlags = _ref.translationFlags,
    currentLang = _ref.currentLang,
    onChange = _ref.onChange,
    onClose = _ref.onClose;
  var hasFlags = typeof translationFlags !== 'undefined';
  var onEscapeKey = function onEscapeKey(e) {
    if (e.key === ESCAPE && onClose) {
      onClose(e);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selector-container".concat(hasFlags ? ' hasFlags' : '')
  }, hasFlags ? /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-hidden": "true",
    className: "language-flag"
  }, translationFlags[currentLang || EN]) : '', /*#__PURE__*/_react.default.createElement(_Form.default.Select, {
    "aria-label": "Language Selection",
    className: "language-select",
    defaultValue: currentLang,
    onChange: onChange,
    onKeyDown: onEscapeKey
  }, languageKeys.map(function (lang, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      className: "language-select-option",
      key: "".concat(namespace, "/").concat(i),
      value: lang
      // todo: aria-label={fullStrings[lang]}
    }, displayStrings[lang]);
  })));
};
exports.I18nSelect = I18nSelect;
var _default = I18nSelect;
exports.default = _default;