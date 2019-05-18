/**
 * GoodsComponent.ts 待选择的组件
 * Created by liuyang
 */
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
var GoodsComponent = (function (_super) {
    __extends(GoodsComponent, _super);
    function GoodsComponent() {
        var _this = _super.call(this) || this;
        _this.mGoodsId = -1;
        _this.skinName = "GoodsComponentSkin";
        return _this;
    }
    GoodsComponent.prototype.setData = function (id) {
        // 物品   
        this.mGoodsId = id;
        this.kImgGoods.source = "resource/assets/image/item/goods_" + id + ".png";
        this.kLabelIdx.text = "" + this.parent.getChildIndex(this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_UPDATE_LAYER_IDX, this.onUpdateLayerIdx, this);
    };
    GoodsComponent.prototype.onUpdateLayerIdx = function () {
        this.kLabelIdx.text = "" + this.parent.getChildIndex(this);
    };
    return GoodsComponent;
}(eui.Component));
__reflect(GoodsComponent.prototype, "GoodsComponent", ["eui.UIComponent", "egret.DisplayObject"]);
window["GoodsComponent"] = GoodsComponent;
//# sourceMappingURL=GoodsComponent.js.map