// TypeScript file
class BaseController extends BaseClass {

    public constructor() {
        super();
    }

    public addEvents() { }
    public removeEvents() { }

    public init(...param: any[]) {
        this.addEvents();
    }
    public close() {
        this.removeEvents();
    }
}