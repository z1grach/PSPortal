import React from 'react';
import styles from '../styles/SidebarMobile.module.scss';
import {observer} from "mobx-react-lite";
import {useRootState} from "../../../shared/stores";
import {MenuList} from "./MenuList.tsx";
import {AccountInfo} from "./AccountInfo.tsx";
import {PortalIcon} from "./PortalIcon.tsx";
import {HeaderIcons} from "./HeaderIcons.tsx";

export const SidebarMobile = observer(() => {
    const {sidebarStore, deviceStore} = useRootState();

    if (!deviceStore.isMobile || !sidebarStore.show) return null;

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <PortalIcon/>
                <HeaderIcons/>
            </header>
            <div className={styles.menuWrapper + ' hidden-scroll'}>
                <MenuList/>
                <AccountInfo/>
            </div>
        </div>
    );
});