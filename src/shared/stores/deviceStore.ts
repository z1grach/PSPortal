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

        console.log('DeviceStore')

        window.addEventListener('resize', this.onResize);
    }

    private onResize = () => {
        const width = window.innerWidth;

        console.log(width);

        this.isMobile = checkIfMobile(width);
    }
}