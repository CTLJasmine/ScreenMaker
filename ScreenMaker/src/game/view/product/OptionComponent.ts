/**
 * OptionComponent.ts 待选择的组件
 * Created by liuyang
 */

class OptionComponent extends eui.Component implements eui.UIComponent {
    // ui
    public kGrpSelect: eui.Group;
    public kImgBg: eui.Image;
    public kImgItem: eui.Image;
    public kGrpSelectStatus: eui.Group;
    public kImgCheck: eui.Image;
    public kImgSelect: eui.Image;
    public kGrpDetail: eui.Group;
    public kEditX: eui.EditableText;
    public kEditY: eui.EditableText;
    public kEditAlpha: eui.EditableText;
    public kEditScale: eui.EditableText;
    public kEditRotation: eui.EditableText;
    public kGrpUp: eui.Group;
    public kGrpDown: eui.Group;
    public kBtnConfirm: eui.Button;
    public kLabelId: eui.Label;

    public mGoodsId: number = -1;// 物品id
    private mInit: boolean = false;
    private mBgParam: number[] = [];// 背景图片索引标识
    private get mSelectStatus(): boolean {
        return Boolean(ProductModel.instance.getGoodsInFactoryById(this.mGoodsId));
    }
    private set mSelectStatus(t: boolean) {
        if (t && !this.mSelectStatus) {
            App.NotificationCenter.dispatch(EventConst.EVENT_ADD_GOODS, this.mGoodsId);
            return;
        }
        if (!t && this.mSelectStatus) {
            App.NotificationCenter.dispatch(EventConst.EVENT_RM_GOODS, this.mGoodsId);
            return;
        }
    }

    public constructor() {
        super();
        this.skinName = "OptionComponentSkin";
    }

    public setData(...param): void {
        if (!this.mInit) this.init();
        if (ProductModel.instance.selectType == SELECT_TYPE.NULL) return;
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            // 背景组件
            this.kImgItem.visible = false;
            this.kImgBg.visible = true;
            this.kImgBg.source = `resource/assets/image/map/bg_${param[0][0]}_${param[0][1]}.png`;
            this.mBgParam = param[0];
        } else if (ProductModel.instance.selectType == SELECT_TYPE.GOODS) {
            // 物品   
            this.kImgItem.visible = true;
            this.kImgBg.visible = false;
            this.mGoodsId = param[0];
            this.kImgItem.source = `resource/assets/image/item/goods_${param[0]}.png`;
        }
        this.showFitSize();
        this.initComShow();
    }

    /** 缩放到合适的尺寸展示 */
    private showFitSize(): void {
        this.kImgItem.scaleX = this.kImgItem.scaleY = 200 / this.kImgItem.width;
    }

    private init(): void {
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
    }

    /** 初始化当前待选组建的状态 */
    private initComShow(): void {
        this.kLabelId.text = `ID: ${this.mGoodsId}`;
        this.kGrpDetail.visible = false;
        this.kGrpSelectStatus.visible = false;
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) return;
        if (this.mSelectStatus) {
            let com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
            if (com) {
                this.kGrpDetail.visible = true;
                this.kLabelId.text = `${this.mGoodsId}`;
                this.kEditX.text = `${com.x}`;
                this.kEditY.text = `${com.y}`;
                this.kEditScale.text = `${com.scaleX}`;
                this.kEditRotation.text = `${com.rotation}`;
                this.kBtnConfirm.label = "移除";
            }
        } else {
            this.kBtnConfirm.label = "使用";
        }
    }

    /** 选中操作 */
    private onSelect(): void {
        ProductModel.instance.curSelectGoodsId = this.mGoodsId;
    }

    /** 刷新选中状态 */
    private updateSelectStatus(e: egret.Event): void {
        this.kGrpSelectStatus.visible = Boolean(this.mGoodsId == e.data);
    }

    /* 使用、移除操作 */
    private onUseOrDel(): void {
        if (ProductModel.instance.selectType == SELECT_TYPE.BG) {
            App.NotificationCenter.dispatch(EventConst.EVENT_SET_BG, this.mBgParam);
        } else {
            this.mSelectStatus ? this.mSelectStatus = false : this.mSelectStatus = true;
            let isShow = this.mSelectStatus;
            this.kGrpDetail.visible = isShow;
            this.kBtnConfirm.label = (isShow ? "移除" : "使用");
        }
    }

    /* 移动物品，刷新物品属性显示 */
    public updateDetail(e: egret.Event): void {
        if (e.data.id != this.mGoodsId) return;
        this.kGrpDetail.visible = true;
        this.kLabelId.text = `ID: ${this.mGoodsId}`;
        this.kEditX.text = `${e.data.com.x}`;
        this.kEditY.text = `${e.data.com.y}`;
        this.kEditScale.text = `${e.data.com.scaleX}`;
        this.kEditRotation.text = `${e.data.com.rotation}`;
        this.kEditAlpha.text = `${e.data.com.alpha}`;
    }

    /** 上移 */
    private onMoveUp(): void {
        let com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
        let curIdx = com.parent.getChildIndex(com);
        if (curIdx >= com.parent.numChildren) return;
        if (com) {
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: "layerIdx", value: curIdx + 1 });
        }
    }

    /** 下移 */
    private onMoveDown(): void {
        let com = ProductModel.instance.getGoodsInFactoryById(this.mGoodsId);
        let curIdx = com.parent.getChildIndex(com);
        if (curIdx <= 0) return;
        if (com) {
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: "layerIdx", value: curIdx - 1 });
        }
    }

    /** 刷新展示物品的属性 */
    private onUpdateGoodsShow(e): void {
        App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_GOODS_SHOW, { id: this.mGoodsId, valueType: e.target.name, value: Number(e.target.text) });
    }
}
window["OptionComponent"] = OptionComponent;