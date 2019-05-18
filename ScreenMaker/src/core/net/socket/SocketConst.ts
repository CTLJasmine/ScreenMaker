// TypeScript file
enum SocketConst {
    OFFLINE = 1,//玩家离线或者被踢掉
    Login = 2,//登陆成功
    SIGN_INFO = 30,//签到信息
    SIGN_REWARD = 31,//签到奖励
    REWARD_RECEIVE = 32,//奖励领取
    PLAYER_LEVEL = 3,//玩家等级

    REDSTATE = 10000, //红点状态刷新
    USER_INFO_WEBSOCKET_MSG_TYPE = 6, //用户基本信息
    BUY_GOODS = 11,//购买商品
    GET_SHOP_INFO = 10,//获取商店商品信息
    SKILL_UPGRADE = 20,//技能升级
    SKILL_EXCHANGE = 21,//技能交换
    SKILL_INFO = 22,//技能详情
    SKILL_EQUIP = 23,//技能装备
    GET_MAIL_INFO = 50,//邮件详情
    LOOK_MAIL = 51,//查看邮件
    DELETE_MAIL = 52,//删除邮件
    GET_MAIL_REWARDS = 53,//领取邮件奖励
    GET_MAIL_REWARDS_ONEKEY = 54,//一键领取所有邮件奖励
    DECORATE_INFO = 40,         // 装扮详情
    DECORATE_MARK_READ = 41,    // 装扮标记已读（仅对newitem操作）
    DECORATE_USE = 42,          // 装扮使用
    DECORATE_SHARE = 43,        // 装扮分享
    DECORATE_TAKEOFF = 44,      // 脱掉装
    SEND_RECEIVE_CHAT_EMOJI = 60,       //发送接收聊天表情

    SEND_RECEIVE_BATTLE = 61,       //发送接收战斗同步
    RANK_WORLD_INFO = 90,//排行榜数据
    RANK_FRIENDS_INFO = 93,//排行榜数据
    RANK_PARAGRAPH_INFO = 91,//排行榜数据
    RANK_PLAYER_INFO = 92,//查看玩家信息

    SHOP_GET_FREE_REWARDS = 13, //领取免费商品
    SHOP_PLACE_ORDER = 14,//商城用人民币支付前产生游戏币订单

    START_MATCH = 63,           // 开始匹配
    MATCH_ACCOUNT = 64,         // 比赛结算
    Match_SEND_SCORE = 65,         // 比赛结算
    Match_UPDATE_LASTTIME = 66,         // 比赛剩余时间同步
    Match_EXIT_MATCHING = 67,         // 退出匹配
    Match_EXIT_MATCH = 68,         // 退出比赛

    SETTING_CD_KEY_REWARDS = 70,//通过兑换码获得物品
    SETTING_INFO = 80,//获取用户上一次设置
    SETTING_RESET = 81,//重置用户按钮位置设置

    GET_ACHIEVEMENT_INFO = 100,//获取成就的信息
    GET_ACHIEVEMENT_REWARDS = 101,//领取成就奖励
    RECEIVE_ACHIEVEMENT_REACH = 102,//获得服务器成就达成推送
}