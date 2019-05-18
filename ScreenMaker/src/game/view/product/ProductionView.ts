/** 
 *  场景生成器
 *  ProductionView.ts
 *  egret
 *
 *  Created by Liu Yang on 19/05/08.
 */
class ProductionView extends BaseView {
    public kGrpFactory: eui.Group;
    public kImgBg: eui.Image;
    public kGrpGoods: eui.Group;
    public kGrpSelect: eui.Group;
    public kGrpSwitch: eui.Group;
    public kImgArrow: eui.Image;
    public kBtnBg: eui.Button;
    public kBtnGoods: eui.Button;
    public kGrpWarehouse: eui.Group;
    public kGrpSelectBgCondition: eui.Group;
    public kBgInputId1: eui.EditableText;
    public kBgInputId2: eui.EditableText;
    public kGrpSelectGoodsCondition: eui.Group;
    public kGoodsInputStart: eui.EditableText;
    public kGoodsInputEnd: eui.EditableText;
    public kBtnConditionConfirm: eui.Button;
    public kEditItemList: eui.EditableText;

    private mBgCon: number[] = [];// 背景资源选择条件
    private mGoodsStartId: number = -1;// 物品资源加载起始id
    private mGoodsEndId: number = -1;// 物品资源加载结束id

    public constructor(parent: egret.DisplayObjectContainer) {
        super(parent);
        this.skinName = "ProductionSkin";
    }

    /** call by man */
    public showUI() {
        super.showUI();
    }

    public onOpen(): void {
        this.onUpdateConDitionConfirmBtnShow();
    }

    public prepare(onSuc: Function, onErr: Function): void {
        onSuc();
    }

    /** async call after showUI by sys */
    public initEvents() {
        super.initEvents();
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
    }

    public removeEvents() {
        super.removeEvents();
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
    }

    public onPreOpen(): void {
        // 选择组件初始化
        // this.kGrpSelect.x = -355;
        this.kImgArrow.source = "com_json.com_btn_arrow_right";
        // init select condition
        this.resetCon();
    }

    /* 选择组件开关 */
    public onSwitch(): void {
        this.clear();
        let switchStatus = Boolean(this.kGrpSelect.x > -355);
        egret.Tween.removeTweens(this.kGrpSelect);
        if (switchStatus) {
            // 收
            egret.Tween.get(this.kGrpSelect).to({ x: -355 }, 400, egret.Ease.cubicInOut).call(() => {
                this.kImgArrow.source = "com_json.com_btn_arrow_right";
            })
        } else {
            // 展
            egret.Tween.get(this.kGrpSelect).to({ x: 0 }, 400, egret.Ease.cubicInOut).call(() => {
                this.kImgArrow.source = "com_json.com_btn_arrow_left";
            })
        }
    }

