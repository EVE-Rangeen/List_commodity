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

import { goodsInitialList,goodsInitialListMobile,goodsInitialListClothing,goodsInitialListClothing2,goodsInitialListHousehold, GoodsListItemType } from './InitialData';
import { MAGNIFICATION, MAX_DATA_LENGTH } from '../common/CommonConstants';

/**
 * create a List range
 */
export const createListRangeMobile = (): GoodsListItemType[] => {
  let result: GoodsListItemType[] = [];
  for (let i = 0; i < MAGNIFICATION; i++) {
    result = result.concat(goodsInitialListMobile);
  }
  return result;
}

export const createListRangeClothing = (): GoodsListItemType[] => {
  let result: GoodsListItemType[] = [];
  for (let i = 0; i < MAGNIFICATION; i++) {
    result = result.concat(goodsInitialListClothing);
  }
  return result;
}

export const createListRangeClothing2 = (): GoodsListItemType[] => {
  let result: GoodsListItemType[] = [];
  for (let i = 0; i < MAGNIFICATION; i++) {
    result = result.concat(goodsInitialListClothing2);
  }
  return result;
}

export const createListRangeHousehold = (): GoodsListItemType[] => {
  let result: GoodsListItemType[] = [];
  for (let i = 0; i < MAGNIFICATION; i++) {
    result = result.concat(goodsInitialListHousehold);
  }
  return result;
}

// 原有的 createListRange 作为默认
export const createListRange = (): GoodsListItemType[] => {
  let result: GoodsListItemType[] = [];
  for (let i = 0; i < MAGNIFICATION; i++) {
    result = result.concat(goodsInitialList);
  }
  return result;
}

/**
 * LazyLoad Class
 */
class BasicDataSource implements IDataSource {
  private listeners: DataChangeListener[] = [];

  public totalCount(): number {
    return 0;
  }

  public getData(index: number): GoodsListItemType | undefined {
    return undefined;
  }

  registerDataChangeListener(listener: DataChangeListener): void {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }
  }

  unregisterDataChangeListener(listener: DataChangeListener): void {
    const position = this.listeners.indexOf(listener);
    if (position >= 0) {
      this.listeners.splice(position, 1);
    }
  }

  notifyDataReload(): void {
    this.listeners.forEach((listener: DataChangeListener) => {
      listener.onDataReloaded();
    })
  }

  notifyDataAdd(index: number): void {
    this.listeners.forEach((listener: DataChangeListener) => {
      listener.onDataAdd(index);
    })
  }

  notifyDataChange(index: number): void {
    this.listeners.forEach((listener: DataChangeListener) => {
      listener.onDataChange(index);
    })
  }

  notifyDataDelete(index: number): void {
    this.listeners.forEach((listener: DataChangeListener) => {
      listener.onDataDelete(index);
    })
  }

  notifyDataMove(from: number, to: number): void {
    this.listeners.forEach((listener: DataChangeListener) => {
      listener.onDataMove(from, to);
    })
  }
}

export class ListDataSource extends BasicDataSource {
  private listData: GoodsListItemType[] = createListRange();
  private currentType: string = 'default';
  private loadCount: number = 1; // 新增，记录已经加载了几组

  public totalCount(): number {
    return this.listData.length;
  }

  public getData(index: number): GoodsListItemType {
    return this.listData[index];
  }

  public pushData(): void {
    // 每次追加一组完整的 createListRangeXxx() 数据
    let appendList: GoodsListItemType[] = [];
    switch (this.currentType) {
      case 'mobile':
        appendList = createListRangeMobile();
        break;
      case 'clothing':
        appendList = createListRangeClothing();
        break;
      case 'clothing2':
        appendList = createListRangeClothing2();
        break;
      case 'household':
        appendList = createListRangeHousehold();
        break;
      default:
        appendList = createListRange();
    }
    // 只要没超过最大长度就追加
    if (this.listData.length + appendList.length <= MAX_DATA_LENGTH) {
      this.listData = this.listData.concat(appendList);
      this.loadCount++;
      this.notifyDataAdd(this.listData.length - 1);
    } else if (this.listData.length < MAX_DATA_LENGTH) {
      // 只追加剩余需要的数量
      const remain = MAX_DATA_LENGTH - this.listData.length;
      this.listData = this.listData.concat(appendList.slice(0, remain));
      this.loadCount++;
      this.notifyDataAdd(this.listData.length - 1);
    }
  }

  public setDataSource(list: GoodsListItemType[]): void {
    this.listData = list;
    this.loadCount = 1; // 重置
    this.notifyDataReload();
  }

  public setDataSourceByType(type: string): void {
    this.currentType = type;
    switch (type) {
      case 'mobile':
        this.listData = createListRangeMobile();
        break;
      case 'clothing':
        this.listData = createListRangeClothing();
        break;
      case 'clothing2':
        this.listData = createListRangeClothing2();
        break;
      case 'household':
        this.listData = createListRangeHousehold();
        break;
      default:
        this.listData = createListRange();
    }
    this.loadCount = 1; // 重置
    this.notifyDataReload();
  }
}
