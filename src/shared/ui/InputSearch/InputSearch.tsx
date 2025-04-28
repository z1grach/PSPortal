import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "./InputSearch.module.scss";
import {SearchIcon} from "../../assets/icons";

interface InputSearchProps {
    placeholder: string;
    width?: string | number;
}

export const InputSearch = observer(({placeholder, width}: InputSearchProps) => {
    return (
        <label className={styles.searchLabel} style={{maxWidth: width}}>
            <input type={'text'} className={styles.searchInput} placeholder={placeholder}/>
            <div className={styles.searchInputIconWrapper}>
                <SearchIcon className={styles.searchInputIcon}/>
            </div>
        </label>
    );
});