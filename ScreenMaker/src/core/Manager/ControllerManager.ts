class ControllerManager extends BaseClass {
    public constructor() {
        super();
    }

    public static get Main(): MainController {
        return MainController.getInstance();
    }

    public static get View(): ViewController {
        return ViewController.getInstance();
    }
}

