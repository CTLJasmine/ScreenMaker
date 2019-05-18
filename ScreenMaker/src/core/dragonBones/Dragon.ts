class Dragon extends egret.DisplayObjectContainer {

    private static cacheDragons = {}
    public static produce(type: string = "1"): Dragon {
        if (Dragon.cacheDragons[type] == null) {
            Dragon.cacheDragons[type] = [];
        }

        let dict: Dragon[] = Dragon.cacheDragons[type];
        let item: Dragon;
        if (dict.length > 0) {
            item = dict.pop();
        } else {
            item = new Dragon();
            // item.initDragon(type);
        }
        return item;
    }

    public static reclaim(item: Dragon, type: string = "1") {
        if (Dragon.cacheDragons[type] == null) {
            Dragon.cacheDragons[type] = [];
        }
        let dict: Dragon[] = Dragon.cacheDragons[type];
        dict.push(item);
        item.clear();
        item = null;
    }
    public constructor() {
        super()
    }
    public DragonName: string;
    private aramtureDisplay: dragonBones.EgretArmatureDisplay;
    private actionName: string;

    private mEventCallBack: Function;
    private mCompleteCallBack: Function;
    public async initDragon(_name: string) {
        this.DragonName = _name;
        await this.onCheckLoad();
    }

    private createDragon() {
        if (ObjectPool.checkFromPool(this.DragonName)) {
            this.aramtureDisplay = ObjectPool.getFromPool(this.DragonName);
        } else {
            let skeletonData = RES.getRes(`${this.DragonName}_ske_dbbin`);
            let textureData = RES.getRes(`${this.DragonName}_tex_json`);
            let texture = RES.getRes(`${this.DragonName}_tex_png`);

            let factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            this.aramtureDisplay = factory.buildArmatureDisplay(`${this.DragonName}`);
        }
        this.addChild(this.aramtureDisplay);
        if (this.actionName) {
            this.aramtureDisplay.animation.play(this.actionName, 1);
            this.actionName = null;
        }
        this.width = this.aramtureDisplay.width;
        this.height = this.aramtureDisplay.height;
    }

    public setAnchor() {
        this.anchorOffsetX = this.aramtureDisplay.width / 2;
        this.anchorOffsetY = this.aramtureDisplay.height;
    }

    public play(action, playNum: number = 1) {
        if (this.aramtureDisplay) {
            this.aramtureDisplay.animation.play(action, playNum);
        } else {
            this.actionName = action;
        }
    }

    public stop() {
        this.aramtureDisplay.animation.stop();
    }
    /**
     * 检测资源是否加载
     */
    private async onCheckLoad() {
        await RES.getResAsync(`${this.DragonName}_ske_dbbin`);
        await RES.getResAsync(`${this.DragonName}_tex_json`);
        await RES.getResAsync(`${this.DragonName}_tex_png`);
        // let groupName = this.getGroupName();
        // this.createGroup();
        // if (RES.isGroupLoaded(groupName)) {
        //     this.createDragon();
        // } else {
        //     await RES.loadGroup(groupName);
        this.createDragon();
        // }
    }
    /**
     * 骨骼动画事件
     * @param  {any} callBack
     */
    public addListenerFrameEvent(callBack) {
        this.mEventCallBack = callBack;
        this.aramtureDisplay.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameHandler, this);
    }
    private onFrameHandler(e) {
        if (this.mEventCallBack) this.mEventCallBack(e.eventObject.name);
    }
    /**
     * 播放完成动画
     * @param  {any} callBack
     */
    public addListenerComplete(callBack) {
        this.mCompleteCallBack = callBack;
        this.aramtureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.onCompleteHandler, this);

    }
    private onCompleteHandler(e: dragonBones.EventObject) {
        this.aramtureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.onCompleteHandler, this);
        if (this.mCompleteCallBack) this.mCompleteCallBack();

    }
    /**
     * 动态创建资源组
     */
    private createGroup() {
        RES.createGroup(this.getGroupName(), [`${this.DragonName}_ske_dbbin`, `${this.DragonName}_tex_json`, `${this.DragonName}_tex_png`])
    }

    private getGroupName(): string {
        return `${this.DragonName}_tex_png`;
    }

    private clear() {
        this.aramtureDisplay.parent.removeChild(this.aramtureDisplay);
        this.aramtureDisplay.removeEventListener(dragonBones.EgretEvent.ANIMATION_FRAME_EVENT, this.onFrameHandler, this);

        this.aramtureDisplay.dispose();
        this.aramtureDisplay = null;
    }
}