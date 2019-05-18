
/**
 * 设置玩家微信托管数据
 */
class UserCloudStorageUtil {
	public constructor() {
	}

	/**
	 * 粉丝数
	 */
	public static setUserFansNum(fansNum:number):void
    {
        let kvdata = [{key:"fansNum", value:fansNum.toString()}]
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    }

	/**
	 * 比赛次数
	 */
    public static setUserMatchNum(matchNum:number):void
    {
        let kvdata = [{key:"matchNum", value:matchNum.toString()}]
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    }

	/**
	 * 胜率
	 */
    public static setUserProbability(probability:number):void
    {
        let kvdata = [{key:"probability", value:probability.toString()}]
        UserCloudStorageUtil.setUserCloudStorage(kvdata);
    }

	private static setUserCloudStorage(kvdata:any[]):void
	{
		wx.setUserCloudStorage({
             KVDataList:kvdata,
             success: res => 
            {
                egret.log("success", res);
            },
            fail: res => 
            {
                egret.log("fail", res);
            },
            complete: res =>
            {
                egret.log("complete", res);
            }
        });
	}
}