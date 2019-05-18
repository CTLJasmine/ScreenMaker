/** 
 *  通用帮助面板
 *  ManualView.ts
 *  egret
 *
 *  Created by Liu Yang on 18/05/31.
 */
class ManualView extends BaseView {

    private kLabelTitle: eui.Label;     // 标题
    private kLabel: eui.Label;          // 内容
    private kBtnClose: eui.Button;      // 关闭按钮

    public constructor(parent: egret.DisplayObjectContainer) {
        super(parent);
        this.skinName = "ManualViewSkin";
    }

    /** call by man */
    public showUI(...param) {
        super.showUI(param);
        this.setData(param[1]);
    }

    /** 填充显示文本内容 */
    private setData(data: { title: string, data: egret.ITextElement[] }): void {
        this.kLabel.textFlow = data.data;
        this.kLabelTitle.text = data.title;
    }

    /** async call after showUI by sys */
    public initEvents() {
        super.initEvents();
        this.kBtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    }

    public removeEvents() {
        super.removeEvents();
    }

    private clear() {
    }

    private onCloseHandler() {
        this.clear();
        this.close();
    }
}