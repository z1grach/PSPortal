import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/MainLayout.module.scss';
import {Sidebar} from "./Sidebar.tsx";
import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";

export const MainLayout = observer(() => {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.content}>
                <Header/>
                <div className={styles.mainContent + ' hidden-scroll'}>
                    <React.Suspense fallback={null}>
                        <Outlet/>
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
});