import React from 'react';
import {observer} from "mobx-react-lite";
import {useGetHeaderTitle} from "../lib/useGetHeaderTitle.ts";
import styles from '../styles/Header.module.scss';
import {ArrowIcon} from "../../../shared/assets/icons";

export const Header = observer(() => {
    const {title} = useGetHeaderTitle();

    return (
        <header className={styles.header}>
            <span className={styles.title}>{title}</span>
            <div>
                <div className={styles.selectLang}>
                    <span className={styles.selectLabel}>RU</span>
                    <div className={styles.iconWrapper}>
                        <ArrowIcon className={styles.selectArrow}/>
                    </div>
                </div>
            </div>
        </header>
    );
});