class EffectUtils extends BaseClass {
    public static fly() {
        var group = new eui.Group();
        for (let i = 0; i < 10; i++) {
            let img = new FlyUtil();
            group.addChild(img);
            // img.x = 200 + Math.random() * 30;
            // img.y = 400 + Math.random() * 30;
            // egret.Tween.get(img).to({ x: 400 + Math.random() * 100, y: 100 + Math.random() * 100 }, 100 * i, egret.Ease.quadIn).to({ x: 640, y: Math.random() + 50 }, 100 * i, egret.Ease.quadIn);
        }
        LayerManager.Effect_Layer.addChild(group);
    }
}

class FlyUtil extends egret.DisplayObjectContainer {
    private img: eui.Image;
    private mCurrentAttPointList = [];
    public constructor() {
        super();
        this.img = new eui.Image("icon_1_png");
        this.addChild(this.img);

        let point = new egret.Point(200 + Math.random() * 30, 400 + Math.random() * 30);
        let point1 = new egret.Point(400 + Math.random() * 100, 100 + Math.random() * 100);
        let point2 = new egret.Point(640, 0);
        this.mCurrentAttPointList = [point, point1, point2]

        egret.Tween.get(this).to({ factor: 1 }, 1000, egret.Ease.circOut).call(() => {
            egret.Tween.removeTweens(this);
        });
    }

    public get factor(): number {
        return 0
    }
    private num: number = 0;
    public set factor(value: number) {
        var sp: egret.Shape = new egret.Shape();
        sp.graphics.beginFill(0xff0000);
        sp.graphics.drawCircle(0, 0, 5);
        sp.graphics.endFill();
        this.addChild(sp);


        let x = this.img.x;
        let y = this.img.y;

        this.img.x = (1 - value) * (1 - value) * this.mCurrentAttPointList[0].x +
            2 * value * (1 - value) * this.mCurrentAttPointList[1].x + value * value * this.mCurrentAttPointList[2].x;
        this.img.y = (1 - value) * (1 - value) * this.mCurrentAttPointList[0].y +
            2 * value * (1 - value) * this.mCurrentAttPointList[1].y + value * value * this.mCurrentAttPointList[2].y;

        sp.x = this.img.x;
        sp.y = this.img.y;
    }
}

class P {

    // public constructor(){

    // }
    //   private static mCacheDict = {};
    // /**
    //  * 创建
    //  */
    // public static produce(type: string = "1"): BuildGride {
    //     if (BuildGride.mCacheDict[type] == null) {
    //         BuildGride.mCacheDict[type] = [];
    //     }

    //     var dict: BuildGride[] = BuildGride.mCacheDict[type];
    //     var item: BuildGride;
    //     if (dict.length > 0) {
    //         item = dict.pop();
    //     } else {
    //         item = new BuildGride();
    //     }
    //     return item;
    // }
    // /**
    //  * 回收
    //  */
    // public static reclaim(item: BuildGride, type: string = "1") {
    //     if (BuildGride.mCacheDict[type] == null) {
    //         BuildGride.mCacheDict[type] = [];
    //     }
    //     var dict: BuildGride[] = BuildGride.mCacheDict[type];
    //     if (dict.indexOf(item) == -1) {
    //         dict.push(item);
    //     }
    //     item.clear();
    // }
}