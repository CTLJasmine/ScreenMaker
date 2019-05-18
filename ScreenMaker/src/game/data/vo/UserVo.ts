class UserVo {
    public constructor() { }
    /** 用户ID */
    private _uid: number = 89869459;
    /** 用户昵称 */
    private _nickName: string = "测试用户";
    /** 用户头像地址 */
    private _headImgUrl: string = "";
    /** 用户配置信息 */
    public configData = {
        turnSpeed : 10,    // 转速(0~100)
        foodLimit : 6,     // 锅中食材数量上限
    }
    /** 红点信息 */
    public redState = {
        decorate: 0
    }

    public get uid(): number { return this._uid; }
    public set uid(n: number) { this._uid = n; }

    public get nickName(): string { return this._nickName }
    public set nickName(s: string) { this._nickName = s; }

    public get headImgUrl(): string { return this._headImgUrl; }
    public set headImgUrl(s: string) { this._headImgUrl = s; }
}