/** 
 *  界面场景基础类
 *  BaseView.ts
 *  egret
 *
 *  Created by Liu Yang on 19/05/02.
 */
class BaseView extends eui.Component {
    private _parnet: egret.DisplayObjectContainer;
    private _resources: string[];
    private _isInit: boolean;
    private _isShow: boolean;
    public get isShow(): boolean { return this._isShow; }

    public _isPop: boolean = true;
    private showType: number;
    private closeType: number;
    public constructor(parent: egret.DisplayObjectContainer) {
        super();
        this._parnet = parent;
    }

    public showUI(...params: any[]) {
        this.showType = params[0] || 1;
        if (this._parnet.contains(this)) return;
        if (this._isInit) {
            this.prepare(() => {
                this.addToParent();
            }, () => {
                this.removeEvents();
            })
            this.initEvents();
        } else {
            this.loadResource(() => {
                this.prepare(() => {
                    this.addToParent();
                }, () => {
                    this.removeEvents();
                })
            }, () => {
                this.initUI();
                this.initEvents();
            });
        }
    }

    /** 开启页面前的接口请求等操作，避免add之前，页面的一些未完全设置处理 */
    public prepare(onSuc: Function, onErr: Function): void {
        onSuc();
    }

    private addToParent() {
        this._isShow = true;
        this.onPreOpen();
        this._parnet.addChild(this);
        if (this._isPop) {
            PopUpUtils.addPopUp(this, true, this.showType);
        }
        this.syncAddSuccess();
        this.onOpen();
    }

    /** 同步处理完成，同步处理后续流程 */
    public syncAddSuccess(): void { }

    public setResource(resource: string[]) {
        this._resources = resource;
    }

    public loadResource(loadComplete: Function, initComplete: Function) {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], loadComplete, null, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        } else {
            loadComplete();
            initComplete();
        }
    }

    public initUI() {
        this._isInit = true;
    }

    public onPreOpen(): void {

    }

    public onOpen(): void {

    }

    public initEvents() {

    }

    public removeEvents() {

    }

    /**
     * 关闭面板继承函数
     * @param  {any[]} ...params
     */
    public hide(...params: any[]) {

    }
    /**
     * @param  {any[]} ...params
     */
    public close(...params: any[]) {
        this.closeType = params[1] || 1
        if (params[0] == 1) {
            PopUpUtils.hidePop(this);
            App.cachePanel.push(this);
        } else {
            this._isShow = false;
            if (App.cachePanel.length > 0) {
                let panel = App.cachePanel.pop();
                PopUpUtils.showPop(panel);
            }
            this.removeEvents();
            PopUpUtils.removePopUp(this, null, this.closeType);
        }
    }
}
