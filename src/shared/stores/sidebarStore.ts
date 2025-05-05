import {RootStore} from "./rootStore.ts";
import {makeAutoObservable} from "mobx";

export class SidebarStore {
    rootStore: RootStore;
    show = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    setShow = (data: boolean) => {
        this.show = data;
    }
}