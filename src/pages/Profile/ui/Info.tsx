import React from 'react';
import styles from '../styles/Info.module.scss';
import {observer} from "mobx-react-lite";
import {CopyIcon, EditIcon, ExitIcon, ProfileIcon} from "../../../shared/assets/icons";

export const Info = observer(() => {
    return (
        <section className={styles.wrapper}>
            <header className={styles.mainInfoWrapper}>
                <div className={styles.profileIconWrapper}>
                    <ProfileIcon className={styles.profileIcon}/>
                </div>
                <div className={styles.roleEmail}>
                    <div className={styles.roleWrapper}>
                        <span className={styles.role}>{'moderator'}</span>
                        <button type={'button'} className={styles.changeBtn}>
                            <EditIcon className={styles.changeIcon}/>
                        </button>
                    </div>
                    <span className={styles.email}>{'moderator@moderator.com'}</span>
                </div>
                <button type={'button'} className={styles.exitBtn}>
                    <ExitIcon className={styles.exitIcon}/>
                </button>
            </header>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.contentTitleData}>
                        <span className={styles.contentTitle}>Всего заработано</span>
                        <span className={styles.contentData}>145,000₽</span>
                    </div>
                    <div className={styles.contentTitleData}>
                        <span className={styles.contentTitle}>Подключенные команды</span>
                        <span className={styles.contentData}>34</span>
                    </div>
                </div>
                <div className={styles.promoWrapper}>
                    <span className={styles.promoTitle}>Ваш промокод</span>
                    <div className={styles.copyWrapper}>
                        <span className={styles.code}>465443</span>
                        <button type={'button'} className={styles.copyBtn}>
                            <CopyIcon className={styles.copyIcon}/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});