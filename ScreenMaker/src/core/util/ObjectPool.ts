class ObjectPool extends BaseClass {

    private static _content: any = {};
    private _obj
    public constructor() {
        super();
    }

    public static push(key: any, obj: any) {
        if (obj == null) return;
        if (!ObjectPool._content[key]) {
            ObjectPool._content[key] = [];
        }
        ObjectPool._content[key].push(obj);
    }
    /**
     * @param  {any} key
     * @returns any
     */
    public static getFromPool(key: any): any {
        if (!ObjectPool._content[key]) {
            return;
        }
        let list: any[] = ObjectPool._content[key];
        return list.pop();
    }
    /**
     * 监测对象池中是否存在
     * @param  {any} key
     * @returns boolean
     */
    public static checkFromPool(key: any): boolean {
        if (!ObjectPool._content[key]) {
            return false;
        }
        return true;
    }
}