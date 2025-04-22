import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Sidebar.module.scss';
import {PSPortalIcon} from "../../../shared/assets/icons";
import {MenuList} from "./MenuList.tsx";
import {AccountInfo} from "./AccountInfo.tsx";

export const Sidebar = observer(() => {
    return (
        <nav className={styles.wrapper + ' hidden-scroll'}>
            <div className={styles.wrapperMenu}>
                <div className={styles.iconWrapper}>
                    <PSPortalIcon className={styles.icon}/>
                </div>
                <MenuList/>
            </div>
            <AccountInfo/>
        </nav>
    );
});