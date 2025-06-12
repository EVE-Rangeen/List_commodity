/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const initTabBarData = [
    { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
    { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }
];
export class GoodsListItemType {
    goodsImg: Resource;
    goodsName: Resource;
    advertisingLanguage: Resource;
    evaluate: Resource;
    price: Resource;
    constructor(goodsImg: Resource, goodsName: Resource, price: Resource) {
        this.goodsImg = goodsImg;
        this.goodsName = goodsName;
        this.advertisingLanguage = { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.evaluate = { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.price = price;
    }
}
export const goodsInitialList: GoodsListItemType[] = [
    new GoodsListItemType({ "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777218, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
export const goodsInitialListMobile: GoodsListItemType[] = [
    new GoodsListItemType({ "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777254, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777255, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777256, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
export const goodsInitialListClothing: GoodsListItemType[] = [
    new GoodsListItemType({ "id": 16777261, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777262, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777265, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777268, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777269, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777266, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
export const goodsInitialListClothing2: GoodsListItemType[] = [
    new GoodsListItemType({ "id": 16777279, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777275, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777276, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777278, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777275, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777277, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777274, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
export const goodsInitialListHousehold: GoodsListItemType[] = [
    new GoodsListItemType({ "id": 16777280, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777286, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777281, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777283, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777287, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777282, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777285, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777288, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777281, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }),
    new GoodsListItemType({ "id": 16777284, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777289, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777282, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" })
];
