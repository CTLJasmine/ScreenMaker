/**
 * 平均数工具类
 */
class AverageUtils {

    private maxNum: number;
    private numList: Array<number> = [];
    private numSum: number = 0;
    private numsLen: number = 0;
    /**
     * 构造函数
     * @param  {number=10} _maxNum
     */
    public constructor(_maxNum: number = 10) {
        this.maxNum = _maxNum;
    }

    /**
     * 添加一个值
     * @param  {number} _value
     */
    public add(_value: number) {
        if (this.numsLen > this.maxNum) {
            this.numsLen--;
            this.numSum -= this.numList.shift();
        }

        this.numList.push(_value);
        this.numsLen += _value;
        this.numsLen++;
    }
    /**
     * 获取平均值
     * @returns number
     */
    public getValue(): number {
        return this.numSum / this.numsLen;
    }

    public clear() {
        this.numList.splice(0, this.numList.length);
        this.numList = [];
        this.numSum = 0; this.numsLen = 0;
    }
}