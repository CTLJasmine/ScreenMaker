/**
 * GoodsComponent.ts 待选择的组件
 * Created by liuyang
 */

class GoodsComponent extends eui.Component implements eui.UIComponent {
    // ui
    public kGrpMain: eui.Group;
    public kImgGoods: eui.Image;
    public kLabelIdx: eui.Label;

    public mGoodsId: number = -1;
    public constructor() {
        super();
        this.skinName = "GoodsComponentSkin";
    }

    public setData(id: number): void {
        // 物品   
        this.mGoodsId = id;
        this.kImgGoods.source = `resource/assets/image/item/goods_${id}.png`;
        this.kLabelIdx.text = `${this.parent.getChildIndex(this)}`;
        App.NotificationCenter.addEventListenr(EventConst.EVENT_UPDATE_LAYER_IDX, this.onUpdateLayerIdx, this);
    }

    private onUpdateLayerIdx(): void {
        this.kLabelIdx.text = `${this.parent.getChildIndex(this)}`;
    }
}
window["GoodsComponent"] = GoodsComponent;