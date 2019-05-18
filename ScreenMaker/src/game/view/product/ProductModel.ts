/** 
 *  场景生成器数据管理文件
 *  ProductModel.ts
 *  egret
 *
 *  Created by Liu Yang on 19/05/12.
 */

/* 选择的素材类型 */
enum SELECT_TYPE {
    NULL = -1,// 未选中的空类型
    BG = 0, // 背景
    GOODS = 1, // 物品
}
class ProductModel {
    private static _instance: ProductModel;
    public static get instance(): ProductModel {
        if (!this._instance) this._instance = new ProductModel();
        return this._instance;
    }

    public goodsInFactory: GoodsComponent[] = [];// 当前场景中已经选择的道具
    public selectType: SELECT_TYPE = SELECT_TYPE.NULL;// 当前场景管理器中素材的处理类型
    public _curSelectGoodsId = -1;// 当前选中的物品id
    public set curSelectGoodsId(n) {
        if (this._curSelectGoodsId == n) return;
        this._curSelectGoodsId = n;
        App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_SELECT_GOODS, this._curSelectGoodsId);
    }
    public get curSelectGoodsId(): number { return this._curSelectGoodsId; }

    /** 从舞台上移除指定物件 */
    public rmGoodsFromStage(id: number): void {
        let com = ProductModel.instance.goodsInFactory.filter((x) => {
            return x.mGoodsId == id;
        })[0];
        if (com) {
            com.parent.removeChild(com);
            ProductModel.instance.goodsInFactory.splice(ProductModel.instance.goodsInFactory.indexOf(com));
        }
    }

    /** 获取当前选中物品组件节点 */
    public getCurSelectGoodsCom(): GoodsComponent {
        let result = this.goodsInFactory.filter((x) => {
            return this.curSelectGoodsId == x.mGoodsId;
        })
        if (result.length > 0) return result[0];
        return null;
    }

    /** 通过物品id索引物品 */
    public getGoodsInFactoryById(id: number): GoodsComponent {
        let result = this.goodsInFactory.filter((x) => {
            return x.mGoodsId == id;
        })
        if (result.length > 0) return result[0];
        return null;
    }
}