    /* 更新条件确认按钮的显示情况 */
    private onUpdateConDitionConfirmBtnShow(): void {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            this.kBtnConditionConfirm.visible = true;
            this.kEditItemList.visible = false;
            this.kBtnConditionConfirm.enabled = Boolean(this.kBgInputId1.text != "" && this.kBgInputId2.text != "");
        } else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            this.kBtnConditionConfirm.visible = true;
            this.kEditItemList.visible = true;
            this.kBtnConditionConfirm.enabled = Boolean((this.kGoodsInputStart.text != "" && this.kGoodsInputEnd.text != "") || this.kEditItemList.text != "");
        } else {
            this.kBtnConditionConfirm.visible = this.kBtnConditionConfirm.enabled = false;
        }
    }

    /* 加载背景资源 */
    private loadBg(): void {
        this.kGrpWarehouse.removeChildren();
        let com = new OptionComponent();
        this.kGrpWarehouse.addChild(com);
        com.setData(this.mBgCon);
    }

    /* 加载物品资源 */
    private loadGoods(goods: number[]): void {
        this.kGrpWarehouse.removeChildren();
        if (goods.length <= 0) {
            // 通过起始\结束id添加
            for (let i = this.mGoodsStartId; i <= this.mGoodsEndId; i++) {
                this.loadPreGoods(i);
            }
        } else {
            // 通过制定id来添加
            goods.map((x)=>{
                this.loadPreGoods(x);
            })
        }
    }

    /* 加载每一个物件 */
    private loadPreGoods(goodsId: number): void {
        let com = new OptionComponent();
        this.kGrpWarehouse.addChild(com);
        com.setData(goodsId);
    }

    /* 确认加载显示的资源区间条件 */
    private onConfirmSelectCon(): void {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            this.mBgCon = [Number(this.kBgInputId1.text), Number(this.kBgInputId2.text)];
            this.loadBg();
        } else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            if (this.kEditItemList.text != "") {
                let arr = this.kEditItemList.text.split(",");  
                let tarArr:number[] = arr.map((x)=>{
                    return Number(x);
                })
                this.loadGoods(tarArr);
            } else {
                this.mGoodsStartId = Number(this.kGoodsInputStart.text);
                this.mGoodsEndId = Number(this.kGoodsInputEnd.text);
                this.loadGoods([]);
            }
        } else {
            this.clear();
        }
    }

    /* 选择背景素材 */
    private onSelectBg(): void {
        this.resetCon();
        this.kGrpSelectBgCondition.visible = true;
        ProductModel.instance.selectType = SELECT_TYPE.BG;
        this.onUpdateConDitionConfirmBtnShow();
    }

    /* 选择物品素材 */
    private onSelectGoods(): void {
        this.resetCon();
        this.kGrpSelectGoodsCondition.visible = true;
        ProductModel.instance.selectType = SELECT_TYPE.GOODS;
        this.onUpdateConDitionConfirmBtnShow();
    }

    /* 将物品添加至舞台上展示 */
    private onAddGoodsIntoStage(e: egret.Event): void {
        let goodsCom = new GoodsComponent();
        goodsCom.x = 520;
        goodsCom.y = 320;
        this.kGrpGoods.addChild(goodsCom);
        goodsCom.setData(e.data);
        ProductModel.instance.goodsInFactory.push(goodsCom);
    }

    /* 将展示的物品从舞台上移除 */
    private onRmGoodsFromStage(e: egret.Event): void {
        ProductModel.instance.rmGoodsFromStage(e.data);
    }

    /** 设置背景图 */
    private onUpdateBg(e: egret.Event): void {
        this.kImgBg.source = `resource/assets/image/map/bg_${e.data[0]}_${e.data[1]}.png`;
    }

    private onTouchEnd(): void {
        ProductModel.instance.curSelectGoodsId = -1;
    }

    /** 通过属性来刷新物品的显示 */
    private onUpdateGoodsShow(e: egret.Event): void {
        let result = ProductModel.instance.getGoodsInFactoryById(e.data.id);
        if (result) {
            if (e.data.valueType == "scale") {
                result.scaleX = e.data.value;
                result.scaleY = e.data.value;
                return;
            } else if (e.data.valueType == "layerIdx") {
                result.parent.setChildIndex(result, e.data.value);
                App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_LAYER_IDX);
                return;
            }
            result[e.data.valueType] = e.data.value;
        }
    }

    /** 移动物品 */
    private onMoveGoodsCom(e: egret.TouchEvent): void {
        if (ProductModel.instance.curSelectGoodsId < 0) return;
        let goodsCom = ProductModel.instance.getCurSelectGoodsCom();
        if (goodsCom) {
            goodsCom.x = e.stageX - 355;
            goodsCom.y = e.stageY;
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_DETAIL, { id: ProductModel.instance.curSelectGoodsId, com: goodsCom });
        }
    }

    /* 重置资源加载条件 */
    private resetCon(): void {
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
    }

    private clear() {
        ProductModel.instance.selectType = SELECT_TYPE.NULL;
        this.resetCon();
    }

    private onCloseHandler() {
        this.clear();
        this.close(0, 1);
    }
}