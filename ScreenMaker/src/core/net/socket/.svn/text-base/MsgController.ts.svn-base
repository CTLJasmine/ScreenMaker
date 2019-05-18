/**
 * 返回消息处理
 */
class MsgController {

    private static isReward: boolean = false;

    public static dealMsg(obj) {
        let data: any;
        if (obj.type != 1) {
            data = obj.data.data;
        } console.log(obj); if (obj.data.code != 0) { TipsUtils.showTipsFromCenter(obj.data.message); return; }
        switch (obj.type) {
            case SocketConst.Login://登录
                App.NotificationCenter.dispatch(MsgConst.LOGIN);
                TipsUtils.showTipsFromCenter(`您的账号已在其他地方登录，请刷新重试~~`);
                break;
        }
    }
}
