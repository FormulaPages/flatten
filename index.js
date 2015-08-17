(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.FLATTEN = mod.exports;
    }
})(this, function (exports, module) {
    "use strict";

    module.exports = FLATTEN;

    function FLATTEN(array) {
        var a = array;
        if (a.constructor.name === "range") {
            var a = a.values();
        }

        var r = [];

        function _flatten(a) {
            for (var i = 0; i < a.length; i++) {
                if (typeof a[i] === "undefined" || a[i] === null) {
                    continue; // empty cell or variable...just keep rolling
                } else if (a[i].constructor.name === "range") {
                    _flatten(a[i].values());
                } else if (a[i].constructor == Array) {
                    _flatten(a[i]);
                } else {
                    r.push(a[i]);
                }
            }
            return r;
        }

        return _flatten(a);
    }
});
