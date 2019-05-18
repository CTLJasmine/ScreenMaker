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
var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        return _super.call(this) || this;
    }
    /**
     * @param  {any[]} ...param
     */
    MainController.prototype.init = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        // 加载主界面
        App.NotificationCenter.dispatch(EventConst.EVENT_SHOW_WINDOW, { viewType: Const.W_MAIN, layer: LayerManager.Game_Main });
        _super.prototype.init.call(this);
    };
    MainController.prototype.close = function () {
        _super.prototype.close.call(this);
    };
    return MainController;
}(BaseController));
__reflect(MainController.prototype, "MainController");
//# sourceMappingURL=MainController.js.map