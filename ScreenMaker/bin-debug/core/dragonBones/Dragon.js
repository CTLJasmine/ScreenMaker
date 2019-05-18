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
var Dragon = (function (_super) {
    __extends(Dragon, _super);
    function Dragon() {
        return _super.call(this) || this;
    }
    Dragon.produce = function (type) {
        if (type === void 0) { type = "1"; }
        if (Dragon.cacheDragons[type] == null) {
            Dragon.cacheDragons[type] = [];
        }
        var dict = Dragon.cacheDragons[type];
        var item;
        if (dict.length > 0) {
            item = dict.pop();
        }
        else {
            item = new Dragon();
            // item.initDragon(type);
        }
        return item;
    };
    Dragon.reclaim = function (item, type) {
        if (type === void 0) { type = "1"; }
        if (Dragon.cacheDragons[type] == null) {
            Dragon.cacheDragons[type] = [];
        }
        var dict = Dragon.cacheDragons[type];
        dict.push(item);
        item.clear();
        item = null;
    };
    Dragon.prototype.initDragon = function (_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.DragonName = _name;
                        return [4 /*yield*/, this.onCheckLoad()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dragon.prototype.createDragon = function () {
        if (ObjectPool.checkFromPool(this.DragonName)) {
            this.aramtureDisplay = ObjectPool.getFromPool(this.DragonName);
        }
        else {
            var skeletonData = RES.getRes(this.DragonName + "_ske_dbbin");
            var textureData = RES.getRes(this.DragonName + "_tex_json");
            var texture = RES.getRes(this.DragonName + "_tex_png");
            var factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            this.aramtureDisplay = factory.buildArmatureDisplay("" + this.DragonName);
        }
        this.addChild(this.aramtureDisplay);
        if (this.actionName) {
            this.aramtureDisplay.animation.play(this.actionName, 1);
            this.actionName = null;
        }
        this.width = this.aramtureDisplay.width;
        this.height = this.aramtureDisplay.height;
    };
    Dragon.prototype.setAnchor = function () {
        this.anchorOffsetX = this.aramtureDisplay.width / 2;
        this.anchorOffsetY = this.aramtureDisplay.height;
    };
    Dragon.prototype.play = function (action, playNum) {
        if (playNum === void 0) { playNum = 1; }
        if (this.aramtureDisplay) {
            this.aramtureDisplay.animation.play(action, playNum);
        }
        else {
            this.actionName = action;
        }
    };
    Dragon.prototype.stop = function () {
        this.aramtureDisplay.animation.stop();
    };
    /**
     * 检测资源是否加载
     */
    Dragon.prototype.onCheckLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.getResAsync(this.DragonName + "_ske_dbbin")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync(this.DragonName + "_tex_json")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync(this.DragonName + "_tex_png")];
                    case 3:
                        _a.sent();
                        // let groupName = this.getGroupName();
                        // this.createGroup();
                        // if (RES.isGroupLoaded(groupName)) {
                        //     this.createDragon();
                        // } else {
                        //     await RES.loadGroup(groupName);
                        this.createDragon();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 骨骼动画事件
     * @param  {any} callBack
     */
    Dragon.prototype.addListenerFrameEvent = function (callBack) {
        this.mEventCallBack = callBack;
        this.aramtureDisplay.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameHandler, this);
    };
    Dragon.prototype.onFrameHandler = function (e) {
        if (this.mEventCallBack)
            this.mEventCallBack(e.eventObject.name);
    };
    /**
     * 播放完成动画
     * @param  {any} callBack
     */
    Dragon.prototype.addListenerComplete = function (callBack) {
        this.mCompleteCallBack = callBack;
        this.aramtureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.onCompleteHandler, this);
    };
    Dragon.prototype.onCompleteHandler = function (e) {
        this.aramtureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.onCompleteHandler, this);
        if (this.mCompleteCallBack)
            this.mCompleteCallBack();
    };
    /**
     * 动态创建资源组
     */
    Dragon.prototype.createGroup = function () {
        RES.createGroup(this.getGroupName(), [this.DragonName + "_ske_dbbin", this.DragonName + "_tex_json", this.DragonName + "_tex_png"]);
    };
    Dragon.prototype.getGroupName = function () {
        return this.DragonName + "_tex_png";
    };
    Dragon.prototype.clear = function () {
        this.aramtureDisplay.parent.removeChild(this.aramtureDisplay);
        this.aramtureDisplay.removeEventListener(dragonBones.EgretEvent.ANIMATION_FRAME_EVENT, this.onFrameHandler, this);
        this.aramtureDisplay.dispose();
        this.aramtureDisplay = null;
    };
    Dragon.cacheDragons = {};
    return Dragon;
}(egret.DisplayObjectContainer));
__reflect(Dragon.prototype, "Dragon");
//# sourceMappingURL=Dragon.js.map