var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 生成单例的基类
 */
var BaseClass = (function () {
    function BaseClass() {
    }
    /**
     * 生成一个单例
     * @param  {any[]} ...params
     * @returns any
     */
    BaseClass.getInstance = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            var paramsLen = params.length;
            switch (paramsLen) {
                case 0:
                    Class._instance = new Class();
                    break;
                case 1:
                    Class._instance = new Class(params[0]);
                    break;
                case 2:
                    Class._instance = new Class(params[0], params[1]);
                    break;
                case 3:
                    Class._instance = new Class(params[0], params[1], params[2]);
                    break;
                case 4:
                    Class._instance = new Class(params[0], params[1], params[2], params[3]);
                    break;
                case 5:
                    Class._instance = new Class(params[0], params[1], params[2], params[3], params[4]);
                    break;
            }
        }
        return Class._instance;
    };
    return BaseClass;
}());
__reflect(BaseClass.prototype, "BaseClass");
//# sourceMappingURL=BaseClass.js.map