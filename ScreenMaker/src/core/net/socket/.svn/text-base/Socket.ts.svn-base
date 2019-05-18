// TypeScript file
class Socket extends BaseClass {

    protected _host: string;
    protected _port: number;

    protected _socket: egret.WebSocket;

    protected _isConnect: boolean = false;//是否连接成功
    protected _reconectNum: number;
    protected _reconectMaxNum: number = 10;

    protected _connectTime: number;

    private _msg: BaseMsg;

    public constructor() {
        super();
    }

    private addEvent() {
        this._socket.addEventListener(egret.Event.CONNECT, this.onConnectSuccessHandler, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this)
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onErrorHandler, this);
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveHandler, this);
    }

    private removeEvent() {
        this._socket.removeEventListener(egret.Event.CONNECT, this.onConnectSuccessHandler, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this)
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onErrorHandler, this);
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveHandler, this);
    }
    /**
     * 初始化
     * @param  {string} host
     * @param  {number} port
     * @returns void
     */
    public initSocket(host: string): void {
        this._host = host;
        // this._port = port;
        this._msg = new UTFMsg();//暂时只需这种类型，以后根据需求扩展
        this.onConnect();
    }
    /**
     * socket连接
     */
    private onConnect() {
        if (!window["WebSocket"]) {
            Log.trace("不支持websocket");
            return;
        }
        Log.trace("开始连接websocket");
        this._socket = new egret.WebSocket();
        this.addEvent();
        this._socket.connectByUrl(this._host);

        let self = this;
        let t = setTimeout(function () {  
            if (!self._isConnect) {
                self.onMoreReconnect();
            }
            clearTimeout(t);
        }, 30000);
    }
    /**
     * 连接成功
     */
    private onConnectSuccessHandler() {
        this._isConnect = true;
        clearTimeout(this._connectTime);
        Log.trace("socket connect success");
    }
    /**
     * 断开连接
     */
    private onSocketClose() {
        this.onMoreReconnect();
        Log.trace("socket close！");
    }
    /**
     * 连接错误
     */
    private onErrorHandler() {
        clearTimeout(this._connectTime);
        this.onMoreReconnect();
        Log.trace("socket  error");
    }
    /**
     * 重新连接
     */
    private onReconnect() {
        this.clearSocket();
        if (this._reconectNum < this._reconectMaxNum) {
            this.onConnect();
        } else {
            this._reconectNum = 0;
        }
        this._reconectNum++;
    }
    /**
     * 多次重连
     */
    private onMoreReconnect() {
        let self = this;
        this._connectTime = setTimeout(function () {
            self.onReconnect();
        }, 5000 * this._reconectNum);
    }
    /**
     * 接收数据
     */
    private onReceiveHandler() {
        this._msg.receive(this._socket);
        Log.trace("socket data");
    }
    /**
     * 发送数据
     * @param  {any} msg
     */
    public sendMsg(type, msg = {}) {
        let obj = {};
        obj = msg;
        // msg["uid"] = UserModel.instance.uid;
        obj["t"] = type;
        this._msg.send(this._socket, obj);
    }

    private clearSocket() {
        if (this._socket) {
            this.removeEvent();
            this._socket.close();
            this._socket = null;
            this._isConnect = false;
        }
    }
}