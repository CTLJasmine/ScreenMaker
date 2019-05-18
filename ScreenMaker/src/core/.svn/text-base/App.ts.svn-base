// TypeScript file
class App {
    public static vesion = "?v=0.0.1";
    public static cacheTexture: any[];//动态加载资源缓存

    public static gameConfig = {
        isDebug: true,
        isWeb: true,// 控制资源加载方式 true:web调试模式，本地加载；false:小游戏端，远程服务器拉取                           
        serverUrl: "http://hyqy.g.lieqicun.cn",// http使用
        webSocketUrl: "ws:ball.genwowan8.com/ws",
        webSocketPort: "8652",
        resourceUrl: "https://ball.genwowan8.com/",
    }

    public static cachePanel: BaseView[] = [];

    public static get stateH() {
        return App.StageUtils.getHeight();
    }
    public static get stateW() {
        return App.StageUtils.getWidth();
    }

    /**
     * Http请求
     * @returns HttpMnager
     */
    public static get Http(): HttpMnager {
        return HttpMnager.getInstance();
    }
    /**
     * webSocket
     * @returns Socket
     */
    public static get Socket(): Socket {
        return Socket.getInstance();
    }
    /**
     * 消息处理中心
     * @returns NotificationCenter
     */
    public static get NotificationCenter(): NotificationCenter {
        return NotificationCenter.getInstance();
    }
    /**
     * 资源工具加载类
     * @returns ResourceUtils
     */
    public static get ResourceUtils(): ResourceUtils {
        return ResourceUtils.getInstance();
    }
    /**
     * 舞台处理类
     * @returns StageUtils
     */
    public static get StageUtils(): StageUtils {
        return StageUtils.getInstance();
    }
    /**
     * 手势类
     * @returns MultiTouchUtils
     */
    public static get MultiTouchUtils(): MultiTouchUtils {
        return MultiTouchUtils.getInstance();
    }
    /**
     * Model管理类
     * @returns ModelManager
     */
    public static get ModelManager(): ModelManager {
        return ModelManager.getInstance();
    }
    
    /**
     * 字符串管理类
     * @returns StringUtils
     */
    public static get StringUtils(): StringUtils {
        return StringUtils.getInstance();
    }
    /**
     * 数学计算工具类
     * @returns MathUtils
     */
    public static get MathUtils(): MathUtils {
        return MathUtils.getInstance();
    }
    /**
     * 随机数类
     * @returns RandomUtils
     */
    public static get RandomUtils(): RandomUtils {
        return RandomUtils.getInstance();
    }
    /**
     * 通用工具数类
     * @returns ToolUtils
     */
    public static get ToolUtils(): ToolUtils {
        return ToolUtils.getInstance();
    }
    /**
     * 数组工具数类
     * @returns ToolUtils
     */
    public static get ArrayUtils(): ArrayUtils {
        return ArrayUtils.getInstance();
    }
    /**
     * 特效工具数类
     * @returns ToolUtils
     */
    public static get EffectUtils(): EffectUtils {
        return EffectUtils.getInstance();
    }
    /*
     * 日期工具数类
     * @returns ToolUtils
     */
    public static get DateUtils(): DateUtils {
        return DateUtils.getInstance();
    }

    /** 通用工具 */
    public static get CommonUtils(): CommonUtils {
        return CommonUtils.getInstance();
    }
}