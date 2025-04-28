import React from 'react';
import styles from '../styles/PlatformInfo.module.scss';
import {observer} from "mobx-react-lite";

export const PlatformInfo = observer(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleData}>
                <span className={styles.title}>Вход</span>
                <span className={styles.data}>7.5</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.titleData}>
                <span className={styles.title}>Выход</span>
                <span className={styles.data}>2.5</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.titleData}>
                <span className={styles.title}>Страховой депозит</span>
                <span className={styles.data}>1500.0</span>
            </div>
        </div>
    );
});