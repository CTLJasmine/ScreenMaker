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
/**
 * Stage相关工具类
 */
var StageUtils = (function (_super) {
    __extends(StageUtils, _super);
    function StageUtils() {
        var _this = _super.call(this) || this;
        if (StageUtils._gameStage == null) {
            StageUtils._gameStage = new eui.UILayer();
            StageUtils._gameStage.percentHeight = 100;
            StageUtils._gameStage.percentWidth = 100;
            StageUtils._gameStage.touchEnabled = false;
            _this.stage.addChild(StageUtils._gameStage);
        }
        return _this;
    }
    Object.defineProperty(StageUtils.prototype, "stage", {
        /**
         * 获取主绘制区域
         * @returns {egret.MainContext}
         */
        get: function () {
            return egret.MainContext.instance.stage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取游戏最底层容器
     * @returns
     */
    StageUtils.prototype.getGameStage = function () {
        return StageUtils._gameStage;
    };
    /**
     * 获取游戏宽度
     * @returns number
     */
    StageUtils.prototype.getWidth = function () {
        return this.stage.stageWidth;
    };
    /**
     * 获取游戏高度
     * @returns number
     */
    StageUtils.prototype.getHeight = function () {
        return this.stage.stageHeight;
    };
    /**
     * 设置游戏适配模式
     * @param  {string} value
     * @returns void
     */
    StageUtils.prototype.setScaleMode = function (value) {
        this.stage.scaleMode = value;
    };
    /**
     * 初始化游戏适配模式
     * @returns void
     */
    StageUtils.prototype.initScaleMode = function () {
        if ((this.getWidth() / this.getHeight()) < (640 / 1039)) {
            this.setScaleMode(egret.StageScaleMode.FIXED_WIDTH);
        }
        else {
            this.setScaleMode(egret.StageScaleMode.SHOW_ALL);
        }
    };
    Object.defineProperty(StageUtils.prototype, "offsetY", {
        /**
         * 获取游戏偏移高度
         * @returns number
         */
        get: function () {
            var offsetY = (this.getHeight() - 1039) > 0 ? (this.getHeight() - 1039) : 0;
            return offsetY;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置此对象的子对象是否可以触发
     * @param  {any} value
     */
    StageUtils.prototype.setTouchChildren = function (value) {
        this.stage.touchChildren = value;
    };
    /**
     * 设置屏幕同时可触发的数量
     * @param  {number} num
     * @returns void
     */
    StageUtils.prototype.setTouchs = function (num) {
        this.stage.maxTouches = num;
    };
    /**
     * 设置帧频
     * @param  {number} frameRate
     * @returns void
     */
    StageUtils.prototype.setFrameRate = function (frameRate) {
        this.stage.frameRate = frameRate;
    };
    return StageUtils;
}(BaseClass));
__reflect(StageUtils.prototype, "StageUtils");
//# sourceMappingURL=StageUtils.js.map