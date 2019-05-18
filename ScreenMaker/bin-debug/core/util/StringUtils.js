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
 * 字符串操作工具类
 */
var StringUtils = (function (_super) {
    __extends(StringUtils, _super);
    /**
     * 构造函数
     */
    function StringUtils() {
        return _super.call(this) || this;
    }
    /**
     * 字符串转为数字
     * @param  {string} value
     * @returns number
     */
    StringUtils.prototype.toNumber = function (value) {
        return Number(value);
    };
    /**
     * 将字符串坐标转换成egret.Point
     * @param  {string} str
     * @returns egret
     */
    StringUtils.prototype.decodePoint = function (str) {
        var arr = str.split(";");
        var point = new egret.Point();
        point.x = this.toNumber(arr[0]);
        point.y = this.toNumber(arr[1]);
        return point;
    };
    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    StringUtils.prototype.trimSpace = function (str) {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    };
    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    StringUtils.prototype.getStringLength = function (str) {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            }
            else {
                length += 1;
            }
        }
        return length;
    };
    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    StringUtils.prototype.isChinese = function (str) {
        var reg = /^.*[\u4E00-\u9FA5]+.*$/;
        return reg.test(str);
    };
    /**
     * 将数值转换成时间字符串
     */
    StringUtils.prototype.toTimeStr = function (sec) {
        if (sec < 10) {
            return "0" + sec.toFixed();
        }
        return "" + sec.toFixed();
    };
    /**
     * 转换成金钱形式的字符串
     */
    StringUtils.prototype.toMoneyString = function (num) {
        var array = [];
        var str = "" + num;
        var j = str.length, i = j - 3;
        while (i > 0) {
            array.unshift(str.substring(i, j));
            j = i;
            i -= 3;
        }
        i = i < 0 ? 0 : i;
        array.unshift(str.substring(i, j));
        return array.join(',');
    };
    /**
     * 根据长度截取字符串
     */
    StringUtils.prototype.getStringByLength = function (str, len) {
        var mLen = 0;
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            var length = str.charCodeAt(i);
            if (length >= 0 && length < 255) {
                mLen += 1;
            }
            else {
                mLen += 2;
            }
            if (mLen < len) {
                newStr += str[i];
            }
            else {
                newStr += "...";
                return newStr;
            }
        }
        return newStr;
    };
    /**
     * 点击复制
     * @param mesage 复制内容
     */
    StringUtils.prototype.copyString = function (message) {
        var input = document.createElement("input");
        input.value = message;
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length),
            document.execCommand("Copy");
        document.body.removeChild(input);
        // TipsUtils.showTipsFromCenter("复制成功!", sp.LayerManager.UI_Message);
    };
    /**
   * 字符串占位符替换
   * @param {string}        str         带占位符的字符内容
   * @param {any[]}         params      占位符参数, 此参数可以有多个
   * 例如: format("user: {0} pwd: {1}", "abc", "123")   ==   "user: abc pwd: 123"
   */
    StringUtils.prototype.format = function (str) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (arguments.length == 0) {
            return null;
        }
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    };
    /**
     * 将时间差的相关值返回去，便于外部包装显示 【Liu Yang】
     */
    StringUtils.prototype.GetLeftTime = function (time) {
        time = Math.abs(Math.floor(time));
        var seconds = time % 60;
        var hours = (time / 60 / 60) | 0;
        var days = (time / 60 / 60 / 24) | 0;
        var minutes = (time - hours * 60 * 60) / 60 | 0;
        var hoursStr = "";
        if (Math.abs(hours) >= 0) {
            if (hours >= 24) {
                hours = hours % 24;
            }
            hoursStr += (hours < 10 ? "0" : "") + hours;
        }
        var result = {
            days: (days < 10 ? "0" : "") + days,
            hours: hoursStr,
            minutes: ("0" + minutes).substr(-2),
            seconds: ("0" + seconds).substr(-2),
        };
        return result;
    };
    /**
     * 将字符串转换为数组
     * @param  {string} str
     * @param  {string} mark
     */
    StringUtils.prototype.toArr = function (str, mark) {
        return str.split(mark);
    };
    /**
    * 把一个值转换为简洁单位
    * @param value {number}  需要转换的值
    */
    StringUtils.prototype.toCompany = function (value) {
        if (value / 10000 < 1) {
            return value.toString();
        }
        else if (value / 1000000 >= 1) {
            var twoP = Math.floor(value / 100000) % 10;
            var changeStr = Math.floor(value / 1000000).toString();
            // if (twoP != 0) {
            //     changeStr = changeStr + "." + twoP;
            // }
            changeStr = changeStr + "M";
            return changeStr;
        }
        else {
            var twoP = Math.floor(value / 100) % 10;
            var changeStr = Math.floor(value / 1000).toString();
            if (twoP != 0) {
                changeStr = changeStr + "." + twoP;
            }
            changeStr = changeStr + "K";
        }
        return changeStr;
    };
    return StringUtils;
}(BaseClass));
__reflect(StringUtils.prototype, "StringUtils");
//# sourceMappingURL=StringUtils.js.map