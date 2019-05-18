class BaseUILayer extends eui.Group {
    public constructor() {
        super();

        this.percentHeight = 100;
        this.percentWidth = 100;

        this.touchEnabled = false;
    }
}