import * as React from "react";

export class RootStore {
    constructor() {

    }
}

const RootStoreContext = React.createContext(new RootStore());

export const useRootState = () => React.useContext(RootStoreContext);