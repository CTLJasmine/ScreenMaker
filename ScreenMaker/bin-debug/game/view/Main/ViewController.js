/**
* Created by liuyang
* email: 826940559@qq.com
* Copyright (c) 2019. All rights reserved.
*/
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
/** 游戏中的界面、场景管理器 */
var ViewController = (function (_super) {
    __extends(ViewController, _super);
    function ViewController() {
        var _this = _super.call(this) || this;
        _this._viewMap = {}; // 界面场景对象池
        return _this;
    }
    Object.defineProperty(ViewController.prototype, "viewMap", {
        get: function () { return this._viewMap; },
        enumerable: true,
        configurable: true
    });
    /**
     * 显示主页面
     * @param  {any[]} ...param
     */
    ViewController.prototype.init = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.init.call(this);
    };
    ViewController.prototype.close = function () {
        _super.prototype.close.call(this);
    };
    ViewController.prototype.addEvents = function () {
        App.NotificationCenter.addEventListenr(EventConst.EVENT_SHOW_WINDOW, this.onShowWindow, this);
    };
    /** 界面注册于对象池，随用随加 */
    ViewController.prototype.registerView = function (viewType, layer) {
        this.viewMap[viewType] = new window[viewType](layer);
    };
    ViewController.prototype.removeEvents = function () {
        App.NotificationCenter.removeEventListener(EventConst.EVENT_SHOW_WINDOW, this.onShowWindow, this);
    };
    /** 显示界面 */
    ViewController.prototype.onShowWindow = function (e) {
        if (!e.data.viewType) {
            egret.warn("window type err, can not find window type for " + e.data.viewType);
        }
        if (e.data.viewType && !this.viewMap[e.data.viewType])
            this.registerView(e.data.viewType, e.data.layer);
        if (this.viewMap[e.data.viewType].isShow)
            return;
        this.viewMap[e.data.viewType].showUI();
    };
    return ViewController;
}(BaseController));
__reflect(ViewController.prototype, "ViewController");
//# sourceMappingURL=ViewController.js.map