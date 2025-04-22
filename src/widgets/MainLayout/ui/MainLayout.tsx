import React from 'react';
import {observer} from "mobx-react-lite";
import styles from './MainLayout.module.scss';
import {Sidebar} from "./Sidebar.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = observer(() => {
    return (
        <main className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </main>
    );
});