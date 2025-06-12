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

import { initTabBarData } from '../viewmodel/InitialData';
import {
  LAYOUT_WIDTH_OR_HEIGHT,
  NORMAL_FONT_SIZE,
  BIGGER_FONT_SIZE,
  MAX_FONT_SIZE,
  MAX_OFFSET_Y,
  REFRESH_TIME
} from '../common/CommonConstants';
import GoodsList from './GoodsListComponent';
import PutDownRefresh from './PutDownRefreshLayout';
import {
  goodsInitialList,
  goodsInitialListMobile,
  goodsInitialListClothing,
  goodsInitialListClothing2,
  goodsInitialListHousehold
} from '../viewmodel/InitialData';

@Component
export default struct TabBar {
  private currentOffsetY: number = 0;
  private timer: number = 0;
  @State tabsIndex: number = 0;
  @State refreshStatus: boolean = false;
  @State refreshText: Resource = $r('app.string.refresh_text');

  @Builder
  firstTabBar() {
    Column() {
      Text($r('app.string.selected'))
        .fontSize(this.tabsIndex === 0 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE)
        .fontColor(this.tabsIndex === 0 ? Color.Black : $r('app.color.gray'))
    }
    .width(LAYOUT_WIDTH_OR_HEIGHT)
    .height(LAYOUT_WIDTH_OR_HEIGHT)
    .justifyContent(FlexAlign.Center)
  }

  @Builder
  otherTabBar(content: Resource, index: number) {
    Column() {
      Text(content)
        .fontSize(this.tabsIndex === index + 1 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE)
        .fontColor(this.tabsIndex === index + 1 ? Color.Black : $r('app.color.gray'))
    }
    .width(LAYOUT_WIDTH_OR_HEIGHT)
    .height(LAYOUT_WIDTH_OR_HEIGHT)
    .justifyContent(FlexAlign.Center)
  }

  putDownRefresh(event?: TouchEvent): void {
    if (event === undefined) {
      return;
    }
    switch (event.type) {
      // Record the y-coordinate pressed by the finger.
      case TouchType.Down:
        this.currentOffsetY = event.touches[0].y;
        break;
      case TouchType.Move:
      // Determine whether to refresh based on the drop-down offset.
        this.refreshStatus = event.touches[0].y - this.currentOffsetY > MAX_OFFSET_Y;
        break;
      case TouchType.Cancel:
        break;
      case TouchType.Up:
      // Only simulation effect, no data request.
        this.timer = setTimeout(() => {
          this.refreshStatus = false;
        }, REFRESH_TIME);
        break;
      default:
        break;
    }
  }

  aboutToDisappear() {
    clearTimeout(this.timer);
  }

  build() {
    Tabs() {
      // 精选
      TabContent() {
        Scroll() {
          Column() {
            if (this.refreshStatus) {
              PutDownRefresh({ refreshText: $refreshText })
            }
            GoodsList({ dataSource: goodsInitialList }) // 精选
            Text($r('app.string.to_bottom')).fontSize(NORMAL_FONT_SIZE).fontColor($r('app.color.gray'))
          }
          .width(LAYOUT_WIDTH_OR_HEIGHT)
        }
        .scrollBar(BarState.Off)
        .edgeEffect(EdgeEffect.Spring)
        .width(LAYOUT_WIDTH_OR_HEIGHT)
        .height(LAYOUT_WIDTH_OR_HEIGHT)
        .onTouch((event?: TouchEvent) => {
          this.putDownRefresh(event);
        })
      }
      .tabBar(this.firstTabBar)

      // 手机
      TabContent() {
        GoodsList({ dataSource: goodsInitialListMobile })
      }
      .tabBar(this.otherTabBar($r('app.string.tab_mobile'), 0))

      // 服饰
      TabContent() {
        GoodsList({ dataSource: goodsInitialListClothing })
      }
      .tabBar(this.otherTabBar($r('app.string.tab_clothing'), 1))

      // 穿搭
      TabContent() {
        GoodsList({ dataSource: goodsInitialListClothing2 })
      }
      .tabBar(this.otherTabBar($r('app.string.tab_clothing2'), 2))

      // 家居
      TabContent() {
        GoodsList({ dataSource: goodsInitialListHousehold })
      }
      .tabBar(this.otherTabBar($r('app.string.tab_household'), 3))
    }
    .onChange((index: number) => {
      this.tabsIndex = index;
    })
    .vertical(false)
  }
}