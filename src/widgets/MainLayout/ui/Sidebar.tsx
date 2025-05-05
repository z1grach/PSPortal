import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Sidebar.module.scss';
import {MenuList} from "./MenuList.tsx";
import {AccountInfo} from "./AccountInfo.tsx";
import {PortalIcon} from "./PortalIcon.tsx";

export const Sidebar = observer(() => {
    return (
        <nav className={styles.wrapper + ' hidden-scroll'}>
            <div className={styles.wrapperMenu}>
                <PortalIcon/>
                <MenuList/>
            </div>
            <AccountInfo/>
        </nav>
    );
});