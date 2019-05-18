var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏内跨模块事件
 */
var EventConst = (function () {
    function EventConst() {
    }
    EventConst.LOAD_PROGRESS = "load_progress"; // 加载进度
    EventConst.EVENT_SHOW_WINDOW = "EVENT_SHOW_WINDOW"; // 显示弹窗界面 搭配 参数 界面type、场景layer类型 一起使用 
    EventConst.EVENT_ADD_GOODS = "EVENT_ADD_GOODS"; // 增加物品
    EventConst.EVENT_RM_GOODS = "EVENT_RM_GOODS"; // 减少物品
    EventConst.EVENT_UPDATE_GOODS_DETAIL = "EVENT_UPDATE_GOODS_DETAIL"; // 刷新物品的属性显示
    EventConst.EVENT_SET_BG = "EVENT_SET_BG"; // 更新设置背景资源
    EventConst.EVENT_UPDATE_SELECT_GOODS = "EVENT_UPDATE_SELECT_GOODS"; // 更新选中待操作的物品
    EventConst.EVENT_UPDATE_GOODS_SHOW = "EVENT_UPDATE_GOODS_SHOW"; // 手动调整属性，刷新物品显示情况
    EventConst.EVENT_UPDATE_LAYER_IDX = "EVENT_UPDATE_LAYER_IDX"; //更新物品所在层级信息的扎实
    return EventConst;
}());
__reflect(EventConst.prototype, "EventConst");
//# sourceMappingURL=EventConst.js.map