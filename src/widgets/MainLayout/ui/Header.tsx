import React from 'react';
import {observer} from "mobx-react-lite";
import {useGetHeaderTitle} from "../lib/useGetHeaderTitle.ts";
import styles from '../styles/Header.module.scss';
import {HeaderIcons} from "./HeaderIcons.tsx";

export const Header = observer(() => {
    const {title} = useGetHeaderTitle();

    return (
        <header className={styles.header}>
            <span className={styles.title}>{title}</span>
            <HeaderIcons/>
        </header>
    );
});