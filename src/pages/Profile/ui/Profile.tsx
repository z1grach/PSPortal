import React from 'react';
import styles from '../styles/Profile.module.scss';
import {observer} from "mobx-react-lite";
import {Credentials} from "./Credentials.tsx";
import {Info} from "./Info.tsx";


export const Profile = observer(() => {
    return (
        <main className={styles.main}>
            <div className={styles.contentWrapper}>
                <Info/>
                <Credentials/>
            </div>
        </main>
    );
});