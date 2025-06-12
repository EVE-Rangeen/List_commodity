if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabBar_Params {
    currentOffsetY?: number;
    timer?: number;
    tabsIndex?: number;
    refreshStatus?: boolean;
    refreshText?: Resource;
}
import { LAYOUT_WIDTH_OR_HEIGHT, NORMAL_FONT_SIZE, BIGGER_FONT_SIZE, MAX_OFFSET_Y, REFRESH_TIME } from "@bundle:com.example.list_harmony/entry/ets/common/CommonConstants";
import GoodsList from "@bundle:com.example.list_harmony/entry/ets/view/GoodsListComponent";
import PutDownRefresh from "@bundle:com.example.list_harmony/entry/ets/view/PutDownRefreshLayout";
import { createListRange, createListRangeMobile, createListRangeClothing, createListRangeClothing2, createListRangeHousehold } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/ListDataSource";
export default class TabBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.currentOffsetY = 0;
        this.timer = 0;
        this.__tabsIndex = new ObservedPropertySimplePU(0, this, "tabsIndex");
        this.__refreshStatus = new ObservedPropertySimplePU(false, this, "refreshStatus");
        this.__refreshText = new ObservedPropertyObjectPU({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, this, "refreshText");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabBar_Params) {
        if (params.currentOffsetY !== undefined) {
            this.currentOffsetY = params.currentOffsetY;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
        if (params.tabsIndex !== undefined) {
            this.tabsIndex = params.tabsIndex;
        }
        if (params.refreshStatus !== undefined) {
            this.refreshStatus = params.refreshStatus;
        }
        if (params.refreshText !== undefined) {
            this.refreshText = params.refreshText;
        }
    }
    updateStateVars(params: TabBar_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabsIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__refreshText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabsIndex.aboutToBeDeleted();
        this.__refreshStatus.aboutToBeDeleted();
        this.__refreshText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private currentOffsetY: number;
    private timer: number;
    private __tabsIndex: ObservedPropertySimplePU<number>;
    get tabsIndex() {
        return this.__tabsIndex.get();
    }
    set tabsIndex(newValue: number) {
        this.__tabsIndex.set(newValue);
    }
    private __refreshStatus: ObservedPropertySimplePU<boolean>;
    get refreshStatus() {
        return this.__refreshStatus.get();
    }
    set refreshStatus(newValue: boolean) {
        this.__refreshStatus.set(newValue);
    }
    private __refreshText: ObservedPropertyObjectPU<Resource>;
    get refreshText() {
        return this.__refreshText.get();
    }
    set refreshText(newValue: Resource) {
        this.__refreshText.set(newValue);
    }
    firstTabBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(52:5)", "entry");
            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
            Column.height(LAYOUT_WIDTH_OR_HEIGHT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(53:7)", "entry");
            Text.fontSize(this.tabsIndex === 0 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE);
            Text.fontColor(this.tabsIndex === 0 ? Color.Black : { "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    otherTabBar(content: Resource, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(64:5)", "entry");
            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
            Column.height(LAYOUT_WIDTH_OR_HEIGHT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(content);
            Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(65:7)", "entry");
            Text.fontSize(this.tabsIndex === index + 1 ? BIGGER_FONT_SIZE : NORMAL_FONT_SIZE);
            Text.fontColor(this.tabsIndex === index + 1 ? Color.Black : { "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create();
            Tabs.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(105:5)", "entry");
            Tabs.onChange((index: number) => {
                this.tabsIndex = index;
            });
            Tabs.vertical(false);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(108:9)", "entry");
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event?: TouchEvent) => {
                        this.putDownRefresh(event);
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(109:11)", "entry");
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 111, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                refreshText: this.refreshText
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PutDownRefresh" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new GoodsList(this, { dataSource: createListRange() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 113, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    dataSource: createListRange()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                dataSource: createListRange()
                            });
                        }
                    }, { name: "GoodsList" });
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(114:13)", "entry");
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: this.firstTabBar.bind(this) });
            TabContent.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(107:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(130:9)", "entry");
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event?: TouchEvent) => {
                        this.putDownRefresh(event);
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(131:11)", "entry");
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 133, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                refreshText: this.refreshText
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PutDownRefresh" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new GoodsList(this, { dataSource: createListRangeMobile() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 135, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    dataSource: createListRangeMobile()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                dataSource: createListRangeMobile()
                            });
                        }
                    }, { name: "GoodsList" });
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(136:13)", "entry");
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.otherTabBar.call(this, { "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 0);
                } });
            TabContent.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(129:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(152:9)", "entry");
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event?: TouchEvent) => {
                        this.putDownRefresh(event);
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(153:11)", "entry");
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 155, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                refreshText: this.refreshText
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PutDownRefresh" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new GoodsList(this, { dataSource: createListRangeClothing() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 157, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    dataSource: createListRangeClothing()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                dataSource: createListRangeClothing()
                            });
                        }
                    }, { name: "GoodsList" });
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(158:13)", "entry");
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.otherTabBar.call(this, { "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 1);
                } });
            TabContent.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(151:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(174:9)", "entry");
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event?: TouchEvent) => {
                        this.putDownRefresh(event);
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(175:11)", "entry");
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 177, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                refreshText: this.refreshText
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PutDownRefresh" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new GoodsList(this, { dataSource: createListRangeClothing2() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 179, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    dataSource: createListRangeClothing2()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                dataSource: createListRangeClothing2()
                            });
                        }
                    }, { name: "GoodsList" });
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(180:13)", "entry");
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.otherTabBar.call(this, { "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 2);
                } });
            TabContent.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(173:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(196:9)", "entry");
                    Scroll.scrollBar(BarState.Off);
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.width(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.height(LAYOUT_WIDTH_OR_HEIGHT);
                    Scroll.onTouch((event?: TouchEvent) => {
                        this.putDownRefresh(event);
                    });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(197:11)", "entry");
                    Column.width(LAYOUT_WIDTH_OR_HEIGHT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.refreshStatus) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new PutDownRefresh(this, { refreshText: this.__refreshText }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 199, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                refreshText: this.refreshText
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "PutDownRefresh" });
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new GoodsList(this, { dataSource: createListRangeHousehold() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TabBarsComponent.ets", line: 201, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    dataSource: createListRangeHousehold()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                dataSource: createListRangeHousehold()
                            });
                        }
                    }, { name: "GoodsList" });
                }
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(202:13)", "entry");
                    Text.fontSize(NORMAL_FONT_SIZE);
                    Text.fontColor({ "id": 16777241, "type": 10001, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Column.pop();
                Scroll.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.otherTabBar.call(this, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 3);
                } });
            TabContent.debugLine("entry/src/main/ets/view/TabBarsComponent.ets(195:7)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
