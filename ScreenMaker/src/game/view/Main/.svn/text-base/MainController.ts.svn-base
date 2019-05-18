class MainController extends BaseController {

    public constructor() {
        super();
    }

    /**
     * @param  {any[]} ...param
     */
    public init(...param: any[]) {
        // 加载主界面
        App.NotificationCenter.dispatch(EventConst.EVENT_SHOW_WINDOW, { viewType: Const.W_MAIN, layer: LayerManager.Game_Main });
        super.init();
    }

    public close() {
        super.close();
    }
}