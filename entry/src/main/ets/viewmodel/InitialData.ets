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
$r('app.string.mobile_phone'),
$r('app.string.clothes'),
$r('app.string.wear'),
$r('app.string.home_furnishing')
]

export class GoodsListItemType {
  goodsImg: Resource;
  goodsName: Resource;
  advertisingLanguage: Resource;
  evaluate: Resource;
  price: Resource;

  constructor(goodsImg: Resource, goodsName: Resource, price: Resource) {
    this.goodsImg = goodsImg;
    this.goodsName = goodsName;
    this.advertisingLanguage = $r('app.string.advertising_language');
    this.evaluate = $r('app.string.evaluate');
    this.price = price;
  }
}

export const goodsInitialList: GoodsListItemType[] = [
  new GoodsListItemType($r('app.media.goodsImg'), $r('app.string.goodsName'), $r('app.string.price_199')),
  new GoodsListItemType($r('app.media.goodsImg_2'), $r('app.string.another_goodsName'), $r('app.string.price_199')),
  new GoodsListItemType($r('app.media.goodsImg_3'), $r('app.string.goodsName'), $r('app.string.price_199')),
  new GoodsListItemType($r('app.media.goodsImg_4'), $r('app.string.another_goodsName'), $r('app.string.price_199'))
]

export const goodsInitialListMobile: GoodsListItemType[] = [
  new GoodsListItemType($r('app.media.PhoneImg_1'), $r('app.string.PhoneName1'), $r('app.string.price_1999')),
  new GoodsListItemType($r('app.media.PhoneImg_2'), $r('app.string.PhoneName1'), $r('app.string.price_1999')),
  new GoodsListItemType($r('app.media.PhoneImg_3'), $r('app.string.PhoneName2'), $r('app.string.price_2999')),
  new GoodsListItemType($r('app.media.PhoneImg_4'), $r('app.string.PhoneName2'), $r('app.string.price_2999'))

]

export const goodsInitialListClothing: GoodsListItemType[] = [
  new GoodsListItemType($r('app.media.clothImg_1'), $r('app.string.ClothName1'), $r('app.string.price_99')),
  new GoodsListItemType($r('app.media.clothImg_2'), $r('app.string.ClothName2'), $r('app.string.price_89')),
  new GoodsListItemType($r('app.media.clothImg_3'), $r('app.string.ClothName3'), $r('app.string.price_99')),
  new GoodsListItemType($r('app.media.clothImg_4'), $r('app.string.ClothName4'), $r('app.string.price_89'))

]

export const goodsInitialListClothing2: GoodsListItemType[] = [
  new GoodsListItemType($r('app.media.dressingImg_1'), $r('app.string.DressingName1'), $r('app.string.price_365')),
  new GoodsListItemType($r('app.media.dressingImg_2'), $r('app.string.DressingName2'), $r('app.string.price_265')),
  new GoodsListItemType($r('app.media.dressingImg_3'), $r('app.string.DressingName3'), $r('app.string.price_365')),
  new GoodsListItemType($r('app.media.dressingImg_4'), $r('app.string.DressingName4'), $r('app.string.price_265'))

]

export const goodsInitialListHousehold: GoodsListItemType[] = [
  new GoodsListItemType($r('app.media.householdImg_1'), $r('app.string.HouseholdName1'), $r('app.string.price_19')),
  new GoodsListItemType($r('app.media.householdImg_2'), $r('app.string.HouseholdName2'), $r('app.string.price_29')),
  new GoodsListItemType($r('app.media.householdImg_3'), $r('app.string.HouseholdName3'), $r('app.string.price_19')),
  new GoodsListItemType($r('app.media.householdImg_4'), $r('app.string.HouseholdName4'), $r('app.string.price_29'))

]