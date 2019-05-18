var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 返回消息处理
 */
var MsgController = (function () {
    function MsgController() {
    }
    MsgController.dealMsg = function (obj) {
        var data;
        if (obj.type != 1) {
            data = obj.data.data;
        }
        console.log(obj);
        if (obj.data.code != 0) {
            TipsUtils.showTipsFromCenter(obj.data.message);
            return;
        }
        switch (obj.type) {
            case SocketConst.Login://登录
                App.NotificationCenter.dispatch(MsgConst.LOGIN);
                TipsUtils.showTipsFromCenter("\u60A8\u7684\u8D26\u53F7\u5DF2\u5728\u5176\u4ED6\u5730\u65B9\u767B\u5F55\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5~~");
                break;
        }
    };
    MsgController.isReward = false;
    return MsgController;
}());
__reflect(MsgController.prototype, "MsgController");
//# sourceMappingURL=MsgController.js.map