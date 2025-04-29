import {RootStore} from "./rootStore.ts";
import {makeAutoObservable} from "mobx";

function checkIfMobile(width: number): boolean {
    return width <= 768;
}

export class DeviceStore {
    rootStore: RootStore;
    isMobile: boolean = checkIfMobile(window.innerWidth);

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);

        window.addEventListener('resize', this.onResize);
    }

    private onResize = () => {
        const width = window.innerWidth;

        this.isMobile = checkIfMobile(width);
    }
}