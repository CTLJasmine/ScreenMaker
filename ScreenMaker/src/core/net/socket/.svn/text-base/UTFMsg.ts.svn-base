class UTFMsg implements BaseMsg {
    /**
     * 接收消息处理
     * @param  {egret.WebSocket} socket
     */
    public receive(socket: egret.WebSocket) {
        let msg = socket.readUTF();
        let obj = this.decode(msg);
        MsgController.dealMsg(obj);
    }
    /**
     * 发送消息处理
     * @param  {egret.WebSocket} socket
     * @param  {any} msg
     */
    public send(socket: egret.WebSocket, msg: any) {
        let obj: any = this.encode(msg);
        if (obj && socket !=null) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    }
    /**
     * 消息解析成json格式
     * @param  {any} msg
     */
    public decode(msg: any) {
        return JSON.parse(msg);
    }
    /**
     * 消息封装成string
     * @param  {any} msg
     */
    public encode(msg: any) {
        return JSON.stringify(msg);
    }

}