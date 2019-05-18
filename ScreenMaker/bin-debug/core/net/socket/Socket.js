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
var Socket = (function (_super) {
    __extends(Socket, _super);
    function Socket() {
        var _this = _super.call(this) || this;
        _this._isConnect = false; //是否连接成功
        _this._reconectMaxNum = 10;
        return _this;
    }
    Socket.prototype.addEvent = function () {
        this._socket.addEventListener(egret.Event.CONNECT, this.onConnectSuccessHandler, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onErrorHandler, this);
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveHandler, this);
    };
    Socket.prototype.removeEvent = function () {
        this._socket.removeEventListener(egret.Event.CONNECT, this.onConnectSuccessHandler, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onErrorHandler, this);
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveHandler, this);
    };
    /**
     * 初始化
     * @param  {string} host
     * @param  {number} port
     * @returns void
     */
    Socket.prototype.initSocket = function (host) {
        this._host = host;
        // this._port = port;
        this._msg = new UTFMsg(); //暂时只需这种类型，以后根据需求扩展
        this.onConnect();
    };
    /**
     * socket连接
     */
    Socket.prototype.onConnect = function () {
        if (!window["WebSocket"]) {
            Log.trace("不支持websocket");
            return;
        }
        Log.trace("开始连接websocket");
        this._socket = new egret.WebSocket();
        this.addEvent();
        this._socket.connectByUrl(this._host);
        var self = this;
        var t = setTimeout(function () {
            if (!self._isConnect) {
                self.onMoreReconnect();
            }
            clearTimeout(t);
        }, 30000);
    };
    /**
     * 连接成功
     */
    Socket.prototype.onConnectSuccessHandler = function () {
        this._isConnect = true;
        clearTimeout(this._connectTime);
        Log.trace("socket connect success");
    };
    /**
     * 断开连接
     */
    Socket.prototype.onSocketClose = function () {
        this.onMoreReconnect();
        Log.trace("socket close！");
    };
    /**
     * 连接错误
     */
    Socket.prototype.onErrorHandler = function () {
        clearTimeout(this._connectTime);
        this.onMoreReconnect();
        Log.trace("socket  error");
    };
    /**
     * 重新连接
     */
    Socket.prototype.onReconnect = function () {
        this.clearSocket();
        if (this._reconectNum < this._reconectMaxNum) {
            this.onConnect();
        }
        else {
            this._reconectNum = 0;
        }
        this._reconectNum++;
    };
    /**
     * 多次重连
     */
    Socket.prototype.onMoreReconnect = function () {
        var self = this;
        this._connectTime = setTimeout(function () {
            self.onReconnect();
        }, 5000 * this._reconectNum);
    };
    /**
     * 接收数据
     */
    Socket.prototype.onReceiveHandler = function () {
        this._msg.receive(this._socket);
        Log.trace("socket data");
    };
    /**
     * 发送数据
     * @param  {any} msg
     */
    Socket.prototype.sendMsg = function (type, msg) {
        if (msg === void 0) { msg = {}; }
        var obj = {};
        obj = msg;
        // msg["uid"] = UserModel.instance.uid;
        obj["t"] = type;
        this._msg.send(this._socket, obj);
    };
    Socket.prototype.clearSocket = function () {
        if (this._socket) {
            this.removeEvent();
            this._socket.close();
            this._socket = null;
            this._isConnect = false;
        }
    };
    return Socket;
}(BaseClass));
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map