var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Const = (function () {
    function Const() {
    }
    // view
    Const.W_MAIN = "MainView"; // 主启动界面 
    Const.W_MAKER = "ProductionView"; // 绘画场景界面
    // define enum
    Const.difficulty = ["简单", "标准", "复杂"];
    return Const;
}());
__reflect(Const.prototype, "Const");
//# sourceMappingURL=Const.js.map