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
/**
 *  通用帮助面板
 *  ManualView.ts
 *  egret
 *
 *  Created by Liu Yang on 18/05/31.
 */
var ManualView = (function (_super) {
    __extends(ManualView, _super);
    function ManualView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.skinName = "ManualViewSkin";
        return _this;
    }
    /** call by man */
    ManualView.prototype.showUI = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.showUI.call(this, param);
        this.setData(param[1]);
    };
    /** 填充显示文本内容 */
    ManualView.prototype.setData = function (data) {
        this.kLabel.textFlow = data.data;
        this.kLabelTitle.text = data.title;
    };
    /** async call after showUI by sys */
    ManualView.prototype.initEvents = function () {
        _super.prototype.initEvents.call(this);
        this.kBtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    };
    ManualView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
    };
    ManualView.prototype.clear = function () {
    };
    ManualView.prototype.onCloseHandler = function () {
        this.clear();
        this.close();
    };
    return ManualView;
}(BaseView));
__reflect(ManualView.prototype, "ManualView");
//# sourceMappingURL=ManualView.js.map