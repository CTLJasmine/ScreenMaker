var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Http请求
 */
var HttpMnager = (function (_super) {
    __extends(HttpMnager, _super);
    function HttpMnager() {
        var _this = _super.call(this) || this;
        _this._isRequesting = false;
        _this._isSilence = true;
        _this._currRequest = [];
        _this._isUpdate = true;
        _this.init();
        return _this;
    }
    HttpMnager.prototype.init = function () {
        this._reqCache = [];
        this._callBackObj = new Object();
        this._request = new egret.URLRequest();
        this._request.method = egret.URLRequestMethod.POST;
        this._urlLoader = new egret.URLLoader();
        this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
    };
    /**
     * Http错误处理
     * @param  {egret.IOErrorEvent} e
     * @returns void
     */
    HttpMnager.prototype.onError = function (e) {
        //错误处理
        this._errorRequestNum++;
        if (this._errorRequestNum < 3)
            this.doCurrentRequest();
        else {
            this._errorRequestNum = 0;
            this.nextRequest();
        }
    };
    /**
     * 发送POST请求
     * @param  {string} url
     * @param  {egret.URLVariables} urlVariables
     * @param  {Function} callBack
     * @param  {boolean=true} isToUpdate 是否统一底层更新数据（钻石，金币...）
     * @param  {boolean=true} silence 是否静默请求
     * @returns void
     */
    HttpMnager.prototype.sendPost = function (url, urlVariables, callBack, isToUpdate, silence) {
        var _this = this;
        if (isToUpdate === void 0) { isToUpdate = true; }
        if (silence === void 0) { silence = true; }
        return new Promise(function (resolve, reject) {
            _this._reqCache.push([url, urlVariables, callBack, egret.URLRequestMethod.POST, isToUpdate]);
            Log.trace("sendPost==2222222");
            _this.doRequest();
        });
    };
    /**
     * 发送GET请求
     * @param  {string} url
     * @param  {egret.URLVariables} urlVariables
     * @param  {Function} callBack
     * @param  {boolean=true} isToUpdate 是否统一底层更新数据（钻石，金币...）
     * @param  {boolean=true} silence
     * @returns void
     */
    HttpMnager.prototype.sendGet = function (url, urlVariables, callBack, isToUpdate, silence) {
        if (isToUpdate === void 0) { isToUpdate = true; }
        if (silence === void 0) { silence = true; }
        this._reqCache.push([url, urlVariables, callBack, egret.URLRequestMethod.GET, isToUpdate]);
        this.doRequest();
    };
    /**
     * 发送请求
     * @returns void
     */
    HttpMnager.prototype.doRequest = function () {
        Log.trace("sendPost==333333333");
        if (this._isRequesting)
            return;
        if (this._reqCache.length == 0)
            return;
        if (!this._isSilence) {
            //loading
        }
        this._currRequest = this._reqCache.shift();
        this.doCurrentRequest();
    };
    /**
     * 当前请求，方便超时重新请求
     * @returns void
     */
    HttpMnager.prototype.doCurrentRequest = function () {
        var type = this._currRequest[0];
        this._callBackObj[type] = this._currRequest[2];
        this._isUpdate = this._currRequest[4];
        this._request.method = this._currRequest[3];
        this._request.url = App.gameConfig.serverUrl + type;
        this._request.data = this._currRequest[1];
        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoadCompleteHandler, this);
        this._urlLoader.load(this._request);
        this._isRequesting = true;
        this.requestOutTime();
    };
    /**
     * 数据请求成功
     * @param  {egret.Event} e
     * @returns void
     */
    HttpMnager.prototype.onLoadCompleteHandler = function (e) {
        egret.clearTimeout(this._httpTimeOut);
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoadCompleteHandler, this);
        var obj = JSON.parse(this._urlLoader.data);
        ErrorCode.onErrorCodeHandler(obj, this._isUpdate);
        if (this._callBackObj.hasOwnProperty(this._currRequest[0])) {
            var fun = this._callBackObj[this._currRequest[0]];
            if (fun)
                fun(obj);
        }
        this.clear();
        this.nextRequest();
    };
    /**
     * 执行下个请求
     * @returns void
     */
    HttpMnager.prototype.nextRequest = function () {
        this.doRequest();
    };
    /**
     * 请求超时
     * @returns void
     */
    HttpMnager.prototype.requestOutTime = function () {
        var _this = this;
        egret.clearTimeout(this._httpTimeOut);
        this._httpTimeOut = egret.setTimeout(function () {
            egret.clearTimeout(_this._httpTimeOut);
            console.log("请求超时");
            //重新请求
            _this._requestNum++;
            if (_this._requestNum < 3) {
                _this.doCurrentRequest();
            }
            else {
                location.reload();
            }
        }, this, 20000);
    };
    /**
     * 加密
     * @param  {any} params?
     * @returns egret
     */
    HttpMnager.signRequest = function (params) {
        var arr = [];
        var time = new Date().getTime();
        arr.push("t=" + time);
        return new egret.URLVariables();
    };
    HttpMnager.prototype.clear = function () {
        this._isRequesting = false;
        this._callBackObj = {};
        this._currRequest = [];
    };
    return HttpMnager;
}(BaseClass));
__reflect(HttpMnager.prototype, "HttpMnager");
/**
 * 错误码处理
 */
var ErrorCode = (function () {
    function ErrorCode() {
    }
    /**
     * @param  {any} result
     * @param  {boolean} isUpdate
     * @returns void
     */
    ErrorCode.onErrorCodeHandler = function (result, isUpdate) {
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
    };
    return ErrorCode;
}());
__reflect(ErrorCode.prototype, "ErrorCode");
//# sourceMappingURL=HttpManager.js.map