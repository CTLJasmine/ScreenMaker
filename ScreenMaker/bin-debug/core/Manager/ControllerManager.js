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
var ControllerManager = (function (_super) {
    __extends(ControllerManager, _super);
    function ControllerManager() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ControllerManager, "Main", {
        get: function () {
            return MainController.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControllerManager, "View", {
        get: function () {
            return ViewController.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return ControllerManager;
}(BaseClass));
__reflect(ControllerManager.prototype, "ControllerManager");
//# sourceMappingURL=ControllerManager.js.map