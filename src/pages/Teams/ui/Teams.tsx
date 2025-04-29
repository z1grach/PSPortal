import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Teams.module.scss';
import {VerifiedIcon} from "../../../shared/assets/icons";
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {InputSearch} from "../../../shared/ui/InputSearch/InputSearch.tsx";
import {TeamsTable} from "./TeamsTable.tsx";

export const Teams = observer(() => {
    return (
        /*<main className={styles.main}>
            <section className={styles.wrapperList}>
                <InputSearch placeholder={'Платформа'}/>
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
        </main>*/
        <TeamsTable/>
    );
});