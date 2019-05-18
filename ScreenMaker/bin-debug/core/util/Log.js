var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Log = (function () {
    function Log() {
    }
    Log.trace = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (App.gameConfig.isDebug) {
            params[0] = "[DebugLog]" + params[0];
            console.log.apply(console, params);
        }
    };
    return Log;
}());
__reflect(Log.prototype, "Log");
//# sourceMappingURL=Log.js.map