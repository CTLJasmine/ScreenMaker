/**
 * 生成单例的基类
 */
class BaseClass {

    public constructor() {

    }
    private _instance: BaseClass;
    /**
     * 生成一个单例
     * @param  {any[]} ...params
     * @returns any
     */
    public static getInstance(...params: any[]): any {
        let Class: any = this;
        if (!Class._instance) {
            let paramsLen = params.length;
            switch (paramsLen) {
                case 0:
                    Class._instance = new Class();
                    break;
                case 1:
                    Class._instance = new Class(params[0]);
                    break;
                case 2:
                    Class._instance = new Class(params[0], params[1]);
                    break;
                case 3:
                    Class._instance = new Class(params[0], params[1], params[2]);
                    break;
                case 4:
                    Class._instance = new Class(params[0], params[1], params[2], params[3]);
                    break;
                case 5:
                    Class._instance = new Class(params[0], params[1], params[2], params[3], params[4]);
                    break;
            }
        }
        return Class._instance;
    }

}