class MultiTouchUtils extends BaseClass {
    private _view: egret.DisplayObjectContainer;
    private _touchPoints = { names: [] };
    private _distance: number = 0;
    private _defAngle: number = 0;
    private _touchCon: number = 0;

    private _minScale = .5;
    private _maxScale = 2;

    private _beginX: number;
    private _beginY: number;
    public setTouch(view: egret.DisplayObjectContainer) {
        this._view = view;
        // this._view.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        // this._view.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        // this._view.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
    }

    public removeTouch(view: egret.DisplayObjectContainer) {
        this._view.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        this._view.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        this._view.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
    }

    private onBeginHandler(e: egret.TouchEvent): void {
        this._beginX = e.stageX;
        this._beginY = e.stageY;
        if (this._touchPoints[e.touchPointID] == null) {
            this._touchPoints[e.touchPointID] = new egret.Point(e.stageX, e.stageY);
            this._touchPoints["names"].push(e.touchPointID);
        }
        this._touchCon++;

        if (this._touchCon == 2) {
            this._distance = this.getTouchDitance();
        }
    }

    private onMoveHandler(e: egret.TouchEvent): void {
        if (e.stageX == this._beginX && e.stageY == this._beginY) return;
        if (!this._touchPoints[e.touchPointID]) return;
        this._touchPoints[e.touchPointID].x = e.stageX;
        this._touchPoints[e.touchPointID].y = e.stageY;
        if (this._touchCon == 2) {
            let newDistance = this.getTouchDitance();
            let scale = (newDistance / this._distance) > this._maxScale ? this._maxScale : (newDistance / this._distance);
            scale = scale < this._minScale ? this._minScale : scale;
            this._view.scaleX = scale;
            this._view.scaleY = this._view.scaleX;
            // egret.log(newDistance, this._distance);
        }
    }

    private onEndHandler(e: egret.TouchEvent): void {
        delete this._touchPoints[e.touchPointID];
        this._touchCon--;
    }

    private getTouchDitance(): number {
        let _dis = 0;
        let names = this._touchPoints["names"];
        _dis = egret.Point.distance(this._touchPoints[names[names.length - 1]], this._touchPoints[names[names.length - 2]]);
        return _dis;
    }

    private getTouchAngle(): number {
        let ang: number = 0;
        let names = this._touchPoints["names"];
        let p1 = egret.Point = this._touchPoints[names[names.length - 1]];
        let p2 = egret.Point = this._touchPoints[names[names.length - 2]];

        ang = Math.atan2((p1.y - p2.y), (p1.x - p2.x)) / (Math.PI / 180);
        return ang;
    }

}