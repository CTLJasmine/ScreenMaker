class MainView extends BaseView {

    private kBtnPlay: eui.Button;

    public constructor($parent: egret.DisplayObjectContainer) {
        super($parent);
        this.skinName = "MainViewSkin";
        this._isPop = false;
    }

    public showUI(...param: any[]) {
        super.showUI();
    }

    public initEvents() {
        super.initEvents();
        this.kBtnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
    }

    public removeEvents() {
        super.removeEvents();
        this.kBtnPlay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
    }

    private onClose() {
        this.close(1);
    }

    private onPlay(): void {
        App.NotificationCenter.dispatch(EventConst.EVENT_SHOW_WINDOW, { viewType: Const.W_MAKER, layer: LayerManager.Game_Main });
    }
}
window["MainView"] = MainView;