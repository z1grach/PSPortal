import React from "react";
import {DeviceStore} from "./deviceStore.ts";
import {SidebarStore} from "./sidebarStore.ts";

export class RootStore {
    deviceStore: DeviceStore;
    sidebarStore: SidebarStore;

    constructor() {
        this.deviceStore = new DeviceStore(this);
        this.sidebarStore = new SidebarStore(this);
    }
}

const RootStoreContext = React.createContext(new RootStore());

export const useRootState = () => React.useContext(RootStoreContext);