/**
 * Http请求
 */
class HttpMnager extends BaseClass {
    protected _serverUrl: string;
    protected _urlLoader: egret.URLLoader;
    protected _request: egret.URLRequest;
    protected _httpType: string;
    protected _reqCache: Array<any>;//请求缓存队列

    protected _callBack: Function;
    protected _callBackObj: Object;
    protected _isRequesting: boolean = false;
    protected _isSilence: boolean = true;

    protected _httpTimeOut: number;
    protected _currRequest: Array<any> = [];
    protected _requestNum: number;
    protected _isUpdate: boolean = true;

    protected _errorRequestNum: number;

    public constructor() {
        super();
        this.init();
    }

    private init() {

        this._reqCache = [];
        this._callBackObj = new Object();

        this._request = new egret.URLRequest();
        this._request.method = egret.URLRequestMethod.POST;

        this._urlLoader = new egret.URLLoader();
        this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    }
    /**
     * Http错误处理
     * @param  {egret.IOErrorEvent} e
     * @returns void
     */
    private onError(e: egret.IOErrorEvent): void {
        //错误处理
        this._errorRequestNum++
        if (this._errorRequestNum < 3) this.doCurrentRequest();
        else {
            this._errorRequestNum = 0;
            this.nextRequest();
        }
    }
    /**
     * 发送POST请求
     * @param  {string} url 
     * @param  {egret.URLVariables} urlVariables
     * @param  {Function} callBack
     * @param  {boolean=true} isToUpdate 是否统一底层更新数据（钻石，金币...）
     * @param  {boolean=true} silence 是否静默请求
     * @returns void
     */
    public sendPost(url: string, urlVariables: egret.URLVariables, callBack: Function, isToUpdate: boolean = true, silence: boolean = true) {
        return new Promise((resolve, reject) => {
            this._reqCache.push([url, urlVariables, callBack, egret.URLRequestMethod.POST, isToUpdate]);
            Log.trace("sendPost==2222222")

            this.doRequest();
        })
    }
    /**
     * 发送GET请求
     * @param  {string} url
     * @param  {egret.URLVariables} urlVariables
     * @param  {Function} callBack
     * @param  {boolean=true} isToUpdate 是否统一底层更新数据（钻石，金币...）
     * @param  {boolean=true} silence
     * @returns void
     */
    public sendGet(url: string, urlVariables: egret.URLVariables, callBack: Function, isToUpdate: boolean = true, silence: boolean = true): void {
        this._reqCache.push([url, urlVariables, callBack, egret.URLRequestMethod.GET, isToUpdate]);
        this.doRequest();
    }

    /**
     * 发送请求
     * @returns void
     */
    private doRequest(): void {
                Log.trace("sendPost==333333333")

        if (this._isRequesting) return;
        if (this._reqCache.length == 0) return;

        if (!this._isSilence) {
            //loading
        }

        this._currRequest = this._reqCache.shift();
        this.doCurrentRequest();
    }
    /**
     * 当前请求，方便超时重新请求
     * @returns void
     */
    private doCurrentRequest(): void {
        let type = this._currRequest[0];
        this._callBackObj[type] = this._currRequest[2];
        this._isUpdate = this._currRequest[4];

        this._request.method = this._currRequest[3];
        this._request.url = App.gameConfig.serverUrl + type;
        this._request.data = this._currRequest[1];

        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoadCompleteHandler, this);
        this._urlLoader.load(this._request);

        this._isRequesting = true;
        this.requestOutTime();
    }
    /**
     * 数据请求成功
     * @param  {egret.Event} e
     * @returns void
     */
    private onLoadCompleteHandler(e: egret.Event): void {
        egret.clearTimeout(this._httpTimeOut);

        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoadCompleteHandler, this);
        let obj = JSON.parse(this._urlLoader.data);

        ErrorCode.onErrorCodeHandler(obj, this._isUpdate);

        if (this._callBackObj.hasOwnProperty(this._currRequest[0])) {
            let fun: Function = this._callBackObj[this._currRequest[0]]
            if (fun) fun(obj);
        }
        this.clear();
        this.nextRequest();
    }
    /**
     * 执行下个请求
     * @returns void
     */
    private nextRequest(): void {
        this.doRequest();
    }
    /**
     * 请求超时
     * @returns void
     */
    private requestOutTime(): void {
        egret.clearTimeout(this._httpTimeOut);
        this._httpTimeOut = egret.setTimeout(() => {
            egret.clearTimeout(this._httpTimeOut);
            console.log("请求超时");
            //重新请求
            this._requestNum++;
            if (this._requestNum < 3) {
                this.doCurrentRequest();
            } else {
                location.reload();
            }
        }, this, 20000)
    }
    /**
     * 加密
     * @param  {any} params?
     * @returns egret
     */
    public static signRequest(params?: any): egret.URLVariables {
        let arr = [];
        let time = new Date().getTime();
        arr.push("t=" + time);

        return new egret.URLVariables();
    }

    private clear(): void {
        this._isRequesting = false;
        this._callBackObj = {};
        this._currRequest = [];
    }

}
/**
 * 错误码处理
 */
class ErrorCode {
    /**
     * @param  {any} result
     * @param  {boolean} isUpdate
     * @returns void
     */
    public static onErrorCodeHandler(result: any, isUpdate: boolean): void {
        switch (result.code) {
            case 0:
                //成功
                if (isUpdate) {
                    //统一更新（钻石，金币。。。）
                }
                break;
            case 1:
                //xx失败
                break;
        }
    }
}