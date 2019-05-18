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
var BaseUILayer = (function (_super) {
    __extends(BaseUILayer, _super);
    function BaseUILayer() {
        var _this = _super.call(this) || this;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        _this.touchEnabled = false;
        return _this;
    }
    return BaseUILayer;
}(eui.Group));
__reflect(BaseUILayer.prototype, "BaseUILayer");
//# sourceMappingURL=BaseUILayer.js.map