import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "../styles/HeaderIcons.module.scss";
import {ArrowIcon, MenuIcon} from "../../../shared/assets/icons";
import {useRootState} from "../../../shared/stores";

export const HeaderIcons = observer(() => {
    const {deviceStore, sidebarStore} = useRootState();

    React.useEffect(() => {
        return () => {
            if (!deviceStore.isMobile && sidebarStore.show) {
                sidebarStore.setShow(false);
            }
        }
    }, [deviceStore.isMobile]);

    return (
        <div className={styles.icons}>
            <div className={styles.selectLang}>
                <span className={styles.selectLabel}>RU</span>
                <div className={styles.iconWrapper}>
                    <ArrowIcon className={styles.selectArrow}/>
                </div>
            </div>
            <button
                type={'button'}
                onClick={() => sidebarStore.setShow(!sidebarStore.show)}
                className={styles.menuBtn}
            >
                <MenuIcon className={styles.menuBtnIcon}/>
            </button>
        </div>
    );
});