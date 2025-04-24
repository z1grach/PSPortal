import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/AccountInfo.module.scss';
import {ExitIcon, ProfileIcon} from "../../../shared/assets/icons";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../shared/constants/routePaths.ts";

export const AccountInfo = observer(() => {
    return (
        <NavLink
            to={PATH.PROFILE}
            className={({isActive}) =>
                (isActive ? styles.active + ' ' : '') + styles.wrapper
            }
        >
            <div className={styles.info}>
                <div className={styles.iconWrapper}>
                    <ProfileIcon/>
                </div>
                <div className={styles.name}>
                    <span className={styles.role}>{'moderator'}</span>
                    <span className={styles.email}>{'moderator@moderator.com'}</span>
                </div>
            </div>
            <button type={'button'} className={styles.exitBtn} onClick={(e) => {
                e.preventDefault();
            }}>
                <ExitIcon className={styles.exitIcon}/>
            </button>
        </NavLink>
    );
});