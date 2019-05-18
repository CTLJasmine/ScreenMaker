var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var BaseController = (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        return _super.call(this) || this;
    }
    BaseController.prototype.addEvents = function () { };
    BaseController.prototype.removeEvents = function () { };
    BaseController.prototype.init = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.addEvents();
    };
    BaseController.prototype.close = function () {
        this.removeEvents();
    };
    return BaseController;
}(BaseClass));
__reflect(BaseController.prototype, "BaseController");
//# sourceMappingURL=BaseController.js.map