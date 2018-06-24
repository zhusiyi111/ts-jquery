"use strict";
exports.__esModule = true;
var jQuery = (function () {
    function jQuery(selector) {
        var nodes = document.querySelectorAll(selector);
        var result = {};
        for (var i in nodes) {
            if (nodes.hasOwnProperty(i)) {
                this[i] = nodes[i];
            }
        }
        this['length'] = nodes.length;
    }
    jQuery.prototype.html = function (html) {
        for (var i in this) {
            this[i].innerHTML = html;
        }
    };
    return jQuery;
}());
function $(selector) {
    return new jQuery(selector);
}
window.$ = $;
exports["default"] = $;
//# sourceMappingURL=index.js.map