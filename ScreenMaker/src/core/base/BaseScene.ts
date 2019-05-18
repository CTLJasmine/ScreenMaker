/**
 * Scene基类
 */
class BaseScene extends BaseClass {

    //当前所有Layer
    private _layers: Array<egret.DisplayObjectContainer>;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._layers = new Array<egret.DisplayObjectContainer>();
    }

    /**
     * 进入Scene调用
     */
    public onEnter(): void {
        console.log("onEnete");

    }

    /**
     * 退出Scene调用
     */
    public onExit(): void {
        this.removeAllLayer();
    }

    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    public addLayer(layer: egret.DisplayObjectContainer, index: number = -1): void {
        if (layer instanceof BaseUILayer) {
            if (index >= 0) App.StageUtils.getGameStage().addChildAt(layer, index);
            else App.StageUtils.getGameStage().addChild(layer);
            this._layers.push(layer);
        }
    }

    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    public removeLayer(layer: egret.DisplayObjectContainer): void {
        if (layer instanceof BaseUILayer) {
            App.StageUtils.getGameStage().removeChild(layer);
            this._layers.splice(this._layers.indexOf(layer), 1);
        }
    }

    /**
     * Layer中移除所有
     * @param layer
     */
    public layerRemoveAllChild(layer: egret.DisplayObjectContainer): void {
        if (layer instanceof BaseUILayer) {
            (<BaseUILayer>layer).removeChildren();
        }
    }

    /**
     * 移除所有Layer
     */
    public removeAllLayer(): void {
        while (this._layers.length) {
            var layer: egret.DisplayObjectContainer = this._layers[0];
            this.layerRemoveAllChild(layer);
            this.removeLayer(layer);
        }
    }
}