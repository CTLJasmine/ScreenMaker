/**
  * tips特效汇总
  * by zhaoxin
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * TipsUtils.showTipsDownToUp()
  */

class TipsUtils {
    private static effectTips: egret.TextField;
    private static group: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    /**
     * 飘字效果
     * @param  {string=""} str
     * @param  {egret.DisplayObjectContainer=LayerManager.UI_Tips} layer
     * @param  {boolean=false} isWarning
     * @param  {any} waitTime=1000
     * @returns void
     */
    public static showTipsFromCenter(str: string = "", layer: egret.DisplayObjectContainer = LayerManager.UI_Tips, isWarning: boolean = false, waitTime = 1000): void {

        if (this.effectTips == null) {
            this.effectTips = new egret.TextField();
            this.effectTips.fontFamily = "SimHei";
            this.effectTips.size = 30;
            this.effectTips.bold = true;
            this.effectTips.textColor = 0xffffff;

            this.effectTips.strokeColor = 0x723315;
            this.effectTips.stroke = 2;
            this.effectTips.textAlign = egret.HorizontalAlign.CENTER;
            this.group.addChild(this.effectTips);
        }
        this.effectTips.text = str;
        this.effectTips.anchorOffsetX = this.effectTips.width / 2;
        this.effectTips.anchorOffsetY = this.effectTips.height / 2;


        if (!layer.contains(this.group)) {
            layer.addChild(this.group);
        }
        this.group.x = App.StageUtils.getWidth() / 2;
        this.group.y = App.StageUtils.getHeight() / 3;
        this.group.scaleX = this.group.scaleY = this.group.alpha = 0;
        this.group.visible = true;

        var onComplete2: Function = function () {
            this.group.visible = false;
            egret.Tween.removeTweens(this.group);

        };

        egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200).wait(waitTime).to({ y: this.group.y - 150, alpha: 0 }, 500).call(onComplete2, this);
    }

    private static componet: eui.Component;
    /**
     * 带面板提示效果
     * @param  {string} str
     */
    public static showTips(str: string) {
        if (!this.componet) {
            this.componet = new eui.Component();
            this.componet.skinName = "TipsComponetSkin";
        }
        LayerManager.UI_Tips.addChild(this.componet);
        this.componet["kLabel"].text = str;
        this.componet["kGroup"].width = this.componet["kLabel"].textWidth + 10;
        this.componet.anchorOffsetX = this.componet.width / 2;
        this.componet.anchorOffsetY = this.componet.height / 2;
        this.componet.x = App.StageUtils.getWidth() / 2;
        this.componet.y = App.StageUtils.getHeight() / 2;
        this.componet.scaleX = 0.3;
        this.componet.scaleY = 0.3;
        egret.Tween.get(this.componet).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200).wait(1000).to({ y: this.componet.y - 150 }, 300).to({ y: this.componet.y - 200, alpha: 0 }, 300).call(() => {
            egret.Tween.removeTweens(this.componet);
            LayerManager.UI_Tips.removeChild(this.componet);
        });
    }

    public static showTipsLabel(str, y = App.stateH / 2, x = App.stateW / 2) {
        let effectTips = new egret.TextField();
        effectTips.fontFamily = "SimHei";
        effectTips.size = 30;
        effectTips.bold = true;
        effectTips.textColor = 0xffffff;

        effectTips.strokeColor = 0x723315;
        effectTips.stroke = 2;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        effectTips.text = str;
        effectTips.anchorOffsetX = effectTips.width / 2;
        effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.x = x;
        effectTips.y = y;
        LayerManager.UI_Tips.addChild(effectTips);
        egret.Tween.get(effectTips).to({ y: effectTips.y - 30 }, 500, egret.Ease.bounceOut).wait(500).to({ alpha: 0 }, 300).call(() => {
            egret.Tween.removeTweens(effectTips);
            LayerManager.UI_Tips.removeChild(effectTips);
            effectTips = null;
        });
    }


}