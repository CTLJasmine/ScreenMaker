var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 对象池类
 */
var Pool = (function () {
    /**
     * 构造函数
     */
    function Pool() {
        this._objs = new Array();
    }
    /**
     * 放回一个对象
     * @param obj
     */
    Pool.prototype.pushObj = function (obj) {
        this._objs.push(obj);
    };
    /**
     * 取出一个对象
     * @returns {*}
     */
    Pool.prototype.popObj = function () {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        else {
            return null;
        }
    };
    /**
     * 清除所有缓存对象
     */
    Pool.prototype.clear = function () {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    };
    /**
     * 取出一个对象
     * @param classZ Class
     * @return Object
     *
     */
    Pool.pop = function (refKey) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!Pool._content[refKey]) {
            Pool._content[refKey] = [];
        }
        var list = Pool._content[refKey];
        if (list.length) {
            return list.pop();
        }
        else {
            var classZ = egret.getDefinitionByName(refKey);
            var argsLen = args.length;
            var obj;
            if (argsLen == 0) {
                obj = new classZ();
            }
            else if (argsLen == 1) {
                obj = new classZ(args[0]);
            }
            else if (argsLen == 2) {
                obj = new classZ(args[0], args[1]);
            }
            else if (argsLen == 3) {
                obj = new classZ(args[0], args[1], args[2]);
            }
            else if (argsLen == 4) {
                obj = new classZ(args[0], args[1], args[2], args[3]);
            }
            else if (argsLen == 5) {
                obj = new classZ(args[0], args[1], args[2], args[3], args[4]);
            }
            obj.PoolKey = refKey;
            return obj;
        }
    };
    /**
     * 取出一个对象
     * @param refKey Class
     * @param extraKey 标识值
     * @returns {any}
     */
    Pool.popWithExtraKey = function (refKey, extraKey) {
        if (!Pool._content[refKey]) {
            Pool._content[refKey] = [];
        }
        var obj;
        var list = Pool._content[refKey];
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].extraKey == extraKey) {
                    obj = list[i];
                    list.splice(i, 1);
                    break;
                }
            }
        }
        if (!obj) {
            var classZ = egret.getDefinitionByName(refKey);
            obj = new classZ(extraKey);
            obj.extraKey = extraKey;
            obj.PoolKey = refKey;
        }
        return obj;
    };
    /**
     * 放入一个对象
     * @param obj
     *
     */
    Pool.push = function (obj) {
        if (obj == null) {
            return false;
        }
        var refKey = obj.PoolKey;
        //保证只有pop出来的对象可以放进来，或者是已经清除的无法放入
        if (!Pool._content[refKey]) {
            return false;
        }
        Pool._content[refKey].push(obj);
        return true;
    };
    /**
     * 清除所有对象
     */
    Pool.clear = function () {
        Pool._content = {};
    };
    /**
     * 清除某一类对象
     * @param classZ Class
     * @param clearFuncName 清除对象需要执行的函数
     */
    Pool.clearClass = function (refKey, clearFuncName) {
        if (clearFuncName === void 0) { clearFuncName = null; }
        var list = Pool._content[refKey];
        while (list && list.length) {
            var obj = list.pop();
            if (clearFuncName) {
                obj[clearFuncName]();
            }
            obj = null;
        }
        Pool._content[refKey] = null;
        delete Pool._content[refKey];
    };
    /**
     * 缓存中对象统一执行一个函数
     * @param classZ Class
     * @param dealFuncName 要执行的函数名称
     */
    Pool.dealFunc = function (refKey, dealFuncName) {
        var list = Pool._content[refKey];
        if (list == null) {
            return;
        }
        var i = 0;
        var len = list.length;
        for (i; i < len; i++) {
            list[i][dealFuncName]();
        }
    };
    Pool._content = {};
    return Pool;
}());
__reflect(Pool.prototype, "Pool");
//# sourceMappingURL=Pool.js.map