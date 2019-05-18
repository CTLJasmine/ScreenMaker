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
var MultiTouchUtils = (function (_super) {
    __extends(MultiTouchUtils, _super);
    function MultiTouchUtils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchPoints = { names: [] };
        _this._distance = 0;
        _this._defAngle = 0;
        _this._touchCon = 0;
        _this._minScale = .5;
        _this._maxScale = 2;
        return _this;
    }
    MultiTouchUtils.prototype.setTouch = function (view) {
        this._view = view;
        // this._view.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        // this._view.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        // this._view.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
    };
    MultiTouchUtils.prototype.removeTouch = function (view) {
        this._view.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        this._view.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        this._view.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
    };
    MultiTouchUtils.prototype.onBeginHandler = function (e) {
        this._beginX = e.stageX;
        this._beginY = e.stageY;
        if (this._touchPoints[e.touchPointID] == null) {
            this._touchPoints[e.touchPointID] = new egret.Point(e.stageX, e.stageY);
            this._touchPoints["names"].push(e.touchPointID);
        }
        this._touchCon++;
        if (this._touchCon == 2) {
            this._distance = this.getTouchDitance();
        }
    };
    MultiTouchUtils.prototype.onMoveHandler = function (e) {
        if (e.stageX == this._beginX && e.stageY == this._beginY)
            return;
        if (!this._touchPoints[e.touchPointID])
            return;
        this._touchPoints[e.touchPointID].x = e.stageX;
        this._touchPoints[e.touchPointID].y = e.stageY;
        if (this._touchCon == 2) {
            var newDistance = this.getTouchDitance();
            var scale = (newDistance / this._distance) > this._maxScale ? this._maxScale : (newDistance / this._distance);
            scale = scale < this._minScale ? this._minScale : scale;
            this._view.scaleX = scale;
            this._view.scaleY = this._view.scaleX;
            // egret.log(newDistance, this._distance);
        }
    };
    MultiTouchUtils.prototype.onEndHandler = function (e) {
        delete this._touchPoints[e.touchPointID];
        this._touchCon--;
    };
    MultiTouchUtils.prototype.getTouchDitance = function () {
        var _dis = 0;
        var names = this._touchPoints["names"];
        _dis = egret.Point.distance(this._touchPoints[names[names.length - 1]], this._touchPoints[names[names.length - 2]]);
        return _dis;
    };
    MultiTouchUtils.prototype.getTouchAngle = function () {
        var ang = 0;
        var names = this._touchPoints["names"];
        var p1 = egret.Point = this._touchPoints[names[names.length - 1]];
        var p2 = egret.Point = this._touchPoints[names[names.length - 2]];
        ang = Math.atan2((p1.y - p2.y), (p1.x - p2.x)) / (Math.PI / 180);
        return ang;
    };
    return MultiTouchUtils;
}(BaseClass));
__reflect(MultiTouchUtils.prototype, "MultiTouchUtils");
//# sourceMappingURL=MultiTouchUtils.js.map