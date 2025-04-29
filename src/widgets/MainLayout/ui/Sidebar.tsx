import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Sidebar.module.scss';
import {PSPortalIcon, PSPortalMiniIcon} from "../../../shared/assets/icons";
import {MenuList} from "./MenuList.tsx";
import {AccountInfo} from "./AccountInfo.tsx";
import {useRootState} from "../../../shared/stores";

export const Sidebar = observer(() => {
    const {} = useRootState();

    return (
        <nav className={styles.wrapper + ' hidden-scroll'}>
            <div className={styles.wrapperMenu}>
                <div className={styles.iconWrapper}>
                    <PSPortalIcon className={styles.icon}/>
                    <PSPortalMiniIcon className={styles.iconMobile}/>
                </div>
                <MenuList/>
            </div>
            <AccountInfo/>
        </nav>
    );
});