/**
 *  场景生成器数据管理文件
 *  ProductModel.ts
 *  egret
 *
 *  Created by Liu Yang on 19/05/12.
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/* 选择的素材类型 */
var SELECT_TYPE;
(function (SELECT_TYPE) {
    SELECT_TYPE[SELECT_TYPE["NULL"] = -1] = "NULL";
    SELECT_TYPE[SELECT_TYPE["BG"] = 0] = "BG";
    SELECT_TYPE[SELECT_TYPE["GOODS"] = 1] = "GOODS";
})(SELECT_TYPE || (SELECT_TYPE = {}));
var ProductModel = (function () {
    function ProductModel() {
        this.goodsInFactory = []; // 当前场景中已经选择的道具
        this.selectType = SELECT_TYPE.NULL; // 当前场景管理器中素材的处理类型
        this._curSelectGoodsId = -1; // 当前选中的物品id
    }
    Object.defineProperty(ProductModel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new ProductModel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "curSelectGoodsId", {
        get: function () { return this._curSelectGoodsId; },
        set: function (n) {
            if (this._curSelectGoodsId == n)
                return;
            this._curSelectGoodsId = n;
            App.NotificationCenter.dispatch(EventConst.EVENT_UPDATE_SELECT_GOODS, this._curSelectGoodsId);
        },
        enumerable: true,
        configurable: true
    });
    /** 从舞台上移除指定物件 */
    ProductModel.prototype.rmGoodsFromStage = function (id) {
        var com = ProductModel.instance.goodsInFactory.filter(function (x) {
            return x.mGoodsId == id;
        })[0];
        if (com) {
            com.parent.removeChild(com);
            ProductModel.instance.goodsInFactory.splice(ProductModel.instance.goodsInFactory.indexOf(com));
        }
    };
    /** 获取当前选中物品组件节点 */
    ProductModel.prototype.getCurSelectGoodsCom = function () {
        var _this = this;
        var result = this.goodsInFactory.filter(function (x) {
            return _this.curSelectGoodsId == x.mGoodsId;
        });
        if (result.length > 0)
            return result[0];
        return null;
    };
    /** 通过物品id索引物品 */
    ProductModel.prototype.getGoodsInFactoryById = function (id) {
        var result = this.goodsInFactory.filter(function (x) {
            return x.mGoodsId == id;
        });
        if (result.length > 0)
            return result[0];
        return null;
    };
    return ProductModel;
}());
__reflect(ProductModel.prototype, "ProductModel");
//# sourceMappingURL=ProductModel.js.map