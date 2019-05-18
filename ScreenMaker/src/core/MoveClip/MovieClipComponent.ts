/**
 * MovieClip动画
 */
class MovieClipComponent extends eui.Component implements eui.UIComponent {


    private static mCacheDict = {};
    /**
     * 创建
     * @param  {string="1"} type
     * @param  {string} mcName 动画名称
     * @param  {boolean} isLod 是否需要动态加载资源，默认不需要
     * @returns MovieClipComponent
     */
    public static produce(type: string = "1", mcName: string, isLod: boolean = false): MovieClipComponent {
        if (MovieClipComponent.mCacheDict[type] == null) {
            MovieClipComponent.mCacheDict[type] = [];
        }

        var dict: MovieClipComponent[] = MovieClipComponent.mCacheDict[type];
        var item: MovieClipComponent;
        if (dict.length > 0) {
            item = dict.pop();
        } else {
            item = new MovieClipComponent(mcName, isLod);
        }
        return item;
    }
    /**
     * 回收
     */
    public static reclaim(item: MovieClipComponent, type: string = "1") {
        if (MovieClipComponent.mCacheDict[type] == null) {
            MovieClipComponent.mCacheDict[type] = [];
        }
        var dict: MovieClipComponent[] = MovieClipComponent.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
        }
    }

    private mName: string;
    private mIsLoad: string;
    private mc: egret.MovieClip;
    private mCallBack: Function;
    public constructor(name, isLod) {
        super();
        this.mName = name;
        this.mIsLoad = isLod;
        this.createMoviClip();
    }

    private createMoviClip(): void {
        var data: any;
        var texture: egret.Texture;
        if (this.mIsLoad) {
            MovieClipResLoader.getInstance().load(this.mName, (_config, _texture) => {
                data = _config;
                texture = _texture
                this.mc = new egret.MovieClip(mcFactory.generateMovieClipData(this.mName));
                this.addChild(this.mc);
                this.width = this.mc.width;
                this.height = this.mc.height;
                this.mc.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
            })
        } else {
            data = RES.getRes(this.mName + "_json");
            texture = RES.getRes(this.mName + "_png");
            var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
            this.mc = new egret.MovieClip(mcFactory.generateMovieClipData(this.mName));
            this.addChild(this.mc);
            this.width = this.mc.width;
            this.height = this.mc.height;
            this.mc.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        }
    }

    public setAnchor(): void {
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
    }

    public stop(callBack: Function = null): void {
        this.mc.stop();
        if (callBack) callBack();
    }
    /**
     * 动画播放，默认播放1次
     */
    public gotoPlay(animType: any, callBack: Function = null, playNum: number = undefined): void {
        this.mCallBack = callBack;
        this.mc.gotoAndPlay(animType, playNum);
    }
    /**
     * 动画播放，默认播放1次
     */
    public play(playNum: number = 0, callBack: Function = null): void {
        this.mCallBack = callBack;
        this.mc.play(playNum);
    }

    private onComplete(): void {
        if (this.mCallBack) this.mCallBack();
    }

    private resLoad(name: string): void {

    }
}

class MovieClipResLoader extends BaseClass {
    private mIsloadConfig: boolean = false;
    private mIsloadTexture: boolean = false;
    private mConfig: any;
    private mTexture: egret.Texture;
    private mCallBack: Function;
    public constructor() {
        super();
    }
    public load(name: string, callBack): void {
        this.mCallBack = callBack;
        RES.getResAsync(name + "_json", (e) => {
            this.mConfig = e;
            this.mIsloadConfig = true;
            if (this.mIsloadConfig && this.mIsloadTexture) this.onComplete();
        }, this);
        RES.getResAsync(name + "_png", (e) => {
            this.mTexture = e;
            this.mIsloadTexture = true;
            if (this.mIsloadConfig && this.mIsloadTexture) this.onComplete();
        }, this);
    }

    private onComplete(): void {
        this.mCallBack(this.mConfig, this.mTexture);
    }
}