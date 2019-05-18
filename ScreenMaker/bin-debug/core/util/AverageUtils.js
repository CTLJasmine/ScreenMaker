var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 平均数工具类
 */
var AverageUtils = (function () {
    /**
     * 构造函数
     * @param  {number=10} _maxNum
     */
    function AverageUtils(_maxNum) {
        if (_maxNum === void 0) { _maxNum = 10; }
        this.numList = [];
        this.numSum = 0;
        this.numsLen = 0;
        this.maxNum = _maxNum;
    }
    /**
     * 添加一个值
     * @param  {number} _value
     */
    AverageUtils.prototype.add = function (_value) {
        if (this.numsLen > this.maxNum) {
            this.numsLen--;
            this.numSum -= this.numList.shift();
        }
        this.numList.push(_value);
        this.numsLen += _value;
        this.numsLen++;
    };
    /**
     * 获取平均值
     * @returns number
     */
    AverageUtils.prototype.getValue = function () {
        return this.numSum / this.numsLen;
    };
    AverageUtils.prototype.clear = function () {
        this.numList.splice(0, this.numList.length);
        this.numList = [];
        this.numSum = 0;
        this.numsLen = 0;
    };
    return AverageUtils;
}());
__reflect(AverageUtils.prototype, "AverageUtils");
//# sourceMappingURL=AverageUtils.js.map