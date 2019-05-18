var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserVo = (function () {
    function UserVo() {
        /** 用户ID */
        this._uid = 89869459;
        /** 用户昵称 */
        this._nickName = "测试用户";
        /** 用户头像地址 */
        this._headImgUrl = "";
        /** 用户配置信息 */
        this.configData = {
            turnSpeed: 10,
            foodLimit: 6,
        };
        /** 红点信息 */
        this.redState = {
            decorate: 0
        };
    }
    Object.defineProperty(UserVo.prototype, "uid", {
        get: function () { return this._uid; },
        set: function (n) { this._uid = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserVo.prototype, "nickName", {
        get: function () { return this._nickName; },
        set: function (s) { this._nickName = s; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserVo.prototype, "headImgUrl", {
        get: function () { return this._headImgUrl; },
        set: function (s) { this._headImgUrl = s; },
        enumerable: true,
        configurable: true
    });
    return UserVo;
}());
__reflect(UserVo.prototype, "UserVo");
//# sourceMappingURL=UserVo.js.map