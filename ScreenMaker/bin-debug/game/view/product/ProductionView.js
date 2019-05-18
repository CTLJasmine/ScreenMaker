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
/**
 *  场景生成器
 *  ProductionView.ts
 *  egret
 *
 *  Created by Liu Yang on 19/05/08.
 */
var ProductionView = (function (_super) {
    __extends(ProductionView, _super);
    function ProductionView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.mBgCon = []; // 背景资源选择条件
        _this.mGoodsStartId = -1; // 物品资源加载起始id
        _this.mGoodsEndId = -1; // 物品资源加载结束id
        _this.skinName = "ProductionSkin";
        return _this;
    }
    /** call by man */
    ProductionView.prototype.showUI = function () {
        _super.prototype.showUI.call(this);
    };
    ProductionView.prototype.onOpen = function () {
        this.onUpdateConDitionConfirmBtnShow();
    };
    ProductionView.prototype.prepare = function (onSuc, onErr) {
        onSuc();
    };
    /** async call after showUI by sys */
    ProductionView.prototype.initEvents = function () {
        _super.prototype.initEvents.call(this);
        this.kGrpSwitch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitch, this);
        this.kBtnBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBg, this);
        this.kBtnGoods.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGoods, this);
        this.kBtnConditionConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmSelectCon, this);
        this.kBgInputId1.addEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kBgInputId2.addEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kGoodsInputStart.addEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kGoodsInputEnd.addEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kEditItemList.addEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveGoodsCom, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_ADD_GOODS, this.onAddGoodsIntoStage, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_RM_GOODS, this.onRmGoodsFromStage, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_SET_BG, this.onUpdateBg, this);
        App.NotificationCenter.addEventListenr(EventConst.EVENT_UPDATE_GOODS_SHOW, this.onUpdateGoodsShow, this);
    };
    ProductionView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.kGrpSwitch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitch, this);
        this.kBtnBg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBg, this);
        this.kBtnGoods.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGoods, this);
        this.kBtnConditionConfirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmSelectCon, this);
        this.kBgInputId1.removeEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kBgInputId2.removeEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kGoodsInputStart.removeEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kGoodsInputEnd.removeEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.kEditItemList.removeEventListener(egret.Event.CHANGE, this.onUpdateConDitionConfirmBtnShow, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveGoodsCom, this);
        App.NotificationCenter.removeEventListener(EventConst.EVENT_ADD_GOODS, this.onAddGoodsIntoStage, this);
        App.NotificationCenter.removeEventListener(EventConst.EVENT_RM_GOODS, this.onRmGoodsFromStage, this);
        App.NotificationCenter.removeEventListener(EventConst.EVENT_SET_BG, this.onUpdateBg, this);
        App.NotificationCenter.removeEventListener(EventConst.EVENT_UPDATE_GOODS_SHOW, this.onUpdateGoodsShow, this);
    };
    ProductionView.prototype.onPreOpen = function () {
        // 选择组件初始化
        // this.kGrpSelect.x = -355;
        this.kImgArrow.source = "com_json.com_btn_arrow_right";
        // init select condition
        this.resetCon();
    };
    /* 选择组件开关 */
    ProductionView.prototype.onSwitch = function () {
        var _this = this;
        this.clear();
        var switchStatus = Boolean(this.kGrpSelect.x > -355);
        egret.Tween.removeTweens(this.kGrpSelect);
        if (switchStatus) {
            // 收
            egret.Tween.get(this.kGrpSelect).to({ x: -355 }, 400, egret.Ease.cubicInOut).call(function () {
                _this.kImgArrow.source = "com_json.com_btn_arrow_right";
            });
        }
        else {
            // 展
            egret.Tween.get(this.kGrpSelect).to({ x: 0 }, 400, egret.Ease.cubicInOut).call(function () {
                _this.kImgArrow.source = "com_json.com_btn_arrow_left";
            });
        }
    };
    /* 更新条件确认按钮的显示情况 */
    ProductionView.prototype.onUpdateConDitionConfirmBtnShow = function () {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            this.kBtnConditionConfirm.visible = true;
            this.kEditItemList.visible = false;
            this.kBtnConditionConfirm.enabled = Boolean(this.kBgInputId1.text != "" && this.kBgInputId2.text != "");
        }
        else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            this.kBtnConditionConfirm.visible = true;
            this.kEditItemList.visible = true;
            this.kBtnConditionConfirm.enabled = Boolean((this.kGoodsInputStart.text != "" && this.kGoodsInputEnd.text != "") || this.kEditItemList.text != "");
        }
        else {
            this.kBtnConditionConfirm.visible = this.kBtnConditionConfirm.enabled = false;
        }
    };
    /* 加载背景资源 */
    ProductionView.prototype.loadBg = function () {
        this.kGrpWarehouse.removeChildren();
        var com = new OptionComponent();
        this.kGrpWarehouse.addChild(com);
        com.setData(this.mBgCon);
    };
    /* 加载物品资源 */
    ProductionView.prototype.loadGoods = function (goods) {
        var _this = this;
        this.kGrpWarehouse.removeChildren();
        if (goods.length <= 0) {
            // 通过起始\结束id添加
            for (var i = this.mGoodsStartId; i <= this.mGoodsEndId; i++) {
                this.loadPreGoods(i);
            }
        }
        else {
            // 通过制定id来添加
            goods.map(function (x) {
                _this.loadPreGoods(x);
            });
        }
    };
    /* 加载每一个物件 */
    ProductionView.prototype.loadPreGoods = function (goodsId) {
        var com = new OptionComponent();
        this.kGrpWarehouse.addChild(com);
        com.setData(goodsId);
    };
    /* 确认加载显示的资源区间条件 */
    ProductionView.prototype.onConfirmSelectCon = function () {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            this.mBgCon = [Number(this.kBgInputId1.text), Number(this.kBgInputId2.text)];
            this.loadBg();
        }
        else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            if (this.kEditItemList.text != "") {
                var arr = this.kEditItemList.text.split(",");
                var tarArr = arr.map(function (x) {
                    return Number(x);
                });
                this.loadGoods(tarArr);
            }
            else {
                this.mGoodsStartId = Number(this.kGoodsInputStart.text);
                this.mGoodsEndId = Number(this.kGoodsInputEnd.text);
                this.loadGoods([]);
            }
        }
        else {
            this.clear();
        }
    };
    /* 选择背景素材 */
    ProductionView.prototype.onSelectBg = function () {
        this.resetCon();
        this.kGrpSelectBgCondition.visible = true;
        ProductModel.instance.selectType = SELECT_TYPE.BG;
        this.onUpdateConDitionConfirmBtnShow();
    };
    /* 选择物品素材 */
    ProductionView.prototype.onSelectGoods = function () {
        this.resetCon();
        this.kGrpSelectGoodsCondition.visible = true;
        ProductModel.instance.selectType = SELECT_TYPE.GOODS;
        this.onUpdateConDitionConfirmBtnShow();
    };
    /* 将物品添加至舞台上展示 */
    ProductionView.prototype.onAddGoodsIntoStage = function (e) {
        var goodsCom = new GoodsComponent();
        goodsCom.x = 520;
        goodsCom.y = 320;
        this.kGrpGoods.addChild(goodsCom);
        goodsCom.setData(e.data);
        ProductModel.instance.goodsInFactory.push(goodsCom);
    };
    /* 将展示的物品从舞台上移除 */
    ProductionView.prototype.onRmGoodsFromStage = function (e) {
        ProductModel.instance.rmGoodsFromStage(e.data);
    };
    /** 设置背景图 */
    ProductionView.prototype.onUpdateBg = function (e) {
        this.kImgBg.source = "resource/assets/image/map/bg_" + e.data[0] + "_" + e.data[1] + ".png";
    };
    ProductionView.prototype.onTouchEnd = function () {
        ProductModel.instance.curSelectGoodsId = -1;
    };
    /** 通过属性来刷新物品的显示 */
    ProductionView.prototype.onUpdateGoodsShow = function (e) {
        var result = ProductModel.instance.getGoodsInFactoryById(e.data.id);
        if (result) {
            if (e.data.valueType == "scale") {
                result.scaleX = e.data.value;
                result.scaleY = e.data.value;
                return;
            }
            else if (e.data.valueType == "layerIdx") {
                result.parent.setChildIndex(result, e.data.value);
                App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_LAYER_IDX);
                return;
            }
            result[e.data.valueType] = e.data.value;
        }
    };
    /** 移动物品 */
    ProductionView.prototype.onMoveGoodsCom = function (e) {
        if (ProductModel.instance.curSelectGoodsId < 0)
            return;
        var goodsCom = ProductModel.instance.getCurSelectGoodsCom();
        if (goodsCom) {
            goodsCom.x = e.stageX - 355;
            goodsCom.y = e.stageY;
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_DETAIL, { id: ProductModel.instance.curSelectGoodsId, com: goodsCom });
        }
    };
    /* 重置资源加载条件 */
    ProductionView.prototype.resetCon = function () {
        this.kBtnConditionConfirm.enabled = false;
        this.kBtnConditionConfirm.visible = false;
        this.kBgInputId1.prompt = "章节id";
        this.kBgInputId2.prompt = "副本id";
        this.mBgCon = [];
        this.kGrpSelectBgCondition.visible = false;
        this.kGrpSelectGoodsCondition.visible = false;
        this.mGoodsStartId = this.mGoodsEndId = -1;
        this.kGoodsInputStart.prompt = "起始id";
        this.kGoodsInputEnd.prompt = "结束id";
        this.kGrpWarehouse.removeChildren();
    };
    ProductionView.prototype.clear = function () {
        ProductModel.instance.selectType = SELECT_TYPE.NULL;
        this.resetCon();
    };
    ProductionView.prototype.onCloseHandler = function () {
        this.clear();
        this.close(0, 1);
    };
    return ProductionView;
}(BaseView));
__reflect(ProductionView.prototype, "ProductionView");
//# sourceMappingURL=ProductionView.js.map