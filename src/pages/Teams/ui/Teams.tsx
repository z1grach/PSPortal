import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Teams.module.scss';
import {SearchIcon, VerifiedIcon} from "../../../shared/assets/icons";
import {Button} from "../../../shared/ui/Button/Button.tsx";

export const Teams = observer(() => {
    return (
        <main className={styles.main}>
            <section className={styles.wrapperList}>
                <label className={styles.searchLabel}>
                    <input type={'text'} className={styles.searchInput} placeholder={'Платформа'}/>
                    <div className={styles.searchInputIconWrapper}>
                        <SearchIcon className={styles.searchInputIcon}/>
                    </div>
                </label>
                <div className={styles.itemList}>
                    <div className={styles.itemContent}>
                        <div className={styles.imageWrapper}>

                        </div>
                        <div className={styles.contentTextWrapper}>
                            <div className={styles.contentTitleWrapper}>
                                <span className={styles.contentTitle}>PayScrow</span>
                                <div className={styles.contentIconWrapper}>
                                    <VerifiedIcon className={styles.contentIcon}/>
                                </div>
                            </div>
                            <span className={styles.contentInfo}>Какая-то информация</span>
                        </div>
                    </div>
                    <Button className={styles.itemBtn} variant={'secondary'}>
                        Перейти
                    </Button>
                </div>
            </section>
        </main>
    );
});