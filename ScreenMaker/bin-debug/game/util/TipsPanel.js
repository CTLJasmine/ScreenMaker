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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 确认弹框
*/
var TipsPanel = (function (_super) {
    __extends(TipsPanel, _super);
    function TipsPanel() {
        var _this = _super.call(this) || this;
        _this._type = 1;
        _this.skinName = "TipsPanelSkin";
        return _this;
    }
    Object.defineProperty(TipsPanel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new TipsPanel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TipsPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TipsPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.kCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        this.kConfirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirm, this);
    };
    /**
     * 使用道具确认，道具不足提示购买
     * @param  {Function} callBack 点击确认按钮后的回调
     * @param  {number=1} type 1,2,3,4,5,6 1钻石不足，2糖果包购买确认，3.金币不足，4技能卡购买确认，5.金币钻石体力的购买确认,6.成就说明的展示
     * @param  {string=""} descType 物品的确认描述，金币不足和钻石不足不需要传
     * @param  {string=""} title 确认的标题 金币不足和钻石不足不需要传
     * @param  {number=0} needNum 需要花费物品的数量
     * @param  {number=1} needType 需要花费物品的类型1，人民币 2，钻石 3，金币 4，体力
     * @param  {string = ""} 确认展示的图片
     */
    TipsPanel.prototype.show = function (callBack, type, descType, title, needNum, needType, source, detail, desc) {
        if (callBack === void 0) { callBack = function () { }; }
        if (type === void 0) { type = 1; }
        if (descType === void 0) { descType = ""; }
        if (title === void 0) { title = ""; }
        if (needNum === void 0) { needNum = 0; }
        if (needType === void 0) { needType = 2; }
        if (source === void 0) { source = ""; }
        if (detail === void 0) { detail = "了解"; }
        if (desc === void 0) { desc = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._type = type;
                this.invalidateState();
                this.validateNow();
                this._callBack = callBack;
                LayerManager.UI_Tips.addChild(this);
                PopUpUtils.addPopUp(this);
                if (type != 1) {
                    this.kConfirmBtn.labelDisplay.text = needNum.toString();
                }
                // this.kImgNeedType.source = RewardUtil.getGoodsSource(needType);
                switch (this._type) {
                    case 1:
                        break;
                    case 2:
                        this.kLbDesc.text = descType;
                        this.kLbTitle.text = title;
                        this.kImgBig.source = this.kImgSmall.source = source;
                        break;
                    case 3:
                        break;
                    case 4:
                        this.kLbDesc.text = descType;
                        this.kLbTitle.text = title;
                        this.kImgBig.source = this.kImgSmall.source = source;
                        break;
                    case 4:
                        break;
                    case 5:
                        this.kLbDesc.text = descType;
                        this.kLbTitle.text = title;
                        this.kImgContent.source = source;
                        break;
                    case 6:
                        this.kLbTitle.text = title;
                        this.kConfirmBtn.labelDisplay.text = detail;
                        this.kImgContent.source = source;
                        this.kLbDesc.textFlow = desc;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    TipsPanel.prototype.getCurrentState = function () {
        _super.prototype.getCurrentState.call(this);
        switch (this._type) {
            case 1://钻石不足
                return "type1";
            case 2://技能卡
                return "type2";
            case 3://金币不足
                return "type3";
            case 4://购买技能卡
                return "type4";
            case 5://金币钻石体力通用
                return "type1";
            case 6://成就了解
                return "type1";
        }
    };
    TipsPanel.prototype.close = function () {
        PopUpUtils.removePopUp(this);
    };
    TipsPanel.prototype.onConfirm = function () {
        var _this = this;
        PopUpUtils.removePopUp(this, function () {
            if (_this._callBack)
                _this._callBack();
        });
    };
    return TipsPanel;
}(eui.Component));
__reflect(TipsPanel.prototype, "TipsPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=TipsPanel.js.map