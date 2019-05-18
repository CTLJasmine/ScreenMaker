/**
 * 字符串操作工具类
 */
class StringUtils extends BaseClass {
    /**
     * 构造函数
     */
    public constructor() {
        super();
    }
    /**
     * 字符串转为数字
     * @param  {string} value
     * @returns number
     */
    public toNumber(value: string): number {
        return Number(value);
    }
    /**
     * 将字符串坐标转换成egret.Point
     * @param  {string} str
     * @returns egret
     */
    public decodePoint(str: string): egret.Point {
        let arr = str.split(";");
        let point: egret.Point = new egret.Point();
        point.x = this.toNumber(arr[0]);
        point.y = this.toNumber(arr[1]);
        return point;
    }

    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    public trimSpace(str: string): string {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    }

    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    public getStringLength(str: string): number {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            } else {
                length += 1;
            }
        }
        return length;
    }

    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    public isChinese(str: string): boolean {
        var reg = /^.*[\u4E00-\u9FA5]+.*$/;
        return reg.test(str);
    }

    /**
     * 将数值转换成时间字符串
     */
    public toTimeStr(sec: number): string {
        if (sec < 10) {
            return "0" + sec.toFixed();
        }
        return "" + sec.toFixed();
    }

    /**
     * 转换成金钱形式的字符串
     */
    public toMoneyString(num: number): string {
        let array = [];
        let str = "" + num;

        let j = str.length, i = j - 3
        while (i > 0) {
            array.unshift(str.substring(i, j));
            j = i;
            i -= 3;
        }
        i = i < 0 ? 0 : i;
        array.unshift(str.substring(i, j));
        return array.join(',');
    }
    /**
     * 根据长度截取字符串
     */
    public getStringByLength(str: string, len: number): string {
        var mLen = 0;
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            var length = str.charCodeAt(i);
            if (length >= 0 && length < 255) {
                mLen += 1;
            } else {
                mLen += 2;
            }

            if (mLen < len) {
                newStr += str[i];
            } else {
                newStr += "...";
                return newStr;
            }
        }
        return newStr;
    }

    /**
     * 点击复制
     * @param mesage 复制内容
     */
    public copyString(message: string): void {
        var input = document.createElement("input");
        input.value = message;
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length),
            document.execCommand("Copy");
        document.body.removeChild(input);
        // TipsUtils.showTipsFromCenter("复制成功!", sp.LayerManager.UI_Message);
    }

    /**
   * 字符串占位符替换
   * @param {string}        str         带占位符的字符内容
   * @param {any[]}         params      占位符参数, 此参数可以有多个
   * 例如: format("user: {0} pwd: {1}", "abc", "123")   ==   "user: abc pwd: 123"
   */
    public format(str: string, ...params: any[]): string {
        if (arguments.length == 0) {
            return null;
        }
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    }

    /**
	 * 将时间差的相关值返回去，便于外部包装显示 【Liu Yang】
	 */
    public GetLeftTime(time) {
        time = Math.abs(Math.floor(time));
        let seconds = time % 60;
        let hours = (time / 60 / 60) | 0;
        let days = (time / 60 / 60 / 24) | 0;
        let minutes = (time - hours * 60 * 60) / 60 | 0;
        let hoursStr = "";

        if (Math.abs(hours) >= 0) {
            if (hours >= 24) {
                hours = hours % 24;
            }

            hoursStr += (hours < 10 ? "0" : "") + hours;
        }

        let result = {
            days: (days < 10 ? "0" : "") + days,
            hours: hoursStr,
            minutes: ("0" + minutes).substr(-2),
            seconds: ("0" + seconds).substr(-2),
        }
        return result;
    }
    /**
     * 将字符串转换为数组
     * @param  {string} str
     * @param  {string} mark
     */
    public toArr(str: string, mark: string) {
        return str.split(mark);
    }

    /**
    * 把一个值转换为简洁单位
    * @param value {number}  需要转换的值
    */
    public toCompany(value: number): string {
        if (value / 10000 < 1) {
            return value.toString();
        } else if (value / 1000000 >= 1) {
            var twoP = Math.floor(value / 100000) % 10;
            var changeStr = Math.floor(value / 1000000).toString();
            // if (twoP != 0) {
            //     changeStr = changeStr + "." + twoP;
            // }
            changeStr = changeStr + "M";
            return changeStr;
        } else {
            var twoP = Math.floor(value / 100) % 10;
            var changeStr = Math.floor(value / 1000).toString();
            if (twoP != 0) {
                changeStr = changeStr + "." + twoP;
            }
            changeStr = changeStr + "K";
        }

        return changeStr;
    }
}