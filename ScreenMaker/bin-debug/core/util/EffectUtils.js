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
var EffectUtils = (function (_super) {
    __extends(EffectUtils, _super);
    function EffectUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EffectUtils.fly = function () {
        var group = new eui.Group();
        for (var i = 0; i < 10; i++) {
            var img = new FlyUtil();
            group.addChild(img);
            // img.x = 200 + Math.random() * 30;
            // img.y = 400 + Math.random() * 30;
            // egret.Tween.get(img).to({ x: 400 + Math.random() * 100, y: 100 + Math.random() * 100 }, 100 * i, egret.Ease.quadIn).to({ x: 640, y: Math.random() + 50 }, 100 * i, egret.Ease.quadIn);
        }
        LayerManager.Effect_Layer.addChild(group);
    };
    return EffectUtils;
}(BaseClass));
__reflect(EffectUtils.prototype, "EffectUtils");
var FlyUtil = (function (_super) {
    __extends(FlyUtil, _super);
    function FlyUtil() {
        var _this = _super.call(this) || this;
        _this.mCurrentAttPointList = [];
        _this.num = 0;
        _this.img = new eui.Image("icon_1_png");
        _this.addChild(_this.img);
        var point = new egret.Point(200 + Math.random() * 30, 400 + Math.random() * 30);
        var point1 = new egret.Point(400 + Math.random() * 100, 100 + Math.random() * 100);
        var point2 = new egret.Point(640, 0);
        _this.mCurrentAttPointList = [point, point1, point2];
        egret.Tween.get(_this).to({ factor: 1 }, 1000, egret.Ease.circOut).call(function () {
            egret.Tween.removeTweens(_this);
        });
        return _this;
    }
    Object.defineProperty(FlyUtil.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            var sp = new egret.Shape();
            sp.graphics.beginFill(0xff0000);
            sp.graphics.drawCircle(0, 0, 5);
            sp.graphics.endFill();
            this.addChild(sp);
            var x = this.img.x;
            var y = this.img.y;
            this.img.x = (1 - value) * (1 - value) * this.mCurrentAttPointList[0].x +
                2 * value * (1 - value) * this.mCurrentAttPointList[1].x + value * value * this.mCurrentAttPointList[2].x;
            this.img.y = (1 - value) * (1 - value) * this.mCurrentAttPointList[0].y +
                2 * value * (1 - value) * this.mCurrentAttPointList[1].y + value * value * this.mCurrentAttPointList[2].y;
            sp.x = this.img.x;
            sp.y = this.img.y;
        },
        enumerable: true,
        configurable: true
    });
    return FlyUtil;
}(egret.DisplayObjectContainer));
__reflect(FlyUtil.prototype, "FlyUtil");
var P = (function () {
    function P() {
    }
    return P;
}());
__reflect(P.prototype, "P");
//# sourceMappingURL=EffectUtils.js.map