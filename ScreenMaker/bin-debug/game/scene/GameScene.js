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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this) || this;
    }
    Object.defineProperty(GameScene, "gameScene", {
        get: function () {
            return GameScene.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        // TODO: 时间较紧张，后期可以封装stageManger
        // this.addLayer(LayerManager.Game_Bg);//视情况添加
        this.addLayer(LayerManager.Game_Main);
        this.addLayer(LayerManager.UI_PopUp);
        this.addLayer(LayerManager.UI_Tips);
        this.addLayer(LayerManager.Effect_Layer);
        ControllerManager.View.init();
        ControllerManager.Main.init();
    };
    return GameScene;
}(BaseScene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map