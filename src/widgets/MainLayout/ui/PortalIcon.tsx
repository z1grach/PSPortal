import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "../styles/PortalIcon.module.scss";
import {PSPortalIcon, PSPortalMiniIcon} from "../../../shared/assets/icons";

export const PortalIcon = observer(() => {
    return (
        <div className={styles.iconWrapper}>
            <PSPortalIcon className={styles.icon}/>
            <PSPortalMiniIcon className={styles.iconMobile}/>
        </div>
    );
});