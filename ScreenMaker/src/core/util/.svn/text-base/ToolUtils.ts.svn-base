/**
 * 通用工具类
 */
class ToolUtils extends BaseClass {
    public constructor() {
        super();
    }

    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    public static addLableStrokeColor(lable: eui.Label, color: any, width: any): void {
        lable.strokeColor = color;
        lable.stroke = width;
    }

    /**
     * 深度复制
     * @param _data
     */
    public static copyDataHandler(obj: any): any {
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
        for (var i: number = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    }

    /**
     * 锁屏
     */
    public static lock(): void {
        App.StageUtils.stage.touchEnabled = App.StageUtils.stage.touchChildren = false;
    }

    /**
     * 解屏
     */
    public static unlock(): void {
        App.StageUtils.stage.touchEnabled = App.StageUtils.stage.touchChildren = true;
    }

    /**
     * 万字的显示
     * @param label
     * @param num
     */
    public static labelIsOverLenght = function (label, num) {
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

    /**
     * int64转number
     * @param obj
     * @returns {number}
     */
    public static int64ToNumber(obj) {
        return parseInt(obj.toString());
    }

    /**
   * 获取浏览器参数，包含？和#后面的参数
   */
    public static getParams(): any {
        if (!location.search && !location.hash)
            return {};
        var params = {};
        var splitToParams = function (t) {
            for (var i = t.split("&"), n = 0; n < i.length; n++) {
                var a = i[n].split("=");
                params[a[0]] = decodeURIComponent(a[1])
            }
        };
        location.hash && splitToParams(location.hash.substr(1));

        if (location.search) {
            var i = location.search.indexOf("?");
            if (-1 != i) {
                var n = location.search.substr(i + 1);
                n = n.split("!")[0],
                    splitToParams(n)
            }
        }
        return params;
    }

    /**
     * 根据具体尺寸获取微信头像，避免头像过大
     * 微信头像地址： http://wx.qlogo.cn/mmopen/AbruuZ3ILCng3zrfNGxRHVG2SMkjpckMaJL6pOVtwX6jq8N1iazJ7fL3CyOxV5MpnicmZZfghPFZurafiaDJUGnUw/0
     */
    public static getHeadImg(src: string, size: number = 96) {
        src = src || "";
        if (src.indexOf('wx.qlogo.cn') > 0) {
            return src.replace(/\/0$/, "/" + size);
        }
        return src;
    }

    public static getNum(arr) {
        let gold = Math.pow(10, arr[1]) * arr[0];
        return App.StringUtils.toCompany(Math.ceil(gold));
    }

    /** 
     * 将新对象的所有属性赋值到基础对象上, 并返回新的基础对象
     * @param {any}           baseObj     基础对象
     * @param {any}           newObj      新的对象
     */
    public static copyData(baseObj: any, newObj: any): any {
        if (newObj) {
            for (var key in newObj) {
                baseObj[key] = newObj[key];
            }
        }
        return baseObj;
    }
}
