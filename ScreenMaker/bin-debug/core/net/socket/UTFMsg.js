var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UTFMsg = (function () {
    function UTFMsg() {
    }
    /**
     * 接收消息处理
     * @param  {egret.WebSocket} socket
     */
    UTFMsg.prototype.receive = function (socket) {
        var msg = socket.readUTF();
        var obj = this.decode(msg);
        MsgController.dealMsg(obj);
    };
    /**
     * 发送消息处理
     * @param  {egret.WebSocket} socket
     * @param  {any} msg
     */
    UTFMsg.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj && socket != null) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    };
    /**
     * 消息解析成json格式
     * @param  {any} msg
     */
    UTFMsg.prototype.decode = function (msg) {
        return JSON.parse(msg);
    };
    /**
     * 消息封装成string
     * @param  {any} msg
     */
    UTFMsg.prototype.encode = function (msg) {
        return JSON.stringify(msg);
    };
    return UTFMsg;
}());
__reflect(UTFMsg.prototype, "UTFMsg", ["BaseMsg"]);
//# sourceMappingURL=UTFMsg.js.map