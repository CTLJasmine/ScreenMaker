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
var PopUpUtils = (function (_super) {
    __extends(PopUpUtils, _super);
    function PopUpUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    PopUpUtils.addPopUp = function (panel, dark, effectType, isAlert) {
        if (dark === void 0) { dark = true; }
        if (effectType === void 0) { effectType = 1; }
        if (isAlert === void 0) { isAlert = false; }
        panel.scaleX = 1;
        panel.scaleY = 1;
        panel.x = 0;
        panel.y = 0;
        panel.alpha = 1;
        if (dark) {
            var maskBg = new egret.Sprite();
            maskBg.graphics.clear();
            maskBg.graphics.beginFill(0x000000, 0.7);
            maskBg.graphics.drawRect(0, 0, App.stateW, App.stateH);
            maskBg.graphics.endFill();
            maskBg.width = App.stateW;
            maskBg.height = App.stateH;
            if (!panel.parent.contains(maskBg)) {
                // GameLayerManager.gameLayer().panelLayer.addChild(this.maskBg);
                panel.parent.addChildAt(maskBg, 0);
            }
            maskBg.touchEnabled = true;
            egret.Tween.get(maskBg).to({ alpha: 1 }, 150);
            maskBg.visible = true;
            // this.maskBg = new egret.Sprite();
            // this.maskBg.graphics.clear();
            // this.maskBg.graphics.beginFill(0x000000, 0.7);
            // this.maskBg.graphics.drawRect(0, 0, App.stateW, App.stateH);
            // this.maskBg.graphics.endFill();
            // this.maskBg.width = App.stateW;
            // this.maskBg.height = App.stateH;
            // if (!panel.parent.contains(this.maskBg)) {
            //     // GameLayerManager.gameLayer().panelLayer.addChild(this.maskBg);
            //     panel.parent.addChildAt(this.maskBg, 0);
            // }
            // this.maskBg.touchEnabled = true;
            // egret.Tween.get(this.maskBg).to({ alpha: 1 }, 150);
            // this.maskBg.visible = true;
        }
        panel.parent.addChild(panel);
        // GameConfig.curPanel = panel;
        // if (popUpWidth != 0) {
        //     panel.x = App.stateW / 2 - popUpWidth / 2;
        //     panel.y = App.stateH / 2 - popUpHeight / 2;
        // } else {
        var popUpWidth, popUpHeight;
        popUpWidth = panel.width;
        popUpHeight = panel.height;
        // }
        //以下是弹窗动画
        var leftX = App.stateW / 2 - popUpWidth / 2;
        var upY = App.stateH / 2 - popUpHeight / 2;
        switch (effectType) {
            case 0:
                break;
            case 1:
                panel.anchorOffsetX = panel.width / 2;
                panel.anchorOffsetY = panel.height / 2;
                // panel.alpha = 0;
                panel.scaleX = 0.2;
                panel.scaleY = 0.2;
                panel.x = App.stateW / 2;
                panel.y = App.stateH / 2;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut);
                break;
            case 2:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                if (isAlert) {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 4:
                if (isAlert) {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 5:
                if (isAlert) {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 6:
                if (isAlert) {
                    panel.y = App.stateH;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = App.stateH;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            default:
                break;
        }
    };
    /**
   * 移除面板方法
   * panel       		面板
   * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
   */
    PopUpUtils.removePopUp = function (panel, callBack, effectType) {
        if (callBack === void 0) { callBack = null; }
        if (effectType === void 0) { effectType = 1; }
        var mask = panel.parent.getChildAt(0);
        var onComplete = function () {
            if (panel.parent.contains(mask)) {
                panel.parent.removeChild(mask);
            }
        };
        if (mask) {
            egret.Tween.get(mask).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        // var onComplete: Function = function () {
        //     if (panel.parent.contains(this.maskBg)) {
        //         panel.parent.removeChild(this.maskBg);
        //     }
        // };
        // if (this.maskBg) {
        //     egret.Tween.get(this.maskBg).to({ alpha: 0 }, 100).call(onComplete, this);
        // }
        //以下是弹窗动画
        switch (effectType) {
            case 0:
                break;
            case 1:
                egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 300);
                break;
            case 2:
                break;
            case 3:
                egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 4:
                egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 5:
                egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicIn);
                break;
            case 6:
                egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                break;
            default:
                break;
        }
        var waitTime = 500;
        if (effectType == 0) {
            waitTime = 0;
        }
        var t = egret.setTimeout(function () {
            if (panel.parent) {
                panel.parent.removeChild(panel);
            }
            if (callBack)
                callBack();
            egret.clearTimeout(t);
        }, this, waitTime);
    };
    PopUpUtils.hidePop = function (panel) {
        var mask = panel.parent.getChildAt(0);
        mask.visible = false;
        panel.visible = false;
    };
    PopUpUtils.showPop = function (panel) {
        var t = setTimeout(function () {
            var mask = panel.parent.getChildAt(0);
            mask.visible = true;
            panel.visible = true;
            clearTimeout(t);
        }, 300);
    };
    return PopUpUtils;
}(BaseClass));
__reflect(PopUpUtils.prototype, "PopUpUtils");
//# sourceMappingURL=PopUpUtils.js.map