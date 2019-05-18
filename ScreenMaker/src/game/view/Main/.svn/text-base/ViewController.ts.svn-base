/**
* Created by liuyang
* email: 826940559@qq.com
* Copyright (c) 2019. All rights reserved.
*/

/** 游戏中的界面、场景管理器 */
class ViewController extends BaseController {

    private _viewMap = {}; // 界面场景对象池
    public get viewMap(): Object { return this._viewMap; }

    public constructor() {
        super();
    }

    /**
     * 显示主页面
     * @param  {any[]} ...param
     */
    public init(...param: any[]) {
        super.init();
    }

    public close() {
        super.close();
    }

    public addEvents() {
        App.NotificationCenter.addEventListenr(EventConst.EVENT_SHOW_WINDOW, this.onShowWindow, this);
    }

    /** 界面注册于对象池，随用随加 */
    public registerView(viewType: any, layer: BaseUILayer): void {
        this.viewMap[viewType] = new window[viewType](layer) as BaseView;
    }

    public removeEvents() {
        App.NotificationCenter.removeEventListener(EventConst.EVENT_SHOW_WINDOW, this.onShowWindow, this);
    }

    /** 显示界面 */
    private onShowWindow(e: egret.Event): void {
        if (!e.data.viewType) { egret.warn(`window type err, can not find window type for ${e.data.viewType}`); }
        if (e.data.viewType && !this.viewMap[e.data.viewType]) this.registerView(e.data.viewType, e.data.layer);
        if (this.viewMap[e.data.viewType].isShow) return;
        this.viewMap[e.data.viewType].showUI();
    }
}