/**
 * 确认弹框
*/
class TipsPanel extends eui.Component implements eui.UIComponent {
	private static _instance: TipsPanel;
	public static get instance() {
		if (!this._instance) this._instance = new TipsPanel();
		return this._instance;
	}

	private kCloseBtn: eui.Image;//关闭按钮
	private kConfirmBtn: eui.Button;//确认按钮
	private kLbDesc: eui.Label;//物品描述
	private kLbTitle: eui.Label;//标题

	private kImgContent: eui.Image;

	private kImgBig: eui.Image;
	private kImgSmall: eui.Image;

	private kImgNeedType: eui.Image;

	private _callBack: Function;
	private _type: number = 1;
	public constructor() {
		super();
		this.skinName = "TipsPanelSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.kCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
		this.kConfirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirm, this);
	}
	/**
	 * 使用道具确认，道具不足提示购买
	 * @param  {Function} callBack 点击确认按钮后的回调
	 * @param  {number=1} type 1,2,3,4,5,6 1钻石不足，2糖果包购买确认，3.金币不足，4技能卡购买确认，5.金币钻石体力的购买确认,6.成就说明的展示
	 * @param  {string=""} descType 物品的确认描述，金币不足和钻石不足不需要传
	 * @param  {string=""} title 确认的标题 金币不足和钻石不足不需要传
	 * @param  {number=0} needNum 需要花费物品的数量
	 * @param  {number=1} needType 需要花费物品的类型1，人民币 2，钻石 3，金币 4，体力
	 * @param  {string = ""} 确认展示的图片
	 */
	public async show(callBack: Function = ()=>{}, type: number = 1, descType: string = "", title: string = "", needNum = 0, needType: number = 2, source: string = "",detail:string = "了解",desc:egret.ITextElement[] = null) {
		this._type = type;
		this.invalidateState();
		this.validateNow();
		this._callBack = callBack;
		LayerManager.UI_Tips.addChild(this);
		PopUpUtils.addPopUp(this);
		if (type != 1) {
			this.kConfirmBtn.labelDisplay.text = needNum.toString();
		}
		// this.kImgNeedType.source = RewardUtil.getGoodsSource(needType);
		switch (this._type) {
			case 1:
				break;
			case 2:
				this.kLbDesc.text = descType;
				this.kLbTitle.text = title;
				this.kImgBig.source = this.kImgSmall.source = source;
				break;
			case 3:
				break;
			case 4:
				this.kLbDesc.text = descType;
				this.kLbTitle.text = title;
				this.kImgBig.source = this.kImgSmall.source = source;
				break;
			case 4:
				break;
			case 5:
				this.kLbDesc.text = descType;
				this.kLbTitle.text = title;
				this.kImgContent.source = source;
				break;
			case 6:
				this.kLbTitle.text = title;
				this.kConfirmBtn.labelDisplay.text = detail;
				this.kImgContent.source = source;
				this.kLbDesc.textFlow = desc;
				break;
		}
	}

	protected getCurrentState() {
		super.getCurrentState();
		switch (this._type) {
			case 1://钻石不足
				return "type1";
			case 2://技能卡
				return "type2";
			case 3://金币不足
				return "type3";
			case 4: //购买技能卡
				return "type4";
			case 5://金币钻石体力通用
				return "type1";
			case 6://成就了解
				return "type1";
		}
	}

	private close() {
		PopUpUtils.removePopUp(this);
	}

	private onConfirm() {
		PopUpUtils.removePopUp(this, () => {
			if (this._callBack) this._callBack();
		});
	}
}
type config = {
	callBack: Function,
	type: number,
	descType: string,
	title: string,
	needNum: number,
	needType: number,
	source: string
}