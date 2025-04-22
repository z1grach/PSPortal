import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/AccountInfo.module.scss';
import {ProfileIcon} from "../../../shared/assets/icons";

export const AccountInfo = observer(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.iconWrapper}>
                    <ProfileIcon/>
                </div>
                <div className={styles.name}>
                    <span className={styles.role}>{'moderator'}</span>
                    <span className={styles.email}>{'moderator@moderator.com'}</span>
                </div>
            </div>
        </div>
    );
});