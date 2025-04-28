import React from 'react';
import styles from '../styles/Platforms.module.scss';
import {observer} from "mobx-react-lite";
import {InputSearch} from "../../../shared/ui/InputSearch/InputSearch.tsx";
import {Platform} from "./Platform.tsx";

export const Platforms = observer(() => {
    return (
        <main className={styles.main}>
            <section className={styles.wrapper}>
                <InputSearch placeholder={'Платформа'} width={800}/>
                <div className={styles.list}>
                    <Platform/>
                    <Platform/>
                    <Platform/>
                    <Platform/>
                    <Platform/>
                    <Platform/>
                </div>
            </section>
        </main>
    );
});