// // 食物类型
// enum FOOD_TYPE {
//     VEGETABLE = 1, // 常规宠物
//     MEAT = 2,// 小白人
//     SEAFOOD = 3// 海鲜
// }

// // 食物数据结构
// type food_type = {
//     id: number,      // 食物id
//     type: number,    // 食物类型
//     name: string,    // 食物名称
//     desc: string,    // 食物描述
//     addition: number // 食物带来的金币加成（目前保留）
// }

// // 角色数据模型
// class FoodModel {

//     private static _instance: FoodModel;
//     public static get instance(): FoodModel {
//         if (!this._instance) this._instance = new FoodModel();
//         return this._instance;
//     }

//     private _foodsList: food_type[] = [];   // 食物数据
//     private _mIsInit: boolean = false;      // 是否已经完成食物数据的解析

//     public get foodsData(): food_type[] { return this._foodsList; }

//     public constructor() { }

//     public async initModel() {
//         let configData = RES.getRes("foods_json");
//         this.decode(configData);
//     }

//     private decode(data: any) {
//         for (let key of data) {
//             this._foodsList.push(key);
//         }
//         this._mIsInit = true;
//     }

//     public get isInit(): boolean {
//         return this._mIsInit;
//     }

//     public getDataById(id: number): food_type {
//         return this.foodsData.filter(x => {
//             return x.id == id;
//         })[0];
//     }
// }
