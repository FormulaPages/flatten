(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-isarray'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-isarray'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.ISARRAY);
        global.FLATTEN = mod.exports;
    }
})(this, function (exports, module, _formulaIsarray) {
    'use strict';

    module.exports = FLATTEN;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ISARRAY = _interopRequireDefault(_formulaIsarray);

    function FLATTEN(array) {
        return array.reduce(function (a, b) {
            if ((0, _ISARRAY['default'])(a)) {
                return a.concat(b);
            } else {
                return [a].concat(b);
            }
        });
    }
});
