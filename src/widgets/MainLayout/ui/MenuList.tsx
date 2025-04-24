import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "../styles/MenuList.module.scss";
import {menuItems} from "../constants/menuItems.ts";
import {NavLink} from "react-router-dom";

export const MenuList = observer(() => {
    return (
        <div className={styles.menuList}>
            {menuItems.map(item => (
                <React.Fragment key={item.path}>
                    {item.divider &&
                        <div className={styles.divider}/>
                    }
                    <NavLink to={item.path} end
                             className={({isActive}) =>
                                 (isActive ? styles.active + ' ' : '') + styles.menuItem
                             }
                    >
                        <div className={styles.itemIcon}>
                            <item.icon/>
                        </div>
                        <span className={styles.title}>{item.title}</span>
                    </NavLink>
                </React.Fragment>
            ))}
        </div>
    );
});