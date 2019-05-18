var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "stateH", {
        get: function () {
            return App.StageUtils.getHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "stateW", {
        get: function () {
            return App.StageUtils.getWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Http", {
        /**
         * Http请求
         * @returns HttpMnager
         */
        get: function () {
            return HttpMnager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Socket", {
        /**
         * webSocket
         * @returns Socket
         */
        get: function () {
            return Socket.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "NotificationCenter", {
        /**
         * 消息处理中心
         * @returns NotificationCenter
         */
        get: function () {
            return NotificationCenter.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        /**
         * 资源工具加载类
         * @returns ResourceUtils
         */
        get: function () {
            return ResourceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /**
         * 舞台处理类
         * @returns StageUtils
         */
        get: function () {
            return StageUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MultiTouchUtils", {
        /**
         * 手势类
         * @returns MultiTouchUtils
         */
        get: function () {
            return MultiTouchUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ModelManager", {
        /**
         * Model管理类
         * @returns ModelManager
         */
        get: function () {
            return ModelManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StringUtils", {
        /**
         * 字符串管理类
         * @returns StringUtils
         */
        get: function () {
            return StringUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /**
         * 数学计算工具类
         * @returns MathUtils
         */
        get: function () {
            return MathUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /**
         * 随机数类
         * @returns RandomUtils
         */
        get: function () {
            return RandomUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ToolUtils", {
        /**
         * 通用工具数类
         * @returns ToolUtils
         */
        get: function () {
            return ToolUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ArrayUtils", {
        /**
         * 数组工具数类
         * @returns ToolUtils
         */
        get: function () {
            return ArrayUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EffectUtils", {
        /**
         * 特效工具数类
         * @returns ToolUtils
         */
        get: function () {
            return EffectUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DateUtils", {
        /*
         * 日期工具数类
         * @returns ToolUtils
         */
        get: function () {
            return DateUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "CommonUtils", {
        /** 通用工具 */
        get: function () {
            return CommonUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    App.vesion = "?v=0.0.1";
    App.gameConfig = {
        isDebug: true,
        isWeb: true,
        serverUrl: "http://hyqy.g.lieqicun.cn",
        webSocketUrl: "ws:ball.genwowan8.com/ws",
        webSocketPort: "8652",
        resourceUrl: "https://ball.genwowan8.com/",
    };
    App.cachePanel = [];
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map