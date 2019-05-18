var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 后端消息返回事件
 */
var MsgConst = (function () {
    function MsgConst() {
    }
    MsgConst.LOGIN = "login"; //登陆成功
    return MsgConst;
}());
__reflect(MsgConst.prototype, "MsgConst");
//# sourceMappingURL=MsgConst.js.map