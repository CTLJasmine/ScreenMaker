var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 设置玩家微信托管数据
 */
var UserCloudStorageUtil = (function () {
    function UserCloudStorageUtil() {
    }
    /**
     * 粉丝数
     */
    UserCloudStorageUtil.setUserFansNum = function (fansNum) {
        var kvdata = [{ key: "fansNum", value: fansNum.toString() }];
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    };
    /**
     * 比赛次数
     */
    UserCloudStorageUtil.setUserMatchNum = function (matchNum) {
        var kvdata = [{ key: "matchNum", value: matchNum.toString() }];
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    };
    /**
     * 胜率
     */
    UserCloudStorageUtil.setUserProbability = function (probability) {
        var kvdata = [{ key: "probability", value: probability.toString() }];
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    };
    UserCloudStorageUtil.setUserCloudStorage = function (kvdata) {
        wx.setUserCloudStorage({
            KVDataList: kvdata,
            success: function (res) {
                egret.log("success", res);
            },
            fail: function (res) {
                egret.log("fail", res);
            },
            complete: function (res) {
                egret.log("complete", res);
            }
        });
    };
    return UserCloudStorageUtil;
}());
__reflect(UserCloudStorageUtil.prototype, "UserCloudStorageUtil");
//# sourceMappingURL=UserCloudStorageUtil.js.map