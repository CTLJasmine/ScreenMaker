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
 * Scene基类
 */
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    /**
     * 构造函数
     */
    function BaseScene() {
        var _this = _super.call(this) || this;
        _this._layers = new Array();
        return _this;
    }
    /**
     * 进入Scene调用
     */
    BaseScene.prototype.onEnter = function () {
        console.log("onEnete");
    };
    /**
     * 退出Scene调用
     */
    BaseScene.prototype.onExit = function () {
        this.removeAllLayer();
    };
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    BaseScene.prototype.addLayer = function (layer, index) {
        if (index === void 0) { index = -1; }
        if (layer instanceof BaseUILayer) {
            if (index >= 0)
                App.StageUtils.getGameStage().addChildAt(layer, index);
            else
                App.StageUtils.getGameStage().addChild(layer);
            this._layers.push(layer);
        }
    };
    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    BaseScene.prototype.removeLayer = function (layer) {
        if (layer instanceof BaseUILayer) {
            App.StageUtils.getGameStage().removeChild(layer);
            this._layers.splice(this._layers.indexOf(layer), 1);
        }
    };
    /**
     * Layer中移除所有
     * @param layer
     */
    BaseScene.prototype.layerRemoveAllChild = function (layer) {
        if (layer instanceof BaseUILayer) {
            layer.removeChildren();
        }
    };
    /**
     * 移除所有Layer
     */
    BaseScene.prototype.removeAllLayer = function () {
        while (this._layers.length) {
            var layer = this._layers[0];
            this.layerRemoveAllChild(layer);
            this.removeLayer(layer);
        }
    };
    return BaseScene;
}(BaseClass));
__reflect(BaseScene.prototype, "BaseScene");
//# sourceMappingURL=BaseScene.js.map