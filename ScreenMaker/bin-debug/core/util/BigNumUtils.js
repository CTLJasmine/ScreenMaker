var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BigNumUtils = (function () {
    function BigNumUtils() {
    }
    /** list[0]:底数 list[1]:指数 */
    BigNumUtils.formatListToNum = function (list) {
        var num;
        if (list[1] <= 8) {
            num = (Math.pow(10, list[1]) * list[0]).toFixed(0) + "";
        }
        else if (list[1] > 8) {
            num = (Math.pow(10, list[1] - 6) * list[0]).toFixed(0) + "M";
        }
        else if (list[1] > 10) {
            num = (Math.pow(10, list[1] - 8) * list[0]).toFixed(0) + "B";
        }
        else if (list[1] > 12) {
            num = (Math.pow(10, list[1] - 10) * list[0]).toFixed(0) + "t";
        }
        else if (list[1] > 14) {
            num = (Math.pow(10, list[1] - 12) * list[0]).toFixed(0) + "q";
        }
        else if (list[1] > 16) {
            num = (Math.pow(10, list[1] - 14) * list[0]).toFixed(0) + "Q";
        }
        else if (list[1] > 18) {
            num = (Math.pow(10, list[1] - 16) * list[0]).toFixed(0) + "s";
        }
        else if (list[1] > 20) {
            num = (Math.pow(10, list[1] - 18) * list[0]).toFixed(0) + "S";
        }
        return num;
    };
    BigNumUtils.formatNum = function (value) {
        var len = value.toString().length;
        var num;
        if (len <= 9) {
            num = value + "";
        }
        else if (len > 9) {
            num = Math.floor(value / Math.pow(10, 6)) + "M";
        }
        else if (len > 11) {
            num = Math.floor(value / Math.pow(10, 8)) + "B";
        }
        else if (len > 13) {
            num = Math.floor(value / Math.pow(10, 10)) + "t";
        }
        else if (len > 15) {
            num = Math.floor(value / Math.pow(10, 12)) + "q";
        }
        else if (len > 17) {
            num = Math.floor(value / Math.pow(10, 14)) + "Q";
        }
        else if (len > 19) {
            num = Math.floor(value / Math.pow(10, 16)) + "s";
        }
        else if (len > 21) {
            num = Math.floor(value / Math.pow(10, 18)) + "S";
        }
        return num;
    };
    BigNumUtils.prototype.compareNum = function (a1, a2) {
        var a, b;
        if (a1 instanceof Array) {
            a = Math.pow(10, a1[1]) * a1[0];
            b = Math.pow(10, a1[1]) * a1[0];
        }
        else if (a1 instanceof String || a1 instanceof Number) {
            a = Number(a1);
            b = Number(a2);
        }
        return a >= b;
    };
    return BigNumUtils;
}());
__reflect(BigNumUtils.prototype, "BigNumUtils");
//# sourceMappingURL=BigNumUtils.js.map