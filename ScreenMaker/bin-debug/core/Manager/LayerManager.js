var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var LayerManager = (function () {
    function LayerManager() {
    }
    /**
     * 游戏背景层
     */
    LayerManager.Game_Bg = new BaseUILayer();
    /**
     * 游戏主逻辑层
     */
    LayerManager.Game_Main = new BaseUILayer();
    /**
     * 弹出界面层
     */
    LayerManager.UI_PopUp = new BaseUILayer();
    /**
     * 提示层（Alert面板，飘字效果。。。）
     */
    LayerManager.UI_Tips = new BaseUILayer();
    /**
     * 特效展示层
     */
    LayerManager.Effect_Layer = new BaseUILayer();
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map