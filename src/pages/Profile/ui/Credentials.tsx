import React from 'react';
import styles from '../styles/Credentials.module.scss';
import {observer} from "mobx-react-lite";


export const Credentials = observer(() => {
    return (
        <section className={styles.wrapper}>
            <span className={styles.title}>Учётные данные</span>
            <div className={styles.dataWrapper}>
                <div className={styles.dataWithTitle}>
                    <span className={styles.dataTitle}>Почта</span>
                    <span className={styles.data}>moderator@moderator.com</span>
                </div>
                <button type={'button'} className={styles.changeBtn}>
                    Изменить почту
                </button>
            </div>
            <div className={styles.dataWrapper}>
                <div className={styles.dataWithTitle}>
                    <span className={styles.dataTitle}>Пароль</span>
                    <span className={styles.data}>*******************</span>
                </div>
                <button type={'button'} className={styles.changeBtn}>
                    Изменить пароль
                </button>
            </div>
        </section>
    );
});