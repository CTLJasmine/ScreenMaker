var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserModel = (function () {
    function UserModel() {
    }
    Object.defineProperty(UserModel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new UserModel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /** 更新用户数据 */
    UserModel.prototype.updateData = function (data) {
    };
    return UserModel;
}());
__reflect(UserModel.prototype, "UserModel");
//# sourceMappingURL=UserModel.js.map