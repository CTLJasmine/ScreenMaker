// TypeScript file
interface BaseMsg {
    /**
     * 接受消息处理
     * @param  {egret.WebSocket} socket
     */
    receive(socket: egret.WebSocket);
    /**
     * 发送消息处理
     * @param  {egret.WebSocket} socket
     * @param  {any} msg
     */
    send(socket: egret.WebSocket, msg: any);
    /**
     * 消息解析
     * @param  {any} msg
     */
    decode(msg: any);
    /**
     * 消息封装
     * @param  {any} msg
     */
    encode(msg: any);
}