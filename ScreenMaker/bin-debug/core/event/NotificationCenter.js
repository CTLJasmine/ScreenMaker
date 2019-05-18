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
 * 事件处理中心
 */
var NotificationCenter = (function (_super) {
    __extends(NotificationCenter, _super);
    function NotificationCenter() {
        var _this = _super.call(this) || this;
        _this._eventDispatcher = new egret.EventDispatcher();
        return _this;
    }
    Object.defineProperty(NotificationCenter.prototype, "eventDispatcher", {
        get: function () {
            return this._eventDispatcher;
        },
        enumerable: true,
        configurable: true
    });
    NotificationCenter.prototype.dispatch = function (type, data, bubbles, cancelable) {
        return this.eventDispatcher.dispatchEventWith(type, bubbles, data, cancelable);
    };
    NotificationCenter.prototype.addEventListenr = function (type, listener, thisObj, useCapture, priority) {
        this.eventDispatcher.addEventListener(type, listener, thisObj, useCapture, priority);
    };
    NotificationCenter.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
        this.eventDispatcher.removeEventListener(type, listener, thisObject, useCapture);
    };
    return NotificationCenter;
}(BaseClass));
__reflect(NotificationCenter.prototype, "NotificationCenter");
//# sourceMappingURL=NotificationCenter.js.map