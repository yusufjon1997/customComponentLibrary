'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".btn {\n  padding: 10px 15px;\n  color: white;\n  background: blue;\n}\n\n.outline {\n  border: 1px solid blue;\n  background-color: white;\n}\n\n.primary {\n  background-color: blue;\n}\n\n.success {\n  background-color: green;\n}\n\n.warning {\n  background-color: yellow;\n}";
styleInject(css_248z);

function Button(_a) {
    var name = _a.name, type = _a.type, outline = _a.outline, onClick = _a.onClick;
    var isOutlined = outline ? 'outlined' : '';
    return (React__default["default"].createElement("button", { className: "btn ".concat(type, " ").concat(isOutlined), onClick: onClick }, name));
}

var Chart = function () {
    return (React__default["default"].createElement("div", null, "Chart"));
};

exports.Button = Button;
exports.Chart = Chart;
//# sourceMappingURL=index.js.map
