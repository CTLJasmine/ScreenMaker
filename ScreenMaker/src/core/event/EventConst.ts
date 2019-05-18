/**
 * 游戏内跨模块事件
 */
class EventConst {
    public static LOAD_PROGRESS = "load_progress";// 加载进度

    public static EVENT_SHOW_WINDOW = "EVENT_SHOW_WINDOW";// 显示弹窗界面 搭配 参数 界面type、场景layer类型 一起使用 
    public static EVENT_ADD_GOODS = "EVENT_ADD_GOODS";// 增加物品
    public static EVENT_RM_GOODS = "EVENT_RM_GOODS";// 减少物品
    public static EVENT_UPDATE_GOODS_DETAIL = "EVENT_UPDATE_GOODS_DETAIL";// 刷新物品的属性显示
    public static EVENT_SET_BG = "EVENT_SET_BG";// 更新设置背景资源
    public static EVENT_UPDATE_SELECT_GOODS = "EVENT_UPDATE_SELECT_GOODS";// 更新选中待操作的物品
    public static EVENT_UPDATE_GOODS_SHOW = "EVENT_UPDATE_GOODS_SHOW";// 手动调整属性，刷新物品显示情况
    public static EVENT_UPDATE_LAYER_IDX = "EVENT_UPDATE_LAYER_IDX";//更新物品所在层级信息的扎实
}