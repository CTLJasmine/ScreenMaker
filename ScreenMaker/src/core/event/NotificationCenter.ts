/**
 * 事件处理中心
 */
class NotificationCenter extends BaseClass {

    public _eventDispatcher: egret.EventDispatcher;

    public constructor() {
        super();
        this._eventDispatcher = new egret.EventDispatcher();
    }

    public get eventDispatcher() {
        return this._eventDispatcher;
    }

    public dispatch(type: string, data?: any, bubbles?: boolean, cancelable?: boolean) {
        return this.eventDispatcher.dispatchEventWith(type, bubbles, data, cancelable);
    }

    public addEventListenr(type: string, listener: Function, thisObj: any, useCapture?: boolean, priority?: number) {
        this.eventDispatcher.addEventListener(type, listener, thisObj, useCapture, priority);
    }

    public removeEventListener(type: string, listener: Function, thisObject, useCapture?: boolean) {
        this.eventDispatcher.removeEventListener(type, listener, thisObject, useCapture);
    }
}