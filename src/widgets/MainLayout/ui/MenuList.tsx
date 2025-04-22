import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "../styles/MenuList.module.scss";
import {menuItems} from "../constants/menuItems.ts";

export const MenuList = observer(() => {
    return (
        <div className={styles.menuList}>
            {menuItems.map(item => (
                <React.Fragment key={item.path}>
                    {item.divider &&
                        <div className={styles.divider}/>
                    }
                    <div className={styles.menuItem}>
                        <div className={styles.itemIcon}>
                            <item.icon/>
                        </div>
                        <span className={styles.title}>{item.title}</span>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
});