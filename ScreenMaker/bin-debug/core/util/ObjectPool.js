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
var ObjectPool = (function (_super) {
    __extends(ObjectPool, _super);
    function ObjectPool() {
        return _super.call(this) || this;
    }
    ObjectPool.push = function (key, obj) {
        if (obj == null)
            return;
        if (!ObjectPool._content[key]) {
            ObjectPool._content[key] = [];
        }
        ObjectPool._content[key].push(obj);
    };
    /**
     * @param  {any} key
     * @returns any
     */
    ObjectPool.getFromPool = function (key) {
        if (!ObjectPool._content[key]) {
            return;
        }
        var list = ObjectPool._content[key];
        return list.pop();
    };
    /**
     * 监测对象池中是否存在
     * @param  {any} key
     * @returns boolean
     */
    ObjectPool.checkFromPool = function (key) {
        if (!ObjectPool._content[key]) {
            return false;
        }
        return true;
    };
    ObjectPool._content = {};
    return ObjectPool;
}(BaseClass));
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map