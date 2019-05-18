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
 * 通用工具类
 */
var CommonUtils = (function (_super) {
    __extends(CommonUtils, _super);
    function CommonUtils() {
        return _super.call(this) || this;
    }
    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    CommonUtils.addLableStrokeColor = function (lable, color, width) {
        lable.strokeColor = color;
        lable.stroke = width;
    };
    /**
     * 深度复制
     * @param _data
     */
    CommonUtils.copyDataHandler = function (obj) {
        var newObj;
        if (obj instanceof Array) {
            newObj = [];
        }
        else if (obj instanceof Object) {
            newObj = {};
        }
        else {
            return obj;
        }
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    };
    CommonUtils.copyData = function (data, to, exclude, depth) {
        to = to || {};
        exclude = exclude || {};
        if (!data || depth === 0)
            return;
        for (var key in data) {
            if (typeof (data[key]) !== "object") {
                if (!exclude[key]) {
                    to[key] = data[key];
                }
            }
            else {
                if (data[key] === null) {
                    continue;
                }
                if (!to[key]) {
                    if (typeof data[key].length == "number")
                        to[key] = [];
                    else
                        to[key] = {};
                }
                this.copyData(data[key], to[key], exclude, depth ? depth - 1 : depth);
            }
        }
        return to;
    };
    /**
     * 锁屏
     */
    CommonUtils.lock = function () {
        App.StageUtils.getGameStage().touchEnabled = App.StageUtils.getGameStage().touchChildren = false;
    };
    /**
     * 解屏
     */
    CommonUtils.unlock = function () {
        App.StageUtils.getGameStage().touchEnabled = App.StageUtils.getGameStage().touchChildren = true;
    };
    /**
     * int64转number
     * @param obj
     * @returns {number}
     */
    CommonUtils.int64ToNumber = function (obj) {
        return parseInt(obj.toString());
    };
    /**
     * 获取浏览器参数，包含？和#后面的参数
     */
    CommonUtils.getParams = function () {
        if (!location.search && !location.hash)
            return {};
        var params = {};
        var splitToParams = function (t) {
            for (var i = t.split("&"), n = 0; n < i.length; n++) {
                var a = i[n].split("=");
                params[a[0]] = decodeURIComponent(a[1]);
            }
        };
        location.hash && splitToParams(location.hash.substr(1));
        if (location.search) {
            var i = location.search.indexOf("?");
            if (-1 != i) {
                var n = location.search.substr(i + 1);
                n = n.split("!")[0],
                    splitToParams(n);
            }
        }
        return params;
    };
    /**
     * 根据具体尺寸获取微信头像，避免头像过大
     * 微信头像地址： http://wx.qlogo.cn/mmopen/AbruuZ3ILCng3zrfNGxRHVG2SMkjpckMaJL6pOVtwX6jq8N1iazJ7fL3CyOxV5MpnicmZZfghPFZurafiaDJUGnUw/0
     */
    CommonUtils.getHeadImg = function (src, size) {
        if (size === void 0) { size = 96; }
        src = src || "";
        if (src.indexOf('wx.qlogo.cn') > 0) {
            return src.replace("https", "http");
        }
        return src;
    };
    CommonUtils.loadHead = function (img, avatar) {
        var imageLoader = new egret.ImageLoader();
        imageLoader.load(avatar);
        imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            img.source = texture;
        }, this);
    };
    /**
     * 万字的显示
     * @param label
     * @param num
     */
    CommonUtils.labelIsOverLenght = function (label, num) {
        var str = null;
        if (num < 100000) {
            str = num;
        }
        else if (num < 1000000) {
            str = Math.floor(num / 1000 / 10).toString() + "万";
        }
        else {
            str = Math.floor(num / 10000).toString() + "万";
        }
        label.text = str;
    };
    return CommonUtils;
}(BaseClass));
__reflect(CommonUtils.prototype, "CommonUtils");
//# sourceMappingURL=CommonUtils.js.map