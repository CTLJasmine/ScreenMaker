// TypeScript file
/**
 * Stage相关工具类
 */
class StageUtils extends BaseClass {

    private static _gameStage: eui.UILayer;
    public constructor() {
        super();

        if (StageUtils._gameStage == null) {
            StageUtils._gameStage = new eui.UILayer();
            StageUtils._gameStage.percentHeight = 100;
            StageUtils._gameStage.percentWidth = 100;
            StageUtils._gameStage.touchEnabled = false;
            this.stage.addChild(StageUtils._gameStage);
        }
    }


    /**
     * 获取主绘制区域
     * @returns {egret.MainContext}
     */
    public get stage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }
    /**
     * 获取游戏最底层容器  
     * @returns 
     */
    public getGameStage(): eui.UILayer {
        return StageUtils._gameStage;
    }
    /**
     * 获取游戏宽度
     * @returns number
     */
    public getWidth(): number {
        return this.stage.stageWidth;
    }
    /**
     * 获取游戏高度
     * @returns number
     */
    public getHeight(): number {
        return this.stage.stageHeight;
    }
    /**
     * 设置游戏适配模式
     * @param  {string} value
     * @returns void
     */
    public setScaleMode(value: string): void {
        this.stage.scaleMode = value;
    }
    /**
     * 初始化游戏适配模式
     * @returns void
     */
    public initScaleMode(): void {
        if ((this.getWidth() / this.getHeight()) < (640 / 1039)) {
            this.setScaleMode(egret.StageScaleMode.FIXED_WIDTH);
        } else {
            this.setScaleMode(egret.StageScaleMode.SHOW_ALL);
        }
    }
    /**
     * 获取游戏偏移高度
     * @returns number
     */
    public get offsetY(): number {
        let offsetY = (this.getHeight() - 1039) > 0 ? (this.getHeight() - 1039) : 0;
        return offsetY;
    }
    /**
     * 设置此对象的子对象是否可以触发
     * @param  {any} value
     */
    public setTouchChildren(value) {
        this.stage.touchChildren = value;
    }
    /**
     * 设置屏幕同时可触发的数量
     * @param  {number} num
     * @returns void
     */
    public setTouchs(num: number): void {
        this.stage.maxTouches = num;
    }
    /**
     * 设置帧频
     * @param  {number} frameRate
     * @returns void
     */
    public setFrameRate(frameRate: number): void {
        this.stage.frameRate = frameRate;
    }

}