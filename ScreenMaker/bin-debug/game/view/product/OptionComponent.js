/**
 * OptionComponent.ts 待选择的组件
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
var OptionComponent = (function (_super) {
    __extends(OptionComponent, _super);
    function OptionComponent() {
        var _this = _super.call(this) || this;
        _this.mGoodsId = -1; // 物品id
        _this.mInit = false;
        _this.mBgParam = []; // 背景图片索引标识
        _this.skinName = "OptionComponentSkin";
        return _this;
    }
    Object.defineProperty(OptionComponent.prototype, "mSelectStatus", {
        get: function () {
            return Boolean(ProductModel.instance.getGoodsInFactoryById(this.mGoodsId));
        },
        set: function (t) {
            if (t && !this.mSelectStatus) {
                App.NotificationCenter.dispatch(EventConst.EVENT_ADD_GOODS, this.mGoodsId);
                return;
            }
            if (!t && this.mSelectStatus) {
                App.NotificationCenter.dispatch(EventConst.EVENT_RM_GOODS, this.mGoodsId);
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    OptionComponent.prototype.setData = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        if (!this.mInit)
            this.init();
        if (ProductModel.instance.selectType == SELECT_TYPE.NULL)
            return;
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            // 背景组件
            this.kImgItem.visible = false;
            this.kImgBg.visible = true;
            this.kImgBg.source = "resource/assets/image/map/bg_" + param[0][0] + "_" + param[0][1] + ".png";
            this.mBgParam = param[0];
        }
        else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            // 物品   
            this.kImgItem.visible = true;
            this.kImgBg.visible = false;
            this.mGoodsId = param[0];
            this.kImgItem.source = "resource/assets/image/item/goods_" + param[0] + ".png";
        }
        this.showFitSize();
        this.initComShow();
    };
    /** 缩放到合适的尺寸展示 */
    OptionComponent.prototype.showFitSize = function () {
        this.kImgItem.scaleX = this.kImgItem.scaleY = 200 / this.kImgItem.width;
    };
    OptionComponent.prototype.init = function () {
        this.mInit = true;
        this.kBtnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUseOrDel, this);
        this.kGrpSelect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelect, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_UPDATE_SELECT_GOODS, this.updateSelectStatus, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_UPDATE_GOODS_DETAIL, this.updateDetail, this);
        this.kEditX.addEventListener(egret.Event.CHANGE, this.onUpdateGoodsShow, this);
        this.kEditY.addEventListener(egret.Event.CHANGE, this.onUpdateGoodsShow, this);
        this.kEditScale.addEventListener(egret.Event.CHANGE, this.onUpdateGoodsShow, this);
        this.kEditRotation.addEventListener(egret.Event.CHANGE, this.onUpdateGoodsShow, this);
        this.kEditAlpha.addEventListener(egret.Event.CHANGE, this.onUpdateGoodsShow, this);
        this.kGrpUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoveUp, this);
        this.kGrpDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoveDown, this);
    };
    /** 初始化当前待选组建的状态 */
    OptionComponent.prototype.initComShow = function () {
        this.kLabelId.text = "ID: " + this.mGoodsId;
        this.kGrpDetail.visible = false;
        this.kGrpSelectStatus.visible = false;
        if (ProductModel.instance.selectType == SELECT_TYPE.BG)
            return;
        if (this.mSelectStatus) {
            var com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
            if (com) {
                this.kGrpDetail.visible = true;
                this.kLabelId.text = "" + this.mGoodsId;
                this.kEditX.text = "" + com.x;
                this.kEditY.text = "" + com.y;
                this.kEditScale.text = "" + com.scaleX;
                this.kEditRotation.text = "" + com.rotation;
                this.kBtnConfirm.label = "移除";
            }
        }
        else {
            this.kBtnConfirm.label = "使用";
        }
    };
    /** 选中操作 */
    OptionComponent.prototype.onSelect = function () {
        ProductModel.instance.curSelectGoodsId = this.mGoodsId;
    };
    /** 刷新选中状态 */
    OptionComponent.prototype.updateSelectStatus = function (e) {
        this.kGrpSelectStatus.visible = Boolean(this.mGoodsId == e.data);
    };
    /* 使用、移除操作 */
    OptionComponent.prototype.onUseOrDel = function () {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            App.NotificationCenter.dispatch(EventConst.EVENT_SET_BG, this.mBgParam);
        }
        else {
            this.mSelectStatus ? this.mSelectStatus = false : this.mSelectStatus = true;
            var isShow = this.mSelectStatus;
            this.kGrpDetail.visible = isShow;
            this.kBtnConfirm.label = (isShow ? "移除" : "使用");
        }
    };
    /* 移动物品，刷新物品属性显示 */
    OptionComponent.prototype.updateDetail = function (e) {
        if (e.data.id != this.mGoodsId)
            return;
        this.kGrpDetail.visible = true;
        this.kLabelId.text = "ID: " + this.mGoodsId;
        this.kEditX.text = "" + e.data.com.x;
        this.kEditY.text = "" + e.data.com.y;
        this.kEditScale.text = "" + e.data.com.scaleX;
        this.kEditRotation.text = "" + e.data.com.rotation;
        this.kEditAlpha.text = "" + e.data.com.alpha;
    };
    /** 上移 */
    OptionComponent.prototype.onMoveUp = function () {
        var com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
        var curIdx = com.parent.getChildIndex(com);
        if (curIdx >= com.parent.numChildren)
            return;
        if (com) {
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: "layerIdx", value: curIdx + 1 });
        }
    };
    /** 下移 */
    OptionComponent.prototype.onMoveDown = function () {
        var com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
        var curIdx = com.parent.getChildIndex(com);
        if (curIdx <= 0)
            return;
        if (com) {
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: "layerIdx", value: curIdx - 1 });
        }
    };
    /** 刷新展示物品的属性 */
    OptionComponent.prototype.onUpdateGoodsShow = function (e) {
        App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: e.target.name, value: Number(e.target.text) });
    };
    return OptionComponent;
}(eui.Component));
__reflect(OptionComponent.prototype, "OptionComponent", ["eui.UIComponent", "egret.DisplayObject"]);
window["OptionComponent"] = OptionComponent;
//# sourceMappingURL=OptionComponent.js.map