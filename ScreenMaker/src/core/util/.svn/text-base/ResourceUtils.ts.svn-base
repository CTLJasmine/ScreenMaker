/**
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 * 封装Group的加载
 * 增加静默加载机制
 */
class ResourceUtils extends BaseClass {
    private _configs: Array<any>;
    private _onConfigComplete: Function;
    private _onConfigCompleteTarget: any;

    private _groups: any;
    private _groupIndex: number = 0;

    /**
     * 构造函数
     */
    public constructor() {
        super();

        this._configs = new Array<any>();
        this._groups = {};

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    }

    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
    public addConfig(jsonPath: string, filePath: string): void {
        this._configs.push([jsonPath, filePath]);
    }

    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
    public loadConfig($onConfigComplete: Function, $onConfigCompleteTarget: any): void {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    }

    /**
     * 加载
     */
    private loadNextConfig(): void {
        //加载完成
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }

        var arr: any = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        RES.loadConfig(arr[0], arr[1]);
    }

    /**
     * 加载完成
     * @param event
     */
    private onConfigCompleteHandle(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        this.loadNextConfig();
    }

    /**
     * 加载资源组
     * @param $groupName 资源组名称
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    public loadGroup($groupName: string, $onResourceLoadComplete: Function, $onResourceLoadProgress: Function, $onResourceLoadTarget: any): void {
        this._groups[$groupName] = [$onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget];
        RES.loadGroup($groupName);
    }

    /**
     * 同时加载多个组
     * @param $groupName 自定义的组名称
     * @param $subGroups 所包含的组名称或者key名称数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    public loadGroups($groupName: string, $subGroups: Array<any>, $onResourceLoadComplete: Function, $onResourceLoadProgress: Function, $onResourceLoadTarget: any): void {
        RES.createGroup($groupName, $subGroups, true);
        this.loadGroup($groupName, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget)
    }

    /**
     * 静默加载
     * @param $groupName 资源组名称
     * @param $groupName 所包含的组名称或者key名称数组
     */
    public pilfererLoadGroup($groupName: string, $subGroups: Array<any> = null): void {
        //添加前缀，防止与正常加载组名重复
        var useGroupName = "pilferer_" + $groupName;
        if (!$subGroups) {
            $subGroups = [$groupName];
        }
        RES.createGroup(useGroupName, $subGroups, true);
        RES.loadGroup(useGroupName, -1);
    }

    /**
     * 资源组加载完成
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        var groupName: string = event.groupName;
        if (this._groups[groupName]) {
            var loadComplete: Function = this._groups[groupName][0];
            var loadCompleteTarget: any = this._groups[groupName][2];
            if (loadComplete != null) {
                loadComplete.apply(loadCompleteTarget, [groupName]);
            }

            this._groups[groupName] = null;
            delete this._groups[groupName];
        }
    }

    /**
     * 资源组加载进度
     */
    private onResourceLoadProgress(event: RES.ResourceEvent): void {
        var groupName: string = event.groupName;
        if (this._groups[groupName]) {
            var loadProgress: Function = this._groups[groupName][1];
            var loadProgressTarget: any = this._groups[groupName][2];
            if (loadProgress != null) {
                loadProgress.call(loadProgressTarget, event.itemsLoaded, event.itemsTotal);
            }
        }
    }

    /**
     * 资源组加载失败
     * @param event
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        Log.trace(event.groupName + "资源组有资源加载失败");
        this.onResourceLoadComplete(event);
    }

    /**
     * 混合加载资源组
     * @param $resources 资源数组
     * @param $groups 资源组数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    public loadResource($resources = [], $groups = [], $onResourceLoadComplete: Function = null, $onResourceLoadProgress: Function = null, $onResourceLoadTarget: any = null): void {
        var needLoadArr = $resources.concat($groups);
        var groupName = "loadGroup" + this._groupIndex++;
        RES.createGroup(groupName, needLoadArr, true);
        this._groups[groupName] = [$onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget];
        RES.loadGroup(groupName);
    }

    /**
     * 动态创建加载组
     * @param {string} $groupName
     * @param {string[]} resKeys
     */
    public createGroup($groupName: string, resKeys: string[]): void {
        RES.createGroup($groupName, resKeys, true);
    }
    /**
    * 异步加载资源
    * @param $resKey 单独资源或者资源组
    * @param $callBack 加载完成回调
    * @param $silence 是否静默加载
    */
    public loadRes(resKey: any = "", callback: Function = null, silence: boolean = false): void {
        if (resKey instanceof Array && resKey.length == 0) {
            callback && callback();
            callback = null;
            return;
        }

        var loaded = 0;
        var loadCount = 0;
        var textureArr = [];
        var loadCompleteFunc = function (texture: egret.Texture = null, keyName: string = "") {
            loaded++;
            texture && textureArr.push(texture);
            //未找到图片处理
            if (!texture) {
                texture = App.cacheTexture["com_ckb_frame_png"]
                textureArr.push(texture);
            }

            // 加入到缓存中                                                                                                          
            if (keyName != "" && texture != null) {
                App.cacheTexture[keyName] = texture;
            }

            if (loaded >= loadCount) {
                if (textureArr.length == 1) {
                    textureArr = textureArr[0];
                }
                if (callback) {
                    callback(textureArr);
                }
            }
        }

        if (resKey instanceof Array) {
            loadCount = resKey.length;
            if (loadCount > 0) {
                for (var i = 0; i < loadCount; i++) {
                    var url = resKey[i];
                    // 优先从缓存中获取
                    if (App.cacheTexture[url]) {
                        loadCompleteFunc(App.cacheTexture[url], url);
                    } else {
                        if (url.indexOf("/") > -1) {
                            RES.getResByUrl(url, loadCompleteFunc, this);
                        } else {
                            RES.getResAsync(url, loadCompleteFunc, this);
                        }
                    }
                }
            } else {
                loadCompleteFunc();
            }
        }
        if (typeof resKey == "string") {
            if (resKey != "") {
                loadCount = 1;
                // 优先从缓存中获取
                if (App.cacheTexture[resKey]) {
                    loadCompleteFunc(App.cacheTexture[resKey], resKey);
                } else {
                    if (resKey.indexOf("/") > -1) {
                        RES.getResByUrl(resKey, loadCompleteFunc, this);
                    } else {
                        RES.getResAsync(resKey, loadCompleteFunc, this);
                    }
                }
            } else {
                loadCompleteFunc();
            }
        }
    }
}
