import React from "react";
import {DeviceStore} from "./deviceStore.ts";

export class RootStore {
    deviceStore: DeviceStore;

    constructor() {
        this.deviceStore = new DeviceStore(this);
    }
}

const RootStoreContext = React.createContext(new RootStore());

export const useRootState = () => React.useContext(RootStoreContext);